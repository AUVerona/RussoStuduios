import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Russo Studios | Produzione Video & Foto",
  description: "Servizi professionali di produzione video e foto per eventi, aziende, concerti e matrimoni.",
};

import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
