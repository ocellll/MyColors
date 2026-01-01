import { useEffect } from 'react'

function PrivacyPolicy({ onBack }) {
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

                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Política de Privacidad</h1>
                    <p className="text-gray-500 mb-8">Última actualización: 1 de enero de 2025</p>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Introducción</h2>
                            <p>
                                En MyColors ("nosotros", "nuestro" o "la aplicación"), respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra aplicación web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Datos que Recopilamos</h2>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.1. Imágenes</h3>
                            <p>
                                Cuando subes una foto para el análisis de colorimetría, la imagen se procesa temporalmente para extraer información de color. <strong>No almacenamos tus fotos en nuestros servidores.</strong> Las imágenes se procesan en tiempo real y se descartan inmediatamente después del análisis.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.2. Datos de Uso</h3>
                            <p>
                                Recopilamos datos anónimos de uso a través de Google Analytics, incluyendo:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Tipo de dispositivo y navegador</li>
                                <li>Páginas visitadas y tiempo de permanencia</li>
                                <li>País de origen (a nivel agregado)</li>
                                <li>Interacciones con la aplicación</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.3. Datos de Pago</h3>
                            <p>
                                Si te suscribes a Premium, los pagos se procesan a través de Stripe. <strong>No tenemos acceso a los datos de tu tarjeta de crédito.</strong> Stripe cumple con los estándares PCI-DSS para la seguridad de pagos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Cómo Usamos tus Datos</h2>
                            <ul className="list-disc pl-6">
                                <li>Proporcionar el servicio de análisis de colorimetría.</li>
                                <li>Mejorar la experiencia del usuario y optimizar la aplicación.</li>
                                <li>Procesar pagos de suscripción Premium.</li>
                                <li>Mostrar anuncios relevantes (solo para usuarios no Premium).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Almacenamiento Local</h2>
                            <p>
                                Utilizamos el almacenamiento local de tu navegador (localStorage) para guardar:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Tu estado de suscripción</li>
                                <li>El número de análisis realizados</li>
                                <li>Tu armario de ropa (si usas esta función)</li>
                            </ul>
                            <p className="mt-2">
                                Puedes borrar estos datos en cualquier momento desde la configuración de tu navegador.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Publicidad</h2>
                            <p>
                                Mostramos anuncios a través de Google AdSense. Google puede usar cookies para mostrar anuncios personalizados basados en tu historial de navegación. Puedes optar por no recibir anuncios personalizados en <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">la configuración de anuncios de Google</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Tus Derechos</h2>
                            <p>
                                Bajo el RGPD (si eres residente de la UE), tienes derecho a:
                            </p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Acceder a tus datos personales</li>
                                <li>Rectificar datos incorrectos</li>
                                <li>Solicitar la eliminación de tus datos</li>
                                <li>Oponerte al procesamiento de tus datos</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Contacto</h2>
                            <p>
                                Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en: <a href="mailto:contacto@mycolors.app" className="text-purple-600 hover:underline">contacto@mycolors.app</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
