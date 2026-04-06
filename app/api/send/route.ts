import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, rubro, mensaje } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'NB Digital <onboarding@resend.dev>',
      to: ['natalia.barragannb@gmail.com'],
      subject: `Nuevo mensaje de ${nombre} - ${rubro}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #7c3aed;">Nuevo contacto desde la web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Rubro:</strong> ${rubro}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #7c3aed;">
            ${mensaje.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">Enviado desde NB Digital Web</p>
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
