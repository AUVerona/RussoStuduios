import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Compila tutti i campi obbligatori.' },
                { status: 400 }
            );
        }

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
            to: 'russostudioss@gmail.com',
            replyTo: email,
            subject: `Nuovo messaggio dal sito: ${subject || 'Nessun oggetto'}`,
            text: `
        Hai ricevuto un nuovo messaggio dal form di contatto del sito web.

        Dettagli:
        Nome: ${name}
        Email: ${email}
        Oggetto: ${subject || 'Nessun oggetto'}

        Messaggio:
        ${message}
      `,
            html: `
        <h3>Nuovo messaggio dal sito web</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Oggetto:</strong> ${subject || 'Nessun oggetto'}</p>
        <br>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email inviata con successo!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Errore durante l\'invio dell\'email. Riprova più tardi.' },
            { status: 500 }
        );
    }
}
