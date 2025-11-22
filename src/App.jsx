import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import ProjectsPage from './pages/ProjectsPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="proyectos" element={<ProjectsPage />} />
                    <Route path="sobre-mi" element={<AboutMe />} />
                    <Route path="hablemos" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
