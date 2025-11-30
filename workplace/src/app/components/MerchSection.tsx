import React from 'react';

export default function MerchSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#262626] flex items-center justify-center">

            {/* Rotated Video Strip Container */}
            {/* The container is rotated, creating the 'frame' effect requested */}
            <div className="absolute w-[150%] h-[60vh] md:h-[70vh] bg-black transform rotate-6 -translate-y-24 flex items-center justify-center overflow-hidden shadow-2xl border-y-4 border-white/10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    {/* Placeholder video */}
                    <source src="/FOTO/bgvideo1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content - Horizontal and centered on top */}
            <div className="relative z-10 flex flex-col justify-center items-center text-white pointer-events-none -mt-12">
                <div className="flex items-center gap-4 drop-shadow-2xl">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
                        RUSSOSTUDIOS
                    </h2>
                    <div className="w-1 h-16 md:h-24 bg-white"></div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
                        MERCH
                    </h2>
                </div>
            </div>
        </section>
    );
}
