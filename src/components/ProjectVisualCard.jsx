import React from 'react';

/**
 * ProjectVisualCard
 * Renders the project's graphic identity badge and banner using
 * the cohesive Midnight Violet & Slate design system.
 */
const ProjectVisualCard = ({ project, isModal = false }) => {
    const getVisualTheme = (title) => {
        const t = (title || '').toLowerCase();
        if (t.includes('event')) {
            return {
                monogram: 'EMS',
                gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.15) 100%)',
                accentColor: 'var(--accent, #10b981)',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(16, 185, 129, 0.18) 0%, transparent 70%)',
                badgeText: 'Web Application',
                stat: 'Event Management',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.12 }} aria-hidden="true">
                        <pattern id="grid-event" width="24" height="24" patternUnits="userSpaceOnUse">
                            <rect width="23" height="23" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-event)" />
                    </svg>
                )
            };
        } else if (t.includes('bitcoin') || t.includes('crypto')) {
            return {
                monogram: 'BTC',
                gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.35) 0%, rgba(16, 185, 129, 0.15) 100%)',
                accentColor: 'var(--accent-2, #00f2fe)',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(0, 242, 254, 0.18) 0%, transparent 70%)',
                badgeText: 'Machine Learning',
                stat: 'Time Series',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} aria-hidden="true">
                        <path d="M0,80 Q70,20 140,65 T280,30 T420,70 T560,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M0,95 Q80,45 160,85 T320,40 T480,90 T640,35" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                )
            };
        } else if (t.includes('food') || t.includes('organic')) {
            return {
                monogram: 'FSC',
                gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.35) 0%, rgba(16, 185, 129, 0.12) 100%)',
                accentColor: 'var(--success, #22c55e)',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(34, 197, 94, 0.18) 0%, transparent 70%)',
                badgeText: 'Blockchain',
                stat: 'Farm To Table',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} aria-hidden="true">
                        <circle cx="30" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="120" cy="90" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
                        <line x1="30" y1="40" x2="120" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="210" cy="30" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
                        <line x1="120" y1="90" x2="210" y2="30" stroke="currentColor" strokeWidth="1" />
                    </svg>
                )
            };
        } else {
            return {
                monogram: 'DTW',
                gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.35) 0%, rgba(16, 185, 129, 0.15) 100%)',
                accentColor: 'var(--accent-hover, #34d399)',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(52, 211, 153, 0.18) 0%, transparent 70%)',
                badgeText: 'Artificial Intelligence',
                stat: 'Real-Time Twin',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.16 }} aria-hidden="true">
                        <path d="M0,60 L60,60 L80,20 L100,100 L120,40 L140,80 L160,60 L350,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                )
            };
        }
    };

    const theme = getVisualTheme(project.title);

    return (
        <div
            aria-hidden="true"
            style={{
                width: '100%',
                height: '100%',
                minHeight: isModal ? '180px' : '100%',
                background: 'var(--surface-2)',
                borderRadius: isModal ? 'var(--radius-md)' : 'var(--radius-sm)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isModal ? 'space-between' : 'center',
                alignItems: isModal ? 'flex-start' : 'center',
                textAlign: isModal ? 'left' : 'center',
                padding: isModal ? 'var(--space-6)' : 'var(--space-4) var(--space-3)',
                border: '1px solid var(--border-subtle)',
                userSelect: 'none'
            }}
        >
            {/* Background Ambient Mesh & Pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: theme.bgGradient,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            {/* Glowing Accent Orb */}
            <div
                style={{
                    position: 'absolute',
                    top: isModal ? '-30px' : '-20px',
                    right: isModal ? '-30px' : '-20px',
                    width: isModal ? '140px' : '100px',
                    height: isModal ? '140px' : '100px',
                    borderRadius: 'var(--radius-pill)',
                    background: theme.gradient,
                    opacity: 0.2,
                    filter: 'blur(20px)',
                    pointerEvents: 'none'
                }}
            />

            {/* SVG Ambient Pattern */}
            <div style={{ position: 'absolute', inset: 0, color: theme.accentColor, pointerEvents: 'none' }}>
                {theme.patternSvg}
            </div>

            {isModal ? (
                <>
                    {/* Modal Full Banner Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 'var(--space-2)',
                            padding: 'var(--space-1) var(--space-3)',
                            background: 'var(--surface-1)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            <div style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: 'var(--radius-pill)',
                                background: theme.accentColor,
                                boxShadow: `0 0 6px ${theme.accentColor}`
                            }} />
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--fs-xs)',
                                fontWeight: '700',
                                color: 'var(--text-primary)'
                            }}>
                                {theme.monogram}
                            </span>
                        </div>

                        <span style={{
                            fontSize: 'var(--fs-xs)',
                            fontWeight: '700',
                            color: 'var(--accent)',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase'
                        }}>
                            {project.category}
                        </span>
                    </div>

                    <div style={{ position: 'relative', zIndex: 2, margin: 'var(--space-4) 0 var(--space-2) 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: theme.accentColor, marginBottom: 'var(--space-1)' }}>
                            <span>{theme.icon}</span>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 'var(--fs-xs)',
                                fontWeight: '700',
                                color: 'var(--accent)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em'
                            }}>
                                {theme.badgeText}
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--fs-2xl)',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: '1.2'
                        }}>
                            {project.title}
                        </h2>
                    </div>
                </>
            ) : (
                /* Card Thumbnail */
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2)',
                    width: '100%'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--surface-1)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.accentColor,
                        boxShadow: 'var(--shadow-1)',
                        marginBottom: 'var(--space-1)'
                    }}>
                        {theme.icon}
                    </div>

                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--fs-sm)',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.05em',
                        textAlign: 'center'
                    }}>
                        {theme.monogram}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectVisualCard;
