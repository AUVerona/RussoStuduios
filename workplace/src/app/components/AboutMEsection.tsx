'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutMEsection() {
    // Duplicate text for seamless scrolling
    const marqueeText = "RUSSOSTUDIOS ".repeat(10);

    return (
        <section className="relative w-full min-h-screen bg-[#262626] text-white flex flex-col justify-between py-10 overflow-hidden">

            {/* Scrolling Text Top */}
            <div className="w-full overflow-hidden relative z-10">
                <div className="animate-marquee whitespace-nowrap flex">
                    <span className="text-6xl md:text-8xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                    <span className="text-6xl md:text-8xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 w-full gap-12 my-12">

                {/* Left: Text */}
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                        CHI SONO?
                    </h2>
                    <div className="text-sm md:text-base text-gray-300 leading-relaxed text-justify font-mono break-words">
                        {/* Placeholder text block to match the visual density of the image */}
                        <p>
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                            DESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONEDESCRIZIONE
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 w-full flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md aspect-[4/5] bg-[#333] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder for the person image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                            FOTO CHI SONO
                        </div>
                        {/* 
                    If you have the image, uncomment and use this:
                    <Image 
                        src="/path/to/image.jpg" 
                        alt="Chi Sono" 
                        fill 
                        className="object-cover"
                    /> 
                 */}
                    </div>
                </div>

            </div>

            {/* Scrolling Text Bottom */}
            <div className="w-full overflow-hidden relative z-10">
                <div className="animate-marquee-reverse whitespace-nowrap flex">
                    <span className="text-6xl md:text-8xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                    <span className="text-6xl md:text-8xl font-black tracking-tighter uppercase mx-4">
                        {marqueeText}
                    </span>
                </div>
            </div>

        </section>
    );
}
