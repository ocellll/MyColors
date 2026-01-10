
function ContentSection() {
    const seasons = [
        {
            title: "Primavera (Spring)",
            description: "Las personas de estación Primavera suelen tener una piel con subtonos cálidos (dorados o melocotón) y un contraste bajo o medio. Les favorecen los colores brillantes, cálidos y claros.",
            colors: ["Coral", "Turquesa", "Melocotón", "Dorado"],
            icon: "🌸"
        },
        {
            title: "Verano (Summer)",
            description: "La estación Verano se caracteriza por subtonos fríos (rosados o azulados) y un contraste suave. Los colores ideales son los tonos pastel, fríos y empolvados.",
            colors: ["Lavanda", "Azul Cielo", "Rosa Palo", "Gris Perla"],
            icon: "☀️"
        },
        {
            title: "Otoño (Autumn)",
            description: "El Otoño destaca por subtonos cálidos y dorados, pero con una intensidad más profunda y apagada. Los colores tierra, ocres y verdes oliva son perfectos.",
            colors: ["Teja", "Mostaza", "Verde Oliva", "Bronce"],
            icon: "🍂"
        },
        {
            title: "Invierno (Winter)",
            description: "Las personas Invierno tienen subtonos fríos y un alto contraste (piel muy clara y pelo oscuro, o piel muy oscura). Les quedan bien los colores intensos, puros y brillantes.",
            colors: ["Negro", "Blanco Puro", "Rojo Sangre", "Azul Real"],
            icon: "❄️"
        }
    ]

    return (
        <div className="bg-white">
            {/* What is Colorimetry Section */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        ¿Qué es la Colorimetría Personal?
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        La colorimetría personal o análisis de color es el estudio de cómo la luz y el color interactúan con tu tono de piel, ojos y cabello natural.
                        El objetivo es identificar una paleta de colores que armonice con tus características naturales, haciéndote lucir más saludable, vibrante y joven.
                        Al usar los colores correctos, puedes disimular imperfecciones, suavizar líneas de expresión e iluminar tu rostro sin necesidad de maquillaje extra.
                    </p>
                </div>

                {/* The 4 Seasons Details */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                        Las 4 Estaciones del Color
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {seasons.map((season, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="text-4xl mb-4">{season.icon}</div>
                                <h4 className="text-xl font-bold text-gray-800 mb-3">{season.title}</h4>
                                <p className="text-gray-600 mb-4">{season.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {season.colors.map((color, i) => (
                                        <span key={i} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200">
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                        Beneficios de Conocer tu Estación
                    </h3>
                    <ul className="space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
                        {[
                            "Ahorra dinero comprando solo ropa que realmente te favorece.",
                            "Crea un armario cápsula donde todo combina entre sí.",
                            "Luce una piel más luminosa y descansada al instante.",
                            "Simplifica tu rutina de maquillaje eligiendo los tonos exactos.",
                            "Gana confianza en tu imagen personal y profesional.",
                            "Evita el 'no tengo nada que ponerme' con un guardarropa eficiente."
                        ].map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Color Theory Section (E-A-T Content) */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                        Los 3 Pilares del Análisis de Color
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">🎨</div>
                            <h4 className="font-bold text-gray-800 mb-2">1. Matiz (Hue)</h4>
                            <p className="text-sm text-gray-600">
                                Define si los colores que te favorecen son <strong>Cálidos</strong> (base amarilla/dorada) o <strong>Fríos</strong> (base azul/rosada). Es la base para determinar tu estación principal.
                            </p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">💡</div>
                            <h4 className="font-bold text-gray-800 mb-2">2. Valor (Value)</h4>
                            <p className="text-sm text-gray-600">
                                Se refiere a la luminosidad. ¿Te quedan mejor los colores <strong>Claros</strong> (mezclados con blanco) o los <strong>Oscuros</strong> (mezclados con negro)?
                            </p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">✨</div>
                            <h4 className="font-bold text-gray-800 mb-2">3. Croma (Chroma)</h4>
                            <p className="text-sm text-gray-600">
                                Mide la saturación o pureza del color. Algunas personas brillan con colores <strong>Vivos</strong> y saturados, mientras que otras se ven mejor con tonos <strong>Suaves</strong> y apagados.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                        Preguntas Frecuentes
                    </h3>
                    <div className="space-y-6">
                        <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="font-semibold text-gray-800">¿Cómo funciona el análisis por IA?</span>
                                <span className="transform group-open:rotate-180 transition-transform text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600">
                                <p>Nuestra IA analiza los píxeles de tu piel, ojos y cabello para detectar matices cálidos o fríos, así como el nivel de contraste. Compara estos datos con miles de perfiles de colorimetría para determinar tu estación con alta precisión.</p>
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="font-semibold text-gray-800">¿La foto se guarda en sus servidores?</span>
                                <span className="transform group-open:rotate-180 transition-transform text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600">
                                <p>No. Tu privacidad es nuestra prioridad. La imagen se procesa en el momento para extraer los códigos de color y se elimina inmediatamente después. No almacenamos ninguna fotografía personal.</p>
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="font-semibold text-gray-800">¿Qué hago si el resultado no me convence?</span>
                                <span className="transform group-open:rotate-180 transition-transform text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600">
                                <p>La iluminación de la foto es clave. Te recomendamos probar con 2 o 3 fotos diferentes tomadas con luz natural indirecta (frente a una ventana pero sin sol directo). Evita el maquillaje pesado y los filtros.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContentSection
