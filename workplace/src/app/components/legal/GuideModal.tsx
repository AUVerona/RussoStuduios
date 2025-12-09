import React from 'react';
import LegalModalLayout from './LegalModalLayout';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: Props) {
    return (
        <LegalModalLayout isOpen={isOpen} onClose={onClose} title="Guide">
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white uppercase">Benvenuto nelle Guide di Russo Studios</h3>
                <p>
                    In questa sezione troverai informazioni utili su come navigare il sito, prenotare i nostri servizi e utilizzare al meglio le funzionalità offerte.
                </p>

                <h4 className="text-lg font-bold text-white mt-6">1. Navigazione del Portfolio</h4>
                <p>
                    Il nostro portfolio è diviso in sezioni tematiche (Disco, Concerti, Matrimoni, ecc.). Puoi cliccare su ogni immagine per ingrandirla e visualizzarla in alta risoluzione.
                </p>

                <h4 className="text-lg font-bold text-white mt-6">2. Prenotazione Servizi</h4>
                <p>
                    Per prenotare un servizio, utilizza il modulo nella sezione &quot;Contatti&quot;. Specifica il tipo di evento, la data e le tue esigenze particolari per ricevere un preventivo personalizzato.
                </p>

                <h4 className="text-lg font-bold text-white mt-6">3. Area Riservata (Coming Soon)</h4>
                <p>
                    Stiamo lavorando a un&apos;area riservata dove i clienti potranno scaricare direttamente le foto e i video dei loro eventi. Resta sintonizzato per aggiornamenti.
                </p>
            </div>
        </LegalModalLayout>
    );
}
