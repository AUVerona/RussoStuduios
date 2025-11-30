"use client";
import React from "react";

export default function VideoReelAziende() {
  const videos = [
    "/FOTO/bgvideo1.mp4",
    "/FOTO/bgvideo1.mp4",
    "/FOTO/bgvideo1.mp4",
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#262626] flex items-center justify-center py-24 overflow-hidden">
      <div className="w-full max-w-[1800px] flex flex-row items-start justify-center gap-4 md:gap-8 px-4 md:px-8">

        {/* Video 1: Sinistra - Verticale - In alto */}
        <div className="relative w-[25vw] md:w-[20vw] aspect-[9/16] mt-0 transition-transform hover:scale-105 duration-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            style={{ background: '#222' }}
          >
            <source src={videos[0]} type="video/mp4" />
          </video>
        </div>

        {/* Video 2: Centro - Orizzontale - Scalino 1 */}
        <div className="relative w-[45vw] md:w-[40vw] aspect-[16/9] mt-24 md:mt-32 transition-transform hover:scale-105 duration-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            style={{ background: '#222' }}
          >
            <source src={videos[1]} type="video/mp4" />
          </video>
        </div>

        {/* Video 3: Destra - Verticale - Scalino 2 (più in basso) */}
        <div className="relative w-[25vw] md:w-[20vw] aspect-[9/16] mt-48 md:mt-64 transition-transform hover:scale-105 duration-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
            style={{ background: '#222' }}
          >
            <source src={videos[2]} type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
