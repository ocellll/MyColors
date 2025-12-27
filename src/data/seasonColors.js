/**
 * Season Color Palettes
 * Complete color palettes for each seasonal type
 */

export const SEASON_PALETTES = {
    PRIMAVERA: {
        colors: [
            { hex: '#FF6B9D', name: 'Rosa Coral', category: 'Principal' },
            { hex: '#FFA500', name: 'Naranja Melocotón', category: 'Principal' },
            { hex: '#FFD700', name: 'Amarillo Dorado', category: 'Principal' },
            { hex: '#90EE90', name: 'Verde Manzana', category: 'Acento' },
            { hex: '#87CEEB', name: 'Azul Turquesa', category: 'Acento' },
            { hex: '#DDA0DD', name: 'Lila Suave', category: 'Acento' },
            { hex: '#F0E68C', name: 'Amarillo Mantequilla', category: 'Neutro' },
            { hex: '#FFE4B5', name: 'Beige Cálido', category: 'Neutro' },
            { hex: '#FAFAD2', name: 'Crema', category: 'Neutro' },
            { hex: '#8B4513', name: 'Marrón Caramelo', category: 'Neutro' },
            { hex: '#FF7F50', name: 'Coral Vibrante', category: 'Complementario' },
            { hex: '#40E0D0', name: 'Turquesa Brillante', category: 'Complementario' }
        ],
        avoidColors: ['Negro puro', 'Gris carbón', 'Blanco stark', 'Colores apagados'],
        bestCombinations: [
            ['#FF6B9D', '#FFD700', '#90EE90'],
            ['#87CEEB', '#FFA500', '#F0E68C'],
            ['#DDA0DD', '#FFE4B5', '#40E0D0']
        ],
        gradientStart: '#FF6B9D',
        gradientEnd: '#FFD700'
    },

    VERANO: {
        colors: [
            { hex: '#E6E6FA', name: 'Lavanda', category: 'Principal' },
            { hex: '#87CEEB', name: 'Azul Cielo', category: 'Principal' },
            { hex: '#FFB6C1', name: 'Rosa Polvo', category: 'Principal' },
            { hex: '#B0C4DE', name: 'Azul Acero Claro', category: 'Acento' },
            { hex: '#D8BFD8', name: 'Ciruela Suave', category: 'Acento' },
            { hex: '#98FB98', name: 'Verde Menta', category: 'Acento' },
            { hex: '#C0C0C0', name: 'Gris Suave', category: 'Neutro' },
            { hex: '#F5F5F5', name: 'Blanco Roto', category: 'Neutro' },
            { hex: '#DCDCDC', name: 'Gris Perla', category: 'Neutro' },
            { hex: '#778899', name: 'Gris Pizarra', category: 'Neutro' },
            { hex: '#4682B4', name: 'Azul Acero', category: 'Complementario' },
            { hex: '#DA70D6', name: 'Orquídea', category: 'Complementario' }
        ],
        avoidColors: ['Naranja fuerte', 'Amarillo dorado', 'Marrón cálido', 'Negro intenso'],
        bestCombinations: [
            ['#E6E6FA', '#87CEEB', '#C0C0C0'],
            ['#FFB6C1', '#B0C4DE', '#F5F5F5'],
            ['#D8BFD8', '#98FB98', '#DCDCDC']
        ],
        gradientStart: '#87CEEB',
        gradientEnd: '#E6E6FA'
    },

    OTOÑO: {
        colors: [
            { hex: '#D2691E', name: 'Terracota', category: 'Principal' },
            { hex: '#DAA520', name: 'Mostaza', category: 'Principal' },
            { hex: '#8B4513', name: 'Marrón Chocolate', category: 'Principal' },
            { hex: '#556B2F', name: 'Verde Oliva', category: 'Acento' },
            { hex: '#CD853F', name: 'Camel', category: 'Acento' },
            { hex: '#B8860B', name: 'Oro Viejo', category: 'Acento' },
            { hex: '#F4A460', name: 'Arena', category: 'Neutro' },
            { hex: '#DEB887', name: 'Beige Tostado', category: 'Neutro' },
            { hex: '#8B7355', name: 'Marrón Nuez', category: 'Neutro' },
            { hex: '#2F4F4F', name: 'Verde Pizarra', category: 'Neutro' },
            { hex: '#FF6347', name: 'Tomate', category: 'Complementario' },
            { hex: '#CD5C5C', name: 'Rojo Ladrillo', category: 'Complementario' }
        ],
        avoidColors: ['Rosa chicle', 'Azul eléctrico', 'Colores neón', 'Negro puro'],
        bestCombinations: [
            ['#D2691E', '#DAA520', '#8B4513'],
            ['#556B2F', '#CD853F', '#F4A460'],
            ['#B8860B', '#DEB887', '#2F4F4F']
        ],
        gradientStart: '#D2691E',
        gradientEnd: '#DAA520'
    },

    INVIERNO: {
        colors: [
            { hex: '#000000', name: 'Negro', category: 'Principal' },
            { hex: '#FFFFFF', name: 'Blanco Puro', category: 'Principal' },
            { hex: '#DC143C', name: 'Rojo Intenso', category: 'Principal' },
            { hex: '#4169E1', name: 'Azul Royal', category: 'Acento' },
            { hex: '#FF1493', name: 'Fucsia', category: 'Acento' },
            { hex: '#9370DB', name: 'Púrpura Medio', category: 'Acento' },
            { hex: '#708090', name: 'Gris Pizarra', category: 'Neutro' },
            { hex: '#2F4F4F', name: 'Gris Carbón', category: 'Neutro' },
            { hex: '#191970', name: 'Azul Medianoche', category: 'Neutro' },
            { hex: '#8B008B', name: 'Magenta Oscuro', category: 'Neutro' },
            { hex: '#00CED1', name: 'Turquesa Oscuro', category: 'Complementario' },
            { hex: '#FF00FF', name: 'Magenta', category: 'Complementario' }
        ],
        avoidColors: ['Beige cálido', 'Naranja', 'Amarillo dorado', 'Colores apagados'],
        bestCombinations: [
            ['#000000', '#FFFFFF', '#DC143C'],
            ['#4169E1', '#708090', '#FFFFFF'],
            ['#FF1493', '#2F4F4F', '#00CED1']
        ],
        gradientStart: '#4169E1',
        gradientEnd: '#DC143C'
    }
}

