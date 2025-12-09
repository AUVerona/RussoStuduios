import React from 'react';
import LegalModalLayout from './LegalModalLayout';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function InfoLegaliModal({ isOpen, onClose }: Props) {
    return (
        <LegalModalLayout isOpen={isOpen} onClose={onClose} title="Info Legali e Societarie">
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white uppercase">Russo Studios</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-[#222] p-6 rounded-2xl border border-[#333]">
                        <h4 className="text-gray-500 text-sm font-bold uppercase mb-2">Sede Legale</h4>
                        <p className="text-white font-mono">
                            Via Roma 123<br />
                            00100 Roma (RM)<br />
                            Italia
                        </p>
                    </div>

                    <div className="bg-[#222] p-6 rounded-2xl border border-[#333]">
                        <h4 className="text-gray-500 text-sm font-bold uppercase mb-2">Contatti</h4>
                        <p className="text-white font-mono">
                            Email: info@russostudios.it<br />
                            PEC: russostudios@pec.it<br />
                            Tel: +39 06 12345678
                        </p>
                    </div>

                    <div className="bg-[#222] p-6 rounded-2xl border border-[#333]">
                        <h4 className="text-gray-500 text-sm font-bold uppercase mb-2">Dati Fiscali</h4>
                        <p className="text-white font-mono">
                            P.IVA: 12345678901<br />
                            Codice Fiscale: RSSGLI80A01H501Z<br />
                            REA: RM-123456
                        </p>
                    </div>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    Il sito è ospitato su server situati nell&apos;Unione Europea.
                </p>
            </div>
        </LegalModalLayout>
    );
}
