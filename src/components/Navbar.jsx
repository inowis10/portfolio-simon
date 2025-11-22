import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cvPDF from '../assets/CV.pdf'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = cvPDF
        link.download = 'CV_SFLA.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    SFLA
                </Link>

                <button
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link></li>
                    <li><Link to="/proyectos" className={`nav-link ${location.pathname === '/proyectos' ? 'active' : ''}`}>Proyectos</Link></li>
                    <li><Link to="/sobre-mi" className={`nav-link ${location.pathname === '/sobre-mi' ? 'active' : ''}`}>Sobre Mí</Link></li>
                    <li><Link to="/hablemos" className={`nav-link ${location.pathname === '/hablemos' ? 'active' : ''}`}>Hablemos</Link></li>
                    <li>
                        <button className="btn-cv" onClick={handleDownloadCV}>
                            Mi CV
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
