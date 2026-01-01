import { useState, useRef } from 'react'
import ColorThief from 'colorthief'
import { rgbToHex, calculateWarmth, calculateLightness, calculateSaturation } from '../utils/colorAnalysis'

function WardrobeSection({ userSeason, wardrobe, onUpdateWardrobe, showToast }) {
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [previewImage, setPreviewImage] = useState(null)
    const fileInputRef = useRef(null)

    // Helper to check if a color fits the user's season
    const checkColorFit = (hex) => {
        if (!userSeason || !userSeason.colors) return { fits: false, message: 'Primero analiza tu rostro' }

        // Simple distance-based check against the season's palette
        // In a more advanced version, we could use CIELAB Delta E
        const colorNames = userSeason.colors.map(c => c.hex)
        const isMatch = colorNames.includes(hex.toUpperCase())

        if (isMatch) return { fits: true, message: '¡Este color es perfecto para ti!' }

        return {
            fits: false,
            message: 'Este color no está en tu paleta principal, pero podrías usarlo con accesorios que sí te favorezcan.'
        }
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => setPreviewImage(event.target.result)
            reader.readAsDataURL(file)
            analyzeClothing(file)
        }
    }

    const analyzeClothing = async (file) => {
        setIsAnalyzing(true)
        try {
            const img = new Image()
            img.src = URL.createObjectURL(file)
            await new Promise(resolve => img.onload = resolve)

            const colorThief = new ColorThief()
            const dominantRGB = colorThief.getColor(img)
            const hex = rgbToHex(dominantRGB)
            const fitResult = checkColorFit(hex)

            const newItem = {
                id: Date.now(),
                image: img.src,
                color: hex,
                fit: fitResult.fits,
                message: fitResult.message,
                date: new Date().toLocaleDateString()
            }

            onUpdateWardrobe([...wardrobe, newItem])
            showToast('¡Prenda añadida a tu armario! 👕')
        } catch (error) {
            console.error('Error analyzing clothing:', error)
            showToast('Error al analizar la prenda')
        } finally {
            setIsAnalyzing(false)
            setPreviewImage(null)
        }
    }

    const removeItem = (id) => {
        onUpdateWardrobe(wardrobe.filter(item => item.id !== id))
        showToast('Prenda eliminada')
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-24">
            <header className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Mi Armario Inteligente</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Sube fotos de tu ropa para saber si combinan con tu colorimetría personal y mantén tu estilo siempre al máximo.
                </p>
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
                                    <p className="text-sm text-gray-600">Haz clic para subir una foto de tu prenda</p>
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
                                    <span>Usa fotos con buena iluminación para que la detección de color sea precisa.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wardrobe Grid */}
                <div className="lg:col-span-2">
                    {wardrobe.length === 0 ? (
                        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Tu armario está vacío</h4>
                            <p className="text-gray-500">Comienza subiendo fotos de tus prendas favoritas para analizarlas.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 gap-6">
                            {wardrobe.map(item => (
                                <div key={item.id} className="glass-card overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt="Prenda"
                                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="w-8 h-8 bg-white/90 backdrop-blur shadow-md rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <div
                                                className="w-8 h-8 rounded-lg shadow-lg border-2 border-white"
                                                style={{ backgroundColor: item.color }}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            {item.fit ? (
                                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                                    <span>✓</span> TU COLOR
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1">
                                                    <span>!</span> NEUTRALIZAR
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
