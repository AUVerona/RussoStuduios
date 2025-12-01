"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import ImageModal from "../components/ImageModal";

interface ImageModalContextType {
    openModal: (src: string) => void;
    closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export function ImageModalProvider({ children }: { children: ReactNode }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (src: string) => {
        setSelectedImage(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Wait for animation to finish before clearing the image source
        setTimeout(() => setSelectedImage(null), 300);
    };

    return (
        <ImageModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <ImageModal src={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
        </ImageModalContext.Provider>
    );
}

export function useImageModal() {
    const context = useContext(ImageModalContext);
    if (context === undefined) {
        throw new Error("useImageModal must be used within an ImageModalProvider");
    }
    return context;
}
