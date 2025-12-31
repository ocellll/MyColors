import ColorThief from 'colorthief'

/**
 * Analyze an uploaded image to extract skin tone information
 * @param {File} imageFile - The uploaded image file
 * @returns {Promise<Object>} - Skin tone analysis results
 */
export async function analyzeImage(imageFile) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'

        img.onload = () => {
            try {
                // Create canvas to analyze specific region
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0)

                // Define multiple potential skin sampling regions
                const regions = [
                    { x: 0.45, y: 0.20, w: 0.10, h: 0.10 }, // Forehead
                    { x: 0.35, y: 0.45, w: 0.10, h: 0.10 }, // Left cheek
                    { x: 0.55, y: 0.45, w: 0.10, h: 0.10 }, // Right cheek
                    { x: 0.45, y: 0.60, w: 0.10, h: 0.10 }, // Chin / Jaw
                    { x: 0.30, y: 0.30, w: 0.40, h: 0.40 }  // Large center box (fallback)
                ]

                let bestSkinPixels = []
                let maxSkinCount = 0

                for (const region of regions) {
                    const rx = Math.floor(img.width * region.x)
                    const ry = Math.floor(img.height * region.y)
                    const rw = Math.floor(img.width * region.w)
                    const rh = Math.floor(img.height * region.h)

                    const imageData = ctx.getImageData(rx, ry, rw, rh)
                    const pixels = imageData.data
                    const sampledPixels = []
                    let skinCount = 0

                    for (let i = 0; i < pixels.length; i += 4) {
                        const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2]
                        if (isSkinTone(r, g, b)) {
                            skinCount++
                            sampledPixels.push([r, g, b])
                        }
                    }

                    if (skinCount > maxSkinCount) {
                        maxSkinCount = skinCount
                        bestSkinPixels = sampledPixels
                    }
                }

                // Calculate average skin color from best detected region
                let avgR = 0, avgG = 0, avgB = 0

                if (bestSkinPixels.length > 0) {
                    bestSkinPixels.forEach(([r, g, b]) => {
                        avgR += r; avgG += g; avgB += b
                    })
                    avgR = Math.round(avgR / bestSkinPixels.length)
                    avgG = Math.round(avgG / bestSkinPixels.length)
                    avgB = Math.round(avgB / bestSkinPixels.length)
                } else {
                    // Fallback to Color Thief dominant color if NO skin pixels found anywhere
                    const colorThief = new ColorThief()
                    const dominant = colorThief.getColor(img)
                    avgR = dominant[0]; avgG = dominant[1]; avgB = dominant[2]
                }

                const dominantColor = [avgR, avgG, avgB]

                // Calculate skin tone metrics
                const skinTone = {
                    rgb: dominantColor,
                    hex: rgbToHex(dominantColor),
                    warmth: calculateWarmth(dominantColor),
                    lightness: calculateLightness(dominantColor),
                    saturation: calculateSaturation(dominantColor),
                    undertone: detectUndertone(dominantColor)
                }

                resolve(skinTone)
            } catch (error) {
                reject(error)
            }
        }

        img.onerror = () => {
            reject(new Error('Failed to load image'))
        }

        // Load image from file
        img.src = URL.createObjectURL(imageFile)
    })
}

/**
 * Check if RGB values represent a likely skin tone
 */
function isSkinTone(r, g, b) {
    // Improved skin tone detection (Support for all ethnicities)
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const diff = max - min

    // Basic range for human skin
    if (r < 40 || g < 20 || b < 10) return false // Too dark
    if (r > 250 && g > 250 && b > 250) return false // Too bright (probably snow/background)

    // Rule 1: R > G and R > B (Universal for human skin except in very odd lighting)
    const rDominant = r > g && r > b

    // Rule 2: Saturation check (Skin isn't neon)
    const saturationOk = diff > 10 && diff < 150

    // Rule 3: RGB distribution rules for skin
    const ratioOk = (r / g > 1.1) && (r / b > 1.1)

    // Rule 4: Exclude gray/neutral backgrounds (common in snowy or cloudy photos)
    const notGray = diff > 15

    return (rDominant || ratioOk) && saturationOk && notGray
}

/**
 * Convert RGB array to hex string
 */
export function rgbToHex([r, g, b]) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('').toUpperCase()
}

/**
 * Calculate warmth level (0-100)
 * Higher = warmer (more red/yellow)
 * Lower = cooler (more blue/pink)
 */
export function calculateWarmth([r, g, b]) {
    // Warmth is based on the red-blue differential
    const warmth = ((r - b) / 255) * 100 + 50
    return Math.max(0, Math.min(100, warmth))
}

/**
 * Calculate lightness level (0-100)
 */
export function calculateLightness([r, g, b]) {
    // HSL Lightness formula
    const max = Math.max(r, g, b) / 255
    const min = Math.min(r, g, b) / 255
    const lightness = ((max + min) / 2) * 100
    return Math.round(lightness)
}

/**
 * Calculate saturation level (0-100)
 */
export function calculateSaturation([r, g, b]) {
    const max = Math.max(r, g, b) / 255
    const min = Math.min(r, g, b) / 255
    const lightness = (max + min) / 2

    if (max === min) return 0

    const saturation = lightness > 0.5
        ? (max - min) / (2 - max - min)
        : (max - min) / (max + min)

    return Math.round(saturation * 100)
}

/**
 * Detect undertone: warm, cool, or neutral
 */
export function detectUndertone([r, g, b]) {
    const warmth = r - b
    const greenInfluence = g - (r + b) / 2

    // Calculate a score based on multiple factors
    if (warmth > 35) {
        return 'warm'
    } else if (warmth < -20) {
        return 'cool'
    } else if (greenInfluence > 10) {
        // Olive undertone - considered neutral/warm
        return 'neutral'
    } else {
        return 'neutral'
    }
}

/**
 * Get complementary color
 */
export function getComplementaryColor([r, g, b]) {
    return [255 - r, 255 - g, 255 - b]
}

/**
 * Get analogous colors (adjacent on color wheel)
 */
export function getAnalogousColors([r, g, b], offset = 30) {
    // Convert to HSL, shift hue, convert back
    const hsl = rgbToHsl(r, g, b)

    const analog1 = hslToRgb((hsl[0] + offset) % 360, hsl[1], hsl[2])
    const analog2 = hslToRgb((hsl[0] - offset + 360) % 360, hsl[1], hsl[2])

    return [analog1, analog2]
}

/**
 * RGB to HSL conversion
 */
function rgbToHsl(r, g, b) {
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
 * HSL to RGB conversion
 */
function hslToRgb(h, s, l) {
    h /= 360
    s /= 100
    l /= 100

    let r, g, b

    if (s === 0) {
        r = g = b = l
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1
            if (t > 1) t -= 1
            if (t < 1 / 6) return p + (q - p) * 6 * t
            if (t < 1 / 2) return q
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
            return p
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}
