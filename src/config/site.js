// Site Configuration
export const siteConfig = {
    name: 'MyColors AI',
    url: 'https://mycolorspro.vercel.app',
    description: 'Análisis de colorimetría personal con IA. Descubre tu temporada de color y paleta ideal gratis.',
    email: 'hotdogdepeix@gmail.com',
    social: {
        instagram: 'https://instagram.com/mycolors_ai',
        tiktok: 'https://tiktok.com/@mycolorspro'
    }
}

// Navigation links
export const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/blog', label: 'Blog' },
    {
        label: 'Guías',
        submenu: [
            { path: '/guia-primavera', label: 'Primavera' },
            { path: '/guia-verano', label: 'Verano' },
            { path: '/guia-otono', label: 'Otoño' },
            { path: '/guia-invierno', label: 'Invierno' }
        ]
    },
    { path: '/how-it-works', label: 'Cómo Funciona' },
    { path: '/faq', label: 'FAQ' },
    { path: '/glossary', label: 'Glosario' },
    { path: '/about', label: 'Sobre Nosotros' },
    { path: '/contact', label: 'Contacto' }
]

// Footer links
export const footerLinks = {
    company: [
        { path: '/about', label: 'Sobre Nosotros' },
        { path: '/how-it-works', label: 'Cómo Funciona' },
        { path: '/contact', label: 'Contacto' }
    ],
    resources: [
        { path: '/blog', label: 'Blog' },
        { path: '/faq', label: 'FAQ' },
        { path: '/glossary', label: 'Glosario' },
        { path: '/resources', label: 'Recursos' }
    ],
    guides: [
        { path: '/guia-primavera', label: 'Guía Primavera' },
        { path: '/guia-verano', label: 'Guía Verano' },
        { path: '/guia-otono', label: 'Guía Otoño' },
        { path: '/guia-invierno', label: 'Guía Invierno' }
    ],
    legal: [
        { path: '/privacy', label: 'Privacidad' },
        { path: '/terms', label: 'Términos' },
        { path: '/disclaimer', label: 'Disclaimer' }
    ]
}
