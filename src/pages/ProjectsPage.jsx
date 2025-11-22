import { useEffect, useState } from 'react'
import { CaretLeft, CaretRight, Image as ImageIcon } from '@phosphor-icons/react'

// Importar imágenes de estrategia-redes
import estrategiaRedes1 from '../assets/projects/estrategia-redes/1.jpg.jpg'
import estrategiaRedes2 from '../assets/projects/estrategia-redes/2.jpg.jpg'
import estrategiaRedes3 from '../assets/projects/estrategia-redes/3.jpg.jpg'
import estrategiaRedes4 from '../assets/projects/estrategia-redes/4.jpg.jpg'
import estrategiaRedes5 from '../assets/projects/estrategia-redes/5.jpg.jpg'
import estrategiaRedes6 from '../assets/projects/estrategia-redes/6.jpg.jpg'

// Importar imágenes de gestion-redes
import gestionRedes1 from '../assets/projects/gestion-redes/1.jpg.png'
import gestionRedes2 from '../assets/projects/gestion-redes/2.jpg.png'
import gestionRedes3 from '../assets/projects/gestion-redes/3.jpg.png'
import gestionRedes4 from '../assets/projects/gestion-redes/4.jpg.png'
import gestionRedes5 from '../assets/projects/gestion-redes/5.jpg.png'
import gestionRedes6 from '../assets/projects/gestion-redes/6.jpg.png'

// Importar imágenes de campana-digital
import campanaDigital1 from '../assets/projects/campana-digital/1.jpg.jpg'
import campanaDigital2 from '../assets/projects/campana-digital/2.jpg.jpg'
import campanaDigital3 from '../assets/projects/campana-digital/3.jpg.jpg'
import campanaDigital4 from '../assets/projects/campana-digital/4.jpg.jpg'
import campanaDigital5 from '../assets/projects/campana-digital/5.jpg.jpg'
import campanaDigital6 from '../assets/projects/campana-digital/6.jpg.jpg'

