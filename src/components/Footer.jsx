import { Link } from 'react-router-dom'
import { InstagramLogo, WhatsappLogo, LinkedinLogo, Envelope, Phone, MapPin } from '@phosphor-icons/react'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Columna Izquierda - Brand */}
                    <div className="footer-brand">
                        <h2 className="footer-logo">SFLA</h2>
                        <p className="footer-description">
                            Especialista en Comunicaciones, Redes Sociales y Marketing Digital con enfoque a datos y métricas.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <InstagramLogo size={24} weight="fill" />
                            </a>
                            <a href="https://wa.me/56950901683" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <WhatsappLogo size={24} weight="fill" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <LinkedinLogo size={24} weight="fill" />
                            </a>
                        </div>
                    </div>

                    {/* Columna Central - Explora */}
                    <div className="footer-column">
                        <h3 className="footer-title">Explora</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/proyectos">Proyectos</Link></li>
                            <li><Link to="/sobre-mi">Sobre Mí</Link></li>
                            <li><Link to="/hablemos">Hablemos</Link></li>
                        </ul>
                    </div>

                    {/* Columna Derecha - Contacto */}
                    <div className="footer-column">
                        <h3 className="footer-title">Contacto</h3>
                        <div className="footer-contact">
                            <a href="mailto:contacto@miempresa.cl" className="footer-contact-item">
                                <Envelope size={20} weight="fill" />
                                <span>henowis10@gmail.com</span>
                            </a>
                            <a href="tel:+56950901683" className="footer-contact-item">
                                <Phone size={20} weight="fill" />
                                <span>+56 9 50901683</span>
                            </a>
                            <div className="footer-contact-item">
                                <MapPin size={20} weight="fill" />
                                <span>Maipú, Santiago de Chile</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <a href="#privacidad">Política Privacidad</a>
                        <a href="#terminos">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
