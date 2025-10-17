"use client";
import React from "react";

const scrollingText = "Russo Studios - Fotografo | Videomaker | Dronista | Servizi | Chi sono | Contatti";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 text-white h-20 flex items-center shadow-lg">
      <div className="overflow-hidden w-full h-full flex items-center">
        <div
          className="whitespace-nowrap px-8 font-extrabold text-3xl animate-scroll"
        >
          {scrollingText}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </nav>
  );
}
