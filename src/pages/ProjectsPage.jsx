import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CaretLeft, CaretRight, Image as ImageIcon } from '@phosphor-icons/react'

import { projectsData } from '../data/projectsData'

function ProjectsPage() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    // Usar datos centralizados
    const projects = projectsData

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
        <section id={`project-${project.id}`} className="fade-in" style={{
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

