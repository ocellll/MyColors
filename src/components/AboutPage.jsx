
import { useEffect } from 'react'

function AboutPage({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen pt-28 pb-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="glass-card p-8 md:p-12">
                    <button
                        onClick={onBack}
                        className="mb-8 text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver al inicio
                    </button>

                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre MyColors</h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
                            <p className="leading-relaxed">
                                En <strong>MyColors</strong>, creemos que todo el mundo merece sentirse seguro y radiante con su imagen. Nuestra misión es democratizar el acceso a la asesoría de imagen profesional utilizando el poder de la Inteligencia Artificial.
                            </p>
                            <p className="leading-relaxed mt-4">
                                Simplificamos la compleja teoría del color estacional para ofrecerte resultados inmediatos, precisos y fáciles de aplicar en tu vida diaria. Queremos ayudarte a construir un armario inteligente y a elegir los tonos de maquillaje que realmente realzan tu belleza natural.
                            </p>
                        </section>

                        <section className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo funciona nuestra tecnología?</h2>
                            <p className="mb-4">
                                MyColors utiliza un algoritmo avanzado de visión por computadora entrenado con miles de perfiles de colorimetría verificados por expertos. Nuestro proceso consta de tres pasos:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Detección Facial:</strong> Identificamos los puntos clave de tu rostro para aislar la piel, los ojos y el cabello.</li>
                                <li><strong>Análisis de Subtono:</strong> Analizamos los valores RGB y LAB de tu piel para determinar si tu subtono es frío (rosado/azulado) o cálido (dorado/melocotón).</li>
                                <li><strong>Clasificación Estacional:</strong> Cruzamos los datos de subtono, contraste y luminosidad para asignarte una de las 4 estaciones (Primavera, Verano, Otoño o Invierno).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Compromiso con la Calidad</h2>
                            <p>
                                A diferencia de otros tests online genéricos, MyColors se actualiza constantemente para mejorar su precisión. Trabajamos con asesores de imagen para refinar nuestras paletas y asegurar que las recomendaciones sigan las tendencias actuales sin perder la base teórica de la colorimetría clásica.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contáctanos</h2>
                            <p className="mb-4">
                                ¿Tienes alguna duda sobre tu resultado, una sugerencia de mejora o una propuesta de colaboración? Nos encantaría escucharte.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="mailto:catnamerly@gmail.com" className="btn-secondary text-center flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    catnamerly@gmail.com
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
