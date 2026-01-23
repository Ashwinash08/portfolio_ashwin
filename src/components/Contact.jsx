import React, { useState } from 'react';
import GradientText from './GradientText';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';

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
            value: 'https://github.com/Ashwinash08',
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
            value: 'https://www.linkedin.com/in/ashwin-e-1ba28b348',
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

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/ashwin.e174@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: "Thanks! Your message has been sent successfully. I'll get back to you soon!"
                });
                e.target.reset();
            } else {
                const data = await response.json();
                setStatus({
                    type: 'error',
                    message: data.errors ? data.errors.map(err => err.message).join(", ") : "Oops! There was a problem submitting your form."
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: "Oops! There was a problem submitting your form. Please check your connection."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-subtitle">Get in Touch</span>
                    <GradientText
                        className="section-title"
                        colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                        animationSpeed={6}
                        showBorder={false}
                    >
                        Let's work together
                    </GradientText>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </div>

                <div className="grid-cols-2">
                    {/* Left Side: Contact Info */}
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {contactInfo.map((info, idx) => (
                            <SpotlightCard
                                key={idx}
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
                                        background: `${info.color}15`, // Adding hex opacity
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: info.color,
                                        border: `1px solid ${info.color}33` // Adding hex opacity
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
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </div>
                                    )}
                                </a>
                            </SpotlightCard>
                        ))}
                    </div>

                    {/* Right Side: Contact Form */}
                    <SpotlightCard
                        className="glass-card"
                        spotlightColor="rgba(99, 102, 241, 0.1)"
                        style={{ height: '100%' }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', height: '100%' }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr ', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={labelStyle}>NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        required
                                        style={inputStyle}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={labelStyle}>EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@example.com"
                                        required
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                <label style={labelStyle}>MESSAGE</label>
                                <textarea
                                    name="message"
                                    placeholder="Your message here..."
                                    rows="5"
                                    required
                                    style={{ ...inputStyle, flex: 1, resize: 'none' }}
                                ></textarea>
                            </div>

                            {status.message && (
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                    background: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                    color: status.type === 'success' ? '#4ade80' : '#f87171',
                                    border: `1px solid ${status.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                                }}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{
                                    marginTop: '1rem',
                                    width: '100%',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }}></circle>
                                            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

const labelStyle = {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginLeft: '0.2rem',
};

const inputStyle = {
    background: 'var(--bg-primary)',
    border: '1px solid var(--glass-border)',
    padding: '1rem',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    maxWidth: '100%',
};

export default Contact;
