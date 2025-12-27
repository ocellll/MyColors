import { useState } from 'react'

function ColorPalette({ colors, showToast }) {
    const [copiedIndex, setCopiedIndex] = useState(null)

    const copyToClipboard = async (hex, index) => {
        try {
            await navigator.clipboard.writeText(hex)
            setCopiedIndex(index)
            showToast(`Color ${hex} copiado! 🎨`)
            setTimeout(() => setCopiedIndex(null), 2000)
        } catch (error) {
            console.error('Copy error:', error)
            showToast('Error al copiar')
        }
    }

    // Group colors by category
    const groupedColors = {
        Principal: colors.filter(c => c.category === 'Principal'),
        Acento: colors.filter(c => c.category === 'Acento'),
        Neutro: colors.filter(c => c.category === 'Neutro'),
        Complementario: colors.filter(c => c.category === 'Complementario')
    }

    const categoryLabels = {
        Principal: { emoji: '⭐', label: 'Colores Principales' },
        Acento: { emoji: '✨', label: 'Colores de Acento' },
        Neutro: { emoji: '🌿', label: 'Neutros' },
        Complementario: { emoji: '🎨', label: 'Complementarios' }
    }

    return (
        <div className="space-y-12">
            {Object.entries(groupedColors).map(([category, categoryColors]) => (
                categoryColors.length > 0 && (
                    <div key={category}>
                        <h4 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
                            <span>{categoryLabels[category].emoji}</span>
                            {categoryLabels[category].label}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {categoryColors.map((color, index) => {
                                const globalIndex = colors.findIndex(c => c.hex === color.hex)
                                const isCopied = copiedIndex === globalIndex

                                // Calculate if color is light or dark for text contrast
                                const hex = color.hex.replace('#', '')
                                const r = parseInt(hex.substr(0, 2), 16)
                                const g = parseInt(hex.substr(2, 2), 16)
                                const b = parseInt(hex.substr(4, 2), 16)
                                const brightness = (r * 299 + g * 587 + b * 114) / 1000
                                const textColor = brightness > 128 ? 'text-gray-800' : 'text-white'

                                return (
                                    <div
                                        key={color.hex}
                                        className="group cursor-pointer"
                                        onClick={() => copyToClipboard(color.hex, globalIndex)}
                                    >
                                        <div
                                            className="relative aspect-square rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 overflow-hidden"
                                            style={{ backgroundColor: color.hex }}
                                        >
                                            {/* Hover overlay */}
                                            <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${brightness > 128 ? 'bg-black/10' : 'bg-white/10'}`}>
                                                {isCopied ? (
                                                    <div className={`flex items-center gap-1 ${textColor}`}>
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-sm font-medium">Copiado</span>
                                                    </div>
                                                ) : (
                                                    <div className={`flex items-center gap-1 ${textColor}`}>
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="text-sm font-medium">Copiar</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p className="font-medium text-gray-800 text-sm truncate">
                                                {color.name}
                                            </p>
                                            <p className="text-xs text-gray-500 uppercase">
                                                {color.hex}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default ColorPalette
