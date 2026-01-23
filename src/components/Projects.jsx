import GradientText from './GradientText';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';
import FadeContent from './FadeContent';

import eventImg from '../assets/event-mgmt.png';
import bitcoinImg from '../assets/bitcoin.png';
import foodImg from '../assets/food.png';

const Projects = () => {
    const projects = [
        {
            title: "Event Managemet System",
            category: "Web Application",
            image: eventImg,
            desc: "This project represents the development and implementation of an Event Management System designed to streamline and enhance the planning coordination and execution of events. The primary objective of this system is to provide a comprehensive digital platform that automates the various tasks involved in event management, thereby improving efficiency and user experience.",
            tech: ["HTML", "CSS", "MySQL", "JavaScript", "Bootstrap"]
        },
        {
            title: "Bitcoin Prediction using Machine learning",
            category: "Machine Learning",
            image: bitcoinImg,
            desc: "The objective of this project is to build a machine learning model that can predict the future price of Bitcoin based on historical data. This will involve analyzing and preprocessing data, selecting appropriate features, and training a predictive model. The goal is to help investors and traders make informed decisions in the volatile cryptocurrency market.",
            tech: ["HTML", "Python", "CSS"]
        },
        {
            title: "Organic Food Traceability using AI and Blockchain",
            category: "Blockchain & AI",
            image: foodImg,
            desc: "Developed a secure and transparent food traceability system that leverages Blockchain for immutable record-keeping and AI for predictive analysis of organic food authenticity. The platform ensures end-to-end supply chain visibility, building consumer trust by preventing certification fraud.",
            tech: ["HTML", "Python", "Blockchain", "AI", "MySQL"]
        }
    ];

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <Particles
                particleCount={200}
                particleSpread={12}
                speed={0.15}
                particleColors={['#5227FF', '#FF9FFC', '#B19EEF']}
                moveParticlesOnHover={true}
                particleHoverFactor={2.5}
                alphaParticles={true}
                particleBaseSize={80}
                sizeRandomness={0.8}
                cameraDistance={30}
                disableRotation={false}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <FadeContent blur={true} duration={1000}>
                        <span className="section-subtitle">My Work</span>
                        <GradientText
                            className="section-title"
                            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                            animationSpeed={6}
                            showBorder={false}
                        >
                            Featured Projects
                        </GradientText>
                    </FadeContent>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {projects.map((project, idx) => (
                        <FadeContent key={idx} blur={true} duration={1000} delay={idx * 200}>
                            <SpotlightCard
                                className="glass-card"
                                spotlightColor="rgba(99, 102, 241, 0.15)"
                                style={{ width: '100%' }}
                            >
                                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                        <div>
                                            <GradientText
                                                colors={['#5227FF', '#FF9FFC', '#B19EEF', '#5227FF']}
                                                animationSpeed={6}
                                                showBorder={false}
                                            >
                                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                                                    {project.title}
                                                </h3>
                                            </GradientText>
                                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.1rem', marginTop: '0.4rem' }}>
                                                {project.category}
                                            </p>
                                        </div>
                                        <div style={{
                                            padding: '0.5rem 1.25rem',
                                            background: 'rgba(99, 102, 241, 0.1',
                                            borderRadius: '50px',
                                            color: 'var(--accent-primary)',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            border: '1px solid rgba(99, 102, 241, 0.2)'
                                        }}>
                                            View Project &rarr;
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <div style={{
                                            flex: '1 1 300px',
                                            aspectRatio: '16/9',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${project.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--text-primary)',
                                                transition: 'transform 0.5s ease'
                                            }}>
                                                {!project.image && "Project Preview"}
                                            </div>
                                        </div>

                                        <div style={{ flex: '2 1 400px' }}>
                                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                                                {project.desc}
                                            </p>

                                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                                {project.tech.map((skill, sIdx) => (
                                                    <span key={sIdx} style={{
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-primary)',
                                                        background: 'rgba(255, 255, 255, 0.05)',
                                                        padding: '0.4rem 1rem',
                                                        borderRadius: '8px',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                                    }}>
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </FadeContent>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