function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Datos de los proyectos (Plantilla para editar)
    const projects = [
        {
            id: 1,
            title: 'Campaña digital integral',
            category: 'Marketing Digital',
            description: 'Estrategia completa de marketing digital para una marca emergente, optimizando contenido, pauta y analítica para obtener resultados medibles..',
            objective: 'Con Uniformes Valet quise aumentar el reconocimiento de marca y generar leads cualificados en un periodo de 3 meses.',
            tools: ['Google Ads', 'Meta Business', 'Analytics', 'Illustrator'],
            images: [campanaDigital1, campanaDigital2, campanaDigital3, campanaDigital4, campanaDigital5, campanaDigital6] // Array de 6 imágenes
        },
        {
            id: 2,
            title: 'Gestión de redes y contenido',
            category: 'Community Manager',
            description: 'Planificación, creación de contenido y gestión diaria de la comunidad, aplicando buenas prácticas de tono, identidad digital y análisis de métricas.',
            objective: 'Impulsar el crecimiento orgánico y mejorar la interacción semanal en redes sociales de Street Coins empresa dedicada a la venta de productos con estampados personalizados.',
            tools: ['Meta Business', 'Canva', 'Analytics', 'Semrush'],
            images: [gestionRedes1, gestionRedes2, gestionRedes3, gestionRedes4, gestionRedes5, gestionRedes6]
        },
        {
            id: 3,
            title: 'Estrategia de redes para marca de servicios',
            category: 'Community Manager',
            description: 'Desarrollo de parrillas de contenido, storytelling aplicado a marca y optimización constante según insights mensuales.',
            objective: 'Construir una presencia digital sólida y aumentar el engagement mensual de la panadería Dolci da Forno, a través de contenido alineado con la marca y su frase "sabor casero".',
            tools: ['Meta Ads', 'Canva', 'Hootsuite', 'Premiere'],
            images: [estrategiaRedes1, estrategiaRedes2, estrategiaRedes3, estrategiaRedes4, estrategiaRedes5, estrategiaRedes6]
        },
        {
            id: 4,
            title: 'Optimización On-Page y de contenidos',
            category: 'SEO',
            description: 'Auditoría SEO, ajustes técnicos, optimización de contenido y monitoreo continuo del rendimiento orgánico.',
            objective: 'Mejorar el posicionamiento orgánico y aumentar el tráfico cualificado.',
            tools: ['Semrush', 'Analytics', 'Wordpress', 'Search Console'],
            images: [null, null, null, null, null, null]
        },
        {
            id: 5,
            title: 'Creación de curso digital',
            category: 'Diseño Instruccional',
            description: 'Desarrollo de contenidos, guionización de módulos, diseño visual y estructuración de actividades evaluativas con foco en claridad y usabilidad.',
            objective: 'Diseñar un curso claro, práctico y estructurado para capacitar a usuarios sobre un proceso o herramienta.',
            tools: ['Canva', 'Wordpress', 'Moodle', 'Capcut'],
            images: [null, null, null, null, null, null]
        },
        {
            id: 6,
            title: 'Transformación Digital',
            category: 'Consultoría',
            description: 'Acompañamiento en proceso de digitalización y automatización de procesos.',
            objective: 'Modernizar los flujos de trabajo internos para mejorar la eficiencia operativa.',
            tools: ['Zapier', 'Slack', 'Trello', 'Cloud'],
            images: [null, null, null, null, null, null]
        }
    ]

    return (
        <div style={{ backgroundColor: '#091e2d', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Header Section */}
            <div className="container" style={{ paddingTop: '140px', paddingBottom: '60px', textAlign: 'center' }}>
                <h1 className="section-title slide-up-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
                    Mi estilo es adaptable y flexible
                </h1>
                <p className="section-subtitle slide-up-text delay-200" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    Mis trabajos más recientes, diseñados para generar impacto real en plataformas digitales.
                </p>
            </div>

            {/* Projects List */}
            <div className="container-wide">
                {projects.map((project, index) => (
                    <ProjectSection key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    )
}

// Componente Individual para cada Proyecto
function ProjectSection({ project, index }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
    }

    const openZoom = () => {
        if (project.images[currentImageIndex]) {
            setIsZoomed(true)
        }
    }

    const closeZoom = () => {
        setIsZoomed(false)
    }

    // Auto-play del carrusel
    useEffect(() => {
        // Solo activar auto-play si no está en zoom y no está pausado
        if (!isZoomed && !isPaused) {
            const interval = setInterval(() => {
                nextImage()
            }, 4000) // Cambia cada 4 segundos

            return () => clearInterval(interval)
        }
    }, [currentImageIndex, isZoomed, isPaused])

    // Pausar temporalmente al interactuar manualmente
    const handleManualNavigation = (navigationFn) => {
        navigationFn()
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 8000) // Reanuda después de 8 segundos
    }

    return (
        <section className="fade-in" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            borderTop: index !== 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            padding: '4rem 0',
            position: 'relative'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                gap: '4rem',
                width: '100%',
                alignItems: 'start'
            }} className="project-layout">

                {/* Left Column: Sticky Info */}
                <div style={{ position: 'sticky', top: '120px' }} className="project-info">
                    <span style={{
                        color: '#f6b740',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        {project.category}
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 3vw, 3rem)',
                        lineHeight: '1.1',
                        marginBottom: '2rem',
                        color: '#fff'
                    }}>
                        {project.title}
                    </h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Objetivo</h4>
                        <p style={{ color: '#aaa', lineHeight: '1.7' }}>{project.objective}</p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Descripción</h4>
                        <p style={{ color: '#aaa', lineHeight: '1.7' }}>{project.description}</p>
                    </div>

                    <div>
                        <h4 style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Herramientas</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {project.tools.map((tool, i) => (
                                <span key={i} style={{
                                    padding: '0.5rem 1rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    color: '#ccc',
                                    backgroundColor: 'rgba(255,255,255,0.02)'
                                }}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Large Carousel */}
                <div style={{ position: 'relative' }} className="project-visuals">
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        style={{
                            aspectRatio: '16/9',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            position: 'relative',
                            border: '1px solid rgba(255,255,255,0.05)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                        }}>
                        {project.images[currentImageIndex] ? (
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} view ${currentImageIndex + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                onClick={openZoom}
                            />
                        ) : (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.1)',
                                background: 'radial-gradient(circle at center, #1a3a52 0%, #091e2d 100%)'
                            }}>
                                <ImageIcon size={80} />
                                <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Imagen {currentImageIndex + 1}</p>
                            </div>
                        )}

                        {/* Controls */}
                        <button onClick={() => handleManualNavigation(prevImage)} style={{
                            position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                            width: '50px', height: '50px', borderRadius: '50%',
                            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backdropFilter: 'blur(4px)', transition: 'all 0.2s'
                        }}>
                            <CaretLeft size={24} />
                        </button>
                        <button onClick={() => handleManualNavigation(nextImage)} style={{
                            position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                            width: '50px', height: '50px', borderRadius: '50%',
                            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backdropFilter: 'blur(4px)', transition: 'all 0.2s'
                        }}>
                            <CaretRight size={24} />
                        </button>

                        {/* Indicators */}
                        <div style={{
                            position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                            display: 'flex', gap: '0.75rem', padding: '0.5rem 1rem',
                            background: 'rgba(0,0,0,0.3)', borderRadius: '20px', backdropFilter: 'blur(4px)'
                        }}>
                            {project.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleManualNavigation(() => setCurrentImageIndex(idx))}
                                    style={{
                                        width: idx === currentImageIndex ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        backgroundColor: idx === currentImageIndex ? '#f6b740' : 'rgba(255,255,255,0.4)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Zoom */}
            {isZoomed && (
                <div
                    onClick={closeZoom}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.95)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        cursor: 'zoom-out'
                    }}
                >
                    {/* Botón de cerrar */}
                    <button
                        onClick={closeZoom}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.2s',
                            zIndex: 10001
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        ✕
                    </button>

                    {/* Imagen ampliada */}
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 25px 100px rgba(0,0,0,0.5)',
                            cursor: 'default'
                        }}
                    />

                    {/* Navegación en el modal */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        style={{
                            position: 'absolute',
                            left: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.2s',
                            zIndex: 10001
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        <CaretLeft size={28} />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        style={{
                            position: 'absolute',
                            right: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.2s',
                            zIndex: 10001
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        <CaretRight size={28} />
                    </button>

                    {/* Indicador de imagen actual */}
                    <div style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: '#fff',
                        fontSize: '1rem',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '25px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {currentImageIndex + 1} / {project.images.length}
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 900px) {
                    .project-layout {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .project-info {
                        position: static !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default ProjectsPage

