import React from 'react';
import GradientText from './GradientText';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

const Contact = () => {
    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .63 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.63A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
            label: 'WhatsApp',
            value: '+91 8553058484',
            href: 'https://wa.me/918553058484',
            color: '#25D366'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            label: 'Email',
            value: 'ashwin.e174@gmail.com',
            href: 'mailto:ashwin.e174@gmail.com',
            color: '#ea4335'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            ),
            label: 'GitHub',
            value: 'Ashwinash08',
            href: 'https://github.com/Ashwinash08',
            color: '#ffffff'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
            label: 'LinkedIn',
            value: 'Ashwin E',
            href: 'https://www.linkedin.com/in/ashwin-e-1ba28b348',
            color: '#0077b5'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            label: 'Location',
            value: 'Bangalore, India',
            href: '#',
            color: '#ff4444'
        }
    ];

    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <Particles
                particleCount={150}
                particleSpread={10}
                speed={0.1}
                particleColors={['#5227FF', '#FF9FFC', '#B19EEF']}
                moveParticlesOnHover={true}
                particleHoverFactor={2}
                alphaParticles={true}
                particleBaseSize={100}
                sizeRandomness={1}
                cameraDistance={25}
                disableRotation={false}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-subtitle">Get in Touch</span>
                    <GradientText
                        className="section-title"
                        colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Let's work together
                    </GradientText>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {contactInfo.slice(0, 3).map((info, idx) => (
                                <ContactMethodCard key={idx} info={info} />
                            ))}
                        </div>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {contactInfo.slice(3).map((info, idx) => (
                                <ContactMethodCard key={idx} info={info} />
                            ))}
                            <SpotlightCard
                                className="glass-card"
                                spotlightColor="rgba(99, 102, 241, 0.15)"
                                style={{ height: '100%' }}
                            >
                                <div style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                                    <GradientText
                                        colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                        animationSpeed={6}
                                        showBorder={false}
                                    >
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Interested in Working Together?</h3>
                                    </GradientText>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
                                        For more details, inquiries, or collaboration opportunities, please feel free to reach out through any of these channels. I'm always open to discussing new projects and creative ideas!
                                    </p>
                                </div>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactMethodCard = ({ info }) => (
    <SpotlightCard
        className="glass-card"
        spotlightColor="rgba(99, 102, 241, 0.15)"
        style={{ height: '100%' }}
    >
        <a
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem',
                color: 'inherit',
                textDecoration: 'none',
                position: 'relative'
            }}
        >
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: `${info.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: info.color,
                border: `1px solid ${info.color}33`
            }}>
                {info.icon}
            </div>
            <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', marginBottom: '0.2rem' }}>
                    {info.label}
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {info.value}
                </p>
            </div>
            {info.href !== '#' && (
                <div style={{
                    position: 'absolute',
                    right: '1.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.3,
                    color: info.color,
                    pointerEvents: 'none'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </div>
            )}
        </a>
    </SpotlightCard>
);

export default Contact;
