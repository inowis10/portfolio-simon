import { useState, useEffect, useRef } from 'react'
import { CellSignalFull, DeviceMobile, BookOpenText } from '@phosphor-icons/react'

function Services() {
    const [isVisible, setIsVisible] = useState(false)
    const titleRef = useRef(null)

    const services = [
        {
            icon: <CellSignalFull size={56} />,
            title: 'Marketing Digital',
            description: 'Estrategias digitales efectivas que impulsan el crecimiento de tu marca en el entorno online.'
        },
        {
            icon: <DeviceMobile size={56} />,
            title: 'Redes Sociales',
            description: 'Gestión profesional de redes sociales para conectar con tu audiencia y construir comunidad.'
        },
        {
            icon: <BookOpenText size={56} />,
            title: 'Diseño Instruccional',
            description: 'Creación de experiencias de aprendizaje efectivas que educan y transforman.'
        }
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

        if (titleRef.current) {
            observer.observe(titleRef.current)
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current)
            }
        }
    }, [])

    return (
        <section id="sobre-mi" className="section">
            <div className="container">
                <div className="section-header fade-in">
                    <h2
                        ref={titleRef}
                        className={`section-title ${isVisible ? 'slide-up-text' : ''}`}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                            transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        ¿A qué me dedico?
                    </h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card slide-up">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
