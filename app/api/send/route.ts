import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Zod schema for backend verification
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es muy corto.").max(100),
  email: z.string().email("Por favor ingresá un email válido."),
  telefono: z.string().min(6, "Ingresá un teléfono válido.").max(30),
  rubro: z.string().min(2, "Elegí un rubro válido."),
  mensaje: z.string().min(10, "Danos un poco más de detalle (min. 10 caracteres).").max(5000),
  company: z.string().max(0).optional(), // Honeypot field (must be totally empty)
});

// Helper to prevent HTML Injection (XSS)
const escapeHTML = (str: string) => {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
};

export async function POST(req: Request) {
  try {
    const rawData = await req.json();
    
    // Parse and validate with Zod
    const result = contactSchema.safeParse(rawData);
    
    if (!result.success) {
      // Return specific field errors
      return NextResponse.json(
        { error: 'Datos de contacto inválidos', fieldErrors: result.error.flatten().fieldErrors }, 
        { status: 400 }
      );
    }

    const { nombre, email, telefono, rubro, mensaje, company } = result.data;

    // 2. Honeypot check: If a bot fills this invisible field, we ignore the request silently
    // Returns 200 to trick the bot into thinking it succeeded.
    if (company && company.length > 0) {
      return NextResponse.json({ success: true, message: "Fake success" });
    }

    // 3. HTML Escaping for security
    const safeNombre = escapeHTML(nombre);
    const safeEmail = escapeHTML(email);
    const safeTelefono = escapeHTML(telefono);
    const safeRubro = escapeHTML(rubro);
    const safeMensaje = escapeHTML(mensaje).replace(/\n/g, '<br/>');

    const { data, error } = await resend.emails.send({
      from: 'NB Digital <onboarding@resend.dev>',
      to: ['natalia.barragannb@gmail.com'],
      subject: `Nuevo mensaje de ${safeNombre} - ${safeRubro}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #7c3aed;">Nuevo contacto desde la web</h2>
          <p><strong>Nombre:</strong> ${safeNombre}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Teléfono:</strong> ${safeTelefono}</p>
          <p><strong>Rubro:</strong> ${safeRubro}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #7c3aed;">
            ${safeMensaje}
          </div>
          <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">Enviado automáticamente desde NB Digital</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
