import { useState, useEffect, useRef } from 'react';
import './BlurText.css';

const BlurText = ({
    text,
    delay = 150,
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top', 'bottom', 'left', 'right'
    onAnimationComplete,
    className = '',
}) => {
    const [visibleItems, setVisibleItems] = useState([]);
    const hasAnimated = useRef(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        animateText();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    const animateText = () => {
        const items = animateBy === 'words' ? text.split(' ') : text.split('');
        const totalItems = items.length;

        items.forEach((_, index) => {
            setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);

                // Call onAnimationComplete when last item is visible
                if (index === totalItems - 1 && onAnimationComplete) {
                    setTimeout(() => {
                        onAnimationComplete();
                    }, delay);
                }
            }, index * delay);
        });
    };

    const getDirectionClass = () => {
        switch (direction) {
            case 'top':
                return 'blur-text-from-top';
            case 'bottom':
                return 'blur-text-from-bottom';
            case 'left':
                return 'blur-text-from-left';
            case 'right':
                return 'blur-text-from-right';
            default:
                return 'blur-text-from-top';
        }
    };

    const items = animateBy === 'words' ? text.split(' ') : text.split('');

    return (
        <div ref={elementRef} className={`blur-text-container ${className}`}>
            {items.map((item, index) => (
                <span
                    key={index}
                    className={`blur-text-item ${getDirectionClass()} ${visibleItems.includes(index) ? 'visible' : ''
                        }`}
                    style={{
                        display: 'inline-block',
                        marginRight: animateBy === 'words' ? '0.3em' : '0',
                    }}
                >
                    {item}
                    {animateBy === 'letters' && item === ' ' && '\u00A0'}
                </span>
            ))}
        </div>
    );
};

export default BlurText;
