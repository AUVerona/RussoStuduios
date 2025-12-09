import React, { useEffect, useState } from 'react';
import LegalModalLayout from './LegalModalLayout';
import { useCookieConsent } from '../../context/CookieConsentContext';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function ImpostazioniPrivacyModal({ isOpen, onClose }: Props) {
    const { consent, acceptCookies, rejectCookies } = useCookieConsent();
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    // Sync local state with context when modal opens or consent changes
    useEffect(() => {
        if (consent === true) {
            setAnalyticsEnabled(true);
        } else {
            setAnalyticsEnabled(false);
        }
    }, [consent, isOpen]);

    const handleSave = () => {
        if (analyticsEnabled) {
            acceptCookies();
        } else {
            rejectCookies();
        }
        onClose();
    };

    return (
        <LegalModalLayout isOpen={isOpen} onClose={onClose} title="Impostazioni Privacy">
            <div className="space-y-6">
                <p>
                    Qui puoi gestire le tue preferenze relative ai cookie e al tracciamento. Le modifiche avranno effetto immediato.
                </p>

                <div className="space-y-4">
                    {/* Analytics Cookies */}
                    <div className="flex items-center justify-between bg-[#222] p-4 rounded-xl border border-[#333]">
                        <div>
                            <h4 className="text-white font-bold uppercase">Cookie Analitici & Marketing</h4>
                            <p className="text-sm text-gray-500">Ci aiutano a migliorare il sito analizzando le visite (Google Analytics).</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={analyticsEnabled}
                                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <button
                        onClick={handleSave}
                        className="px-8 py-3 bg-white text-black font-black uppercase rounded-full hover:scale-105 transition-transform"
                    >
                        Salva Preferenze
                    </button>
                </div>
            </div>
        </LegalModalLayout>
    );
}
