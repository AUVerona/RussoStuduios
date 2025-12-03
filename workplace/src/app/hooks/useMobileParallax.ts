import { useEffect, useRef } from 'react';

interface UseMobileParallaxProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
    trackRef: React.RefObject<HTMLDivElement | null>;
    isMobile: boolean;
    speed?: number;
}

export const useMobileParallax = ({
    sectionRef,
    trackRef,
    isMobile,
    speed = 0.8
}: UseMobileParallaxProps) => {
    const manualOffset = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const lastDragX = useRef(0);

    useEffect(() => {
        if (!isMobile || !sectionRef.current || !trackRef.current) return;

        const section = sectionRef.current;
        const track = trackRef.current;

        const updateTransform = () => {
            const rect = section.getBoundingClientRect();
            const scrollDist = window.innerHeight - rect.top;
            const parallaxOffset = scrollDist * speed;

            // We want to move left (negative) as we scroll down
            // manualOffset adds to this (positive = right, negative = left)
            const totalTranslate = -(parallaxOffset) + manualOffset.current;

            track.style.transform = `translateX(${totalTranslate}px)`;
        };

        const onScroll = () => {
            // Always update on scroll to keep parallax in sync
            requestAnimationFrame(updateTransform);
        };

        const onTouchStart = (e: TouchEvent) => {
            isDragging.current = true;
            startX.current = e.touches[0].clientX;
            lastDragX.current = manualOffset.current;
            track.style.transition = 'none';
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging.current) return;

            const currentX = e.touches[0].clientX;
            const delta = currentX - startX.current;

            // Update manual offset
            manualOffset.current = lastDragX.current + delta;

            requestAnimationFrame(updateTransform);
        };

        const onTouchEnd = () => {
            isDragging.current = false;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        track.addEventListener('touchstart', onTouchStart, { passive: true });
        // Attach touchmove/end to window to handle dragging outside the element
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);

        // Initial call
        updateTransform();

        return () => {
            window.removeEventListener('scroll', onScroll);
            track.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [isMobile, sectionRef, trackRef, speed]);
};
