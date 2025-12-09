import React from 'react';
import LegalModalLayout from './LegalModalLayout';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function CondizioniUsoModal({ isOpen, onClose }: Props) {
    return (
        <LegalModalLayout isOpen={isOpen} onClose={onClose} title="Condizioni d'Uso">
            <div className="space-y-4">
                <p className="text-sm text-gray-500">Ultimo aggiornamento: Dicembre 2025</p>

                <h3 className="text-xl font-bold text-white uppercase">1. Accettazione dei Termini</h3>
                <p>
                    Accedendo e utilizzando il sito web di Russo Studios, l'utente accetta di essere vincolato dai presenti Termini e Condizioni d'Uso. Se non si accettano tali termini, si prega di non utilizzare il sito.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">2. Proprietà Intellettuale</h3>
                <p>
                    Tutti i contenuti presenti su questo sito, inclusi ma non limitati a fotografie, video, testi, loghi e grafica, sono di proprietà esclusiva di Russo Studios o dei suoi licenziatari e sono protetti dalle leggi sul diritto d'autore. È vietata la riproduzione, distribuzione o utilizzo non autorizzato di qualsiasi materiale.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">3. Uso del Sito</h3>
                <p>
                    L'utente si impegna a utilizzare il sito solo per scopi leciti e in modo da non violare i diritti di terzi o limitare l'utilizzo del sito da parte di altri utenti.
                </p>

                <h3 className="text-xl font-bold text-white uppercase mt-6">4. Limitazione di Responsabilità</h3>
                <p>
                    Russo Studios non sarà responsabile per eventuali danni diretti, indiretti, incidentali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare il sito.
                </p>
            </div>
        </LegalModalLayout>
    );
}
