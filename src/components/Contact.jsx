import React, { useState, useRef } from 'react';
import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';

const Contact = () => {
    const [copiedKey, setCopiedKey] = useState(null);
    const [copyAnnouncement, setCopyAnnouncement] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [honeypot, setHoneypot] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
    const [statusMessage, setStatusMessage] = useState('');
    const lastSubmitTimeRef = useRef(0);

    const contactInfo = [
        {
            key: 'whatsapp',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            ),
            label: 'WhatsApp',
            value: '+91 8553058484',
            copyText: '+918553058484',
            href: 'https://wa.me/918553058484',
            color: '#10b981'
        },
        {
            key: 'phone',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .63 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.63A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
            label: 'Phone',
            value: '+91 8553058484',
            copyText: '+918553058484',
            href: 'tel:+918553058484',
            color: '#3b82f6'
        },
        {
            key: 'email',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
            label: 'LinkedIn',
            value: 'Ashwin E',
            copyText: 'https://www.linkedin.com/in/ashwin-e-a2a011399',
            href: 'https://www.linkedin.com/in/ashwin-e-a2a011399',
            color: '#0284c7'
        },
        {
            key: 'location',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            navigator.clipboard.writeText(text).then(() => {
                setCopiedKey(key);
                setCopyAnnouncement(`${key} copied to clipboard`);
                setTimeout(() => {
                    setCopiedKey(null);
                    setCopyAnnouncement('');
                }, 2000);
            }).catch(() => {
                setCopyAnnouncement(`Failed to copy ${key}`);
            });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // 1. Honeypot check (anti-bot)
        if (honeypot) {
            setSubmitStatus('success');
            setStatusMessage('Message sent successfully!');
            return;
        }

        // 2. Client-side validation
        const trimmedName = formState.name.trim();
        const trimmedEmail = formState.email.trim();
        const trimmedMessage = formState.message.trim();

        if (trimmedName.length < 2) {
            setSubmitStatus('error');
            setStatusMessage('Please enter your full name (at least 2 characters).');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            setSubmitStatus('error');
            setStatusMessage('Please enter a valid email address.');
            return;
        }

        if (trimmedMessage.length < 5) {
            setSubmitStatus('error');
            setStatusMessage('Please enter a message (at least 5 characters).');
            return;
        }

        // 3. Rate limiting (20 seconds between attempts)
        const now = Date.now();
        if (now - lastSubmitTimeRef.current < 20000) {
            setSubmitStatus('error');
            setStatusMessage('Please wait a moment before sending another message.');
            return;
        }

        const mailtoLink = `mailto:ashwin.e174@gmail.com?subject=Inquiry from ${encodeURIComponent(trimmedName)}&body=${encodeURIComponent(`Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`)}`;
        const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

        // 4. Submission via Formspree if configured, with mailto fallback
        if (formId && formId.trim() !== '') {
            try {
                setIsSubmitting(true);
                setSubmitStatus('idle');
                setStatusMessage('');

                const response = await fetch(`https://formspree.io/f/${formId.trim()}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: trimmedName,
                        email: trimmedEmail,
                        message: trimmedMessage,
                        _subject: `Portfolio Message from ${trimmedName}`
                    })
                });

                if (response.ok) {
                    lastSubmitTimeRef.current = Date.now();
                    setSubmitStatus('success');
                    setStatusMessage('Thank you! Your message has been sent directly to Ashwin. You will hear back soon.');
                    setFormState({ name: '', email: '', message: '' });
                } else {
                    const data = await response.json().catch(() => ({}));
                    throw new Error(data?.error || 'Formspree service error');
                }
            } catch {
                lastSubmitTimeRef.current = Date.now();
                setSubmitStatus('error');
                setStatusMessage('Formspree endpoint unreachable. Opening your default email client...');
                setTimeout(() => {
                    window.location.href = mailtoLink;
                }, 1000);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // No Formspree form ID supplied -> seamless mailto protocol dispatch
            lastSubmitTimeRef.current = Date.now();
            window.location.href = mailtoLink;
            setSubmitStatus('success');
            setStatusMessage('Opening your mail client... You can also email ashwin.e174@gmail.com directly.');
            setTimeout(() => {
                setFormState({ name: '', email: '', message: '' });
            }, 3000);
        }
    };

    return (
        <section id="contact" aria-labelledby="contact-title" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header with Horizontal Line (Image 1 Style) */}
                    <div className="section-header-line">
                        <h2 id="contact-title" className="section-title-line">GET IN TOUCH</h2>
                        <div className="section-title-rule" />
                    </div>

                    {/* Hidden announcer for screen readers */}
                    <div aria-live="polite" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                        {copyAnnouncement}
                    </div>

                    <div className="contact-grid">
                        {/* Contact Links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {contactInfo.map((info) => (
                                <div key={info.key}>
                                    <SpotlightCard
                                        className="glass-card"
                                        spotlightColor="var(--card-hover-glow)"
                                    >
                                    <div className="contact-row">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                            {/* Icon box with colored glow */}
                                            <div style={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '8px',
                                                background: `${info.color}14`,
                                                border: `1px solid ${info.color}30`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: info.color,
                                                flexShrink: 0,
                                                boxShadow: `0 0 15px ${info.color}30`
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
                                                    margin: 0,
                                                    overflowWrap: 'anywhere'
                                                }}>
                                                    {info.value}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="contact-actions" style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                                            <button
                                                onClick={(e) => copyToClipboard(info.key, info.copyText, e)}
                                                aria-label={`Copy ${info.label} to clipboard`}
                                                style={{
                                                    background: copiedKey === info.key ? '#10b981' : 'var(--bg-tertiary)',
                                                    border: '1px solid var(--card-border)',
                                                    color: copiedKey === info.key ? '#ffffff' : 'var(--text-primary)',
                                                    padding: '0.4rem 0.75rem',
                                                    minHeight: '44px',
                                                    minWidth: '64px',
                                                    borderRadius: '8px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                {copiedKey === info.key ? '✓ Copied' : 'Copy'}
                                            </button>
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '_self' : '_blank'}
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${info.label}`}
                                                className="btn btn-primary btn-sm"
                                                style={{
                                                    padding: '0.4rem 0.85rem',
                                                    minHeight: '44px',
                                                    minWidth: '64px',
                                                    fontSize: '0.75rem',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                Open
                                            </a>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div>
                        <SpotlightCard
                            className="glass-card"
                            spotlightColor="var(--card-hover-glow)"
                            style={{ padding: '1.25rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
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
                                    Send an inquiry directly to Ashwin&apos;s inbox.
                                </p>

                                <form onSubmit={handleFormSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                    {/* Honeypot field for bot spam protection */}
                                    <div style={{ position: 'absolute', opacity: 0, zIndex: -1, pointerEvents: 'none', height: 0, overflow: 'hidden' }} aria-hidden="true">
                                        <input
                                            type="text"
                                            name="_gotcha"
                                            tabIndex="-1"
                                            autoComplete="off"
                                            value={honeypot}
                                            onChange={(e) => setHoneypot(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                                            Your Name *
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            aria-required="true"
                                            aria-describedby={statusMessage ? "contact-form-status" : undefined}
                                            placeholder="Ashwin"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            style={{
                                                width: '100%',
                                                minHeight: '44px',
                                                padding: '0.65rem 0.85rem',
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--card-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                outline: 'none',
                                                fontSize: '0.85rem'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                                            Email Address *
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            aria-required="true"
                                            aria-describedby={statusMessage ? "contact-form-status" : undefined}
                                            placeholder="your@email.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            style={{
                                                width: '100%',
                                                minHeight: '44px',
                                                padding: '0.65rem 0.85rem',
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--card-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                outline: 'none',
                                                fontSize: '0.85rem'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                                            Message *
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={3}
                                            required
                                            aria-required="true"
                                            aria-describedby={statusMessage ? "contact-form-status" : undefined}
                                            placeholder="How can I help you today?"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            style={{
                                                width: '100%',
                                                minHeight: '100px',
                                                padding: '0.65rem 0.85rem',
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--card-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                outline: 'none',
                                                fontSize: '0.85rem',
                                                resize: 'vertical'
                                            }}
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            minHeight: '44px',
                                            padding: '0.6rem',
                                            marginTop: '0.25rem',
                                            fontSize: '0.88rem',
                                            fontWeight: '700',
                                            opacity: isSubmitting ? 0.7 : 1,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                    </motion.button>

                                    {statusMessage && (
                                        <motion.div
                                            id="contact-form-status"
                                            role="status"
                                            aria-live="polite"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            style={{
                                                padding: '0.55rem 0.8rem',
                                                background: submitStatus === 'error' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                                                border: `1px solid ${submitStatus === 'error' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                                                borderRadius: '8px',
                                                color: submitStatus === 'error' ? '#ef4444' : '#10b981',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                textAlign: 'center',
                                                lineHeight: 1.45
                                            }}
                                        >
                                            {submitStatus === 'error' ? '⚠️ ' : '✓ '}
                                            {statusMessage}
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
