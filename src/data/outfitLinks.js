/**
 * Outfit Links and Affiliate Store Configuration
 * 
 * IMPORTANTE SOBRE AFFILIATE LINKS:
 * 
 * 1. AMAZON ASSOCIATES - El más fácil de configurar
 *    - Puedes usar links de búsqueda con tu tag: amazon.es/s?k=blusa+coral&tag=TU_TAG
 *    - También puedes linkear productos específicos con tu tag al final
 *    - Registro: https://affiliate-program.amazon.es
 * 
 * 2. AWIN (ASOS, Zara en algunos países)
 *    - Red de afiliados grande en Europa
 *    - Necesitas productos específicos o usar su API
 *    - Registro: https://www.awin.com
 * 
 * 3. SHOPSTYLE COLLECTIVE  
 *    - Perfecto para moda, no necesitas productos exactos
 *    - Puedes usar links de colección/búsqueda
 *    - Registro: https://www.shopstylecollective.com
 * 
 * 4. RAKUTEN (antes LinkShare)
 *    - Tiene H&M, Mango y otras marcas
 *    - Registro: https://rakutenadvertising.com
 */

/**
 * Store configurations - ACTUALIZA CON TUS IDs REALES
 */
export const AFFILIATE_CONFIG = {
    // Amazon es el más fácil - solo añade ?tag=TU_TAG a cualquier link
    AMAZON_TAG: 'mycolors-21', // ← CAMBIA ESTO por tu Amazon Associates tag

    // Para otras tiendas, necesitarás unirte a sus programas de afiliados
    AWIN_PUBLISHER_ID: '', // Si usas AWIN
    SHOPSTYLE_ID: '', // Si usas ShopStyle
}

/**
 * Generate Amazon affiliate link (detects country based on browser language)
 */
export function generateAmazonLink(searchQuery, tag = AFFILIATE_CONFIG.AMAZON_TAG) {
    const encodedQuery = encodeURIComponent(searchQuery)

    // Basic country detection by browser language
    const lang = (navigator.language || 'en-US').toLowerCase()
    let tld = 'com' // Default to Global (.com)

    if (lang.includes('es-es') || lang === 'es') tld = 'es'
    else if (lang.includes('es-mx') || lang.includes('es-419')) tld = 'com.mx'
    else if (lang.startsWith('es')) tld = 'com' // Other Spanish speakers often use Global .com 

    return `https://www.amazon.${tld}/s?k=${encodedQuery}&tag=${tag}`
}

/**
 * Outfit items by season - Con links de Amazon que SÍ funcionan
 * Amazon permite links de búsqueda con affiliate tag
 */
export const OUTFIT_ITEMS = {
    PRIMAVERA: [
        {
            item: 'Blusa Coral',
            color: '#FF6B9D',
            colorName: 'Rosa Coral',
            icon: '👚',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('blusa coral mujer')
                },
                {
                    name: 'Ver más opciones',
                    url: generateAmazonLink('top rosa salmón mujer')
                }
            ]
        },
        {
            item: 'Vestido Turquesa',
            color: '#40E0D0',
            colorName: 'Turquesa',
            icon: '👗',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('vestido turquesa mujer')
                },
                {
                    name: 'Ver más opciones',
                    url: generateAmazonLink('vestido verde agua mujer')
                }
            ]
        },
        {
            item: 'Cárdigan Melocotón',
            color: '#FFCBA4',
            colorName: 'Melocotón',
            icon: '🧥',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('cardigan naranja claro mujer')
                }
            ]
        },
        {
            item: 'Pantalón Amarillo',
            color: '#FFD700',
            colorName: 'Amarillo Dorado',
            icon: '👖',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('pantalon amarillo mujer')
                }
            ]
        }
    ],

    VERANO: [
        {
            item: 'Blusa Lavanda',
            color: '#E6E6FA',
            colorName: 'Lavanda',
            icon: '👚',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('blusa lavanda mujer')
                },
                {
                    name: 'Ver más opciones',
                    url: generateAmazonLink('blusa lila pastel mujer')
                }
            ]
        },
        {
            item: 'Vestido Rosa Polvo',
            color: '#FFB6C1',
            colorName: 'Rosa Polvo',
            icon: '👗',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('vestido rosa pastel mujer')
                }
            ]
        },
        {
            item: 'Cárdigan Azul Cielo',
            color: '#87CEEB',
            colorName: 'Azul Cielo',
            icon: '🧥',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('cardigan azul claro mujer')
                }
            ]
        },
        {
            item: 'Pantalón Gris Perla',
            color: '#C0C0C0',
            colorName: 'Gris Perla',
            icon: '👖',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('pantalon gris claro mujer')
                }
            ]
        }
    ],

    OTOÑO: [
        {
            item: 'Blusa Terracota',
            color: '#D2691E',
            colorName: 'Terracota',
            icon: '👚',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('blusa terracota mujer')
                },
                {
                    name: 'Ver más opciones',
                    url: generateAmazonLink('blusa naranja teja mujer')
                }
            ]
        },
        {
            item: 'Vestido Mostaza',
            color: '#DAA520',
            colorName: 'Mostaza',
            icon: '👗',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('vestido mostaza mujer')
                }
            ]
        },
        {
            item: 'Chaqueta Camel',
            color: '#CD853F',
            colorName: 'Camel',
            icon: '🧥',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('chaqueta camel mujer')
                },
                {
                    name: 'Ver más opciones',
                    url: generateAmazonLink('abrigo beige mujer')
                }
            ]
        },
        {
            item: 'Pantalón Verde Oliva',
            color: '#556B2F',
            colorName: 'Verde Oliva',
            icon: '👖',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('pantalon verde oliva mujer')
                }
            ]
        }
    ],

    INVIERNO: [
        {
            item: 'Blusa Rojo Intenso',
            color: '#DC143C',
            colorName: 'Rojo Intenso',
            icon: '👚',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('blusa roja mujer')
                },
                {
                    name: 'Ver más opciones',
                    url: generateAmazonLink('top rojo intenso mujer')
                }
            ]
        },
        {
            item: 'Vestido Negro',
            color: '#000000',
            colorName: 'Negro',
            icon: '👗',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('vestido negro elegante mujer')
                }
            ]
        },
        {
            item: 'Abrigo Blanco',
            color: '#FFFFFF',
            colorName: 'Blanco Puro',
            icon: '🧥',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('abrigo blanco mujer')
                }
            ]
        },
        {
            item: 'Pantalón Azul Royal',
            color: '#4169E1',
            colorName: 'Azul Royal',
            icon: '👖',
            stores: [
                {
                    name: 'Amazon',
                    url: generateAmazonLink('pantalon azul electrico mujer')
                }
            ]
        }
    ]
}

/**
 * ALTERNATIVA: Si quieres añadir productos específicos de Amazon
 * Simplemente copia el link del producto y añade ?tag=TU_TAG al final
 * 
 * Ejemplo:
 * https://www.amazon.es/dp/B0XXXXXXX?tag=mycolors-21
 */
