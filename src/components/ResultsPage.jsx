import ColorPalette from './ColorPalette'
import SeasonBadge from './SeasonBadge'
import OutfitSuggestions from './OutfitSuggestions'
import ShareButtons from './ShareButtons'
import { AdBannerHorizontal } from './AdBanner'

function ResultsPage({ result, userPhoto, isPremium, onAnalyzeAnother, onUpgradeClick, showToast }) {
    if (!result) return null

    const { season, colors, avoidColors, bestCombinations } = result

    // Download results as PNG
    const downloadResults = () => {
        const canvas = document.createElement('canvas')
        canvas.width = 1080
        canvas.height = 1920
        const ctx = canvas.getContext('2d')

        // Season-specific gradients
        const gradients = {
            PRIMAVERA: ['#FF6B9D', '#FFD700'],
            VERANO: ['#87CEEB', '#E6E6FA'],
            OTOÑO: ['#D2691E', '#DAA520'],
            INVIERNO: ['#4169E1', '#DC143C']
        }

        const [startColor, endColor] = gradients[season.season] || ['#FF6B9D', '#9B59B6']

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, startColor)
        gradient.addColorStop(1, endColor)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Load user photo
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = userPhoto

        img.onload = () => {
            // Draw circular photo
            ctx.save()
            ctx.beginPath()
            ctx.arc(540, 280, 150, 0, Math.PI * 2)
            ctx.closePath()
            ctx.clip()

            // Calculate crop for circular photo
            const size = Math.min(img.width, img.height)
            const sx = (img.width - size) / 2
            const sy = (img.height - size) / 2
            ctx.drawImage(img, sx, sy, size, size, 390, 130, 300, 300)
            ctx.restore()

            // White ring around photo
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
            ctx.lineWidth = 8
            ctx.beginPath()
            ctx.arc(540, 280, 154, 0, Math.PI * 2)
            ctx.stroke()

            // Season title
            ctx.fillStyle = '#FFFFFF'
            ctx.font = 'bold 64px Inter, Arial'
            ctx.textAlign = 'center'
            ctx.fillText(season.season, 540, 520)

            // Season type
            ctx.font = '32px Inter, Arial'
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
            ctx.fillText(season.type, 540, 570)

            // "Tu paleta" text
            ctx.font = 'bold 36px Inter, Arial'
            ctx.fillStyle = '#FFFFFF'
            ctx.fillText('Tu paleta de colores', 540, 680)

            // Color palette grid
            const isExtended = colors.length > 12
            const colorSize = isExtended ? 130 : 180
            const gap = 20
            const startX = (canvas.width - (4 * colorSize + 3 * gap)) / 2
            const startY = 740

            colors.forEach((color, index) => {
                const row = Math.floor(index / 4)
                const col = index % 4
                const x = startX + col * (colorSize + gap)
                const y = startY + row * (colorSize + gap + (isExtended ? 45 : 30))

                // Color swatch
                ctx.fillStyle = color.hex
                ctx.shadowColor = 'rgba(0, 0, 0, 0.2)'
                ctx.shadowBlur = 10
                ctx.shadowOffsetY = 5
                ctx.beginPath()
                ctx.roundRect(x, y, colorSize, colorSize, 20)
                ctx.fill()
                ctx.shadowBlur = 0
                ctx.shadowOffsetY = 0

                // Color name
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
                ctx.font = isExtended ? '12px Inter, Arial' : '16px Inter, Arial'
                const textY = y + colorSize + (isExtended ? 20 : 25)
                ctx.fillText(color.name, x + colorSize / 2, textY)
            })

            // Watermark if not premium
            if (!isPremium) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
                ctx.fillRect(0, canvas.height - 100, canvas.width, 100)
                ctx.fillStyle = '#FFFFFF'
                ctx.font = 'bold 36px Inter, Arial'
                ctx.fillText('MyColors.app', canvas.width / 2, canvas.height - 40)
                ctx.font = '20px Inter, Arial'
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
                ctx.fillText('Descubre tus colores', canvas.width / 2, canvas.height - 65)
            } else {
                // Small logo for premium
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
                ctx.font = '24px Inter, Arial'
                ctx.fillText('MyColors.app', canvas.width / 2, canvas.height - 40)
            }

            // Download
            const link = document.createElement('a')
            link.download = `mycolors-${season.season.toLowerCase()}.png`
            link.href = canvas.toDataURL('image/png')
            link.click()

            showToast('¡Paleta descargada! 🎨')
        }

        img.onerror = () => {
            showToast('Error al descargar. Intenta de nuevo.')
        }
    }

    // Characteristics icons
    const characteristicIcons = {
        'Tono cálido': '☀️',
        'Tono frío': '❄️',
        'Luminosidad alta': '✨',
        'Suavidad': '🌸',
        'Profundidad': '🍂',
        'Alto contraste': '⬛',
        'Undertone dorado': '🌟',
        'Undertone rosado': '🌷',
        'Undertone azulado': '💎',
        'Undertone dorado/oliva': '🫒'
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section with User Photo */}
            <section className={`py-16 px-4 ${season.season === 'PRIMAVERA' ? 'bg-gradient-spring' :
                season.season === 'VERANO' ? 'bg-gradient-summer' :
                    season.season === 'OTOÑO' ? 'bg-gradient-autumn' :
                        'bg-gradient-winter'
                }`}>
                <div className="max-w-4xl mx-auto text-center text-white">
                    {/* User Photo */}
                    <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8">
                        <img
                            src={userPhoto}
                            alt="Tu foto"
                            className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-white/50"
                        />
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                            <SeasonBadge season={season.season} />
                        </div>
                    </div>

                    {/* Season Info */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                        ¡Eres {season.type}!
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                        {season.description}
                    </p>

                    {/* Characteristics */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {season.characteristics.map((char, index) => (
                            <div
                                key={index}
                                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2"
                            >
                                <span>{characteristicIcons[char] || '✓'}</span>
                                <span className="text-sm font-medium">{char}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Color Palette */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Tu paleta de colores
                </h3>
                <p className="text-center text-gray-600 mb-12">
                    Estos son los colores que mejor te favorecen. Haz clic en cualquier color para copiar su código.
                </p>
                <ColorPalette colors={colors} showToast={showToast} />
            </section>

            {/* Ad Banner - Between palette and avoid colors */}
            <AdBannerHorizontal isPremium={isPremium} />

            {/* Colors to Avoid */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                        🚫 Colores a evitar
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {avoidColors.map((color, index) => (
                            <div
                                key={index}
                                className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-red-100 text-gray-700"
                            >
                                {color}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Combinations */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                        🎯 Combinaciones perfectas
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {bestCombinations.map((combo, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-sm text-gray-500 mb-4">Combinación {index + 1}</div>
                                <div className="flex justify-center gap-3 mb-4">
                                    {combo.map((hex, colorIndex) => (
                                        <div
                                            key={colorIndex}
                                            className="w-16 h-16 rounded-xl shadow-lg"
                                            style={{ backgroundColor: hex }}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 text-xs text-gray-500">
                                    {combo.map((hex, colorIndex) => (
                                        <span key={colorIndex}>{hex}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ad Banner - Before outfit suggestions */}
            <AdBannerHorizontal isPremium={isPremium} />

            {/* Outfit Suggestions */}
            <OutfitSuggestions season={season.season} colors={colors} />

            {/* Action Buttons */}
            <section className="py-16 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="glass-card p-8 text-center">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                            Guarda y comparte tu paleta
                        </h3>

                        <div className="space-y-4 mb-8">
                            <button
                                onClick={downloadResults}
                                className="btn-primary w-full flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Descargar mi paleta
                                {!isPremium && <span className="text-xs opacity-70">(con marca de agua)</span>}
                            </button>

                            <button
                                onClick={onAnalyzeAnother}
                                className="btn-secondary w-full flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Analizar otra foto
                            </button>
                        </div>

                        <ShareButtons season={season} showToast={showToast} />
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            {!isPremium && (
                <section className="py-8 px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 p-1 rounded-3xl">
                            <div className="bg-white rounded-3xl p-8 text-center">
                                <div className="text-4xl mb-4">👑</div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                    ¿Cansado de los anuncios?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Disfruta sin anuncios, sin marca de agua y con análisis ilimitados.
                                </p>
                                <button
                                    onClick={onUpgradeClick}
                                    className="btn-premium text-lg"
                                >
                                    Hazte Premium - Solo 1,99 €/mes
                                </button>
                                <p className="text-sm text-gray-500 mt-4">
                                    Suscripción mensual • Cancela cuando quieras
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default ResultsPage
