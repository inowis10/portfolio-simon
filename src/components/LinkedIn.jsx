import { LinkedinLogo } from '@phosphor-icons/react'

function LinkedIn() {
    return (
        <section className="section linkedin-section">
            <div className="container">
                <div className="fade-in">
                    <h2 className="linkedin-title">¿Conectamos en LinkedIn?</h2>
                    <div style={{ marginTop: '1.5rem' }}>
                        <a href="https://www.linkedin.com/in/simon-labra%C3%B1a-arias/" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <LinkedinLogo size={24} weight="bold" />
                            Seguir
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LinkedIn
