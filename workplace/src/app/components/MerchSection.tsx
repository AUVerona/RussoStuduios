"use client";
import React from 'react';
import LazyVideo from './LazyVideo';

export default function MerchSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#262626] flex flex-col items-center justify-center py-20 z-50">

            {/* Rotated Video Strip Container */}
            {/* The container is rotated, creating the 'frame' effect requested */}
            <div className="absolute w-[150%] h-[60vh] md:h-[70vh] bg-black transform rotate-6 -translate-y-24 flex items-center justify-center overflow-hidden shadow-2xl border-y-4 border-white/10 top-1/2 left-1/2 -translate-x-1/2 -mt-32 z-40">
                <LazyVideo
                    src="/FOTO/VIDEO/videobg1.webm"
                    poster="/FOTO/AZIENDE/poster_hero.webp"
                    disableOnMobile={true}
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Content - Horizontal and centered on top */}
            <div className="relative z-50 flex flex-col justify-center items-center text-white pointer-events-none mb-12">
                <div className="flex items-center gap-4 drop-shadow-2xl">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase">
                        RUSSOSTUDIOS
                    </h2>
                    <div className="w-1 h-12 md:h-24 bg-white"></div>
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase">
                        MERCH
                    </h2>
                </div>
            </div>

            {/* Description Text Removed as per user request */}
        </section>
    );
}
