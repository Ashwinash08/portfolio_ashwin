import React from 'react';

/**
 * ProjectVisualCard
 * Renders the project's name as a modern typographic visual banner / artwork.
 * Replaces generic stock photos with a sleek graphic identity card.
 */
const ProjectVisualCard = ({ project, isModal = false }) => {
    // Determine graphic theme & motifs based on project category / title
    const getVisualTheme = (title) => {
        if (title.toLowerCase().includes('event')) {
            return {
                gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #8b5cf6 100%)',
                accentColor: '#818cf8',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.28) 0%, rgba(15, 23, 42, 0.04) 70%)',
                badgeText: 'WEB APPLICATION',
                stat: 'EVENT MANAGEMENT',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
                        <pattern id="grid-event" width="24" height="24" patternUnits="userSpaceOnUse">
                            <rect width="23" height="23" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-event)" />
                    </svg>
                )
            };
        } else if (title.toLowerCase().includes('bitcoin')) {
            return {
                gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #7c3aed 100%)',
                accentColor: '#fbbf24',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(245, 158, 11, 0.28) 0%, rgba(124, 58, 237, 0.12) 70%)',
                badgeText: 'Machine Learning',
                stat: 'TIME SERIES',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                        <path d="M0,80 Q70,20 140,65 T280,30 T420,70 T560,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M0,95 Q80,45 160,85 T320,40 T480,90 T640,35" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                )
            };
        } else if (title.toLowerCase().includes('food') || title.toLowerCase().includes('organic')) {
            return {
                gradient: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #06b6d4 100%)',
                accentColor: '#34d399',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(16, 185, 129, 0.28) 0%, rgba(6, 182, 212, 0.12) 70%)',
                badgeText: 'Blockchain',
                stat: 'FARM TO TABLE',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
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
                gradient: 'linear-gradient(135deg, #db2777 0%, #ec4899 50%, #8b5cf6 100%)',
                accentColor: '#f472b6',
                bgGradient: 'radial-gradient(ellipse at 80% 20%, rgba(236, 72, 153, 0.28) 0%, rgba(139, 92, 246, 0.12) 70%)',
                badgeText: 'Artificial Intelligence',
                stat: 'REAL-TIME TWIN',
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                ),
                patternSvg: (
                    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                        <path d="M0,60 L60,60 L80,20 L100,100 L120,40 L140,80 L160,60 L350,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                )
            };
        }
    };

    const theme = getVisualTheme(project.title);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minHeight: isModal ? '180px' : '100%',
                background: 'var(--bg-secondary)',
                borderRadius: isModal ? '12px' : '10px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isModal ? 'space-between' : 'center',
                alignItems: isModal ? 'flex-start' : 'center',
                textAlign: isModal ? 'left' : 'center',
                padding: isModal ? '1.4rem' : '1rem 0.75rem',
                border: '1px solid var(--card-border)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 16px rgba(15, 23, 42, 0.04)',
                userSelect: 'none'
            }}
        >
            {/* Background Aesthetic Mesh & Pattern */}
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
                    borderRadius: '50%',
                    background: theme.gradient,
                    opacity: 0.22,
                    filter: 'blur(22px)',
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
                            gap: '0.4rem',
                            padding: '0.2rem 0.55rem',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '6px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                background: theme.accentColor,
                                boxShadow: `0 0 6px ${theme.accentColor}`
                            }} />
                            <span style={{
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '0.72rem',
                                fontWeight: '700',
                                color: 'var(--text-primary)'
                            }}>
                                {theme.monogram}
                            </span>
                        </div>

                        <span style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            color: 'var(--accent-primary)',
                            letterSpacing: '0.6px',
                            textTransform: 'uppercase'
                        }}>
                            {project.category}
                        </span>
                    </div>

                    <div style={{ position: 'relative', zIndex: 2, margin: '0.9rem 0 0.4rem 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: theme.accentColor, marginBottom: '0.3rem' }}>
                            <span>{theme.icon}</span>
                            <span style={{
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '0.72rem',
                                fontWeight: '700',
                                color: 'var(--accent-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.8px'
                            }}>
                                {theme.badgeText}
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: '900',
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: '1.2'
                        }}>
                            {project.title}
                        </h2>
                    </div>
                </>
            ) : (
                /* Card Thumbnail: Clean, modern graphic brand identity badge */
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    width: '100%'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.accentColor,
                        boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                        marginBottom: '0.15rem'
                    }}>
                        {theme.icon}
                    </div>

                    <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.84rem',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.8px',
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
