'use client';

import React, { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Qualcosa è andato storto.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Errore di connessione. Riprova più tardi.');
        }
    };

    return (
        <section className="relative w-full py-20 bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden">

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
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-500">Nome</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="IL TUO NOME"
                                className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
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
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="OGGETTO DEL MESSAGGIO"
                            className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-500">Messaggio</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="SCRIVI QUI IL TUO MESSAGGIO..."
                            className="w-full bg-[#333] border border-[#444] rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-bold resize-none"
                        ></textarea>
                    </div>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="p-4 bg-green-500/20 border border-green-500 text-green-500 rounded-xl text-center font-bold">
                            Messaggio inviato con successo! Ti risponderò al più presto.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="p-4 bg-red-500/20 border border-red-500 text-red-500 rounded-xl text-center font-bold">
                            {errorMessage}
                        </div>
                    )}

                    <div className="pt-4 flex justify-center">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-white text-black font-black uppercase tracking-tighter text-xl px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {status === 'loading' ? 'INVIO IN CORSO...' : 'INVIA MESSAGGIO'}
                        </button>
                    </div>
                </form>

            </div>

        </section>
    );
}
