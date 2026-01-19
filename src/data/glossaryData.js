// Glossary Data - Términos de colorimetría

export const glossaryData = [
    {
        id: 1,
        term: 'Colorimetría Personal',
        definition: 'Sistema que determina qué colores favorecen más a una persona basándose en su tono de piel, ojos y cabello natural.',
        category: 'General'
    },
    {
        id: 2,
        term: 'Subtono',
        definition: 'El matiz subyacente de la piel que permanece constante independientemente del bronceado. Puede ser cálido (dorado/amarillento) o frío (rosado/azulado).',
        category: 'Características'
    },
    {
        id: 3,
        term: 'Temperatura del Color',
        definition: 'Clasificación de colores como cálidos (con base amarilla) o fríos (con base azul). Es el factor más importante en colorimetría.',
        category: 'Teoría'
    },
    {
        id: 4,
        term: 'Contraste Personal',
        definition: 'Diferencia de valor/tono entre piel, cabello y ojos. Puede ser bajo, medio o alto, y determina la intensidad de colores que te favorece.',
        category: 'Características'
    },
    {
        id: 5,
        term: 'Saturación',
        definition: 'Pureza e intensidad de un color. Colores altamente saturados son vívidos y puros; desaturados son apagados o grisáceos.',
        category: 'Teoría'
    },
    {
        id: 6,
        term: 'Valor',
        definition: 'Claridad u oscuridad de un color. Rosa claro y rosa oscuro tienen diferentes valores pero son el mismo tono.',
        category: 'Teoría'
    },
    {
        id: 7,
        term: 'Primavera',
        definition: 'Temporada de color caracterizada por subtonos cálidos y apariencia clara/luminosa. Favorece colores cálidos y vibrantes.',
        category: 'Temporadas'
    },
    {
        id: 8,
        term: 'Verano',
        definition: 'Temporada de color con subtonos fríos y apariencia suave/delicada. Favorece colores fríos y suaves (pasteles).',
        category: 'Temporadas'
    },
    {
        id: 9,
        term: 'Otoño',
        definition: 'Temporada de color con subtonos cálidos y apariencia profunda/rica. Favorece colores tierra cálidos e intensos.',
        category: 'Temporadas'
    },
    {
        id: 10,
        term: 'Invierno',
        definition: 'Temporada de color con subtonos fríos y alto contraste/apariencia dramática. Favorece colores fríos y saturados.',
        category: 'Temporadas'
    },
    {
        id: 11,
        term: 'Draping',
        definition: 'Método tradicional de análisis de colorimetría que consiste en colocar telas de diferentes colores cerca del rostro para ver cuáles favorecen más.',
        category: 'Métodos'
    },
    {
        id: 12,
        term: 'Paleta de Colores',
        definition: 'Conjunto específico de colores que favorecen a una persona según su temporada. Cada temporada tiene su paleta única.',
        category: 'General'
    },
    {
        id: 13,
        term: 'Armonía Cromática',
        definition: 'Cuando los colores que usas crean cohesión visual con tu coloración natural, resultando en una apariencia equilibrada y favorecedora.',
        category: 'Teoría'
    },
    {
        id: 14,
        term: 'Tono de Piel',
        definition: 'Color superficial de la piel (claro, medio, oscuro). Diferente del subtono, puede cambiar con el bronceado.',
        category: 'Características'
    },
    {
        id: 15,
        term: 'Melanina',
        definition: 'Pigmento que determina el color de piel, cabello y ojos. Existe en formas eumelanina (marrón-negro) y feomelanina (rojo-amarillo).',
        category: 'Características'
    },
    {
        id: 16,
        term: 'Contraste Simultáneo',
        definition: 'Fenómeno óptico donde dos colores adyacentes se influencian mutuamente en cómo se perciben.',
        category: 'Teoría'
    },
    {
        id: 17,
        term: 'Colores Neutrales',
        definition: 'Colores básicos versátiles como blanco, negro, gris, beige, navy. Cada temporada tiene sus neutrales específicos.',
        category: 'General'
    },
    {
        id: 18,
        term: 'Armario Cápsula',
        definition: 'Colección limitada de prendas versátiles que combinan bien entre sí. La colorimetría facilita crear uno efectivo.',
        category: 'Aplicación'
    },
    {
        id: 19,
        term: 'Metamerismo',
        definition: 'Fenómeno donde un color se ve diferente bajo distintas fuentes de luz (natural vs artificial).',
        category: 'Teoría'
    },
    {
        id: 20,
        term: 'Sistema de 12 Temporadas',
        definition: 'Sistema avanzado que subdivide cada temporada básica en tres subtipos según característica dominante (temperatura, valor o saturación).',
        category: 'Sistemas'
    }
]

// Get glossary terms by category
export const getTermsByCategory = (category) => {
    if (!category) return glossaryData
    return glossaryData.filter(term => term.category === category)
}

// Get all unique categories
export const glossaryCategories = [...new Set(glossaryData.map(term => term.category))]

// Search glossary terms
export const searchGlossary = (query) => {
    const lowerQuery = query.toLowerCase()
    return glossaryData.filter(term =>
        term.term.toLowerCase().includes(lowerQuery) ||
        term.definition.toLowerCase().includes(lowerQuery)
    )
}
