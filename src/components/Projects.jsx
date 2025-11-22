import { useEffect, useRef, useState } from 'react'
import { CaretLeft, CaretRight, Image as ImageIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

function Projects() {
    const scrollRef = useRef(null)
    const headerRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)
    const [isHeaderVisible, setIsHeaderVisible] = useState(false)

    // Usar datos centralizados
    const projects = projectsData

    const scrollToIndex = (index) => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        const cardWidth = 300 + 32 // 300px card + 2rem gap
        const targetScroll = index * cardWidth

        scrollContainer.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        })

        setCurrentIndex(index)
    }

    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
        scrollToIndex(newIndex)
        setIsAutoScrolling(false)
    }

    const handleNext = () => {
        const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
        scrollToIndex(newIndex)
        setIsAutoScrolling(false)
    }

    useEffect(() => {
        if (!isAutoScrolling) return

        const interval = setInterval(() => {
            const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
            scrollToIndex(newIndex)
        }, 4000) // Cambiar cada 4 segundos

        return () => clearInterval(interval)
    }, [currentIndex, isAutoScrolling])

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        const handleMouseEnter = () => setIsAutoScrolling(false)
        const handleMouseLeave = () => setIsAutoScrolling(true)

        scrollContainer.addEventListener('mouseenter', handleMouseEnter)
        scrollContainer.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    // Header animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsHeaderVisible(true)
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px'
            }
        )

        if (headerRef.current) {
            observer.observe(headerRef.current)
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current)
            }
        }
    }, [])

    return (
        <section id="proyectos" className="section-lg">
            <div className="container">
                <div
                    ref={headerRef}
                    className="section-header fade-in"
                    style={{
                        opacity: isHeaderVisible ? 1 : 0,
                        transform: isHeaderVisible ? 'scale(1)' : 'scale(0.8)',
                        transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                >
                    <h2 className="section-title">Lo más reciente</h2>
                    <p className="section-subtitle">
                        Te invito a revisar una selección de mis mejores trabajos, donde integro estrategia digital, contenido creativo y análisis de datos para lograr resultados reales.
                    </p>
                </div>

                <div className="carousel-wrapper">
                    {/* Botón Anterior */}
                    <button
                        className="carousel-nav carousel-nav-prev"
                        onClick={handlePrevious}
                        aria-label="Proyecto anterior"
                    >
                        <CaretLeft size={32} weight="bold" />
                    </button>

                    {/* Carrusel */}
                    <div className="projects-grid" ref={scrollRef}>
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                to={`/proyectos#project-${project.id}`}
                                className="project-card slide-up"
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                <div className="project-image" style={{
                                    height: '160px',
                                    background: 'radial-gradient(circle at center, #1a3a52 0%, #091e2d 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    {project.images && project.images[0] ? (
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <ImageIcon size={48} color="rgba(255,255,255,0.2)" />
                                    )}
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.shortDescription}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Botón Siguiente */}
                    <button
                        className="carousel-nav carousel-nav-next"
                        onClick={handleNext}
                        aria-label="Proyecto siguiente"
                    >
                        <CaretRight size={32} weight="bold" />
                    </button>
                </div>

                {/* Indicadores */}
                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                scrollToIndex(index)
                                setIsAutoScrolling(false)
                            }}
                            aria-label={`Ir al proyecto ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="projects-cta fade-in">
                    <Link to="/proyectos" className="btn btn-primary">Ver todos los proyectos</Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
