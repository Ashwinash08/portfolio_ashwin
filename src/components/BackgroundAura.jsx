import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundAura = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Interactive mouse tracking
        let mouse = { x: width / 2, y: height / 2, active: false };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Particle System
        const particleCount = Math.min(Math.floor((width * height) / 28000), 45);
        const particles = [];

        const colors = [
            'rgba(255, 85, 0, ',   // Fiery orange
            'rgba(255, 122, 24, ',  // Amber orange
            'rgba(255, 56, 0, ',   // Crimson flame
            'rgba(245, 158, 11, '  // Warm gold
        ];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 1.8 + 1,
                baseAlpha: Math.random() * 0.35 + 0.15,
                alpha: Math.random() * 0.35 + 0.15,
                color: colors[Math.floor(Math.random() * colors.length)],
                pulseSpeed: Math.random() * 0.015 + 0.005,
                pulseAngle: Math.random() * Math.PI * 2
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update & Draw Particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Movement
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Subtle alpha pulsation
                p.pulseAngle += p.pulseSpeed;
                p.alpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.12;

                // Mouse interaction - smooth gentle drift away from cursor
                if (mouse.active) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        const force = (100 - dist) / 100;
                        p.x -= (dx / dist) * force * 1.0;
                        p.y -= (dy / dist) * force * 1.0;
                    }
                }

                // Draw Particle Dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color + Math.max(0.08, p.alpha) + ')';
                ctx.fill();

                // Connect nearby particles with subtle glowing lines
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 95) {
                        const lineAlpha = (1 - dist / 95) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
                        ctx.lineWidth = 0.65;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className="global-bg-aura"
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
                contain: 'strict'
            }}
        >
            {/* Animated Floating Gradient Orb 1 - Top Left */}
            <motion.div
                animate={{
                    x: [0, 45, -35, 0],
                    y: [0, -55, 35, 0],
                    scale: [1, 1.2, 0.95, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-15%',
                    left: '-10%',
                    width: 'clamp(380px, 52vw, 750px)',
                    height: 'clamp(380px, 52vw, 750px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--orb-color-1) 0%, rgba(99, 102, 241, 0) 70%)',
                    filter: 'blur(95px)',
                    opacity: 'var(--orb-opacity)'
                }}
            />

            {/* Animated Floating Gradient Orb 2 - Middle Right */}
            <motion.div
                animate={{
                    x: [0, -55, 35, 0],
                    y: [0, 55, -35, 0],
                    scale: [1, 1.22, 0.92, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    right: '-12%',
                    width: 'clamp(350px, 48vw, 700px)',
                    height: 'clamp(350px, 48vw, 700px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--orb-color-2) 0%, rgba(139, 92, 246, 0) 70%)',
                    filter: 'blur(100px)',
                    opacity: 'var(--orb-opacity)'
                }}
            />

            {/* Animated Floating Gradient Orb 3 - Bottom Left */}
            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 50, 0],
                    scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '-12%',
                    left: '8%',
                    width: 'clamp(340px, 46vw, 680px)',
                    height: 'clamp(340px, 46vw, 680px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--orb-color-3) 0%, rgba(59, 130, 246, 0) 70%)',
                    filter: 'blur(95px)',
                    opacity: 'var(--orb-opacity)'
                }}
            />

            {/* Animated Floating Gradient Orb 4 - Center Stage Accent */}
            <motion.div
                animate={{
                    x: [-30, 30, -30],
                    y: [30, -30, 30],
                    scale: [0.95, 1.18, 0.95],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '35%',
                    width: 'clamp(300px, 42vw, 620px)',
                    height: 'clamp(300px, 42vw, 620px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--orb-color-4) 0%, rgba(244, 114, 182, 0) 70%)',
                    filter: 'blur(105px)',
                    opacity: 'calc(var(--orb-opacity) * 0.75)'
                }}
            />

            {/* Canvas with Floating Constellation Particles */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block'
                }}
            />

            {/* Subtle Grid Dot Texture */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(var(--grid-dot-color) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                    opacity: 0.75,
                    maskImage: 'linear-gradient(to bottom, black 15%, transparent 95%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 15%, transparent 95%)'
                }}
            />
        </div>
    );
};

export default BackgroundAura;
