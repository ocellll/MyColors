function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h4 className="text-xl font-bold text-gradient mb-4">MyColors</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            La herramienta líder en análisis de colorimetría personal por IA.
                            Descubre tu temporada de color y potencia tu imagen personal.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4">Temporadas</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>Primavera Cálida</li>
                            <li>Verano Frío</li>
                            <li>Otoño Suave</li>
                            <li>Invierno Brillante</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>Políticas de Privacidad</li>
                            <li>Términos de Servicio</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2025 MyColors. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-purple-500 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-purple-500 transition-colors">TikTok</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
