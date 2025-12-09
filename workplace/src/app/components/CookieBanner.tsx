'use client';

import React, { useEffect, useState } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';
import PrivacyCookieModal from './legal/PrivacyCookieModal';

export default function CookieBanner() {
    const { consent, acceptCookies, rejectCookies } = useCookieConsent();
    const [isVisible, setIsVisible] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);

    useEffect(() => {
        // Show banner only if consent is null (not yet decided)
        // Add a small delay for animation
        if (consent === null) {
            const timer = setTimeout(() => setIsVisible(true), 500);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [consent]);

    const openPrivacy = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPrivacyModal(true);
    };

    // If consent is decided and modal is closed, don't render anything
    if (consent !== null && !isVisible && !showPrivacyModal) return null;

    // If consent is null but banner not yet visible (delay) and modal closed, don't render
    if (!isVisible && !showPrivacyModal) return null;

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 z-[200] bg-[#1a1a1a] border-t border-[#333] p-6 md:p-8 shadow-2xl animate-in slide-in-from-bottom duration-500">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                        <div className="flex flex-col gap-2 text-center md:text-left flex-1">
                            <h2 className="text-lg font-black text-white uppercase tracking-tight">
                                Privacy & Cookie
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Questo sito utilizza cookie tecnici e di tracciamento (Google Analytics) per migliorare l&apos;esperienza.
                                <a href="#" onClick={openPrivacy} className="text-white underline ml-2 hover:text-gray-300 transition-colors">
                                    Leggi la Policy
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-row gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={rejectCookies}
                                className="flex-1 md:flex-none px-6 py-3 bg-transparent text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#333] transition-colors border border-[#444] text-sm whitespace-nowrap"
                            >
                                Rifiuta
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="flex-1 md:flex-none px-8 py-3 bg-white text-black font-black uppercase tracking-wider rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10 text-sm whitespace-nowrap"
                            >
                                Accetta Tutto
                            </button>
                        </div>

                    </div>
                </div>
            )}

            <PrivacyCookieModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
        </>
    );
}
