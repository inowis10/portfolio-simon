import React, { useState, useEffect } from 'react';
import './WelcomeModal.css';

const WelcomeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already seen the modal in this session
        const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');

        if (!hasSeenModal) {
            // Small delay for smoother entrance after page load
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Mark as seen so it doesn't annoy the user on refresh (optional, can be removed if user wants it every time)
        sessionStorage.setItem('hasSeenWelcomeModal', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="welcome-modal-overlay" onClick={handleClose}>
            <div className="welcome-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="welcome-close-btn" onClick={handleClose} aria-label="Cerrar">
                    ✕
                </button>
                <div className="welcome-modal-inner">
                    <div className="welcome-icon">👋</div>
                    <h2 className="welcome-title">¡Hola! Soy Simón Labraña Arias</h2>
                    <p className="welcome-subtitle">Periodista Digital & Marketing Digital</p>
                    <p className="welcome-text">
                        Aquí encontrarás mis proyectos y estrategias donde fusiono mi experiencia profesional con una pasión autodidacta por la tecnología y el desarrollo web.
                    </p>
                    <div className="welcome-highlights">
                        <div className="highlight-item">
                            <span className="highlight-icon">🚀</span>
                            <span>Marketing Digital</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">📲</span>
                            <span>Redes Sociales</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✍️</span>
                            <span>Contenido Creativo</span>
                        </div>
                    </div>
                    <button className="welcome-button" onClick={handleClose}>
                        <span>Explorar Portafolio</span>
                        <span className="button-arrow">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
