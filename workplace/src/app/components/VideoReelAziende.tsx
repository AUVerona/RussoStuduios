"use client";
import React from "react";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

export default function VideoReelAziende() {
  return (
    <section className="hidden md:flex relative w-full min-h-screen bg-[#262626] items-center justify-center py-24 overflow-hidden">
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-8">

        {/* Video 1 */}
        {/* Video 1 */}
        <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-transform hover:scale-105 duration-500">
          <LazyVideo
            src="/FOTO/VIDEO/Azienda1.webm"
            poster="/FOTO/AZIENDE/1.webp"
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            muted
            loop
            playsInline
            rootMargin="50px"
          />
        </div>

        {/* Video 2 */}
        <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-transform hover:scale-105 duration-500">
          <LazyVideo
            src="/FOTO/VIDEO/Azienda2.webm"
            poster="/FOTO/AZIENDE/2.webp"
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            muted
            loop
            playsInline
            rootMargin="50px"
          />
        </div>

        {/* Video 3 */}
        <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-transform hover:scale-105 duration-500">
          <LazyVideo
            src="/FOTO/VIDEO/Azienda1.webm"
            poster="/FOTO/AZIENDE/3.webp"
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            muted
            loop
            playsInline
            rootMargin="50px"
          />
        </div>

      </div>
    </section>
  );
}
