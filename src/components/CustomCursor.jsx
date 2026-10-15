import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: isHovered ? 60 : 30,
                height: isHovered ? 60 : 30,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '2px solid var(--accent-primary)',
                pointerEvents: 'none',
                zIndex: 9999,
                display: isVisible ? 'block' : 'none',
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
                mixBlendMode: 'difference',
            }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-primary)',
                    opacity: 0.3,
                }}
                animate={{ scale: isHovered ? 1.5 : 0.5 }}
            />
        </motion.div>
    );
};

export default CustomCursor;
