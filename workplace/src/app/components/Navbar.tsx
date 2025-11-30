"use client";

import React from "react";


export default function Navbar() {
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
          DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER-DRONISTA-FOTOGRAFO-VIDEOMAKER
        </div>
      </div>
      {/* Navbar classica subito sotto */}
      <nav className="w-full text-white h-28 flex items-center justify-between px-12 shadow-lg backdrop-blur-sm" style={{ background: '#262626' }}>
        <div className="flex items-center">
          <img src="/logorussostudios.png" alt="Russo Studios" className="h-12 w-auto mr-8" />
        </div>
        <div className="flex items-center gap-10">
          <a href="#home" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Home</a>
          <a href="#servizi-discoteche" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Servizi per Discoteche</a>
          <a href="#concerti" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Concerti</a>
          <a href="#aziende" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Aziende</a>
          <a href="#immobiliare" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Immobiliare</a>
          <a href="#matrimoni" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Matrimoni</a>
          <a href="#merch" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Merch</a>
          <a href="#chi-sono" className="text-xl font-medium hover:text-neutral-300 transition uppercase tracking-wider">Chi Sono</a>
        </div>
      </nav>
      {/* animazione spostata in globals.css per evitare hydration mismatch */}
    </div>
  );
}
