"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ImageModalProps {
    src: string | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageModal({ src, isOpen, onClose }: ImageModalProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const imageRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Small delay to allow mounting before animating in
            requestAnimationFrame(() => setVisible(true));
            document.body.style.overflow = "hidden"; // Lock scroll
        } else {
            setVisible(false);
            document.body.style.overflow = ""; // Unlock scroll
        }
    }, [isOpen]);

    if (!mounted || !src) return null;

    // Use Portal to render at root level (avoids z-index issues)
    // Note: In Next.js App Router, we might need a specific container, but document.body usually works for simple modals.
    // However, hydration mismatch can occur if using document.body directly in render.
    // Safer to just render conditionally if we are sure we are client-side.
    if (!isOpen && !visible) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ease-out will-change-[opacity] ${visible ? "bg-black/90 backdrop-blur-sm opacity-100" : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
                }`}
            onClick={(e) => {
                // Close if click is outside the image wrapper
                if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
                    onClose();
                }
            }}
        >
            {/* Close Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-6 right-6 z-50 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-10 h-10"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Image Container with Animation */}
            <div
                className={`relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] will-change-[transform,opacity] ${visible
                    ? isMobile
                        ? "translate-y-0 opacity-100" // Mobile: Slide Up
                        : "scale-100 opacity-100" // Desktop: Scale In
                    : isMobile
                        ? "translate-y-full opacity-0" // Mobile: Slide Down
                        : "scale-95 opacity-0" // Desktop: Scale Out
                    }`}
            >
                <div className="relative flex items-center justify-center" ref={imageRef}>
                    <img
                        src={src}
                        alt="Enlarged view"
                        className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
