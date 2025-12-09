import React from 'react';
import LegalModalLayout from './LegalModalLayout';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyCookieModal({ isOpen, onClose }: Props) {
    return (
        <LegalModalLayout isOpen={isOpen} onClose={onClose} title="Privacy & Cookie Policy">
            <div className="space-y-4">
                <p className="text-sm text-gray-500">Ultimo aggiornamento: Dicembre 2025</p>

                <h3 className="text-xl font-bold text-white uppercase">Informativa sulla Privacy</h3>
                <p>
                    Russo Studios rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa descrive come raccogliamo, utilizziamo e condividiamo le tue informazioni.
                </p>

                <h4 className="text-lg font-bold text-white mt-4">Dati Raccolti</h4>
                <p>
                    Raccogliamo i dati che ci fornisci volontariamente tramite il modulo di contatto (nome, email, telefono) e dati di navigazione anonimi per fini statistici.
                </p>

                <h4 className="text-lg font-bold text-white mt-4">Finalità del Trattamento</h4>
                <p>
                    I tuoi dati vengono utilizzati per rispondere alle tue richieste, inviarti preventivi e, se hai dato il consenso, aggiornamenti sui nostri servizi.
                </p>

                <div className="w-full h-px bg-[#333] my-8"></div>

                <h3 className="text-xl font-bold text-white uppercase">Informativa sui Cookie</h3>
                <p>
                    Questo sito utilizza cookie tecnici per garantire il corretto funzionamento e cookie analitici per comprendere come gli utenti interagiscono con il sito.
                </p>

                <h4 className="text-lg font-bold text-white mt-4">Gestione dei Cookie</h4>
                <p>
                    Puoi gestire le tue preferenze sui cookie tramite le impostazioni del tuo browser o tramite il pannello di controllo disponibile sul nostro sito.
                </p>
            </div>
        </LegalModalLayout>
    );
}
