import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot";
import { ImageModalProvider } from "./context/ImageModalContext";
import { CookieConsentProvider } from "./context/CookieConsentContext";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google Analytics is now handled by the GoogleAnalytics component based on consent */}
      </head>
      <body className={`antialiased`}>
        <CookieConsentProvider>
          <ImageModalProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <Chatbot />
            <CookieBanner />
            <GoogleAnalytics />
          </ImageModalProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
