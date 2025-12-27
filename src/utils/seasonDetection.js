/**
 * Determine the user's color season based on skin tone analysis
 * @param {Object} skinTone - Analyzed skin tone data
 * @returns {Object} - Season determination with details
 */
export function determineSeason(skinTone) {
    const { warmth, lightness, undertone, saturation } = skinTone

    // Calculate contrast score (useful for Winter detection)
    const contrastScore = saturation > 30 ? 'high' : saturation > 15 ? 'medium' : 'low'

    // PRIMAVERA (Warm Spring)
    // Characteristics: Warm undertone, light to medium skin, high luminosity
    // Think: Golden, peach, coral tones
    if (
        undertone === 'warm' &&
        lightness >= 55 &&
        warmth >= 52
    ) {
        return {
            season: 'PRIMAVERA',
            type: 'Cálida y Luminosa',
            description: 'Tu piel tiene un brillo dorado natural que resplandece con luz. Los colores cálidos y vivos como coral, durazno y turquesa te hacen brillar con energía y frescura.',
            characteristics: ['Tono cálido', 'Luminosidad alta', 'Undertone dorado'],
            bestFor: 'Colores vibrantes y claros con base amarilla',
            avoid: 'Colores apagados, negros puros, grises fríos'
        }
    }

    // VERANO (Cool Summer)
    // Characteristics: Cool undertone, light to medium skin, soft/muted colors
    // Think: Rose, lavender, soft blue tones
    if (
        undertone === 'cool' &&
        lightness >= 45 &&
        warmth <= 48
    ) {
        return {
            season: 'VERANO',
            type: 'Fresca y Suave',
            description: 'Tu piel tiene undertones rosados o azulados que le dan un aspecto delicado. Los colores fríos y suaves como lavanda, rosa polvo y azul cielo te favorecen especialmente.',
            characteristics: ['Tono frío', 'Suavidad', 'Undertone rosado'],
            bestFor: 'Colores suaves y fríos con tonos apagados',
            avoid: 'Naranjas intensos, amarillos cálidos, colores muy saturados'
        }
    }

    // OTOÑO (Warm Autumn)
    // Characteristics: Warm undertone, medium to deep skin, rich/earthy colors
    // Think: Terracotta, mustard, olive, rust tones
    if (
        undertone === 'warm' &&
        lightness < 60 &&
        warmth >= 48
    ) {
        return {
            season: 'OTOÑO',
            type: 'Cálida y Profunda',
            description: 'Tu piel tiene una riqueza y profundidad únicas con tonos dorados u oliva. Los colores tierra como terracota, mostaza y verde oliva resaltan tu calidez natural.',
            characteristics: ['Tono cálido', 'Profundidad', 'Undertone dorado/oliva'],
            bestFor: 'Colores tierra ricos y profundos',
            avoid: 'Rosas chicle, azules eléctricos, colores neón'
        }
    }

    // INVIERNO (Cool Winter)
    // Characteristics: Cool undertone, high contrast, deep or very fair skin
    // Think: Pure white, black, jewel tones, high contrast
    if (
        undertone === 'cool' &&
        (lightness <= 40 || lightness >= 65) &&
        warmth <= 50
    ) {
        return {
            season: 'INVIERNO',
            type: 'Fría y Contrastante',
            description: 'Tu piel tiene un alto contraste natural que destaca con colores intensos. Los colores vibrantes y fríos como negro, blanco puro, rojo intenso y azul royal te potencian.',
            characteristics: ['Alto contraste', 'Tono frío', 'Undertone azulado'],
            bestFor: 'Colores intensos y contrastantes',
            avoid: 'Beige, naranja, colores apagados o terrosos'
        }
    }

    // NEUTRAL CASES - Classify based on strongest characteristics

    // Neutral-Warm (leans Spring or Autumn)
    if (undertone === 'neutral' && warmth >= 50) {
        if (lightness >= 55) {
            // Light neutral-warm → Spring
            return {
                season: 'PRIMAVERA',
                type: 'Cálida y Luminosa',
                description: 'Tu piel tiene un equilibrio entre tonos cálidos y neutros con buena luminosidad. Puedes usar tanto colores cálidos vibrantes como algunos neutros claros.',
                characteristics: ['Tono cálido', 'Luminosidad alta', 'Undertone dorado'],
                bestFor: 'Colores vibrantes y claros con base amarilla',
                avoid: 'Colores apagados, negros puros, grises fríos'
            }
        } else {
            // Deep neutral-warm → Autumn
            return {
                season: 'OTOÑO',
                type: 'Cálida y Profunda',
                description: 'Tu piel combina undertones neutros con calidez y profundidad. Los colores tierra y los tonos ricos te favorecen especialmente.',
                characteristics: ['Tono cálido', 'Profundidad', 'Undertone dorado/oliva'],
                bestFor: 'Colores tierra ricos y profundos',
                avoid: 'Rosas chicle, azules eléctricos, colores neón'
            }
        }
    }

    // Neutral-Cool (leans Summer or Winter)
    if (undertone === 'neutral' && warmth < 50) {
        if (lightness >= 50 && contrastScore !== 'high') {
            // Light neutral-cool, low contrast → Summer
            return {
                season: 'VERANO',
                type: 'Fresca y Suave',
                description: 'Tu piel tiene undertones neutro-fríos con un aspecto suave. Los colores delicados y fríos te dan un look elegante y sofisticado.',
                characteristics: ['Tono frío', 'Suavidad', 'Undertone rosado'],
                bestFor: 'Colores suaves y fríos con tonos apagados',
                avoid: 'Naranjas intensos, amarillos cálidos, colores muy saturados'
            }
        } else {
            // High contrast or deep → Winter
            return {
                season: 'INVIERNO',
                type: 'Fría y Contrastante',
                description: 'Tu piel destaca con alto contraste y colores dramáticos. Los tonos intensos y puros te hacen ver espectacular.',
                characteristics: ['Alto contraste', 'Tono frío', 'Undertone azulado'],
                bestFor: 'Colores intensos y contrastantes',
                avoid: 'Beige, naranja, colores apagados o terrosos'
            }
        }
    }

    // Ultimate fallback - use lightness as primary indicator
    if (lightness >= 55) {
        return warmth >= 50 ? determineSeason({ ...skinTone, undertone: 'warm' })
            : determineSeason({ ...skinTone, undertone: 'cool' })
    } else {
        return warmth >= 50 ? {
            season: 'OTOÑO',
            type: 'Cálida y Profunda',
            description: 'Tu piel tiene una riqueza natural que combina bien con colores tierra y tonos cálidos profundos.',
            characteristics: ['Tono cálido', 'Profundidad', 'Undertone dorado/oliva'],
            bestFor: 'Colores tierra ricos y profundos',
            avoid: 'Rosas chicle, azules eléctricos, colores neón'
        } : {
            season: 'INVIERNO',
            type: 'Fría y Contrastante',
            description: 'Tu piel destaca naturalmente con colores dramáticos e intensos que crean impacto visual.',
            characteristics: ['Alto contraste', 'Tono frío', 'Undertone azulado'],
            bestFor: 'Colores intensos y contrastantes',
            avoid: 'Beige, naranja, colores apagados o terrosos'
        }
    }
}

