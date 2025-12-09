import React from 'react';
import LegalModalLayout from './LegalModalLayout';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function CondizioniVenditaModal({ isOpen, onClose }: Props) {
    return (
        <LegalModalLayout isOpen={isOpen} onClose={onClose} title="Condizioni di Vendita">
            <div className="space-y-4">
                <p className="text-sm text-gray-500">Ultimo aggiornamento: Dicembre 2025</p>

                <h3 className="text-xl font-bold text-white uppercase">1. Oggetto del Contratto</h3>
                <p>
                    Le presenti condizioni generali di vendita disciplinano l&apos;acquisto dei servizi fotografici e video offerti da Russo Studios tramite il sito web o contatto diretto.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">2. Preventivi e Prezzi</h3>
                <p>
                    Tutti i prezzi indicati sul sito (se presenti) sono indicativi. Il prezzo finale sarà confermato tramite preventivo personalizzato in base alle specifiche esigenze del cliente.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">3. Pagamenti</h3>
                <p>
                    Il pagamento dei servizi avviene secondo le modalità concordate nel preventivo (es. acconto alla prenotazione e saldo alla consegna). Accettiamo bonifici bancari e pagamenti elettronici.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">4. Consegna dei Materiali</h3>
                <p>
                    I tempi di consegna delle foto e dei video variano in base alla tipologia di servizio e saranno specificati nel contratto. I materiali verranno consegnati in formato digitale tramite link di download o su supporto fisico se concordato.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">5. Recesso e Cancellazione</h3>
                <p>
                    In caso di cancellazione del servizio da parte del cliente, l&apos;acconto versato potrebbe essere trattenuto a titolo di penale, secondo quanto stabilito nel contratto specifico.
                </p>
            </div>
        </LegalModalLayout>
    );
}
