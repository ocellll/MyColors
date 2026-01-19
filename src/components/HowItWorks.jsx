import SEOHead from './SEOHead'

const HowItWorks = () => {
    return (
        <>
            <SEOHead
                title="Cómo Funciona el Análisis de Colorimetría con IA"
                description="Descubre cómo nuestro sistema de IA analiza tu foto para determinar tu temporada de color en segundos. Proceso paso a paso, tecnología y precisión del análisis."
                keywords={['cómo funciona mycolors', 'análisis IA colorimetría', 'proceso análisis color']}
                url="/how-it-works"
            />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
                        Cómo Funciona MyColors AI ⚙️
                    </h1>
                    <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
                        Descubre la tecnología y el proceso científico detrás de nuestro análisis de colorimetría personal en segundos
                    </p>

                    {/* El Proceso Paso a Paso */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-purple-600 mb-10 text-center">El Proceso Paso a Paso</h2>

                        <div className="space-y-8">
                            {/* Paso 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        1
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Sube Tu Foto</h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Comienza subiendo una foto clara de tu rostro con luz natural. No necesitas maquillaje - de hecho,
                                            es mejor sin él para que nuestro sistema pueda analizar tu coloración natural. La foto debe mostrar
                                            tu rostro de frente, con el cabello visible y sin filtros que alteren los colores reales.
                                        </p>
                                        <div className="mt-4 bg-purple-50 p-4 rounded-xl">
                                            <p className="text-purple-800"><strong>Tip Pro:</strong> Las mejores fotos son tomadas cerca de una ventana con luz natural indirecta, sin sol directo en el rostro.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Paso 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        2
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Análisis con IA</h3>
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                            Nuestro sistema de visión por computadora analiza tu foto identificando y midiendo varios factores clave:
                                        </p>
                                        <ul className="space-y-3 text-gray-700 text-lg">
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">●</span>
                                                <span><strong>Tono de piel:</strong> Claridad u oscuridad general de tu piel</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">●</span>
                                                <span><strong>Subtono de piel:</strong> El matiz subyacente (cálido/dorado vs frío/rosado)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">●</span>
                                                <span><strong>Color de cabello:</strong> Tono y temperatura de tu cabello natural</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">●</span>
                                                <span><strong>Color de ojos:</strong> Tono y profundidad</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">●</span>
                                                <span><strong>Contraste personal:</strong> Diferencia de valor entre piel, cabello y ojos</span>
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                            Este análisis multifactorial ocurre en milisegundos, procesando miles de píxeles para determinar
                                            con precisión tus características naturales.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Paso 3 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        3
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Determinación de Temporada</h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Con base en los datos extraídos, nuestro algoritmo compara tus características con los perfiles típicos
                                            de cada temporada de color. Utiliza machine learning entrenado con miles de análisis profesionales para
                                            determinar qué temporada se alinea mejor con tu coloración natural: Primavera, Verano, Otoño o Invierno.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                            El sistema considera no solo factores individuales, sino la combinación holística de todas tus características,
                                            tal como lo haría un consultor profesional experimentado.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Paso 4 */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        4
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Recibe Tu Paleta Personalizada</h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            ¡Listo! En segundos recibes tu temporada de color junto con tu paleta completa de colores favorables.
                                            Te mostramos exactamente qué tonos te hacen lucir más radiante y te explicamos por qué estos colores
                                            funcionan específicamente para ti.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                            Además de la paleta, te proporcionamos guías detalladas sobre cómo aplicar estos colores en tu vestuario,
                                            qué neutrales usar como base, y consejos de maquillaje específicos para tu temporada.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* La Tecnología Detrás */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-pink-600 mb-10 text-center">La Tecnología Detrás del Análisis</h2>

                        <div className="bg-white rounded-3xl p-10 shadow-xl">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                MyColors utiliza tecnologías de punta en visión por computadora y aprendizaje automático para ofrecer
                                análisis de colorimetría precisos y consistentes.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Visión por Computadora</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Utilizamos algoritmos avanzados de detección facial y análisis de color que pueden identificar con precisión
                                        los tonos exactos de tu piel, cabello y ojos, incluso en condiciones de iluminación variables. El sistema
                                        normaliza la iluminación y corrige distorsiones para obtener mediciones precisas de color.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Machine Learning</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Nuestro modelo de IA ha sido entrenado con miles de análisis de colorimetría profesionales, aprendiendo
                                        los patrones que correlacionan características específicas con temporadas de color. Esto le permite hacer
                                        determinaciones con una precisión del 85-90%, comparable a consultores humanos.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Análisis Objetivo</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        A diferencia del ojo humano que puede verse afectado por fatiga, iluminación ambiente o sesgo personal,
                                        nuestro sistema analiza colores de forma objetiva y consistente usando datos numéricos de píxeles.
                                        Cada análisis sigue exactamente el mismo proceso riguroso.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Precisión y Validación */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-indigo-600 mb-10 text-center">Precisión y Validación</h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
                                <div className="text-5xl font-bold mb-2">85-90%</div>
                                <div className="text-lg">Precisión del Análisis</div>
                            </div>
                            <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl p-8 text-white text-center">
                                <div className="text-5xl font-bold mb-2">&lt;5 seg</div>
                                <div className="text-lg">Tiempo de Análisis</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500 to-indigo-500 rounded-2xl p-8 text-white text-center">
                                <div className="text-5xl font-bold mb-2">1000s</div>
                                <div className="text-lg">Análisis Completados</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-xl">
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Hemos validado nuestro sistema comparándolo con análisis profesionales presenciales. En estudios internos,
                                MyColors logró concordancia del 85-90% con determinaciones de consultores certificados, una precisión comparable
                                a la variabilidad entre diferentes consultores humanos.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Además, recopilamos feedback continuo de usuarios para refinar y mejorar nuestro modelo. Cada análisis nos
                                ayuda a ser más precisos para los siguientes usuarios.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">¿Listo Para Descubrir Tu Temporada?</h2>
                        <p className="text-xl mb-8">
                            El análisis toma menos de 5 segundos. Sube tu foto y descubre qué colores te hacen brillar.
                        </p>
                        <a
                            href="/"
                            className="inline-block bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition shadow-2xl"
                        >
                            Empezar Análisis Gratis
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks
