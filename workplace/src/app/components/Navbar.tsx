"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100]" style={{ background: '#262626' }}>
      {/* Scritte scorrevoli sopra la navbar */}
      <div className="w-full overflow-hidden" style={{ background: '#262626', height: '44px', display: 'flex', alignItems: 'center' }}>
        <div className="whitespace-nowrap animate-scroll-text animate-scroll-ultra text-white text-xl md:text-2xl font-extrabold tracking-widest uppercase" style={{ lineHeight: '44px' }}>
          {/* Duplicate the content to ensure a smooth continuous marquee */}
          <span aria-hidden>
            DRONISTA - FOTOGRAFO - VIDEOMAKER - DRONISTA - FOTOGRAFO - VIDEOMAKER - DRONISTA - FOTOGRAFO - VIDEOMAKER -
          </span>
          <span aria-hidden>
            DRONISTA - FOTOGRAFO - VIDEOMAKER - DRONISTA - FOTOGRAFO - VIDEOMAKER - DRONISTA - FOTOGRAFO - VIDEOMAKER -
          </span>
          DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER
        </div>
      </div>

      {/* Navbar classica subito sotto */}
      <nav className="w-full text-white h-20 md:h-28 flex items-center justify-between px-6 md:px-12 shadow-lg backdrop-blur-sm relative z-50" style={{ background: '#262626' }}>
        <div className="flex items-center">
          <img src="/logorussostudios.png" alt="Russo Studios" className="h-8 md:h-12 w-auto mr-4 md:mr-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
          <Link href="#home" className="hover:text-neutral-300 transition">Home</Link>
          <Link href="#servizi-discoteche" className="hover:text-neutral-300 transition">Servizi per Discoteche</Link>
          <Link href="#concerti" className="hover:text-neutral-300 transition">Concerti</Link>
          <Link href="#aziende" className="hover:text-neutral-300 transition">Aziende</Link>
          <Link href="#immobiliare" className="hover:text-neutral-300 transition">Immobiliare</Link>
          <Link href="#matrimoni" className="hover:text-neutral-300 transition">Matrimoni</Link>
          <Link href="#merch" className="hover:text-neutral-300 transition">Merch</Link>
          <Link href="#chi-sono" className="hover:text-neutral-300 transition">Chi Sono</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="xl:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#262626] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}
        style={{ top: '44px', height: 'calc(100vh - 44px)' }}
      >
        <div className="flex flex-col items-center gap-8 text-xl font-bold uppercase tracking-widest">
          <Link href="#home" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Home</Link>
          <Link href="#servizi-discoteche" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Servizi per Discoteche</Link>
          <Link href="#concerti" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Concerti</Link>
          <Link href="#aziende" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Aziende</Link>
          <Link href="#immobiliare" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Immobiliare</Link>
          <Link href="#matrimoni" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Matrimoni</Link>
          <Link href="#merch" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Merch</Link>
          <Link href="#chi-sono" onClick={closeMenu} onTouchEnd={closeMenu} className="hover:text-neutral-400 transition">Chi Sono</Link>
        </div>
      </div>
    </div>
  );
}
