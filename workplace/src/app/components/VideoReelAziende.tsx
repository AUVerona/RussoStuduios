"use client";
import React from "react";

export default function VideoReelAziende() {
  const videos = [
  "/FOTO/bgvideo1.mp4",
  "/FOTO/bgvideo1.mp4",
  "/FOTO/bgvideo1.mp4",
  ];
  return (
    <section className="relative w-full min-h-[600px] bg-[#262626] flex items-center justify-center py-24">
      <div className="w-full flex flex-row items-end justify-between gap-8 px-8" style={{height: '600px'}}>
        {/* Video sinistra verticale */}
        <div className="flex flex-col justify-end" style={{width: '18vw', marginTop: '0px', height: '400px'}}>
          <video
            src={videos[0]}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="rounded-[2rem] shadow-2xl object-cover"
            style={{ width: '100%', height: '100%', borderRadius: '2rem', background: '#222', objectFit: 'cover' }}
            aria-hidden="true"
          />
        </div>
        {/* Video centrale orizzontale grande, più basso */}
        <div className="flex flex-col justify-center" style={{width: '50vw', marginTop: '80px', height: '440px'}}>
          <video
            src={videos[1]}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="rounded-[2rem] shadow-2xl object-cover"
            style={{ width: '100%', height: '100%', borderRadius: '2rem', background: '#222', objectFit: 'cover' }}
            aria-hidden="true"
          />
        </div>
        {/* Video destra verticale, ancora più basso */}
        <div className="flex flex-col justify-end" style={{width: '18vw', marginTop: '160px', height: '400px'}}>
          <video
            src={videos[2]}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="rounded-[2rem] shadow-2xl object-cover"
            style={{ width: '100%', height: '100%', borderRadius: '2rem', background: '#222', objectFit: 'cover' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
