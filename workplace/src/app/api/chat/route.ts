import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `Sei il chatbot assistente di Diego Russo.
          
          Ecco la biografia di Diego Russo:
          "Mi chiamo Diego Russo, classe 2004, e la mia passione per la fotografia e il videomaking è nata quando ero bambino. Nel 2017 ho deciso di buttarmi completamente in questo mondo, iniziando un percorso fatto di studio, sperimentazione e lavoro sul campo.
          Ad oggi ho diversi anni di esperienza alle spalle, tra eventi, concerti, aziende e progetti personali. Potrei dirti che ciò che conta sono gli anni di lavoro, l’attrezzatura o le competenze tecniche e in parte è vero ma penso che siano le immagini a parlare davvero per me.
          russostudios nasce dal bisogno di raccontare emozioni, persone, luoghi ed energie in modo autentico, moderno e curato. Ogni progetto è un’occasione per dare valore a una storia e trasformarla in immagini che rimangono."

          Per qualsiasi altra informazione su Diego Russo, servizi, prezzi o contatti, invita l'utente a visitare il sito o i social linkati nel sito. Non inventare informazioni non presenti qui.`
                },
                ...messages
            ],
        });

        return NextResponse.json({ message: completion.choices[0].message });
    } catch (error) {
        console.error('Error in chat route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
