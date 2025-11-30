'use client';

import React from 'react';

export default function ContactSection() {
    return (
        <section className="relative w-full py-20 bg-[#262626] text-white flex flex-col items-center justify-center overflow-hidden">

            <div className="max-w-4xl w-full px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
                        CONTATTAMI
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-mono">
                        Hai un progetto in mente? Scrivimi.
                    </p>
                </div>

                {/* Form */}
                <form className="w-full space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-500">Nome</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="IL TUO NOME"
                                className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="LA TUA EMAIL"
                                className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-500">Oggetto</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="OGGETTO DEL MESSAGGIO"
                            className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-500">Messaggio</label>
                        <textarea
                            id="message"
                            rows={6}
                            placeholder="SCRIVI QUI IL TUO MESSAGGIO..."
                            className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-4 flex justify-center">
                        <button
                            type="submit"
                            className="bg-white text-black font-black uppercase tracking-tighter text-xl px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300"
                        >
                            INVIA MESSAGGIO
                        </button>
                    </div>
                </form>

            </div>

        </section>
    );
}
