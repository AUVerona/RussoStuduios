import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { lastAction, userAgent, timestamp, screenWidth, screenHeight } = await req.json();

        const user = process.env.GMAIL_USER || 'russostudioss@gmail.com';
        const pass = process.env.GMAIL_APP_PASSWORD;

        if (!pass) {
            console.error('GMAIL_APP_PASSWORD not set');
            return NextResponse.json(
                { error: 'Server configuration error: Missing email password.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass,
            },
        });

        const mailOptions = {
            from: user,
            to: 'giuliobruschetta03@gmail.com',
            subject: `💥 CRASH RILEVATO - ${new Date(timestamp).toLocaleString('it-IT')}`,
            text: `
        🚨 CRASH RILEVATO SUL SITO!

        L'ultima azione prima del crash:
        ${lastAction}

        Dettagli dispositivo:
        Data e ora: ${new Date(timestamp).toLocaleString('it-IT')}
        User Agent: ${userAgent}
        Risoluzione schermo: ${screenWidth}x${screenHeight}

        Questo crash è stato rilevato tramite localStorage breadcrumbs.
      `,
            html: `
        <h2 style="color: #ff0000;">💥 CRASH RILEVATO SUL SITO!</h2>
        
        <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #ff9800; margin: 20px 0;">
          <h3>L'ultima azione prima del crash:</h3>
          <p style="font-family: monospace; font-size: 14px; background: #f5f5f5; padding: 10px; border-radius: 5px;">
            ${lastAction}
          </p>
        </div>

        <h4>Dettagli dispositivo:</h4>
        <p><strong>Data e ora:</strong> ${new Date(timestamp).toLocaleString('it-IT')}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <p><strong>Risoluzione schermo:</strong> ${screenWidth}x${screenHeight}</p>
        
        <br>
        <p style="color: #666; font-size: 12px;">Questo crash è stato rilevato tramite localStorage breadcrumbs (tecnica Pollicino)</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Crash report inviato con successo!' });
    } catch (error) {
        console.error('Error sending crash report email:', error);
        return NextResponse.json(
            { error: 'Errore durante l\'invio del crash report.' },
            { status: 500 }
        );
    }
}
