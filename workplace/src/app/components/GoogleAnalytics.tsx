'use client';

import { useCookieConsent } from '../context/CookieConsentContext';
import Script from 'next/script';

export default function GoogleAnalytics() {
    const { consent } = useCookieConsent();

    if (!consent) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-RZNJ3V1211`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RZNJ3V1211');
        `}
            </Script>
        </>
    );
}
