'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GuideModal from './legal/GuideModal';
import CondizioniUsoModal from './legal/CondizioniUsoModal';
import CondizioniVenditaModal from './legal/CondizioniVenditaModal';
import PrivacyCookieModal from './legal/PrivacyCookieModal';
import InfoLegaliModal from './legal/InfoLegaliModal';
import ImpostazioniPrivacyModal from './legal/ImpostazioniPrivacyModal';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal(modalName);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="w-full bg-black text-white py-12 border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">

          {/* Top Section: Brand & Nav */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                RUSSOSTUDIOS
              </h2>
              <p className="text-gray-500 text-sm font-mono">
                CREATING VISUAL EXPERIENCES
              </p>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
              <Link href="#" className="text-sm font-bold uppercase tracking-wider hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm font-bold uppercase tracking-wider hover:text-gray-300 transition-colors">
                Servizi
              </Link>
              <Link href="#" className="text-sm font-bold uppercase tracking-wider hover:text-gray-300 transition-colors">
                Portfolio
              </Link>
              <Link href="#" className="text-sm font-bold uppercase tracking-wider hover:text-gray-300 transition-colors">
                Contatti
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/russostudios.it?igsh=MTZxZ2k1dXdkNWZjcg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1Fid4mfxMk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.48-1.48 1.37-3.51 2.16-5.61 2.16-4.47 0-8.1-3.63-8.1-8.1s3.63-8.1 8.1-8.1c.34 0 .67.02 1 .05v4.12c-.33-.09-.68-.13-1.04-.13-2.18 0-3.96 1.78-3.96 3.96 0 2.18 1.78 3.96 3.96 3.96 1.09 0 2.08-.45 2.79-1.17.71-.72 1.17-1.71 1.17-2.8V.02z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#333]"></div>

          {/* Bottom Section: Legal & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-xs text-gray-500 font-mono">

            {/* Legal Links */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a href="#" onClick={openModal('guide')} className="hover:text-white transition-colors">GUIDE</a>
                <a href="#" onClick={openModal('uso')} className="hover:text-white transition-colors">CONDIZIONI D&apos;USO</a>
                <a href="#" onClick={openModal('vendita')} className="hover:text-white transition-colors">CONDIZIONI DI VENDITA</a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a href="#" onClick={openModal('privacy')} className="hover:text-white transition-colors">INFORMATIVA SULLA PRIVACY E SUI COOKIE</a>
                <a href="#" onClick={openModal('legali')} className="hover:text-white transition-colors">INFO LEGALI E SOCIETARIE</a>
              </div>
              <div className="mt-2">
                <a href="#" onClick={openModal('settings')} className="hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">
                  IMPOSTAZIONI RELATIVE A PRIVACY E COOKIE
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-right md:text-right w-full md:w-auto">
              <p>© 2025 RUSSOSTUDIOS, INC.</p>
              <p>TUTTI I DIRITTI RISERVATI</p>
            </div>

          </div>

        </div>
      </footer>

      {/* Modals */}
      <GuideModal isOpen={activeModal === 'guide'} onClose={closeModal} />
      <CondizioniUsoModal isOpen={activeModal === 'uso'} onClose={closeModal} />
      <CondizioniVenditaModal isOpen={activeModal === 'vendita'} onClose={closeModal} />
      <PrivacyCookieModal isOpen={activeModal === 'privacy'} onClose={closeModal} />
      <InfoLegaliModal isOpen={activeModal === 'legali'} onClose={closeModal} />
      <ImpostazioniPrivacyModal isOpen={activeModal === 'settings'} onClose={closeModal} />
    </>
  );
}
