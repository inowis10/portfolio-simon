import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WelcomeModal from './WelcomeModal'

function Layout() {
    const location = useLocation()

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, observerOptions)

        // Small timeout to ensure DOM is ready
        setTimeout(() => {
            // Observe all elements with animation classes
            const fadeElements = document.querySelectorAll('.fade-in')
            const slideElements = document.querySelectorAll('.slide-up')

            fadeElements.forEach(el => observer.observe(el))
            slideElements.forEach(el => observer.observe(el))
        }, 100)

        // Cleanup
        return () => {
            observer.disconnect()
        }
    }, [location])

    return (
        <>
            <WelcomeModal />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
