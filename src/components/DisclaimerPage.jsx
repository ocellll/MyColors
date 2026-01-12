import { useEffect } from 'react'

function DisclaimerPage({ onBack }) {
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

                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Aviso Legal (Disclaimer)</h1>
                    <p className="text-gray-500 mb-8">Última actualización: 12 de enero de 2026</p>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Naturaleza del Servicio</h2>
                            <p>
                                MyColors es una aplicación web de entretenimiento y orientación personal que utiliza tecnología de inteligencia artificial para realizar análisis de colorimetría. Los resultados proporcionados son <strong>orientativos y no constituyen asesoramiento profesional</strong> de imagen, moda o estética.
                            </p>
                            <p className="mt-2">
                                El análisis se basa en algoritmos que procesan la información visual de las fotografías subidas por los usuarios. La precisión del resultado puede verse afectada por múltiples factores, incluyendo pero no limitado a: la calidad de la imagen, la iluminación, el uso de filtros, maquillaje, tintes capilares o lentes de contacto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Limitación de Responsabilidad</h2>
                            <p>
                                MyColors y sus creadores <strong>no asumen ninguna responsabilidad</strong> por:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Decisiones de compra de ropa, maquillaje o accesorios basadas en los resultados del análisis.</li>
                                <li>Insatisfacción con los colores recomendados o cualquier resultado percibido como incorrecto.</li>
                                <li>Pérdidas económicas derivadas del uso del servicio.</li>
                                <li>Daños directos, indirectos, incidentales o consecuentes relacionados con el uso de la aplicación.</li>
                            </ul>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                                <p className="text-yellow-800 text-sm">
                                    <strong>⚠️ Importante:</strong> Si buscas un análisis profesional de colorimetría con garantías, te recomendamos consultar con un asesor de imagen certificado.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Uso de Inteligencia Artificial</h2>
                            <p>
                                Nuestra aplicación emplea modelos de IA para el procesamiento de imágenes. Es importante entender que:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Los algoritmos de IA no son infalibles y pueden cometer errores.</li>
                                <li>Los resultados pueden variar entre diferentes fotos de la misma persona.</li>
                                <li>La tecnología está en constante evolución y mejora.</li>
                                <li>No almacenamos las fotos; se procesan en tiempo real y se eliminan inmediatamente.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Publicidad y Contenido de Terceros</h2>
                            <p>
                                MyColors muestra anuncios proporcionados por <strong>Google AdSense</strong>. Estos anuncios son gestionados por Google y pueden estar personalizados según tu historial de navegación.
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>No tenemos control sobre el contenido específico de los anuncios mostrados.</li>
                                <li>Google utiliza cookies para personalizar la publicidad.</li>
                                <li>Puedes configurar tus preferencias de anuncios en <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Google Ad Settings</a>.</li>
                                <li>La aparición de un anuncio no implica nuestra recomendación del producto o servicio anunciado.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Propiedad Intelectual</h2>
                            <p>
                                Todo el contenido de MyColors, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, código fuente y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.
                            </p>
                            <p className="mt-2">
                                Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier parte del contenido sin autorización expresa por escrito.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Imágenes de Stock y Recursos</h2>
                            <p>
                                Las imágenes decorativas utilizadas en nuestro blog y páginas informativas provienen de bancos de imágenes con licencias apropiadas (como Unsplash). Estas imágenes son meramente ilustrativas y no representan a usuarios reales de la aplicación.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Enlaces Externos</h2>
                            <p>
                                Nuestra web puede contener enlaces a sitios externos (redes sociales, pasarelas de pago, etc.). No nos hacemos responsables del contenido, políticas de privacidad o prácticas de sitios de terceros.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Modificaciones</h2>
                            <p>
                                Nos reservamos el derecho de modificar este Aviso Legal en cualquier momento. Las modificaciones serán efectivas desde su publicación en esta página. Te recomendamos revisar periódicamente este documento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Contacto</h2>
                            <p>
                                Para cualquier consulta relacionada con este Aviso Legal, puedes contactarnos en: <a href="mailto:hotdogdepeix@gmail.com" className="text-purple-600 hover:underline">hotdogdepeix@gmail.com</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Ley Aplicable</h2>
                            <p>
                                Este Aviso Legal se rige por las leyes de España. Para cualquier controversia derivada de este documento, ambas partes se someten a la jurisdicción de los tribunales de España.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisclaimerPage
