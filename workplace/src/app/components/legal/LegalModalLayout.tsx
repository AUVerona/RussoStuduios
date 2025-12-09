import React, { useEffect } from 'react';

interface LegalModalLayoutProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function LegalModalLayout({ isOpen, onClose, title, children }: LegalModalLayoutProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] border border-[#333] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-[#333] bg-[#1a1a1a] z-10">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">{title}</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] text-white hover:bg-white hover:text-black transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 text-gray-300 space-y-6 leading-relaxed">
                    {children}
                </div>

                {/* Footer (Optional) */}
                <div className="p-6 border-t border-[#333] bg-[#1a1a1a] flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-white text-black font-bold uppercase rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Chiudi
                    </button>
                </div>

            </div>
        </div>
    );
}
