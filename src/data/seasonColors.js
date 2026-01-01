export const SEASON_PALETTES = {
    // 12-Season System Palettes
    BRIGHT_SPRING: {
        parent: 'PRIMAVERA',
        name: 'Primavera Brillante',
        colors: [
            { hex: '#FF007F', name: 'Rosa Brillante', category: 'Principal' },
            { hex: '#FFA500', name: 'Naranja Vivo', category: 'Principal' },
            { hex: '#FFD700', name: 'Amarillo Dorado', category: 'Principal' },
            { hex: '#00FF7F', name: 'Verde Primavera', category: 'Acento' },
            { hex: '#40E0D0', name: 'Turquesa Caliente', category: 'Acento' },
            { hex: '#FF69B4', name: 'Rosa Fucsia', category: 'Acento' },
            { hex: '#FFFFFF', name: 'Blanco Stark', category: 'Neutro' },
            { hex: '#4B0082', name: 'Berenjena', category: 'Neutro' },
            { hex: '#B8860B', name: 'Oro Oscuro', category: 'Neutro' },
            { hex: '#000000', name: 'Negro Carbón', category: 'Neutro' },
            { hex: '#FF1493', name: 'Rosa Profundo', category: 'Complementario' },
            { hex: '#00FA9A', name: 'Verde Medio', category: 'Complementario' }
        ],
        avoidColors: ['Beige apagado', 'Gris suave', 'Pasteles polvorientos', 'Marrón tierra'],
        bestCombinations: [['#FF007F', '#FFD700', '#00FF7F'], ['#40E0D0', '#FFA500', '#FFFFFF']],
        gradientStart: '#FF007F',
        gradientEnd: '#FFD700'
    },
    WARM_SPRING: {
        parent: 'PRIMAVERA',
        name: 'Primavera Cálida',
        colors: [
            { hex: '#FF7F50', name: 'Coral', category: 'Principal' },
            { hex: '#FFD700', name: 'Oro Real', category: 'Principal' },
            { hex: '#9ACD32', name: 'Verde Amarillento', category: 'Principal' },
            { hex: '#FFA07A', name: 'Salmón Claro', category: 'Acento' },
            { hex: '#DA70D6', name: 'Orquídea', category: 'Acento' },
            { hex: '#20B2AA', name: 'Verde Mar', category: 'Acento' },
            { hex: '#FFE4B5', name: 'Mocasín', category: 'Neutro' },
            { hex: '#D2B48C', name: 'Tan', category: 'Neutro' },
            { hex: '#F0E68C', name: 'Caqui', category: 'Neutro' },
            { hex: '#8B4513', name: 'Marrón Silla', category: 'Neutro' },
            { hex: '#FF4500', name: 'Rojo Naranja', category: 'Complementario' },
            { hex: '#6B8E23', name: 'Oliva Suave', category: 'Complementario' }
        ],
        avoidColors: ['Negro puro', 'Blanco nieve', 'Azul eléctrico', 'Malva frío'],
        bestCombinations: [['#FF7F50', '#FFD700', '#9ACD32'], ['#FFA07A', '#F0E68C', '#8B4513']],
        gradientStart: '#FF7F50',
        gradientEnd: '#FFD700'
    },
    LIGHT_SPRING: {
        parent: 'PRIMAVERA',
        name: 'Primavera Clara',
        colors: [
            { hex: '#FFB7C5', name: 'Rosa Sakura', category: 'Principal' },
            { hex: '#FFFACD', name: 'Gualda', category: 'Principal' },
            { hex: '#E0FFFF', name: 'Cian Claro', category: 'Principal' },
            { hex: '#BDFCC9', name: 'Verde Menta', category: 'Acento' },
            { hex: '#F08080', name: 'Coral Claro', category: 'Acento' },
            { hex: '#BA55D3', name: 'Orquídea Medio', category: 'Acento' },
            { hex: '#FAF9F6', name: 'Blanco Cálido', category: 'Neutro' },
            { hex: '#F5DEB3', name: 'Trigo', category: 'Neutro' },
            { hex: '#D3D3D3', name: 'Gris Perla', category: 'Neutro' },
            { hex: '#CD853F', name: 'Perú', category: 'Neutro' },
            { hex: '#FF69B4', name: 'Rosa Intenso', category: 'Complementario' },
            { hex: '#87CEFA', name: 'Azul Cielo', category: 'Complementario' }
        ],
        avoidColors: ['Colores oscuros pesados', 'Negro', 'Burdeos', 'Verde bosque'],
        bestCombinations: [['#FFB7C5', '#FFFACD', '#BDFCC9'], ['#E0FFFF', '#F08080', '#F5DEB3']],
        gradientStart: '#FFB7C5',
        gradientEnd: '#FFFACD'
    },
    LIGHT_SUMMER: {
        parent: 'VERANO',
        name: 'Verano Claro',
        colors: [
            { hex: '#FFC0CB', name: 'Rosa Pastel', category: 'Principal' },
            { hex: '#B0E0E6', name: 'Azul Polvo', category: 'Principal' },
            { hex: '#98FB98', name: 'Verde Pálido', category: 'Principal' },
            { hex: '#DDA0DD', name: 'Ciruela', category: 'Acento' },
            { hex: '#AFEEEE', name: 'Turquesa Pálido', category: 'Acento' },
            { hex: '#F0E68C', name: 'Caqui Claro', category: 'Acento' },
            { hex: '#F5F5F5', name: 'Humo Blanco', category: 'Neutro' },
            { hex: '#DCDCDC', name: 'Gris Ganso', category: 'Neutro' },
            { hex: '#E6E6FA', name: 'Lavanda Web', category: 'Neutro' },
            { hex: '#B0C4DE', name: 'Azul Acero Claro', category: 'Neutro' },
            { hex: '#DB7093', name: 'Violeta Pálido', category: 'Complementario' },
            { hex: '#4682B4', name: 'Azul Acero', category: 'Complementario' }
        ],
        avoidColors: ['Naranjas cálidos', 'Negro intenso', 'Marrón chocolate', 'Colores tierra'],
        bestCombinations: [['#FFC0CB', '#B0E0E6', '#98FB98'], ['#DDA0DD', '#F5F5F5', '#E6E6FA']],
        gradientStart: '#B0E0E6',
        gradientEnd: '#FFC0CB'
    },
    COOL_SUMMER: {
        parent: 'VERANO',
        name: 'Verano Frío',
        colors: [
            { hex: '#6495ED', name: 'Azul Maizal', category: 'Principal' },
            { hex: '#DA70D6', name: 'Orquídea', category: 'Principal' },
            { hex: '#20B2AA', name: 'Verde Mar', category: 'Principal' },
            { hex: '#BC8F8F', name: 'Marrón Rosado', category: 'Acento' },
            { hex: '#778899', name: 'Gris Pizarra', category: 'Acento' },
            { hex: '#483D8B', name: 'Azul Pizarra Oscuro', category: 'Acento' },
            { hex: '#C0C0C0', name: 'Plata', category: 'Neutro' },
            { hex: '#F8F8FF', name: 'Blanco Fantasma', category: 'Neutro' },
            { hex: '#D3D3D3', name: 'Gris Claro', category: 'Neutro' },
            { hex: '#4169E1', name: 'Azul Real', category: 'Neutro' },
            { hex: '#C71585', name: 'Violeta Rojo Medio', category: 'Complementario' },
            { hex: '#008080', name: 'Teal', category: 'Complementario' }
        ],
        avoidColors: ['Dorado', 'Naranja quemado', 'Amarillo mostaza', 'Marrón cálido'],
        bestCombinations: [['#6495ED', '#DA70D6', '#C0C0C0'], ['#BC8F8F', '#F8F8FF', '#483D8B']],
        gradientStart: '#6495ED',
        gradientEnd: '#DA70D6'
    },
    SOFT_SUMMER: {
        parent: 'VERANO',
        name: 'Verano Suave',
        colors: [
            { hex: '#9370DB', name: 'Púrpura Medio', category: 'Principal' },
            { hex: '#778899', name: 'Gris Pizarra', category: 'Principal' },
            { hex: '#BC8F8F', name: 'Rosa Polvo', category: 'Principal' },
            { hex: '#6B8E23', name: 'Oliva Suave', category: 'Acento' },
            { hex: '#4682B4', name: 'Azul Acero', category: 'Acento' },
            { hex: '#CD5C5C', name: 'Rojo Indio', category: 'Acento' },
            { hex: '#DCDCDC', name: 'Gris Humo', category: 'Neutro' },
            { hex: '#BEBEBE', name: 'Gris Medio', category: 'Neutro' },
            { hex: '#A9A9A9', name: 'Gris Oscuro', category: 'Neutro' },
            { hex: '#E6E6FA', name: 'Lavanda', category: 'Neutro' },
            { hex: '#4169E1', name: 'Azul Denim', category: 'Complementario' },
            { hex: '#8B008B', name: 'Magenta Oscuro', category: 'Complementario' }
        ],
        avoidColors: ['Negro puro', 'Blanco puro', 'Colores neón', 'Naranja vibrante'],
        bestCombinations: [['#9370DB', '#778899', '#BC8F8F'], ['#6B8E23', '#DCDCDC', '#4682B4']],
        gradientStart: '#9370DB',
        gradientEnd: '#BC8F8F'
    },
    SOFT_AUTUMN: {
        parent: 'OTOÑO',
        name: 'Otoño Suave',
        colors: [
            { hex: '#BDB76B', name: 'Caqui Oscuro', category: 'Principal' },
            { hex: '#CD853F', name: 'Perú', category: 'Principal' },
            { hex: '#8FBC8F', name: 'Verde Mar Oscuro', category: 'Principal' },
            { hex: '#BC8F8F', name: 'Rosa Polvoriento', category: 'Acento' },
            { hex: '#F4A460', name: 'Arena', category: 'Acento' },
            { hex: '#556B2F', name: 'Oliva', category: 'Acento' },
            { hex: '#DEB887', name: 'Madera', category: 'Neutro' },
            { hex: '#D2B48C', name: 'Canela', category: 'Neutro' },
            { hex: '#8B7355', name: 'Nuez', category: 'Neutro' },
            { hex: '#EEE8AA', name: 'Amarillo Pálido', category: 'Neutro' },
            { hex: '#E9967A', name: 'Salmón Oscuro', category: 'Complementario' },
            { hex: '#2F4F4F', name: 'Verde Pizarra', category: 'Complementario' }
        ],
        avoidColors: ['Negro', 'Blanco puro', 'Colores brillantes', 'Azul eléctrico'],
        bestCombinations: [['#BDB76B', '#CD853F', '#8FBC8F'], ['#BC8F8F', '#DEB887', '#556B2F']],
        gradientStart: '#BDB76B',
        gradientEnd: '#CD853F'
    },
    WARM_AUTUMN: {
        parent: 'OTOÑO',
        name: 'Otoño Cálido',
        colors: [
            { hex: '#D2691E', name: 'Terracota', category: 'Principal' },
            { hex: '#B8860B', name: 'Oro Viejo', category: 'Principal' },
            { hex: '#556B2F', name: 'Verde Oliva', category: 'Principal' },
            { hex: '#8B4513', name: 'Marrón Silla', category: 'Acento' },
            { hex: '#FF6347', name: 'Tomate', category: 'Acento' },
            { hex: '#CD5C5C', name: 'Rojo Ladrillo', category: 'Acento' },
            { hex: '#DAA520', name: 'Vara de Oro', category: 'Neutro' },
            { hex: '#F4A460', name: 'Arena', category: 'Neutro' },
            { hex: '#808000', name: 'Oliva Profundo', category: 'Neutro' },
            { hex: '#A0522D', name: 'Sienna', category: 'Neutro' },
            { hex: '#8B0000', name: 'Rojo Oscuro', category: 'Complementario' },
            { hex: '#006400', name: 'Verde Oscuro', category: 'Complementario' }
        ],
        avoidColors: ['Fucsia', 'Azul real', 'Grises fríos', 'Rosa chicle'],
        bestCombinations: [['#D2691E', '#B8860B', '#556B2F'], ['#8B4513', '#DAA520', '#808000']],
        gradientStart: '#D2691E',
        gradientEnd: '#B8860B'
    },
    DEEP_AUTUMN: {
        parent: 'OTOÑO',
        name: 'Otoño Profundo',
        colors: [
            { hex: '#8B0000', name: 'Granate', category: 'Principal' },
            { hex: '#006400', name: 'Verde Pino', category: 'Principal' },
            { hex: '#4B0082', name: 'Índigo Profundo', category: 'Principal' },
            { hex: '#8B4513', name: 'Chocolate', category: 'Acento' },
            { hex: '#DAA520', name: 'Oro', category: 'Acento' },
            { hex: '#2F4F4F', name: 'Verde Bosque', category: 'Acento' },
            { hex: '#000000', name: 'Negro Cálido', category: 'Neutro' },
            { hex: '#A52A2A', name: 'Marrón', category: 'Neutro' },
            { hex: '#556B2F', name: 'Oliva Oscuro', category: 'Neutro' },
            { hex: '#191970', name: 'Azul Noche', category: 'Neutro' },
            { hex: '#FF4500', name: 'Rojo Naranja', category: 'Complementario' },
            { hex: '#B8860B', name: 'Oro Viejo', category: 'Complementario' }
        ],
        avoidColors: ['Pasteles', 'Colores pálidos', 'Rosa neón', 'Gris suave'],
        bestCombinations: [['#8B0000', '#006400', '#DAA520'], ['#8B4513', '#000000', '#556B2F']],
        gradientStart: '#8B0000',
        gradientEnd: '#8B4513'
    },
    DEEP_WINTER: {
        parent: 'INVIERNO',
        name: 'Invierno Profundo',
        colors: [
            { hex: '#000000', name: 'Negro Puro', category: 'Principal' },
            { hex: '#FFFFFF', name: 'Blanco Stark', category: 'Principal' },
            { hex: '#800000', name: 'Maroon', category: 'Principal' },
            { hex: '#000080', name: 'Navy', category: 'Acento' },
            { hex: '#4B0082', name: 'Índigo', category: 'Acento' },
            { hex: '#2F4F4F', name: 'Gris Carbón', category: 'Acento' },
            { hex: '#DC143C', name: 'Carmesí', category: 'Neutro' },
            { hex: '#191970', name: 'Azul Medianoche', category: 'Neutro' },
            { hex: '#483D8B', name: 'Azul Pizarra', category: 'Neutro' },
            { hex: '#8B008B', name: 'Magenta Oscuro', category: 'Neutro' },
            { hex: '#FF00FF', name: 'Fucsia Profundo', category: 'Complementario' },
            { hex: '#00CED1', name: 'Turquesa Oscuro', category: 'Complementario' }
        ],
        avoidColors: ['Beige cálido', 'Naranja melocotón', 'Amarillo mostaza', 'Marrón tierra'],
        bestCombinations: [['#000000', '#FFFFFF', '#DC143C'], ['#000080', '#2F4F4F', '#8B008B']],
        gradientStart: '#000000',
        gradientEnd: '#4B0082'
    },
    COOL_WINTER: {
        parent: 'INVIERNO',
        name: 'Invierno Frío',
        colors: [
            { hex: '#0000FF', name: 'Azul Eléctrico', category: 'Principal' },
            { hex: '#FF00FF', name: 'Magenta', category: 'Principal' },
            { hex: '#DC143C', name: 'Rojo Verdadero', category: 'Principal' },
            { hex: '#4169E1', name: 'Azul Real', category: 'Acento' },
            { hex: '#00FFFF', name: 'Cian', category: 'Acento' },
            { hex: '#9370DB', name: 'Púrpura', category: 'Acento' },
            { hex: '#FFFFFF', name: 'Blanco Hielo', category: 'Neutro' },
            { hex: '#C0C0C0', name: 'Plata Brillante', category: 'Neutro' },
            { hex: '#000080', name: 'Azul Marino', category: 'Neutro' },
            { hex: '#2F4F4F', name: 'Gris Humo', category: 'Neutro' },
            { hex: '#FF1493', name: 'Rosa Fuerte', category: 'Complementario' },
            { hex: '#008B8B', name: 'Cian Oscuro', category: 'Complementario' }
        ],
        avoidColors: ['Naranja', 'Amarillo dorado', 'Marrón cálido', 'Verde oliva'],
        bestCombinations: [['#0000FF', '#FFFFFF', '#DC143C'], ['#FF00FF', '#C0C0C0', '#4169E1']],
        gradientStart: '#0000FF',
        gradientEnd: '#FF00FF'
    },
    BRIGHT_WINTER: {
        parent: 'INVIERNO',
        name: 'Invierno Brillante',
        colors: [
            { hex: '#FF007F', name: 'Rosa Neón', category: 'Principal' },
            { hex: '#00BFFF', name: 'Azul Cielo Profundo', category: 'Principal' },
            { hex: '#32CD32', name: 'Verde Lima', category: 'Principal' },
            { hex: '#00FFFF', name: 'Cian', category: 'Acento' },
            { hex: '#FFD700', name: 'Oro Brillante', category: 'Acento' },
            { hex: '#4B0082', name: 'Índigo', category: 'Acento' },
            { hex: '#FFFFFF', name: 'Blanco Puro', category: 'Neutro' },
            { hex: '#000000', name: 'Negro Ónix', category: 'Neutro' },
            { hex: '#DCDCDC', name: 'Plata', category: 'Neutro' },
            { hex: '#191970', name: 'Azul Noche', category: 'Neutro' },
            { hex: '#FF1493', name: 'Fucsia', category: 'Complementario' },
            { hex: '#00FA9A', name: 'Verde Primavera', category: 'Complementario' }
        ],
        avoidColors: ['Colores apagados', 'Colores tierra', 'Beige', 'Gris suave polvoriento'],
        bestCombinations: [['#FF007F', '#FFFFFF', '#00BFFF'], ['#32CD32', '#000000', '#FFD700']],
        gradientStart: '#FF007F',
        gradientEnd: '#00BFFF'
    },

    // Legacy Support (4 Seasons)
    PRIMAVERA: { alias: 'WARM_SPRING' },
    VERANO: { alias: 'COOL_SUMMER' },
    OTOÑO: { alias: 'WARM_AUTUMN' },
    INVIERNO: { alias: 'COOL_WINTER' }
}

