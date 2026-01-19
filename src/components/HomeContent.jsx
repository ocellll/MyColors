const HomeContent = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="prose prose-lg mx-auto text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Descubre Tu Mejor Versión con la Colorimetría Personal
                </h2>

                <p className="lead text-xl text-center mb-10 text-gray-600">
                    ¿Alguna vez has notado que ciertos colores te hacen lucir cansada, mientras que otros iluminan tu rostro al instante?
                    No es magia, es <strong>colorimetría</strong>.
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-10 shadow-sm">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4">¿Qué es el Análisis de Color Personal?</h3>
                    <p className="mb-4">
                        El análisis de color personal, o colorimetría estacional, es el estudio de cómo la luz interactúa con tu pigmentación natural
                        (piel, ojos y cabello). El objetivo es identificar qué gama de colores armoniza mejor contigo, creando un efecto óptico de
                        suavidad, salud y vitalidad.
                    </p>
                    <p className="mb-0">
                        Tradicionalmente, este servicio costaba cientos de euros y requería citas presenciales.
                        <strong> MyColors AI democratiza este conocimiento</strong>, utilizando inteligencia artificial avanzada para analizar tus
                        características únicas en segundos y recomendarte tu "estación" de color ideal.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Los Beneficios de Conocer Tu Paleta</h3>
                <ul className="grid md:grid-cols-2 gap-4 mb-10 list-none pl-0">
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="text-2xl mr-3">✨</span>
                        <div>
                            <strong>Ilumina tu rostro</strong>
                            <p className="text-sm text-gray-500 m-0">Disimula ojeras, manchas y líneas de expresión de forma natural.</p>
                        </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="text-2xl mr-3">💰</span>
                        <div>
                            <strong>Ahorra dinero</strong>
                            <p className="text-sm text-gray-500 m-0">Evita comprar ropa que nunca usarás porque "algo no se ve bien".</p>
                        </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="text-2xl mr-3">👗</span>
                        <div>
                            <strong>Armario coherente</strong>
                            <p className="text-sm text-gray-500 m-0">Todos los colores de tu paleta combinan entre sí, facilitando tus outfits.</p>
                        </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="text-2xl mr-3">🚀</span>
                        <div>
                            <strong>Más confianza</strong>
                            <p className="text-sm text-gray-500 m-0">Siéntete segura sabiendo que lo que llevas puesto realza tu belleza natural.</p>
                        </div>
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Las 4 Estaciones del Color</h3>
                <p className="mb-6">
                    El sistema de colorimetría se divide en 4 estaciones principales, inspiradas en los colores de la naturaleza durante cada ciclo:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                        <h4 className="text-xl font-bold text-yellow-700 mb-2">🌸 Primavera (Cálida y Clara)</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Colores frescos, vivos y brillantes. Piensa en un jardín floreciendo: verdes lima, corales, amarillos narciso y turquesas.
                        </p>
                        <a href="/guia-primavera" className="text-yellow-600 font-bold hover:underline text-sm">Ver guía completa →</a>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h4 className="text-xl font-bold text-blue-700 mb-2">☀️ Verano (Fría y Suave)</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Tonos pasteles, empolvados y elegantes. Piensa en un paisaje neblinoso: lilas, azules cielo, rosas suaves y grises perlados.
                        </p>
                        <a href="/guia-verano" className="text-blue-600 font-bold hover:underline text-sm">Ver guía completa →</a>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                        <h4 className="text-xl font-bold text-orange-700 mb-2">🍂 Otoño (Cálida y Profunda)</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Colores ricos, terrosos y dorados. Piensa en un bosque en octubre: mostazas, terracotas, verdes oliva y marrones chocolate.
                        </p>
                        <a href="/guia-otono" className="text-orange-600 font-bold hover:underline text-sm">Ver guía completa →</a>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                        <h4 className="text-xl font-bold text-indigo-700 mb-2">❄️ Invierno (Fría y Brillante)</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Contrastes fuertes y colores puros. Piensa en la nieve bajo el sol: blancos puros, negros intensos, rojos rubí y azules zafiro.
                        </p>
                        <a href="/guia-invierno" className="text-indigo-600 font-bold hover:underline text-sm">Ver guía completa →</a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo Funciona Nuestro Test?</h3>
                <p>
                    Utilizamos un algoritmo de visión por computadora entrenado con miles de rostros. El proceso es simple:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-8">
                    <li><strong>Sube una selfie:</strong> Preferiblemente con luz natural y sin maquillaje.</li>
                    <li><strong>Análisis automático:</strong> Detectamos tu tono de piel, subtono, contraste y color de ojos/cabello.</li>
                    <li><strong>Resultados instantáneos:</strong> Descubre tu estación y recibe tu paleta personalizada al momento.</li>
                </ol>

                {/* Color Theory Details (Added for depth) */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Los 3 Pilares del Análisis de Color</h3>
                    <div className="grid md:grid-cols-3 gap-6 not-prose">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">🎨</div>
                            <h4 className="font-bold text-gray-800 mb-2">1. Matiz (Hue)</h4>
                            <p className="text-sm text-gray-600">
                                ¿Tu piel tiene un subtono <strong>Cálido</strong> (dorado) o <strong>Frío</strong> (rosado)? Esta es la primera gran división.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">💡</div>
                            <h4 className="font-bold text-gray-800 mb-2">2. Valor (Value)</h4>
                            <p className="text-sm text-gray-600">
                                ¿Te favorecen más los colores <strong>Claros</strong> y luminosos o los <strong>Oscuros</strong> y profundos?
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-2xl">✨</div>
                            <h4 className="font-bold text-gray-800 mb-2">3. Croma (Chroma)</h4>
                            <p className="text-sm text-gray-600">
                                ¿Brillas con colores <strong>Vivos</strong> y saturados o te ves mejor con tonos <strong>Suaves</strong> y apagados?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl mb-12 text-center border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">¿Tienes más dudas?</h3>
                    <p className="text-gray-600 text-sm mb-4">Explicamos todo sobre la metodología, la privacidad y los resultados en nuestra sección de preguntas frecuentes.</p>
                    <a href="/faq" className="text-purple-600 font-bold hover:underline text-sm">Ver Preguntas Frecuentes →</a>
                </div>

                <div className="bg-purple-600 text-white p-8 rounded-2xl text-center shadow-lg">
                    <h3 className="text-2xl font-bold mb-2 text-white">¿Lista para descubrir tus colores?</h3>
                    <p className="mb-6 text-purple-100">Únete a más de 50,000 personas que ya han transformado su estilo.</p>
                    <div className="animate-bounce">
                        <span className="text-3xl">👇</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent

