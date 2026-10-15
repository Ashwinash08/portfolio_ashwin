import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const mouseX = useSpring(0, { stiffness: 600, damping: 30 });
    const mouseY = useSpring(0, { stiffness: 600, damping: 30 });

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) {
            setIsTouch(true);
            return;
        }

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.closest('.card-spotlight')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY, isVisible]);

    if (isTouch) return null;

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: isHovered ? 48 : 24,
                height: isHovered ? 48 : 24,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '2px solid var(--accent-primary)',
                pointerEvents: 'none',
                zIndex: 99999,
                display: isVisible ? 'block' : 'none',
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
                boxShadow: isHovered ? '0 0 16px var(--accent-glow)' : 'none'
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    opacity: isHovered ? 0.25 : 0.15,
                }}
                animate={{ scale: isHovered ? 1.2 : 0.6 }}
            />
        </motion.div>
    );
};

export default CustomCursor;
