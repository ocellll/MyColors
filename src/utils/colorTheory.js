/**
 * Color Theory Utilities
 * Helper functions for color calculations and transformations
 */

/**
 * Calculate color contrast ratio (WCAG)
 */
export function getContrastRatio(color1, color2) {
    const lum1 = getLuminance(color1)
    const lum2 = getLuminance(color2)
    const lighter = Math.max(lum1, lum2)
    const darker = Math.min(lum1, lum2)
    return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Get relative luminance of a color
 */
export function getLuminance([r, g, b]) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Check if a color is light or dark
 */
export function isLightColor([r, g, b]) {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 128
}

/**
 * Get best text color for a background
 */
export function getTextColorForBackground(bgColor) {
    return isLightColor(bgColor) ? [0, 0, 0] : [255, 255, 255]
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null
}

/**
 * Convert RGB to hex
 */
export function rgbToHex([r, g, b]) {
    return '#' + [r, g, b].map(x => {
        const hex = Math.round(x).toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('').toUpperCase()
}

/**
 * Generate color variations (lighter and darker)
 */
export function generateColorVariations(hex, steps = 3) {
    const rgb = hexToRgb(hex)
    if (!rgb) return []

    const variations = []

    // Lighter variations
    for (let i = 1; i <= steps; i++) {
        const factor = 1 + (i * 0.2)
        variations.push({
            hex: rgbToHex([
                Math.min(255, Math.round(rgb[0] * factor)),
                Math.min(255, Math.round(rgb[1] * factor)),
                Math.min(255, Math.round(rgb[2] * factor))
            ]),
            type: 'lighter',
            step: i
        })
    }

    // Darker variations
    for (let i = 1; i <= steps; i++) {
        const factor = 1 - (i * 0.2)
        variations.push({
            hex: rgbToHex([
                Math.max(0, Math.round(rgb[0] * factor)),
                Math.max(0, Math.round(rgb[1] * factor)),
                Math.max(0, Math.round(rgb[2] * factor))
            ]),
            type: 'darker',
            step: i
        })
    }

    return variations
}

/**
 * Check if two colors are harmonious
 */
export function areColorsHarmonious(hex1, hex2) {
    const rgb1 = hexToRgb(hex1)
    const rgb2 = hexToRgb(hex2)
    if (!rgb1 || !rgb2) return false

    // Calculate color difference
    const diff = Math.sqrt(
        Math.pow(rgb1[0] - rgb2[0], 2) +
        Math.pow(rgb1[1] - rgb2[1], 2) +
        Math.pow(rgb1[2] - rgb2[2], 2)
    )

    // Colors are harmonious if they have some difference but not too much
    return diff > 50 && diff < 300
}

/**
 * Get color temperature (warm/cool)
 */
export function getColorTemperature(hex) {
    const rgb = hexToRgb(hex)
    if (!rgb) return 'neutral'

    const [r, g, b] = rgb
    const warmth = r - b

    if (warmth > 30) return 'warm'
    if (warmth < -30) return 'cool'
    return 'neutral'
}

/**
 * Blend two colors
 */
export function blendColors(hex1, hex2, ratio = 0.5) {
    const rgb1 = hexToRgb(hex1)
    const rgb2 = hexToRgb(hex2)
    if (!rgb1 || !rgb2) return hex1

    return rgbToHex([
        Math.round(rgb1[0] * (1 - ratio) + rgb2[0] * ratio),
        Math.round(rgb1[1] * (1 - ratio) + rgb2[1] * ratio),
        Math.round(rgb1[2] * (1 - ratio) + rgb2[2] * ratio)
    ])
}

/**
 * Generate a color scheme from a base color
 */
export function generateColorScheme(baseHex, type = 'complementary') {
    const rgb = hexToRgb(baseHex)
    if (!rgb) return [baseHex]

    const hsl = rgbToHsl(rgb)

    switch (type) {
        case 'complementary':
            return [
                baseHex,
                hslToHex([(hsl[0] + 180) % 360, hsl[1], hsl[2]])
            ]

        case 'analogous':
            return [
                hslToHex([(hsl[0] - 30 + 360) % 360, hsl[1], hsl[2]]),
                baseHex,
                hslToHex([(hsl[0] + 30) % 360, hsl[1], hsl[2]])
            ]

        case 'triadic':
            return [
                baseHex,
                hslToHex([(hsl[0] + 120) % 360, hsl[1], hsl[2]]),
                hslToHex([(hsl[0] + 240) % 360, hsl[1], hsl[2]])
            ]

        case 'split-complementary':
            return [
                baseHex,
                hslToHex([(hsl[0] + 150) % 360, hsl[1], hsl[2]]),
                hslToHex([(hsl[0] + 210) % 360, hsl[1], hsl[2]])
            ]

        default:
            return [baseHex]
    }
}

/**
 * RGB to HSL conversion
 */
function rgbToHsl([r, g, b]) {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) * 60; break
            case g: h = ((b - r) / d + 2) * 60; break
            case b: h = ((r - g) / d + 4) * 60; break
        }
    }

    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)]
}

/**
 * HSL to Hex conversion
 */
function hslToHex([h, s, l]) {
    s /= 100
    l /= 100

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs((h / 60) % 2 - 1))
    const m = l - c / 2
    let r = 0, g = 0, b = 0

    if (0 <= h && h < 60) { r = c; g = x; b = 0 }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0 }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x }

    return rgbToHex([
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
    ])
}
