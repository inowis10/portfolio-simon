// Importar imágenes existentes (se mantendrán las que ya existen y null para las que faltan)
import estrategiaRedes1 from '../assets/projects/estrategia-redes/1.jpg.jpg'
import estrategiaRedes2 from '../assets/projects/estrategia-redes/2.jpg.jpg'
import estrategiaRedes3 from '../assets/projects/estrategia-redes/3.jpg.jpg'
import estrategiaRedes4 from '../assets/projects/estrategia-redes/4.jpg.jpg'
import estrategiaRedes5 from '../assets/projects/estrategia-redes/5.jpg.jpg'
import estrategiaRedes6 from '../assets/projects/estrategia-redes/6.jpg.jpg'

import gestionRedes1 from '../assets/projects/gestion-redes/1.jpg.png'
import gestionRedes2 from '../assets/projects/gestion-redes/2.jpg.png'
import gestionRedes3 from '../assets/projects/gestion-redes/3.jpg.png'
import gestionRedes4 from '../assets/projects/gestion-redes/4.jpg.png'
import gestionRedes5 from '../assets/projects/gestion-redes/5.jpg.png'
import gestionRedes6 from '../assets/projects/gestion-redes/6.jpg.png'

import campanaDigital1 from '../assets/projects/campana-digital/1.jpg.jpg'
import campanaDigital2 from '../assets/projects/campana-digital/2.jpg.jpg'
import campanaDigital3 from '../assets/projects/campana-digital/3.jpg.jpg'
import campanaDigital4 from '../assets/projects/campana-digital/4.jpg.jpg'
import campanaDigital5 from '../assets/projects/campana-digital/5.jpg.jpg'
import campanaDigital6 from '../assets/projects/campana-digital/6.jpg.jpg'

export const projectsData = [
    {
        id: 1,
        title: 'Campaña digital integral',
        category: 'Marketing Digital',
        // Descripción corta para la tarjeta de Inicio (Lo más reciente)
        shortDescription: 'Estrategia integral de marketing con resultados medibles y optimización de pauta.',
        // Descripción completa para la página de Proyectos
        description: 'Estrategia completa de marketing digital para una marca emergente, optimizando contenido, pauta y analítica para obtener resultados medibles.',
        objective: 'Con Uniformes Valet quise aumentar el reconocimiento de marca y generar leads cualificados en un periodo de 3 meses.',
        tools: ['Google Ads', 'Meta Business', 'Analytics', 'Illustrator'],
        tags: ['Marketing', 'Estrategia'], // Tags para la tarjeta de inicio
        images: [campanaDigital1, campanaDigital2, campanaDigital3, campanaDigital4, campanaDigital5, campanaDigital6]
    },
    {
        id: 2,
        title: 'Gestión de redes y contenido',
        category: 'Community Manager',
        shortDescription: 'Gestión de comunidad y creación de contenido con enfoque en identidad digital.',
        description: 'Planificación, creación de contenido y gestión diaria de la comunidad, aplicando buenas prácticas de tono, identidad digital y análisis de métricas.',
        objective: 'Impulsar el crecimiento orgánico y mejorar la interacción semanal en redes sociales de Street Coins empresa dedicada a la venta de productos con estampados personalizados.',
        tools: ['Meta Business', 'Canva', 'Analytics', 'Semrush'],
        tags: ['Social Media', 'Contenido'],
        images: [gestionRedes1, gestionRedes2, gestionRedes3, gestionRedes4, gestionRedes5, gestionRedes6]
    },
    {
        id: 3,
        title: 'Estrategia de redes para marca',
        category: 'Community Manager',
        shortDescription: 'Desarrollo de parrillas de contenido y storytelling aplicado a marca.',
        description: 'Desarrollo de parrillas de contenido, storytelling aplicado a marca y optimización constante según insights mensuales.',
        objective: 'Construir una presencia digital sólida y aumentar el engagement mensual de la panadería Dolci da Forno, a través de contenido alineado con la marca y su frase "sabor casero".',
        tools: ['Meta Ads', 'Canva', 'Hootsuite', 'Premiere'],
        tags: ['Storytelling', 'Branding'],
        images: [estrategiaRedes1, estrategiaRedes2, estrategiaRedes3, estrategiaRedes4, estrategiaRedes5, estrategiaRedes6]
    },
    {
        id: 4,
        title: 'Optimización On-Page y SEO',
        category: 'SEO',
        shortDescription: 'Auditoría SEO y optimización técnica para mejorar posicionamiento orgánico.',
        description: 'Auditoría SEO, ajustes técnicos, optimización de contenido y monitoreo continuo del rendimiento orgánico.',
        objective: 'Mejorar el posicionamiento orgánico y aumentar el tráfico cualificado.',
        tools: ['Semrush', 'Analytics', 'Wordpress', 'Search Console'],
        tags: ['SEO', 'Optimización'],
        images: [null, null, null, null, null, null]
    },
    {
        id: 5,
        title: 'Creación de curso digital',
        category: 'Diseño Instruccional',
        shortDescription: 'Diseño instruccional y guionización de módulos para e-learning.',
        description: 'Desarrollo de contenidos, guionización de módulos, diseño visual y estructuración de actividades evaluativas con foco en claridad y usabilidad.',
        objective: 'Diseñar un curso claro, práctico y estructurado para capacitar a usuarios sobre un proceso o herramienta.',
        tools: ['Canva', 'Wordpress', 'Moodle', 'Capcut'],
        tags: ['Educación', 'E-learning'],
        images: [null, null, null, null, null, null]
    },
    {
        id: 6,
        title: 'Transformación Digital',
        category: 'Consultoría',
        shortDescription: 'Digitalización y automatización de flujos de trabajo para eficiencia operativa.',
        description: 'Acompañamiento en proceso de digitalización y automatización de procesos.',
        objective: 'Modernizar los flujos de trabajo internos para mejorar la eficiencia operativa.',
        tools: ['Zapier', 'Slack', 'Trello', 'Cloud'],
        tags: ['Consultoría', 'Automatización'],
        images: [null, null, null, null, null, null]
    }
];
