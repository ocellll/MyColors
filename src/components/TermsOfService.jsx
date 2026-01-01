import { useEffect } from 'react'

function TermsOfService({ onBack }) {
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
                        Volver
                    </button>

                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Términos de Servicio</h1>
                    <p className="text-gray-500 mb-8">Última actualización: 1 de enero de 2025</p>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Aceptación de los Términos</h2>
                            <p>
                                Al acceder y utilizar MyColors ("la aplicación", "el servicio"), aceptas estar vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes usar la aplicación.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Descripción del Servicio</h2>
                            <p>
                                MyColors es una aplicación de análisis de colorimetría personal que utiliza inteligencia artificial para determinar tu temporada de color y recomendarte una paleta de colores personalizada. El servicio incluye:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Análisis de colorimetría basado en fotos</li>
                                <li>Recomendaciones de paleta de colores</li>
                                <li>Herramienta de draping digital</li>
                                <li>Armario inteligente para análisis de prendas</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Cuentas y Suscripciones</h2>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.1. Cuenta Gratuita</h3>
                            <p>
                                Los usuarios pueden realizar hasta 2 análisis gratuitos cada 22 horas. Los resultados incluyen marca de agua y se mostrarán anuncios.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.2. Suscripción Premium</h3>
                            <p>
                                La suscripción Premium (1,99 €/mes) incluye:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Análisis ilimitados</li>
                                <li>Sin anuncios</li>
                                <li>Descarga de paleta sin marca de agua</li>
                                <li>Paleta de colores extendida</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.3. Cancelación</h3>
                            <p>
                                Puedes cancelar tu suscripción en cualquier momento desde el portal de facturación de Stripe. La cancelación será efectiva al final del período de facturación actual.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Uso Aceptable</h2>
                            <p>
                                Al usar MyColors, aceptas NO:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Subir imágenes que no sean tuyas o para las que no tengas permiso</li>
                                <li>Subir contenido ilegal, ofensivo o inapropiado</li>
                                <li>Intentar eludir las limitaciones del servicio gratuito</li>
                                <li>Usar bots o scripts automatizados para acceder al servicio</li>
                                <li>Revender o redistribuir el servicio sin autorización</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Limitación de Responsabilidad</h2>
                            <p>
                                El análisis de colorimetría proporcionado por MyColors es orientativo y se basa en algoritmos de inteligencia artificial. Los resultados pueden variar según la calidad de la imagen, la iluminación y otros factores.
                            </p>
                            <p className="mt-2">
                                <strong>No garantizamos</strong> que los resultados sean exactos o adecuados para todas las aplicaciones de estilo personal. MyColors no se hace responsable de decisiones de compra o estilo basadas en los resultados del análisis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Propiedad Intelectual</h2>
                            <p>
                                Todo el contenido, diseño, código y funcionalidades de MyColors son propiedad de sus creadores. No está permitido copiar, modificar o distribuir ninguna parte del servicio sin autorización expresa.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Modificaciones</h2>
                            <p>
                                Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación. El uso continuado del servicio después de cualquier cambio constituye tu aceptación de los nuevos términos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Ley Aplicable</h2>
                            <p>
                                Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta en los tribunales de España.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Contacto</h2>
                            <p>
                                Para cualquier consulta sobre estos Términos de Servicio, contacta con nosotros en: <a href="mailto:catnamerly@gmail.com" className="text-purple-600 hover:underline">catnamerly@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService
