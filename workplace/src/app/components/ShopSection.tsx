'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import LazyVideo from './LazyVideo';

export default function ShopSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Duplicate text for seamless scrolling
    const marqueeText = "RUSSOSTUDIOS | MERCH ".repeat(10);

    return (
        <section className="relative w-full min-h-screen bg-[#262626] text-white flex flex-col items-center py-20 overflow-hidden z-30">

            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <LazyVideo
                    src="/FOTO/VIDEO/videobg1.webm"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Gray Rectangle at Top */}
            <div className="absolute top-0 left-0 w-full h-80 bg-[#262626] z-[5]"></div>
            {/* Gray Rectangle at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-[#262626] z-[5]"></div>

            {/* Scrolling Text Top */}
            <div className="w-full overflow-hidden mb-16 relative z-10">
                <div className="animate-marquee whitespace-nowrap flex">
                    <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                    <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl w-full z-10">
                {/* Product Card 1 */}
                <div className="bg-[#333] rounded-3xl p-6 flex flex-col relative group hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative w-full aspect-square bg-[#444] rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                        <Image
                            src="/tshirt1.png"
                            alt="Russo Studios Tee 01"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded mb-2 w-fit">SOLD OUT</div>
                            <div className="flex items-center gap-2">
                                <span className="bg-[#1a1a1a] px-3 py-1 rounded text-xl font-bold">€35</span>
                                <span className="text-xs text-gray-400">+SPEED</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">RUSSOSTUDIOS TEE 01</div>
                        </div>
                    </div>
                </div>

                {/* Product Card 2 */}
                <div className="bg-[#333] rounded-3xl p-6 flex flex-col relative group hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative w-full aspect-square bg-[#444] rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                        <Image
                            src="/tshirt2.png"
                            alt="Russo Studios Tee 02"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded mb-2 w-fit">SOLD OUT</div>
                            <div className="flex items-center gap-2">
                                <span className="bg-[#1a1a1a] px-3 py-1 rounded text-xl font-bold">€35</span>
                                <span className="text-xs text-gray-400">+SPEED</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">RUSSOSTUDIOS TEE 01</div>
                        </div>
                    </div>
                </div>

                {/* Product Card 3 */}
                <div className="bg-[#333] rounded-3xl p-6 flex flex-col relative group hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative w-full aspect-square bg-[#444] rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                        <Image
                            src="/tshirt1.png"
                            alt="Russo Studios Tee 03"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded mb-2 w-fit">SOLD OUT</div>
                            <div className="flex items-center gap-2">
                                <span className="bg-[#1a1a1a] px-3 py-1 rounded text-xl font-bold">€35</span>
                                <span className="text-xs text-gray-400">+SPEED</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">RUSSOSTUDIOS TEE 01</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Left-Aligned Text */}
            <div className="w-full px-4 mt-12 mb-8 relative z-10 flex justify-start">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-left leading-none">
                    RUSSOSTUDIOS <span className="block md:inline">|</span> MERCH
                </h2>
            </div>

            {/* Scrolling Text Bottom (Optional, based on image "RUSSOSTUDIOS | MERCH" repeats) */}
            <div className="w-full overflow-hidden mt-8 relative z-10">
                <div className="animate-marquee-reverse whitespace-nowrap flex">
                    <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                    <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                </div>
            </div>

        </section >
    );
}