/**
 * Get season-specific styling tips
 */
export function getSeasonTips(season) {
    const tips = {
        PRIMAVERA: [
            'Usa joyas doradas para complementar tu tono cálido',
            'El maquillaje en tonos melocotón y coral te favorece',
            'Evita el negro cerca de tu rostro, opta por marfil o café',
            'Los estampados florales y vibrantes son perfectos para ti'
        ],
        VERANO: [
            'La plata y el oro rosa complementan tu tono frío',
            'El rubor rosado y labiales berry te favorecen',
            'Usa gris o azul marino en lugar de negro',
            'Los tonos pastel te dan un look sofisticado'
        ],
        OTOÑO: [
            'El oro y el bronce son tus mejores amigos en joyería',
            'Labiales en tonos nude cálidos y terracota',
            'El marrón chocolate y camel son básicos perfectos',
            'Los estampados con tonos tierra te hacen brillar'
        ],
        INVIERNO: [
            'Tanto plata como platino complementan tu look',
            'Labiales rojos intensos y berry oscuros te potencian',
            'El negro es tu color neutro ideal',
            'Los contrastes dramáticos son tu superpoder'
        ]
    }

    return tips[season] || []
}

/**
 * Get makeup recommendations by season
 */
export function getMakeupRecommendations(season) {
    const recommendations = {
        PRIMAVERA: {
            lips: ['Coral', 'Melocotón', 'Nude cálido', 'Rosa salmón'],
            cheeks: ['Durazno', 'Coral suave', 'Rosa cálido'],
            eyes: ['Dorado', 'Bronce claro', 'Verde menta', 'Turquesa']
        },
        VERANO: {
            lips: ['Rosa polvo', 'Malva', 'Berry suave', 'Nude rosado'],
            cheeks: ['Rosa frío', 'Malva', 'Melocotón rosado'],
            eyes: ['Lavanda', 'Gris topo', 'Rosa', 'Azul suave']
        },
        OTOÑO: {
            lips: ['Terracota', 'Marrón nude', 'Rojo ladrillo', 'Caramelo'],
            cheeks: ['Bronce', 'Terracota suave', 'Melocotón profundo'],
            eyes: ['Bronce', 'Cobre', 'Verde oliva', 'Marrón cálido']
        },
        INVIERNO: {
            lips: ['Rojo intenso', 'Fucsia', 'Ciruela', 'Burdeos'],
            cheeks: ['Rosa frío', 'Berry', 'Ciruela suave'],
            eyes: ['Gris carbón', 'Plata', 'Azul marino', 'Púrpura']
        }
    }

    return recommendations[season] || {}
}
