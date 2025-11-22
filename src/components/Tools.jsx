import { useState, useEffect, useRef } from 'react'
import logo1 from '../assets/Logo 1.png'
import logo2 from '../assets/Logo 2.png'
import logo3 from '../assets/Logo 3.png'
import logo4 from '../assets/Logo 4.png'
import logo5 from '../assets/Logo 5.png'
import logo6 from '../assets/Logo 6.png'
import logo7 from '../assets/Logo 7.png'
import logo8 from '../assets/Logo 8.png'
import logo9 from '../assets/Logo 9.png'

function Tools() {
    const [isVisible, setIsVisible] = useState(false)
    const headerRef = useRef(null)

    const tools = [
        { src: logo1, alt: 'Logo 1' },
        { src: logo2, alt: 'Logo 2' },
        { src: logo3, alt: 'Logo 3' },
        { src: logo4, alt: 'Logo 4' },
        { src: logo5, alt: 'Logo 5' },
        { src: logo6, alt: 'Logo 6' },
        { src: logo7, alt: 'Logo 7' },
        { src: logo8, alt: 'Logo 8' },
        { src: logo9, alt: 'Logo 9' }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
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
        <section className="section tools-section">
            <div className="container">
                <div
                    ref={headerRef}
                    className="section-header fade-in"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                        transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                >
                    <h2 className="section-title">Tecnologías que uso</h2>
                    <p className="section-subtitle">Software y plataformas que impulsan mis proyectos.</p>
                </div>
                <div className="carousel-container">
                    <div className="carousel-track" id="carouselTrack">
                        {/* First set */}
                        {tools.map((tool, index) => (
                            <div key={`tool-${index}`} className="tool-item">
                                <img src={tool.src} alt={tool.alt} className="tool-logo" />
                            </div>
                        ))}
                        {/* Duplicate set for infinite scroll */}
                        {tools.map((tool, index) => (
                            <div key={`tool-duplicate-${index}`} className="tool-item">
                                <img src={tool.src} alt={tool.alt} className="tool-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools
