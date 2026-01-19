// Resources Data - External curated resources

export const resourcesData = {
    books: [
        {
            title: 'Color Me Beautiful',
            author: 'Carole Jackson',
            description: 'El libro clásico que popularizó el sistema de las 4 temporadas de color.',
            category: 'Libros'
        },
        {
            title: 'Color Your Style',
            author: 'David Zyla',
            description: 'Enfoque moderno de colorimetría con sistema personalizado.',
            category: 'Libros'
        }
    ],
    tools: [
        {
            name: 'Adobe Color',
            url: 'https://color.adobe.com',
            description: 'Herramienta para crear y explorar paletas de colores.',
            category: 'Herramientas Online'
        },
        {
            name: 'Coolors',
            url: 'https://coolors.co',
            description: 'Generador de paletas de colores intuitivo y rápido.',
            category: 'Herramientas Online'
        }
    ],
    experts: [
        {
            name: 'Christine Scaman',
            specialty: '12 Seasons System',
            description: 'Experta en el sistema de 12 temporadas, con análisis detallados.',
            category: 'Expertos'
        }
    ],
    articles: [
        {
            title: 'The Science of Color Theory',
            source: 'Scientific American',
            description: 'Artículo científico sobre la percepción del color.',
            category: 'Artículos Científicos'
        }
    ]
}

export const getResourcesByCategory = (category) => {
    const allResources = [
        ...resourcesData.books.map(r => ({ ...r, type: 'book' })),
        ...resourcesData.tools.map(r => ({ ...r, type: 'tool' })),
        ...resourcesData.experts.map(r => ({ ...r, type: 'expert' })),
        ...resourcesData.articles.map(r => ({ ...r, type: 'article' }))
    ]

    if (!category) return allResources
    return allResources.filter(r => r.category === category)
}
