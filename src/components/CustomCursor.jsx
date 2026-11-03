import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const checkDisabled = () => {
        if (typeof window === 'undefined') return true;
        const isCoarse = window.matchMedia('(pointer: coarse)').matches;
        const noHover = window.matchMedia('(hover: none)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        return isCoarse || noHover || reducedMotion;
    };

    const [isDisabled, setIsDisabled] = useState(checkDisabled);

    const mouseX = useSpring(0, { stiffness: 600, damping: 30 });
    const mouseY = useSpring(0, { stiffness: 600, damping: 30 });

    useEffect(() => {
        const updateDisabledState = () => setIsDisabled(checkDisabled());

        const coarseQuery = window.matchMedia('(pointer: coarse)');
        const hoverQuery = window.matchMedia('(hover: none)');
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        coarseQuery.addEventListener('change', updateDisabledState);
        hoverQuery.addEventListener('change', updateDisabledState);
        motionQuery.addEventListener('change', updateDisabledState);

        return () => {
            coarseQuery.removeEventListener('change', updateDisabledState);
            hoverQuery.removeEventListener('change', updateDisabledState);
            motionQuery.removeEventListener('change', updateDisabledState);
        };
    }, []);

    useEffect(() => {
        if (isDisabled) return undefined;

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
    }, [isDisabled, mouseX, mouseY, isVisible]);

    if (isDisabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: isHovered ? 48 : 24,
                height: isHovered ? 48 : 24,
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'transparent',
                border: '2px solid var(--accent)',
                pointerEvents: 'none',
                zIndex: 99999,
                display: isVisible ? 'block' : 'none',
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
                boxShadow: isHovered ? 'var(--glow-accent)' : 'none'
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--accent)',
                    opacity: isHovered ? 0.25 : 0.15,
                }}
                animate={{ scale: isHovered ? 1.2 : 0.6 }}
            />
        </motion.div>
    );
};

export default CustomCursor;
