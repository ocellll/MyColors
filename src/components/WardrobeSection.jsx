import { useState, useRef, useCallback, useEffect } from 'react'
import ColorThief from 'colorthief'
import { rgbToHex, deltaE, rgbToLab } from '../utils/colorAnalysis'

// Convert hex to RGB helper
const hexToRgbArray = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null
}

function WardrobeSection({ userSeason, wardrobe, onUpdateWardrobe, showToast }) {
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const fileInputRef = useRef(null)
    const hasUserSeason = userSeason && userSeason.colors && userSeason.colors.length > 0

    // Helper to check if a color fits the user's season (returns pending status if no season)
    const checkColorFit = useCallback((hex, forPending = false) => {
        if (!userSeason || !userSeason.colors) {
            return {
                fits: null, // null = pending evaluation
                message: forPending
                    ? 'Pendiente de evaluación. Analiza tu rostro para ver si te favorece.'
                    : 'Primero analiza tu rostro para poder comparar colores.',
                closestColor: null,
                pending: true
            }
        }

        // Find the closest color in the palette using Delta E
        let minDistance = Infinity
        let closestColor = null

        const hexRgb = hexToRgbArray(hex)
        if (!hexRgb) return { fits: false, message: 'Error al procesar color', pending: false }

        for (const paletteColor of userSeason.colors) {
            const paletteRgb = hexToRgbArray(paletteColor.hex)
            if (!paletteRgb) continue

            const distance = deltaE(hexRgb, paletteRgb)

            if (distance < minDistance) {
                minDistance = distance
                closestColor = paletteColor
            }
        }

        // Thresholds based on CIE76 Delta E:
        // < 10: Very good match (perceptually close)
        // < 23: Harmonious match (same family)
        // > 23: Different

        if (minDistance < 10) {
            return {
                fits: true,
                message: `✅ ¡Match perfecto! Es casi idéntico a "${closestColor.name}".`,
                closestColor
            }
        } else if (minDistance < 23) {
            return {
                fits: true,
                message: `✨ Buena combinación. Armoniza con "${closestColor.name}".`,
                closestColor
            }
        }

        return {
            fits: false,
            message: `❌ Este tono no encaja. Prueba combinarlo con accesorios.`,
            closestColor,
            pending: false
        }
    }, [userSeason])

    // Track if we've already re-evaluated to avoid loops
    const hasReEvaluatedRef = useRef(false)

    // Auto re-evaluate all wardrobe items when:
    // 1. Component mounts with pending items and season available
    // 2. userSeason becomes available after mounting
    useEffect(() => {
        if (!hasUserSeason || wardrobe.length === 0) {
            // Reset the ref if we don't have season data
            hasReEvaluatedRef.current = false
            return
        }

        // Check if any items are pending or need re-evaluation
        const hasPendingItems = wardrobe.some(item => item.pending === true || item.fit === null)

        // Skip if no pending items or already re-evaluated this session
        if (!hasPendingItems) return
        if (hasReEvaluatedRef.current) return

        // Mark that we've done re-evaluation
        hasReEvaluatedRef.current = true

        // Re-evaluate all items with the new season data
        const updatedWardrobe = wardrobe.map(item => {
            // Only re-evaluate pending items
            if (!item.pending && item.fit !== null) return item

            const fitResult = checkColorFit(item.color)
            return {
                ...item,
                fit: fitResult.fits,
                message: fitResult.message,
                closestColor: fitResult.closestColor?.hex,
                pending: false
            }
        })

        onUpdateWardrobe(updatedWardrobe)
        showToast('¡Tu armario ha sido re-evaluado! 🎉')
    }, [hasUserSeason, wardrobe, checkColorFit, onUpdateWardrobe, showToast]) // Include all dependencies


    // Convert file to base64 for persistent storage
    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        // Reset input for re-upload of same file
        e.target.value = ''

        setIsAnalyzing(true)
        try {
            // Convert to base64 for persistent storage
            const imageBase64 = await fileToBase64(file)

            // Create image for color analysis
            const img = new Image()
            img.src = imageBase64
            await new Promise((resolve, reject) => {
                img.onload = resolve
                img.onerror = reject
            })

            const colorThief = new ColorThief()
            const dominantRGB = colorThief.getColor(img)
            const hex = rgbToHex(dominantRGB)

            // Should be pending if no season, BUT checks if season exists inside function
            const fitResult = checkColorFit(hex, true)

            const newItem = {
                id: Date.now(),
                image: imageBase64, // Store base64 for persistence
                color: hex,
                fit: fitResult.fits,
                message: fitResult.message,
                closestColor: fitResult.closestColor?.hex,
                pending: fitResult.pending || false,
                date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
            }

            // Immediately apply season check if available (fix for "load info" issue)
            if (hasUserSeason && newItem.pending) {
                const retryFit = checkColorFit(hex, false)
                if (!retryFit.pending) {
                    newItem.pending = false
                    newItem.fit = retryFit.fits
                    newItem.message = retryFit.message
                    newItem.closestColor = retryFit.closestColor?.hex
                }
            }

            onUpdateWardrobe([newItem, ...wardrobe]) // Add to front

            if (fitResult.pending) {
                showToast('Prenda añadida. ¡Analiza tu rostro para evaluarla! 👕')
            } else {
                showToast('¡Prenda añadida a tu armario! 👕')
            }
        } catch (error) {
            console.error('Error analyzing clothing:', error)
            showToast('Error al analizar la prenda. Intenta con otra foto.')
        } finally {
            setIsAnalyzing(false)
        }
    }

    const removeItem = (id) => {
        onUpdateWardrobe(wardrobe.filter(item => item.id !== id))
        showToast('Prenda eliminada')
    }

    const clearAll = () => {
        if (wardrobe.length === 0) return
        onUpdateWardrobe([])
        showToast('Armario vaciado')
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-24">
            <header className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Mi Armario Inteligente</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Sube fotos de tu ropa para saber si combinan con tu colorimetría personal.
                </p>
                {!userSeason && (
                    <div className="mt-4 inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        ⚠️ Primero analiza tu rostro para comparar colores
                    </div>
                )}
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Upload Section */}
                <div className="lg:col-span-1">
                    <div className="glass-card p-8 sticky top-28">
                        <h3 className="text-xl font-bold mb-6">Analizar nueva prenda</h3>
                        <div
                            className="upload-zone !p-8 !border-2"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {isAnalyzing ? (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="loading-spinner !w-8 !h-8" />
                                    <p className="text-sm font-medium text-purple-600">Analizando...</p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-gray-600">Haz clic para subir una foto</p>
                                </div>
                            )}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                <p className="text-xs text-blue-700 flex gap-2">
                                    <span>💡</span>
                                    <span>Usa fotos con buena iluminación para mejor detección.</span>
                                </p>
                            </div>

                            {/* Manual Recheck Button (Fix for stuck pending items) */}
                            {hasUserSeason && wardrobe.some(i => i.pending) && (
                                <button
                                    onClick={() => {
                                        hasReEvaluatedRef.current = false // Force re-eval
                                        // Trigger re-render/effect by setting state or just modifying array directly via prop
                                        // Best way is to map and update
                                        const updated = wardrobe.map(item => {
                                            const fit = checkColorFit(item.color)
                                            return { ...item, fit: fit.fits, message: fit.message, closestColor: fit.closestColor?.hex, pending: false }
                                        })
                                        onUpdateWardrobe(updated)
                                        showToast('Armario actualizado ✅')
                                    }}
                                    className="w-full btn-secondary text-sm py-2 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Re-evaluar prendas
                                </button>
                            )}

                            {wardrobe.length > 0 && (
                                <button
                                    onClick={clearAll}
                                    className="w-full text-sm text-red-500 hover:text-red-700 py-2"
                                >
                                    Vaciar armario
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Wardrobe Grid */}
                <div className="lg:col-span-2">
                    {wardrobe.length === 0 ? (
                        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Tu armario está vacío</h4>
                            <p className="text-gray-500">Sube fotos de tus prendas para analizarlas.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 gap-6">
                            {wardrobe.map(item => (
                                <div key={item.id} className="glass-card overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt="Prenda"
                                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="w-8 h-8 bg-white/90 backdrop-blur shadow-md rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="absolute bottom-3 left-3 flex gap-2">
                                            <div
                                                className="w-8 h-8 rounded-lg shadow-lg border-2 border-white"
                                                style={{ backgroundColor: item.color }}
                                                title={`Color detectado: ${item.color}`}
                                            />
                                            {item.closestColor && (
                                                <div
                                                    className="w-8 h-8 rounded-lg shadow-lg border-2 border-white/50"
                                                    style={{ backgroundColor: item.closestColor }}
                                                    title="Color más cercano en tu paleta"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            {item.pending || item.fit === null ? (
                                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full flex items-center gap-1 animate-pulse">
                                                    <span>⏳</span> PENDIENTE
                                                </span>
                                            ) : item.fit ? (
                                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                                    <span>✓</span> TU COLOR
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1">
                                                    <span>!</span> COMBINAR
                                                </span>
                                            )}
                                            <span className="text-[10px] text-gray-400 ml-auto">{item.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WardrobeSection

