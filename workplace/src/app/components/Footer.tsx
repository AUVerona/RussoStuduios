'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
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

        {/* Divider */}
        <div className="w-full h-px bg-[#333]"></div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-xs text-gray-500 font-mono">

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="#" className="hover:text-white transition-colors">GUIDE</Link>
              <Link href="#" className="hover:text-white transition-colors">CONDIZIONI D&apos;USO</Link>
              <Link href="#" className="hover:text-white transition-colors">CONDIZIONI DI VENDITA</Link>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="#" className="hover:text-white transition-colors">INFORMATIVA SULLA PRIVACY E SUI COOKIE</Link>
              <Link href="#" className="hover:text-white transition-colors">INFO LEGALI E SOCIETARIE</Link>
            </div>
            <div className="mt-2">
              <Link href="#" className="hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">
                IMPOSTAZIONI RELATIVE A PRIVACY E COOKIE
              </Link>
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
  );
}
