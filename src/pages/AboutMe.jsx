import { useEffect, useState, useRef } from 'react'
import CV from '../assets/CV.pdf'
import Logo1 from '../assets/Logo 1.png'
import Logo2 from '../assets/Logo 2.png'
import Logo3 from '../assets/Logo 3.png'
import Logo4 from '../assets/Logo 4.png'
import Logo5 from '../assets/Logo 5.png'
import Logo6 from '../assets/Logo 6.png'
import Logo7 from '../assets/Logo 7.png'
import Logo8 from '../assets/Logo 8.png'
import Logo9 from '../assets/Logo 9.png'

function AboutMe() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)

        // Add hover styles dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            .tool-card-hover:hover {
                transform: translateY(-8px) !important;
                border-color: rgba(246, 183, 64, 0.3) !important;
                background-color: rgba(255, 255, 255, 0.04) !important;
                box-shadow: 0 10px 30px rgba(246, 183, 64, 0.1) !important;
            }
            .tool-card-hover:hover img {
                filter: grayscale(0%) !important;
                transform: scale(1.1) !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Animated counters
                    const duration = 2000; // 2 seconds
                    const target1 = 200;
                    const target2 = 3;
                    const target3 = 35;

                    const startTime = Date.now();

                    const animateCounter = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                        setCount1(Math.floor(easeOutQuart * target1));
                        setCount2(Math.floor(easeOutQuart * target2));
                        setCount3(Math.floor(easeOutQuart * target3));

                        if (progress < 1) {
                            requestAnimationFrame(animateCounter);
                        }
                    };

                    requestAnimationFrame(animateCounter);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className="section-lg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
            <div className="container">
                <div className="fade-in" style={{ textAlign: 'center' }}>
                    <h1 className="slide-up-text" style={{ marginBottom: '2rem', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.5px' }}>
                        <span style={{ color: '#f6b740' }}>Periodista</span>
                        <span style={{ margin: '0 15px', color: 'rgba(255, 255, 255, 0.2)', fontWeight: '300' }}>|</span>
                        <span style={{ color: '#e0e0e0' }}>Community Manager</span>
                        <span style={{ margin: '0 15px', color: 'rgba(255, 255, 255, 0.2)', fontWeight: '300' }}>|</span>
                        <span style={{ color: '#e0e0e0' }}>Marketing Digital</span>
                    </h1>
                    <p className="slide-up-text delay-200" style={{ fontSize: '1rem', color: '#e0e0e0', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Profesional digital orientado a resultados, con experiencia en contenido, m�tricas y gesti�n de comunidades. Creo mensajes claros y visuales que impulsan alcance, interacci�n y una presencia online coherente.                    </p>

                    <div style={{ marginTop: '2.5rem' }}>
                        <a
                            href={CV}
                            download="CV_Simon_Sfla.pdf"
                            className="btn-cv"
                            style={{
                                padding: '0.8rem 2rem',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                borderRadius: '50px',
                                boxShadow: '0 4px 15px rgba(246, 183, 64, 0.2)'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,152v56a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H200V152a8,8,0,0,1,16,0ZM165.66,90.34a8,8,0,0,0-11.32,0L136,108.69V24a8,8,0,0,0-16,0v84.69L101.66,90.34a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,165.66,90.34Z"></path></svg>
                            Descargar CV
                        </a>
                    </div>

                    {/* Education Section */}
                    <div style={{
                        marginTop: '4rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '3rem',
                        maxWidth: '900px',
                        margin: '4rem auto 0'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f6b740" viewBox="0 0 256 256">
                                <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"></path>
                            </svg>
                            <h2 style={{
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                letterSpacing: '3px',
                                color: '#888888',
                                textTransform: 'uppercase',
                                margin: 0
                            }}>
                                Educaci�n
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {/* Card 1: Periodista */}
                            <div className="education-card" style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                padding: '2rem',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}>
                                <div style={{ marginBottom: '1.25rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#f6b740" viewBox="0 0 256 256">
                                        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                                    </svg>
                                </div>
                                <h3 style={{
                                    color: '#ffffff',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.4'
                                }}>
                                    Periodista y Comunicador Social
                                </h3>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '0.95rem',
                                    margin: 0
                                }}>
                                    Universidad Mayor
                                </p>
                            </div>

                            {/* Card 2: Diplomado */}
                            <div className="education-card" style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                padding: '2rem',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}>
                                <div style={{ marginBottom: '1.25rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#f6b740" viewBox="0 0 256 256">
                                        <path d="M232,56V88a8,8,0,0,1-8,8H184v16h16a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H184v16h40a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V184a8,8,0,0,1,8-8H72V160H56a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H72V96H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H224A8,8,0,0,1,232,56ZM216,80V64H40V80Zm-24,32V128H64V112ZM40,208H216V192H40Z"></path>
                                    </svg>
                                </div>
                                <h3 style={{
                                    color: '#ffffff',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.4'
                                }}>
                                    Diplomado Marketing Digital
                                </h3>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '0.95rem',
                                    margin: 0
                                }}>
                                    SENCE
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section Container */}
                    <div style={{
                        marginTop: '5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '3rem',
                        maxWidth: '900px',
                        margin: '5rem auto 0'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f6b740" viewBox="0 0 256 256">
                                <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.36V200Z"></path>
                            </svg>
                            <h2 style={{
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                letterSpacing: '3px',
                                color: '#888888',
                                textTransform: 'uppercase',
                                margin: 0
                            }}>
                                Experiencia Laboral
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {/* 2024 - Analista de Marketing (Featured) */}
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(246, 183, 64, 0.3)',
                                borderRadius: '16px',
                                padding: '2rem',
                                transition: 'all 0.3s ease',
                                textAlign: 'left'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#f6b740', marginBottom: '0.5rem' }}>
                                            Analista de Marketing
                                        </h3>
                                        <p style={{ fontSize: '0.95rem', color: '#888888', fontWeight: '500' }}>
                                            Agencia Digital BLDR
                                        </p>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: '#f6b740',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    }}>
                                        2024
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                                    Redacción de contenido digital para marketing, gestión de WordPress y ejecución de campañas de Email Marketing.
                                </p>
                            </div>

                            {/* 2023 - Community Manager */}
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2rem',
                                transition: 'all 0.3s ease',
                                textAlign: 'left'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                                            Community Manager y SEO
                                        </h3>
                                        <p style={{ fontSize: '0.95rem', color: '#888888', fontWeight: '500' }}>
                                            Uniformes Valet
                                        </p>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: '#f6b740',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    }}>
                                        2023
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                                    Optimización SEO logrando +35% en tráfico orgánico. Gestión de redes sociales y análisis con Google Analytics.
                                </p>
                            </div>

                            {/* 2018 - Periodista */}
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2rem',
                                transition: 'all 0.3s ease',
                                textAlign: 'left'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                                            Periodista Comunicaciones Internas
                                        </h3>
                                        <p style={{ fontSize: '0.95rem', color: '#888888', fontWeight: '500' }}>
                                            Tresmontes Lucchetti
                                        </p>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: '#f6b740',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    }}>
                                        2018
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#e0e0e0', lineHeight: '1.6' }}>
                                    Creación de contenido audiovisual para intranet y redes, fortaleciendo la cultura corporativa mediante branding interno.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '5rem',
                        backgroundColor: '#091e2d',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '3rem',
                        maxWidth: '900px',
                        margin: '5rem auto 0'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f6b740" viewBox="0 0 256 256">
                                <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
                            </svg>
                            <h2 style={{
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                letterSpacing: '3px',
                                color: '#888888',
                                textTransform: 'uppercase',
                                margin: 0
                            }}>
                                Herramientas
                            </h2>
                        </div>

                        {/* Tools Grid by Category */}
                        <div style={{ display: 'grid', gap: '2.5rem' }}>
                            {/* Métricas */}
                            <div className="tool-category fade-in">
                                <h3 style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f6b740', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                                    Métricas
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem' }}>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo1} alt="Google Ads" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Google Ads</span>
                                    </div>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo7} alt="Google Analytics" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Google Analytics</span>
                                    </div>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo4} alt="Excel" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Excel</span>
                                    </div>
                                </div>
                            </div>

                            {/* Diseño */}
                            <div className="tool-category fade-in">
                                <h3 style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f6b740', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                                    Diseño
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem' }}>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo2} alt="Canva" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Canva</span>
                                    </div>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo5} alt="Illustrator" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Illustrator</span>
                                    </div>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo6} alt="Premiere" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Premiere</span>
                                    </div>
                                </div>
                            </div>

                            {/* Gestión */}
                            <div className="tool-category fade-in">
                                <h3 style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f6b740', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                                    Gestión
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem' }}>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo3} alt="Power BI" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Power BI</span>
                                    </div>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo8} alt="Mailchimp" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>Mailchimp</span>
                                    </div>
                                    <div className="tool-card-hover" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        minHeight: '120px',
                                        cursor: 'pointer'
                                    }}>
                                        <img src={Logo9} alt="WordPress" style={{ width: '48px', height: '48px', objectFit: 'contain', filter: 'grayscale(20%)', transition: 'all 0.3s ease' }} />
                                        <span style={{ fontSize: '0.7rem', color: '#888888', marginTop: '0.75rem', textAlign: 'center', fontWeight: '500' }}>WordPress</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Datos Curiosos Section */}
                    <div ref={statsRef} style={{
                        marginTop: '5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '3rem',
                        maxWidth: '900px',
                        margin: '5rem auto 0'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f6b740" viewBox="0 0 256 256">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
                            </svg>
                            <h2 style={{
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                letterSpacing: '3px',
                                color: '#888888',
                                textTransform: 'uppercase',
                                margin: 0
                            }}>
                                DATAZOS
                            </h2>
                        </div>

                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            {/* Stat 1 */}
                            <div style={{
                                textAlign: 'center',
                                padding: '2rem 1.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#f6b740', marginBottom: '0.5rem', lineHeight: '1' }}>
                                    {count1}+
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                                    Piezas de Contenido
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div style={{
                                textAlign: 'center',
                                padding: '2rem 1.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#f6b740', marginBottom: '0.5rem', lineHeight: '1' }}>
                                    {count2}+
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                                    Años de Experiencia
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div style={{
                                textAlign: 'center',
                                padding: '2rem 1.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#f6b740', marginBottom: '0.5rem', lineHeight: '1' }}>
                                    {count3}%
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                                    Mejora de Engagment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe


