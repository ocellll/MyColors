import { useState, useEffect } from 'react'

function DrapingTool({ userPhoto, colors, seasonName }) {
    const [activeColor, setActiveColor] = useState(colors[0])
    const [isComparing, setIsComparing] = useState(false)

    // A sample "bad" color for comparison (usually the opposite of the season)
    const baseAvoidColor = { hex: '#808080', name: 'Gris Apagado' }

    return (
        <div className="flex flex-col items-center gap-8 py-12">
            <div className="text-center mb-4">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Draping Digital</h3>
                <p className="text-gray-600">Mira cómo cambia el brillo de tu cara con cada color</p>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
                {/* Draping Canvas */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 transition-all duration-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-8 border-white/50"
                    style={{ backgroundColor: activeColor.hex }}>

                    {/* The User Face */}
                    <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden shadow-inner ring-4 ring-white/20">
                        <img
                            src={userPhoto}
                            alt="Tu rostro"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-white/40 shadow-sm">
                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 block">
                            Probando: {activeColor.name}
                        </label>

                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                            {colors.slice(0, 12).map((color, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveColor(color)}
                                    className={`w-full aspect-square rounded-xl transition-all duration-200 border-2 ${activeColor.hex === color.hex ? 'border-purple-600 scale-110 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'}`}
                                    style={{ backgroundColor: color.hex }}
                                    title={color.name}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 p-4 bg-purple-600/10 border border-purple-200 rounded-2xl">
                            <p className="text-xs text-purple-800">
                                <strong>Tip Profesional:</strong> {activeColor.category === 'Principal' ? 'Este color resalta tu luz natural.' : 'Usa este color para acentuar tus rasgos.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrapingTool
