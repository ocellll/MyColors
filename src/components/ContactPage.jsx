import { useEffect } from 'react'

function ContactPage({ onBack }) {
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

                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h1>
                    <p className="text-gray-600 mb-12">
                        ¿Tienes alguna pregunta, sugerencia o propuesta de colaboración? Estaremos encantados de escucharte.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email de Contacto
                                </h2>
                                <a
                                    href="mailto:hotdogdepeix@gmail.com"
                                    className="text-lg text-purple-600 hover:text-purple-800 hover:underline font-medium"
                                >
                                    hotdogdepeix@gmail.com
                                </a>
                                <p className="text-gray-500 text-sm mt-2">
                                    Tiempo de respuesta estimado: 24-48 horas laborables
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    Redes Sociales
                                </h2>
                                <div className="space-y-3">
                                    <a
                                        href="https://instagram.com/mycolors_ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
                                    >
                                        <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </span>
                                        <span className="font-medium">@mycolors_ai</span>
                                    </a>
                                    <a
                                        href="https://tiktok.com/@mycolorspro"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
                                    >
                                        <span className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                                            </svg>
                                        </span>
                                        <span className="font-medium">@mycolorspro</span>
                                    </a>
                                </div>
                            </section>
                        </div>

                        {/* Contact Topics */}
                        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">¿Sobre qué podemos ayudarte?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-500 mt-1">✓</span>
                                    <div>
                                        <strong className="text-gray-800">Soporte Técnico</strong>
                                        <p className="text-sm text-gray-600">Problemas con el análisis, errores en la app, fallos de carga.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-500 mt-1">✓</span>
                                    <div>
                                        <strong className="text-gray-800">Dudas sobre Resultados</strong>
                                        <p className="text-sm text-gray-600">Preguntas sobre tu estación de color o recomendaciones.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-500 mt-1">✓</span>
                                    <div>
                                        <strong className="text-gray-800">Suscripciones y Pagos</strong>
                                        <p className="text-sm text-gray-600">Facturación, cancelaciones, problemas con Premium.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-500 mt-1">✓</span>
                                    <div>
                                        <strong className="text-gray-800">Colaboraciones</strong>
                                        <p className="text-sm text-gray-600">Propuestas de marketing, partnerships, prensa.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-500 mt-1">✓</span>
                                    <div>
                                        <strong className="text-gray-800">Sugerencias</strong>
                                        <p className="text-sm text-gray-600">Ideas para mejorar la aplicación o nuevas funciones.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FAQ Quick Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Antes de escribirnos, quizás te interese:</h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                                📖 Consulta nuestro <button onClick={onBack} className="text-purple-600 hover:underline">FAQ en la página principal</button>
                            </span>
                            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                                📧 Email: hotdogdepeix@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
