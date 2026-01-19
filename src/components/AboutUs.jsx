import SEOHead from './SEOHead'

const AboutUs = () => {
    return (
        <>
            <SEOHead
                title="Sobre Nosotros - MyColors AI"
                description="Descubre quiénes somos, nuestra misión de democratizar la colorimetría personal con IA, y cómo ayudamos a miles de personas a descubrir sus colores ideales."
                keywords={['sobre mycolors', 'quiénes somos', 'misión colorimetría']}
                url="/about"
            />

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
                        Sobre MyColors AI 🎨
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                            <h2 className="text-3xl font-bold text-purple-600 mb-4">Nuestra Misión</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                En MyColors AI, creemos que todas las personas merecen sentirse seguras y radiantes con su apariencia.
                                Durante décadas, el análisis de colorimetría personal ha sido un servicio exclusivo y costoso, accesible
                                solo para quienes podían pagar consultas presenciales de cientos de euros.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                <strong>Nuestra misión es democratizar la colorimetría,</strong> haciendo que este conocimiento transformador
                                esté al alcance de todos, sin importar su ubicación o presupuesto. Utilizamos inteligencia artificial avanzada para
                                ofrecer análisis de color precisos, instantáneos y completamente gratuitos.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                            <h2 className="text-3xl font-bold text-pink-600 mb-4">Qué Hacemos</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                MyColors AI es una herramienta de análisis de colorimetría personal impulsada por inteligencia artificial.
                                Nuestro sistema analiza tu foto para determinar tu temporada de color (Primavera, Verano, Otoño o Invierno)
                                basándose en tu tono de piel, subtono, color de cabello y ojos.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                Una vez que conoces tu temporada, te proporcionamos una paleta completa de colores que te favorecen,
                                explicaciones detalladas sobre por qué estos colores funcionan para ti, y consejos prácticos sobre
                                cómo aplicar este conocimiento en tu vestuario diario.
                            </p>
                            <ul className="mt-6 space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">✨</span>
                                    <span><strong>Análisis instantáneo con IA:</strong> Resultados en segundos, no semanas</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">🎯</span>
                                    <span><strong>Precisión profesional:</strong> 85-90% de precisión comparable a análisis presenciales</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">📚</span>
                                    <span><strong>Educación completa:</strong> Blog, guías y recursos para dominar tu paleta</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-2xl mr-3">💝</span>
                                    <span><strong>Completamente gratis:</strong> Creemos que la belleza no debería tener precio</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                            <h2 className="text-3xl font-bold text-orange-600 mb-4">Nuestra Historia</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                El proyecto MyColors nació de una frustración personal. Como muchas personas, nos encontrábamos
                                constantemente comprando ropa que "quedaba bien en la percha" pero que nunca usábamos porque
                                algo simplemente no se veía bien al ponérnosla.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                Después de descubrir la colorimetría personal y experimentar la transformación de tener un armario
                                coherente con colores que realmente nos favorecían, quisimos compartir este conocimiento con el mundo.
                                Pero sabíamos que las consultorías tradicionales eran inaccesibles para la mayoría.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                Combinando nuestra pasión por la tecnología con el conocimiento científico de la teoría del color,
                                desarrollamos un sistema de inteligencia artificial capaz de realizar análisis de colorimetría con
                                precisión profesional. Desde nuestro lanzamiento, hemos ayudado a miles de personas a descubrir
                                sus colores ideales y transformar su relación con la ropa.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Por Qué Colorimetría con IA</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                La inteligencia artificial ofrece ventajas únicas para el análisis de colorimetría:
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Objetividad Total</h3>
                                    <p className="text-gray-700">
                                        A diferencia de la percepción humana que puede verse afectada por iluminación, fatiga o sesgo,
                                        la IA analiza colores de forma consistente y objetiva utilizando datos precisos de píxeles.
                                    </p>
                                </div>
                                <div className="border-l-4 border-pink-500 pl-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Acceso Universal</h3>
                                    <p className="text-gray-700">
                                        No importa dónde vivas o qué hora sea. Con MyColors, puedes obtener tu análisis en segundos
                                        desde la comodidad de tu hogar, 24/7, sin citas ni desplazamientos.
                                    </p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Ciencia de Datos</h3>
                                    <p className="text-gray-700">
                                        Nuestro modelo de IA ha sido entrenado con miles de análisis profesionales y se basa en
                                        principios científicos validados de la teoría del color y la percepción visual.
                                    </p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Mejora Continua</h3>
                                    <p className="text-gray-700">
                                        Nuestro sistema se actualiza constantemente con nuevos datos y retroalimentación,
                                        mejorando su precisión con cada análisis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Nuestro Compromiso</h2>
                            <p className="text-xl leading-relaxed mb-6">
                                Nos comprometemos a mantener MyColors <strong>siempre gratuito</strong> para el análisis básico.
                                Creemos que el conocimiento sobre qué colores te favorecen no debería estar reservado para unos pocos privilegiados.
                            </p>
                            <p className="text-lg">
                                Cada persona que descubre su temporada de color es alguien que ganará confianza, ahorrará dinero
                                en compras equivocadas y experimentará la alegría de sentirse verdaderamente radiante cada día.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="/"
                                    className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
                                >
                                    Descubre Tu Temporada Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
