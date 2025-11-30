"use client";
import React from "react";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

export default function VideoReelAziende() {
  return (
    <section className="relative w-full min-h-screen bg-[#262626] flex items-center justify-center py-24 overflow-hidden">
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-8">

        {/* Video 1 */}
        <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-transform hover:scale-105 duration-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
          >
            <source src="/FOTO/VIDEO/Azienda1.webm" type="video/webm" />
          </video>
        </div>

        {/* Video 2 */}
        <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-transform hover:scale-105 duration-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
          >
            <source src="/FOTO/VIDEO/Azienda2.webm" type="video/webm" />
          </video>
        </div>

        {/* Video 3 */}
        <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-transform hover:scale-105 duration-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
          >
            <source src="/FOTO/VIDEO/Azienda1.webm" type="video/webm" />
          </video>
        </div>

      </div>
    </section>
  );
}
