import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileLogger from "./components/MobileLogger";
import Script from "next/script";
import { ImageModalProvider } from "./context/ImageModalContext";

export const metadata: Metadata = {
  title: "Russo Studios | Foto & Video per Eventi, Aziende e Matrimoni",
  description: "Russo Studios offre servizi professionali di fotografia e produzione video a Verona e in tutta Italia. Specializzati in matrimoni, eventi aziendali, videoclip musicali e contenuti per social media.",
  keywords: "fotografo verona, videomaker verona, produzione video, fotografia eventi, video matrimoni, video aziendali, videoclip musicali, drone verona, russo studios",
  openGraph: {
    title: "Russo Studios | Foto & Video per Eventi, Aziende e Matrimoni",
    description: "Russo Studios offre servizi professionali di fotografia e produzione video a Verona e in tutta Italia.",
    siteName: "Russo Studios",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russo Studios | Foto & Video per Eventi, Aziende e Matrimoni",
    description: "Russo Studios offre servizi professionali di fotografia e produzione video a Verona e in tutta Italia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Diego Russo" }],
  creator: "Diego Russo",
};

import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics */}
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
      </head>
      <body className={`antialiased`}>
        <ImageModalProvider>
          <MobileLogger />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ImageModalProvider>
      </body>
    </html>
  );
}