/**
 * Extended palette for Premium users (24 colors per season)
 */
export const PREMIUM_PALETTES = {
    PRIMAVERA: {
        additionalColors: [
            { hex: '#FFB347', name: 'Naranja Pastel', category: 'Premium' },
            { hex: '#77DD77', name: 'Verde Pastel', category: 'Premium' },
            { hex: '#AEC6CF', name: 'Azul Pastel', category: 'Premium' },
            { hex: '#FDFD96', name: 'Amarillo Pastel', category: 'Premium' },
            { hex: '#FF9966', name: 'Melocotón Vibrante', category: 'Premium' },
            { hex: '#BDFCC9', name: 'Verde Menta Suave', category: 'Premium' },
            { hex: '#FFDAB9', name: 'Papaya', category: 'Premium' },
            { hex: '#F0FFF0', name: 'Honeydew', category: 'Premium' },
            { hex: '#FFFACD', name: 'Limón Chiffon', category: 'Premium' },
            { hex: '#E0FFFF', name: 'Cián Claro', category: 'Premium' },
            { hex: '#FF69B4', name: 'Rosa Caliente', category: 'Premium' },
            { hex: '#00FA9A', name: 'Verde Primavera', category: 'Premium' }
        ]
    },
    VERANO: {
        additionalColors: [
            { hex: '#ADD8E6', name: 'Azul Claro', category: 'Premium' },
            { hex: '#DDA0DD', name: 'Ciruela', category: 'Premium' },
            { hex: '#FFC0CB', name: 'Rosa', category: 'Premium' },
            { hex: '#E0E0E0', name: 'Gris Platino', category: 'Premium' },
            { hex: '#B0E0E6', name: 'Azul Polvo', category: 'Premium' },
            { hex: '#D3D3D3', name: 'Gris Claro', category: 'Premium' },
            { hex: '#C8A2C8', name: 'Lila', category: 'Premium' },
            { hex: '#F0F8FF', name: 'Azul Alicia', category: 'Premium' },
            { hex: '#FFF0F5', name: 'Lavanda Blush', category: 'Premium' },
            { hex: '#E6E6FA', name: 'Lavanda Web', category: 'Premium' },
            { hex: '#B19CD9', name: 'Púrpura Pastel', category: 'Premium' },
            { hex: '#96DED1', name: 'Menta Suave', category: 'Premium' }
        ]
    },
    OTOÑO: {
        additionalColors: [
            { hex: '#D2691E', name: 'Canela', category: 'Premium' },
            { hex: '#A0522D', name: 'Sienna', category: 'Premium' },
            { hex: '#BC8F8F', name: 'Rosa Polvoriento', category: 'Premium' },
            { hex: '#6B8E23', name: 'Verde Oliva Oscuro', category: 'Premium' },
            { hex: '#BDB76B', name: 'Khaki Oscuro', category: 'Premium' },
            { hex: '#9ACD32', name: 'Verde Amarillo', category: 'Premium' },
            { hex: '#E9967A', name: 'Salmón Oscuro', category: 'Premium' },
            { hex: '#F5DEB3', name: 'Trigo', category: 'Premium' },
            { hex: '#EEE8AA', name: 'Vara de Oro Pálido', category: 'Premium' },
            { hex: '#FFEFD5', name: 'Papaya Whip', category: 'Premium' },
            { hex: '#CD5B45', name: 'Coral Oscuro', category: 'Premium' },
            { hex: '#8B7765', name: 'Marrón Rosado', category: 'Premium' }
        ]
    },
    INVIERNO: {
        additionalColors: [
            { hex: '#000080', name: 'Azul Marino', category: 'Premium' },
            { hex: '#4B0082', name: 'Índigo', category: 'Premium' },
            { hex: '#800080', name: 'Púrpura', category: 'Premium' },
            { hex: '#C71585', name: 'Violeta Medio', category: 'Premium' },
            { hex: '#1E90FF', name: 'Azul Dodger', category: 'Premium' },
            { hex: '#00BFFF', name: 'Azul Cielo Profundo', category: 'Premium' },
            { hex: '#7B68EE', name: 'Azul Pizarra Medio', category: 'Premium' },
            { hex: '#6A5ACD', name: 'Azul Pizarra', category: 'Premium' },
            { hex: '#BA55D3', name: 'Orquídea Medio', category: 'Premium' },
            { hex: '#9932CC', name: 'Orquídea Oscuro', category: 'Premium' },
            { hex: '#E0115F', name: 'Rubí', category: 'Premium' },
            { hex: '#50C878', name: 'Esmeralda', category: 'Premium' }
        ]
    }
}

/**
 * Get season description in Spanish
 */
export function getSeasonName(season) {
    const names = {
        PRIMAVERA: 'Primavera',
        VERANO: 'Verano',
        OTOÑO: 'Otoño',
        INVIERNO: 'Invierno'
    }
    return names[season] || season
}

/**
 * Get season emoji
 */
export function getSeasonEmoji(season) {
    const emojis = {
        PRIMAVERA: '🌸',
        VERANO: '☀️',
        OTOÑO: '🍂',
        INVIERNO: '❄️'
    }
    return emojis[season] || '🎨'
}
