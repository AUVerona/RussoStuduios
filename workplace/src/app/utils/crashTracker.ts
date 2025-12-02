"use client";

// Funzione helper per tracciare dove siamo
export const track = (step: string) => {
    try {
        const timestamp = new Date().toISOString();
        const entry = `${step} - ${timestamp}`;
        localStorage.setItem('last_action', entry);
        console.log(`[TRACK] ${entry}`);
    } catch (e) {
        console.error('Errore nel tracking:', e);
    }
};

// Funzione per recuperare l'ultimo crash
export const getLastCrash = () => {
    try {
        return localStorage.getItem('last_action');
    } catch (e) {
        return null;
    }
};

// Funzione per pulire il tracking
export const clearTracking = () => {
    try {
        localStorage.removeItem('last_action');
    } catch (e) {
        console.error('Errore nella pulizia del tracking:', e);
    }
};

// Funzione per inviare il crash report via email
export const sendCrashReport = async (lastAction: string) => {
    try {
        await fetch('/api/crash-report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lastAction,
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString(),
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
            }),
        });
    } catch (e) {
        console.error('Errore nell\'invio del crash report:', e);
    }
};
