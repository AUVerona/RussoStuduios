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
    const startY = useRef(0);
    const lastDragX = useRef(0);
    const prevTouchX = useRef(0);

    // Inertia
    const velocity = useRef(0);
    const animationFrame = useRef<number>();
    const isScrolling = useRef<boolean | null>(null); // null: unknown, true: vertical, false: horizontal

    useEffect(() => {
        if (!isMobile || !sectionRef.current || !trackRef.current) return;

        const section = sectionRef.current;
        const track = trackRef.current;

        const updateTransform = () => {
            const rect = section.getBoundingClientRect();
            const scrollDist = window.innerHeight - rect.top;
            const parallaxOffset = scrollDist * speed;

            // Apply inertia if not dragging
            if (!isDragging.current && Math.abs(velocity.current) > 0.1) {
                manualOffset.current += velocity.current;
                velocity.current *= 0.95; // Friction factor (0.95 = smooth decay)

                // Boundaries check (optional, but good for "sapido" feel - maybe rubber band later? for now just free scroll)
                // If we want it to be "sapido" (snappy/fast), maybe lower friction slightly or increase initial velocity boost

                requestAnimationFrame(updateTransform);
            } else if (!isDragging.current) {
                velocity.current = 0;
            }

            const totalTranslate = -(parallaxOffset) + manualOffset.current;
            track.style.transform = `translateX(${totalTranslate}px)`;
        };

        const onTouchStart = (e: TouchEvent) => {
            isDragging.current = true;
            startX.current = e.touches[0].clientX;
            startY.current = e.touches[0].clientY;
            prevTouchX.current = e.touches[0].clientX;
            lastDragX.current = manualOffset.current;
            velocity.current = 0;
            isScrolling.current = null;

            // Stop any ongoing inertia
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
            track.style.transition = 'none';
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging.current) return;

            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = currentX - startX.current;
            const deltaY = currentY - startY.current;

            // Determine scroll direction if not yet known
            if (isScrolling.current === null) {
                // If moved enough to determine direction
                if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                    if (Math.abs(deltaY) > Math.abs(deltaX)) {
                        isScrolling.current = true; // Vertical scroll
                    } else {
                        isScrolling.current = false; // Horizontal swipe
                    }
                }
            }

            // If vertical scroll, let browser handle it and ignore swipe
            if (isScrolling.current === true) return;

            // If horizontal swipe, prevent default (vertical scroll)
            if (e.cancelable && isScrolling.current === false) {
                e.preventDefault();
            }

            // Only update if we are horizontally swiping (or direction unknown but moving)
            if (isScrolling.current === false || isScrolling.current === null) {
                // Calculate instantaneous velocity
                velocity.current = currentX - prevTouchX.current;
                prevTouchX.current = currentX;

                // Update manual offset
                manualOffset.current = lastDragX.current + deltaX;

                requestAnimationFrame(updateTransform);
            }
        };

        const onTouchEnd = () => {
            isDragging.current = false;
            // Trigger inertia loop
            requestAnimationFrame(updateTransform);
        };

        // Add scroll listener for parallax effect
        const onScroll = () => {
            if (!isDragging.current && Math.abs(velocity.current) < 0.1) {
                requestAnimationFrame(updateTransform);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // Use non-passive listener for touchmove to allow preventDefault
        track.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);

        // Initial call
        updateTransform();

        return () => {
            window.removeEventListener('scroll', onScroll);
            track.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [isMobile, sectionRef, trackRef, speed]);
};
