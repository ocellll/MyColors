import { useState, useRef, useCallback } from 'react'
import { AdBannerHorizontal } from './AdBanner'

function UploadSection({ imagePreview, onImageUpload, onAnalyze, isAnalyzing, canAnalyze, onUpgradeClick, isPremium }) {
    const [isDragging, setIsDragging] = useState(false)
    const [showCamera, setShowCamera] = useState(false)
    const fileInputRef = useRef(null)
    const videoRef = useRef(null)
    const streamRef = useRef(null)

    // Handle drag events
    const handleDragOver = useCallback((e) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e) => {
        e.preventDefault()
        setIsDragging(false)
        const file = e.dataTransfer.files[0]
        if (file) {
            onImageUpload(file)
        }
    }, [onImageUpload])

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            onImageUpload(file)
        }
    }

    // Handle camera capture
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user' }
            })
            streamRef.current = stream
            if (videoRef.current) {
                videoRef.current.srcObject = stream
            }
            setShowCamera(true)
        } catch (error) {
            console.error('Camera error:', error)
            alert('No se pudo acceder a la cámara')
        }
    }

    const capturePhoto = () => {
        if (!videoRef.current) return

        const canvas = document.createElement('canvas')
        canvas.width = videoRef.current.videoWidth
        canvas.height = videoRef.current.videoHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(videoRef.current, 0, 0)

        canvas.toBlob((blob) => {
            const file = new File([blob], 'selfie.jpg', { type: 'image/jpeg' })
            onImageUpload(file)
            stopCamera()
        }, 'image/jpeg', 0.9)
    }

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop())
        }
        setShowCamera(false)
    }

    // How it works steps
    const steps = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Sube tu selfie',
            description: 'Sin filtros, con luz natural'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Analizamos tu tono',
            description: 'Nuestro algoritmo detecta tu colorimetría'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: 'Recibe tu paleta',
            description: 'Colores personalizados para ti'
        }
    ]

    // Example results
    const examples = [
        { season: 'Primavera', colors: ['#FF6B9D', '#FFD700', '#90EE90'], image: '🌸' },
        { season: 'Verano', colors: ['#E6E6FA', '#87CEEB', '#FFB6C1'], image: '☀️' },
        { season: 'Otoño', colors: ['#D2691E', '#DAA520', '#8B4513'], image: '🍂' },
        { season: 'Invierno', colors: ['#000000', '#FFFFFF', '#DC143C'], image: '❄️' }
    ]

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="bg-gradient-hero py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Encuentra tu paleta de colores perfecta
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Sube una selfie y descubre qué colores te favorecen según tu tono de piel
                    </p>
                    <div className="animate-bounce-soft">
                        <svg className="w-12 h-12 mx-auto opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Upload Section */}
            <section className="max-w-2xl mx-auto px-4 -mt-16 relative z-10">
                <div className="glass-card p-8 md:p-12">
                    {/* Camera Modal */}
                    {showCamera && (
                        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                            <div className="bg-white rounded-3xl p-6 max-w-lg w-full">
                                <div className="relative">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="w-full rounded-2xl"
                                    />
                                    <div className="absolute inset-0 border-4 border-dashed border-white/50 rounded-2xl pointer-events-none">
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full" />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={stopCamera}
                                        className="btn-secondary flex-1"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={capturePhoto}
                                        className="btn-primary flex-1"
                                    >
                                        📸 Capturar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Upload Area or Preview */}
                    {!imagePreview ? (
                        <div
                            className={`upload-zone ${isDragging ? 'drag-over' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="mb-6">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                                    <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-xl font-medium text-gray-700 mb-2">
                                    Arrastra tu foto aquí
                                </p>
                                <p className="text-gray-500">
                                    o haz clic para seleccionar
                                </p>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>
                    ) : (
                        <div className="text-center">
                            {/* Image Preview */}
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <img
                                    src={imagePreview}
                                    alt="Tu foto"
                                    className="w-full h-full rounded-full object-cover shadow-xl ring-4 ring-purple-100"
                                />
                                <button
                                    onClick={() => {
                                        onImageUpload(null)
                                        if (fileInputRef.current) fileInputRef.current.value = ''
                                    }}
                                    className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-gray-600 mb-6">
                                ¡Foto lista! Haz clic en analizar
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-8 space-y-4">
                        {imagePreview ? (
                            <button
                                onClick={onAnalyze}
                                disabled={isAnalyzing}
                                className="btn-primary w-full text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <div className="loading-spinner !w-6 !h-6 !border-2" />
                                        <span>Analizando tu foto...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <span>Analizar ahora</span>
                                    </>
                                )}
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="btn-primary w-full text-lg flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Seleccionar foto</span>
                                </button>
                                <button
                                    onClick={startCamera}
                                    className="btn-secondary w-full text-lg flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Usar cámara</span>
                                </button>
                            </>
                        )}

                        {!canAnalyze && (
                            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-center">
                                <p className="text-yellow-800 mb-2">
                                    Has alcanzado el límite de análisis gratuitos
                                </p>
                                <button
                                    onClick={onUpgradeClick}
                                    className="text-yellow-600 font-medium hover:underline"
                                >
                                    Hazte Premium para análisis ilimitados →
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Tips */}
                    <div className="mt-8 p-4 bg-purple-50 rounded-xl">
                        <p className="text-sm text-purple-700 flex items-start gap-2">
                            <span className="text-lg">💡</span>
                            <span>
                                <strong>Tip:</strong> Para mejores resultados, usa una foto con luz natural,
                                sin filtros y sin maquillaje pesado.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Ad Banner - Below Upload Box */}
                <AdBannerHorizontal isPremium={isPremium} />
            </section>

            {/* How It Works */}
            <section className="max-w-4xl mx-auto px-4 py-20">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    ¿Cómo funciona?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {step.icon}
                            </div>
                            <div className="text-sm font-bold text-purple-500 mb-2">
                                PASO {index + 1}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">
                                {step.title}
                            </h4>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Example Results */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
                        Descubre tu temporada
                    </h3>
                    <p className="text-center text-gray-600 mb-12">
                        Únete a más de 10,000+ personas que ya descubrieron sus colores
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {examples.map((example, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-4xl mb-4">{example.image}</div>
                                <h4 className="font-bold text-gray-800 mb-3">{example.season}</h4>
                                <div className="flex justify-center gap-2">
                                    {example.colors.map((color, colorIndex) => (
                                        <div
                                            key={colorIndex}
                                            className="w-8 h-8 rounded-full shadow-md"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6 text-gradient">
                        ¿Lista para descubrir tus colores?
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Analiza tu primera foto gratis y descubre qué colores te hacen brillar
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="btn-primary text-lg"
                    >
                        Empezar ahora
                    </button>
                </div>
            </section>
        </div>
    )
}

export default UploadSection
