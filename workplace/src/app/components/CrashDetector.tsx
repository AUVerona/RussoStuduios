"use client";
import { useEffect } from 'react';
import { getLastCrash, clearTracking, sendCrashReport } from '../utils/crashTracker';

export default function CrashDetector() {
    useEffect(() => {
        // Controlla se siamo reduci da un crash
        const lastAction = getLastCrash();

        if (lastAction) {
            console.error('🚨 CRASH RILEVATO! Ultima azione:', lastAction);

            // Mostra alert solo in development
            if (process.env.NODE_ENV === 'development') {
                alert('L\'ultima volta sono morto qui: ' + lastAction);
            }

            // Invia il crash report via email
            sendCrashReport(lastAction);

            // Pulisci il tracking dopo aver inviato il report
            clearTracking();
        }
    }, []);

    return null;
}
