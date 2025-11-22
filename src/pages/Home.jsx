import { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Tools from '../components/Tools'
import LinkedIn from '../components/LinkedIn'
import Projects from '../components/Projects'
import Pyme from '../components/Pyme'

function Home() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero />
            <Services />
            <Tools />
            <LinkedIn />
            <Projects />
            <Pyme />
        </>
    )
}

export default Home
