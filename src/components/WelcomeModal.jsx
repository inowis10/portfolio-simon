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
        <div className="welcome-modal-overlay">
            <div className="welcome-modal-content">
                <div className="welcome-modal-inner">
                    <h2 className="welcome-title">¡Hola, Bienvenido!</h2>
                    <p className="welcome-text">
                        Gracias por visitar mi portafolio. Aquí encontrarás mis últimos proyectos y trabajos en desarrollo web.
                    </p>
                    <button className="welcome-button" onClick={handleClose}>
                        Ver Portafolio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
