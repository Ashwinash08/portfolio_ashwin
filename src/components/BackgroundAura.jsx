import React, { useEffect, useRef } from 'react';
import bgVideo from '../assets/Green-Digital-Code-SnapYT.App.mp4';

const BackgroundAura = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Reduce video animation / playback speed per user request (calm, ambient digital matrix flow)
        video.playbackRate = 0.45;

        const handlePlay = () => {
            if (video) video.playbackRate = 0.45;
        };

        const handleLoaded = () => {
            if (video) video.playbackRate = 0.45;
        };

        video.addEventListener('play', handlePlay);
        video.addEventListener('loadedmetadata', handleLoaded);

        // Pause on prefers-reduced-motion for accessibility
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionPreference = (e) => {
            if (e.matches) {
                video.pause();
            } else {
                video.play().catch(() => {});
            }
        };

        if (motionQuery.matches) {
            video.pause();
        } else {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Handled gracefully if browser blocks unprompted autoplay
                });
            }
        }

        motionQuery.addEventListener('change', handleMotionPreference);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('loadedmetadata', handleLoaded);
            motionQuery.removeEventListener('change', handleMotionPreference);
        };
    }, []);

    return (
        <div
            className="global-bg-video-container"
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
                contain: 'strict',
                backgroundColor: 'var(--bg, #060a08)'
            }}
        >
            {/* The Green Digital Code background video with reduced opacity & speed */}
            <video
                ref={videoRef}
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                    opacity: 0.22, // Reduced opacity per user request
                    filter: 'contrast(1.15) brightness(0.95)',
                    pointerEvents: 'none'
                }}
            />

            {/* Ambient Dark Radial Overlay to ensure high contrast and readable text */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 50% 30%, rgba(6, 10, 8, 0.45) 0%, rgba(6, 10, 8, 0.88) 100%)',
                    pointerEvents: 'none'
                }}
            />

            {/* Subtle cyber grid dot pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(52, 211, 153, 0.04) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
};

export default BackgroundAura;
