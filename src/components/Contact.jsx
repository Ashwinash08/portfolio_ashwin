import React, { useState } from 'react';
import GradientText from './GradientText';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

const Contact = ({ onNavigate }) => {
    const [copiedKey, setCopiedKey] = useState(null);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const contactInfo = [
        {
            key: 'whatsapp',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .63 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.63A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
            label: 'WhatsApp',
            value: '+91 8553058484',
            copyText: '+918553058484',
            href: 'https://wa.me/918553058484',
            color: '#10b981'
        },
        {
            key: 'email',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            label: 'Email',
            value: 'ashwin.e174@gmail.com',
            copyText: 'ashwin.e174@gmail.com',
            href: 'mailto:ashwin.e174@gmail.com',
            color: '#ef4444'
        },
        {
            key: 'github',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'Ashwinash08',
            copyText: 'https://github.com/Ashwinash08',
            href: 'https://github.com/Ashwinash08',
            color: '#4f46e5'
        },
        {
            key: 'linkedin',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
            label: 'LinkedIn',
            value: 'Ashwin E',
            copyText: 'https://www.linkedin.com/in/ashwin-e-1ba28b348',
            href: 'https://www.linkedin.com/in/ashwin-e-1ba28b348',
            color: '#0284c7'
        },
        {
            key: 'location',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            label: 'Location',
            value: 'Bangalore, India',
            copyText: 'Bangalore, India',
            href: 'https://maps.google.com/?q=Bangalore,India',
            color: '#f59e0b'
        }
    ];

    const copyToClipboard = (key, text, e) => {
        e.preventDefault();
        e.stopPropagation();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopiedKey(key);
            setTimeout(() => setCopiedKey(null), 2000);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formState.name || !formState.email) return;

        const mailtoLink = `mailto:ashwin.e174@gmail.com?subject=Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
        window.location.href = mailtoLink;

        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-subtitle">Get In Touch</span>
                    <GradientText
                        className="section-title"
                        colors={['#ffffff', '#ff8c3b', '#ff5500', '#ffffff']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Contact Me
                    </GradientText>
                </motion.div>

                <div className="grid-cols-2" style={{ gap: '1.25rem', width: '100%', alignItems: 'stretch' }}>
                    {/* Contact Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={info.key}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -2 }}
                            >
                                <SpotlightCard
                                    className="glass-card"
                                    spotlightColor="var(--card-hover-glow)"
                                >
                                    <div style={{
                                        padding: '0.65rem 0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '0.5rem'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                background: 'rgba(79, 70, 229, 0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: info.color,
                                                flexShrink: 0
                                            }}>
                                                {info.icon}
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                                                    {info.label}
                                                </span>
                                                <h4 style={{
                                                    fontSize: '0.88rem',
                                                    fontWeight: '700',
                                                    color: 'var(--text-primary)',
                                                    margin: 0
                                                }}>
                                                    {info.value}
                                                </h4>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                                            <button
                                                onClick={(e) => copyToClipboard(info.key, info.copyText, e)}
                                                style={{
                                                    background: copiedKey === info.key ? '#10b981' : 'var(--bg-tertiary)',
                                                    border: '1px solid var(--card-border)',
                                                    color: copiedKey === info.key ? '#ffffff' : 'var(--text-primary)',
                                                    padding: '0.28rem 0.55rem',
                                                    borderRadius: '6px',
                                                    fontSize: '0.72rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                {copiedKey === info.key ? '✓ Copied' : 'Copy'}
                                            </button>
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-sm"
                                                style={{ padding: '0.28rem 0.65rem', fontSize: '0.72rem' }}
                                            >
                                                Open
                                            </a>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>

                    {/* Direct Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <SpotlightCard
                            className="glass-card"
                            spotlightColor="var(--card-hover-glow)"
                            style={{ padding: '1.1rem 1.25rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: '800',
                                    color: 'var(--text-primary)',
                                    marginBottom: '0.15rem'
                                }}>
                                    Send a Message
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.78rem',
                                    marginBottom: '0.65rem'
                                }}>
                                    Send an inquiry directly to my email inbox.
                                </p>

                                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ashwin"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.42rem 0.7rem',
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--card-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                outline: 'none',
                                                fontSize: '0.82rem'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.42rem 0.7rem',
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--card-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                outline: 'none',
                                                fontSize: '0.82rem'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                                            Message
                                        </label>
                                        <textarea
                                            rows={2}
                                            placeholder="How can I help you today?"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.42rem 0.7rem',
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--card-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                outline: 'none',
                                                fontSize: '0.82rem',
                                                resize: 'vertical'
                                            }}
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '0.48rem', marginTop: '0.15rem', fontSize: '0.82rem' }}
                                    >
                                        Send Message
                                    </motion.button>

                                {formSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        style={{
                                            padding: '0.45rem',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            border: '1px solid rgba(16, 185, 129, 0.25)',
                                            borderRadius: '6px',
                                            color: '#10b981',
                                            fontSize: '0.78rem',
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}
                                    >
                                        ✓ Mail client opened!
                                    </motion.div>
                                )}
                            </form>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

