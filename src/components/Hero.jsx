import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    const [displayedText, setDisplayedText] = useState('')
    const [startAnimation, setStartAnimation] = useState(false)
    const fullText = 'Soy Simón, Periodista Digital.'

    useEffect(() => {
        // Check if modal has been seen
        const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal')

        if (hasSeenModal) {
            setStartAnimation(true)
        } else {
            // Listen for modal close event
            const handleModalClose = () => setStartAnimation(true)
            window.addEventListener('welcomeModalClosed', handleModalClose)
            return () => window.removeEventListener('welcomeModalClosed', handleModalClose)
        }
    }, [])

    useEffect(() => {
        if (!startAnimation) return

        let currentIndex = 0
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(typingInterval)
            }
        }, 50) // 50ms por carácter = rápido y fluido

        return () => clearInterval(typingInterval)
    }, [startAnimation])

    // Función para renderizar el texto con el span en "Periodista Digital"
    const renderTextWithGradient = () => {
        const text = displayedText
        const targetPhrase = 'Periodista Digital'
        const startIndex = fullText.indexOf(targetPhrase)

        // Si aún no hemos llegado a "Periodista Digital", mostrar texto normal
        if (text.length < startIndex) {
            return text
        }

        // Si estamos en medio o después de "Periodista Digital"
        const beforePhrase = text.slice(0, startIndex)
        const phraseLength = Math.min(text.length - startIndex, targetPhrase.length)
        const currentPhrase = text.slice(startIndex, startIndex + phraseLength)
        const afterPhrase = text.slice(startIndex + targetPhrase.length)

        return (
            <>
                {beforePhrase}
                <span className="gradient-text">{currentPhrase}</span>
                {afterPhrase}
            </>
        )
    }

    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-content fade-in">
                    <p className="hero-greeting">Bienvenidos</p>
                    <h1 className="hero-title">
                        {renderTextWithGradient()}
                        <span className="typing-cursor">|</span>
                    </h1>
                    <p className="hero-description">
                        Combino estrategia digital y análisis para impulsar su identidad, creando propuestas de valor que generan conversiones y contenido que conecta emocionalmente con la audiencia.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/hablemos" className="btn btn-primary">Contáctame</Link>
                        <Link to="/proyectos" className="btn btn-secondary">Proyectos</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
