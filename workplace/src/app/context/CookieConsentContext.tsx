'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieConsentContextType {
    consent: boolean | null;
    acceptCookies: () => void;
    rejectCookies: () => void;
    resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
    const [consent, setConsent] = useState<boolean | null>(null);
    useEffect(() => {
        // Check local storage on mount
        const storedConsent = localStorage.getItem('cookie_consent');
        if (storedConsent === 'true') {
            setConsent(true);
        } else if (storedConsent === 'false') {
            setConsent(false);
        }
    }, []);

    const acceptCookies = () => {
        setConsent(true);
        localStorage.setItem('cookie_consent', 'true');
    };

    const rejectCookies = () => {
        setConsent(false);
        localStorage.setItem('cookie_consent', 'false');
    };

    const resetConsent = () => {
        setConsent(null);
        localStorage.removeItem('cookie_consent');
    };

    return (
        <CookieConsentContext.Provider value={{ consent, acceptCookies, rejectCookies, resetConsent }}>
            {children}
        </CookieConsentContext.Provider>
    );
}

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
}
