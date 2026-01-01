export function determineSeason(skinTone) {
    const { warmth, lightness, undertone, saturation } = skinTone
    const contrastScore = saturation > 30 ? 'high' : saturation > 15 ? 'medium' : 'low'

    // PRIMAVERA (Spring)
    if (undertone === 'warm' || (undertone === 'neutral' && warmth >= 52)) {
        if (saturation >= 25 && (contrastScore === 'high' || warmth < 55)) {
            return {
                season: 'BRIGHT_SPRING',
                type: 'Primavera Brillante',
                description: 'Tienes un brillo natural y un contraste alto. Los colores vibrantes y saturados son los que mejor te hacen lucir.',
                characteristics: ['Contraste alto', 'Brillo intenso', 'Subtono cálido'],
                bestFor: 'Colores neón, corales vibrantes y turquesas',
                avoid: 'Colores apagados y grises'
            }
        }
        if (warmth >= 58) {
            return {
                season: 'WARM_SPRING',
                type: 'Primavera Cálida',
                description: 'Tu característica principal es la calidez. Los tonos dorados y melocotón son tus mejores aliados.',
                characteristics: ['Muy cálida', 'Dorado', 'Luminosa'],
                bestFor: 'Dorado, naranja melocotón, verde amarillento',
                avoid: 'Colores fríos y azules eléctricos'
            }
        }
        return {
            season: 'LIGHT_SPRING',
            type: 'Primavera Clara',
            description: 'Tu piel es delicada y luminosa. Los colores claros y cálidos te dan un aspecto fresco y radiante.',
            characteristics: ['Luminosidad alta', 'Suavidad', 'Cálida'],
            bestFor: 'Rosa pastel, amarillo pálido, crema',
            avoid: 'Colores oscuros y pesados'
        }
    }

    // VERANO (Summer)
    if (undertone === 'cool' || (undertone === 'neutral' && warmth <= 48)) {
        if (lightness >= 65) {
            return {
                season: 'LIGHT_SUMMER',
                type: 'Verano Claro',
                description: 'Tu piel es muy clara con subtonos fríos. Los colores pasteles fríos te hacen brillar con elegancia.',
                characteristics: ['Luminosidad alta', 'Muy fría', 'Suave'],
                bestFor: 'Lavanda, azul bebé, rosa pálido',
                avoid: 'Contrastes fuertes y colores negros'
            }
        }
        if (warmth <= 42) {
            return {
                season: 'COOL_SUMMER',
                type: 'Verano Frío',
                description: 'La frialdad es tu rasgo principal. Los azules y rosas fríos resaltan tu belleza natural.',
                characteristics: ['Frialdad extrema', 'Subtono azulado', 'Elegante'],
                bestFor: 'Azul real, orquídea, verde mar',
                avoid: 'Dorado, naranja y amarillos cálidos'
            }
        }
        return {
            season: 'SOFT_SUMMER',
            type: 'Verano Suave',
            description: 'Tienes una belleza etérea y matizada. Los colores polvorientos y apagados son ideales para ti.',
            characteristics: ['Suavidad polvorienta', 'Muted', 'Neutral-fría'],
            bestFor: 'Gris azulado, malva, rosa polvoriento',
            avoid: 'Colores brillantes y saturados'
        }
    }

    // OTOÑO (Autumn)
    if (undertone === 'warm' || (undertone === 'neutral' && warmth >= 50)) {
        if (saturation <= 20) {
            return {
                season: 'SOFT_AUTUMN',
                type: 'Otoño Suave',
                description: 'Tu calidez es sutil y matizada. Los colores tierra suaves y neutros te favorecen enormemente.',
                characteristics: ['Suavidad', 'Tierra suave', 'Neutral-cálida'],
                bestFor: 'Oliva suave, arena, rosa viejo',
                avoid: 'Colores chillones y vibrantes'
            }
        }
        if (warmth >= 55 && lightness > 45) {
            return {
                season: 'WARM_AUTUMN',
                type: 'Otoño Cálido',
                description: 'Eres la esencia del otoño. Los colores ricos y dorados de la naturaleza son perfectos para ti.',
                characteristics: ['Calidez rica', 'Especia', 'Vibrante'],
                bestFor: 'Terracota, mostaza, verde oliva',
                avoid: 'Grises fríos y colores neón'
            }
        }
        return {
            season: 'DEEP_AUTUMN',
            type: 'Otoño Profundo',
            description: 'Tu piel tiene profundidad y fuerza. Los colores oscuros y cálidos te dan un aspecto sofisticado.',
            characteristics: ['Profundidad', 'Contraste alto', 'Cálida'],
            bestFor: 'Berenjena, verde bosque, café',
            avoid: 'Colores pálidos y pasteles'
        }
    }

    // INVIERNO (Winter)
    if (undertone === 'cool' || (undertone === 'neutral' && warmth < 50)) {
        if (lightness <= 35) {
            return {
                season: 'DEEP_WINTER',
                type: 'Invierno Profundo',
                description: 'Tu rasgo principal es la profundidad. Los colores más oscuros y fríos te hacen lucir espectacular.',
                characteristics: ['Muy profunda', 'Contraste alto', 'Fria'],
                bestFor: 'Negro, azul medianoche, granate',
                avoid: 'Colores tierra y melocotón'
            }
        }
        if (warmth <= 40) {
            return {
                season: 'COOL_WINTER',
                type: 'Invierno Frío',
                description: 'Eres puramente fría. Los colores de hielo y joyas son tus mejores aliados.',
                characteristics: ['Frialdad glaciar', 'Contraste', 'Icy'],
                bestFor: 'Azul eléctrico, plata, fucsia',
                avoid: 'Naranja, dorado y amarillo huevo'
            }
        }
        return {
            season: 'BRIGHT_WINTER',
            type: 'Invierno Brillante',
            description: 'Tienes un contraste extremo y una claridad cristalina. Los colores más vivos y puros son para ti.',
            characteristics: ['Brillo máximo', 'Cristalina', 'Vibrante'],
            bestFor: 'Rojo puro, cian, verde lima',
            avoid: 'Colores apagados y pasteles polvorientos'
        }
    }

    // Default fallback to one of the 12
    return {
        season: 'WARM_AUTUMN',
        type: 'Otoño Cálido',
        description: 'Según el análisis, este es tu perfil más probable. Colores ricos y cálidos resaltan tu belleza.',
        characteristics: ['Cálida', 'Equilibrada'],
        bestFor: 'Terracota, Mostaza',
        avoid: 'Fríos intensos'
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
