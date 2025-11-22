import { useEffect } from 'react'
import { EnvelopeSimple, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="section-lg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
            <div className="container">
                <div className="fade-in" style={{ textAlign: 'center' }}>
                    <h1 className="slide-up-text" style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Cuéntame tus ideas</h1>
                    <p className="slide-up-text delay-200" style={{ fontSize: '1.25rem', color: '#e0e0e0', maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
                        ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¿Quieres que trabaje para ti?
                        Estoy disponible para conversar sobre nuevas oportunidades.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto',
                        marginBottom: '3rem'
                    }}>
                        {/* Email */}
                        <a href="mailto:simontillo10@gmail.com" className="contact-card float-animation float-delay-1">
                            <EnvelopeSimple size={32} color="#f6b740" style={{ marginBottom: '1rem' }} />
                            <h3>Email</h3>
                            <p>Escríbeme directamente</p>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/simon-labra%C3%B1a-arias/" target="_blank" rel="noopener noreferrer" className="contact-card float-animation float-delay-2">
                            <LinkedinLogo size={32} color="#f6b740" style={{ marginBottom: '1rem' }} />
                            <h3>LinkedIn</h3>
                            <p>Conectemos profesionalmente</p>
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/56950901683" target="_blank" rel="noopener noreferrer" className="contact-card float-animation float-delay-3">
                            <WhatsappLogo size={32} color="#f6b740" style={{ marginBottom: '1rem' }} />
                            <h3>WhatsApp</h3>
                            <p>Conversemos en tiempo real</p>
                        </a>
                    </div>

                    <div className="contact-form-container" style={{ marginTop: '3rem' }}>
                        <h2 className="form-title">¡ Hagamos <span>Match</span> ! Escríbeme:</h2>
                        <form onSubmit={(e) => e.preventDefault()} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" id="name" className="form-input" placeholder="Tu nombre" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" id="email" className="form-input" placeholder="tu@correo.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="tel" id="phone" className="form-input" placeholder="+56 9 1234 5678" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Asunto</label>
                                <input type="text" id="subject" className="form-input" placeholder="¿En qué puedo ayudarte?" required />
                            </div>

                            <button type="submit" className="btn-submit">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
