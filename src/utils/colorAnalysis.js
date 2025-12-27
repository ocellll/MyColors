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

                // Extract face region (center-upper portion where face likely is)
                const faceX = Math.floor(img.width * 0.30)
                const faceY = Math.floor(img.height * 0.15)
                const faceWidth = Math.floor(img.width * 0.40)
                const faceHeight = Math.floor(img.height * 0.35)

                // Get pixel data from face region
                const imageData = ctx.getImageData(faceX, faceY, faceWidth, faceHeight)
                const pixels = imageData.data

                // Sample pixels and filter for likely skin tones
                const skinPixels = []
                const sampleRate = 10 // Sample every 10th pixel for performance

                for (let i = 0; i < pixels.length; i += 4 * sampleRate) {
                    const r = pixels[i]
                    const g = pixels[i + 1]
                    const b = pixels[i + 2]

                    // Basic skin tone detection heuristic
                    if (isSkinTone(r, g, b)) {
                        skinPixels.push([r, g, b])
                    }
                }

                // Calculate average skin color from detected skin pixels
                let avgR = 0, avgG = 0, avgB = 0

                if (skinPixels.length > 0) {
                    skinPixels.forEach(([r, g, b]) => {
                        avgR += r
                        avgG += g
                        avgB += b
                    })
                    avgR = Math.round(avgR / skinPixels.length)
                    avgG = Math.round(avgG / skinPixels.length)
                    avgB = Math.round(avgB / skinPixels.length)
                } else {
                    // Fallback to Color Thief if no skin detected
                    const colorThief = new ColorThief()
                    const dominant = colorThief.getColor(img)
                    avgR = dominant[0]
                    avgG = dominant[1]
                    avgB = dominant[2]
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
    // Skin tone detection using RGB rules
    // Based on research on skin color detection

    // Rule 1: R > G > B pattern (common in most skin tones)
    const rgbPattern = r > g && g > b

    // Rule 2: R and G should be higher than B
    const warmCondition = r > 95 && g > 40 && b > 20

    // Rule 3: Max-Min difference
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const diff = max - min

    // Rule 4: Not too saturated (avoid clothing, makeup)
    const saturationOk = diff < 150

    // Rule 5: Not too dark or too bright
    const brightnessOk = r > 60 && r < 250 && g > 40 && g < 230

    return (rgbPattern || warmCondition) && saturationOk && brightnessOk
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