/**
 * Extended palette for Premium users (24 colors per season)
 */
export const PREMIUM_PALETTES = {
    BRIGHT_SPRING: { additionalColors: [{ hex: '#FFB347', name: 'Naranja Pastel', category: 'Premium' }, { hex: '#77DD77', name: 'Verde Pastel', category: 'Premium' }] },
    WARM_SPRING: { additionalColors: [{ hex: '#FF9966', name: 'Melocotón Vibrante', category: 'Premium' }, { hex: '#BDFCC9', name: 'Verde Menta Suave', category: 'Premium' }] },
    LIGHT_SPRING: { additionalColors: [{ hex: '#AEC6CF', name: 'Azul Pastel', category: 'Premium' }, { hex: '#FDFD96', name: 'Amarillo Pastel', category: 'Premium' }] },
    LIGHT_SUMMER: { additionalColors: [{ hex: '#ADD8E6', name: 'Azul Claro', category: 'Premium' }, { hex: '#DDA0DD', name: 'Ciruela', category: 'Premium' }] },
    COOL_SUMMER: { additionalColors: [{ hex: '#FFC0CB', name: 'Rosa', category: 'Premium' }, { hex: '#E0E0E0', name: 'Gris Platino', category: 'Premium' }] },
    SOFT_SUMMER: { additionalColors: [{ hex: '#B0E0E6', name: 'Azul Polvo', category: 'Premium' }, { hex: '#D3D3D3', name: 'Gris Claro', category: 'Premium' }] },
    SOFT_AUTUMN: { additionalColors: [{ hex: '#C8A2C8', name: 'Lila', category: 'Premium' }, { hex: '#F0F8FF', name: 'Azul Alicia', category: 'Premium' }] },
    WARM_AUTUMN: { additionalColors: [{ hex: '#D2691E', name: 'Canela', category: 'Premium' }, { hex: '#A0522D', name: 'Sienna', category: 'Premium' }] },
    DEEP_AUTUMN: { additionalColors: [{ hex: '#BC8F8F', name: 'Rosa Polvoriento', category: 'Premium' }, { hex: '#6B8E23', name: 'Verde Oliva Oscuro', category: 'Premium' }] },
    DEEP_WINTER: { additionalColors: [{ hex: '#000080', name: 'Azul Marino', category: 'Premium' }, { hex: '#4B0082', name: 'Índigo', category: 'Premium' }] },
    COOL_WINTER: { additionalColors: [{ hex: '#800080', name: 'Púrpura', category: 'Premium' }, { hex: '#C71585', name: 'Violeta Medio', category: 'Premium' }] },
    BRIGHT_WINTER: { additionalColors: [{ hex: '#1E90FF', name: 'Azul Dodger', category: 'Premium' }, { hex: '#00BFFF', name: 'Azul Cielo Profundo', category: 'Premium' }] }
}

/**
 * Get season description in Spanish
 */
export function getSeasonName(season) {
    if (SEASON_PALETTES[season]?.name) return SEASON_PALETTES[season].name
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
    const parent = SEASON_PALETTES[season]?.parent || season
    const emojis = {
        PRIMAVERA: '🌸',
        VERANO: '☀️',
        OTOÑO: '🍂',
        INVIERNO: '❄️'
    }
    return emojis[parent] || '🎨'
}
