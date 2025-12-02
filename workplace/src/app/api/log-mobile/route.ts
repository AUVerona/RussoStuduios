import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ConsoleLog {
    type: string;
    message: string;
    timestamp: string;
}

export async function POST(req: Request) {
    try {
        const { userAgent, timestamp, screenWidth, screenHeight, consoleLogs } = await req.json();

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

        const consoleLogsText = consoleLogs && consoleLogs.length > 0
            ? consoleLogs.map((log: ConsoleLog) => `[${log.timestamp}] [${log.type.toUpperCase()}] ${log.message}`).join('\n        ')
            : 'Nessun log rilevato';

        const consoleLogsHtml = consoleLogs && consoleLogs.length > 0
            ? consoleLogs.map((log: ConsoleLog) => {
                let color = '#333';
                if (log.type === 'error') color = '#ff0000';
                else if (log.type === 'warning') color = '#ff9800';
                else if (log.type === 'info') color = '#2196f3';
                else if (log.type === 'log') color = '#4caf50';

                return `<p style="color: ${color}; font-family: monospace; margin: 5px 0; font-size: 12px;"><strong>[${log.type.toUpperCase()}]</strong> ${log.message}</p>`;
            }).join('')
            : '<p style="color: #999;">Nessun log rilevato</p>';

        const mailOptions = {
            from: user,
            to: 'giuliobruschetta03@gmail.com',
            subject: `🔔 Nuovo accesso mobile al sito - ${new Date(timestamp).toLocaleString('it-IT')}`,
            text: `
        Nuovo accesso da dispositivo mobile rilevato!

        Dettagli:
        Data e ora: ${new Date(timestamp).toLocaleString('it-IT')}
        User Agent: ${userAgent}
        Risoluzione schermo: ${screenWidth}x${screenHeight}

        Log Console Browser:
        ${consoleLogsText}
      `,
            html: `
        <h3>🔔 Nuovo accesso da dispositivo mobile</h3>
        <p><strong>Data e ora:</strong> ${new Date(timestamp).toLocaleString('it-IT')}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <p><strong>Risoluzione schermo:</strong> ${screenWidth}x${screenHeight}</p>
        <br>
        <h4>📋 Log Console Browser:</h4>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #2196f3;">
          ${consoleLogsHtml}
        </div>
        <br>
        <p style="color: #666; font-size: 12px;">Questo è un log automatico generato dal sito RussoStudios</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Log inviato con successo!' });
    } catch (error) {
        console.error('Error sending mobile log email:', error);
        return NextResponse.json(
            { error: 'Errore durante l\'invio del log.' },
            { status: 500 }
        );
    }
}
