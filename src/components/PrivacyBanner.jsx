
import { useState, useEffect } from 'react'

function PrivacyBanner() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('mycolors_cookie_consent')
        if (!consent) {
            setShow(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('mycolors_cookie_consent', 'true')
        setShow(false)
        // Here you would typically initialize non-essential cookies/analytics if not already loaded
    }

    if (!show) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[1000] p-4 animate-slide-up">
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">🍪 Valoramos tu privacidad</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrar anuncios personalizados.
                        Al continuar navegando, aceptas nuestra <a href="/privacy" className="text-purple-600 hover:underline font-medium">Política de Privacidad</a>.
                    </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button
                        onClick={handleAccept}
                        className="btn-primary py-2 px-6 text-sm whitespace-nowrap flex-1 md:flex-none justify-center"
                    >
                        Aceptar todo
                    </button>
                    <button
                        onClick={() => setShow(false)} // Simple close for now, strict compliance might need 'Refuse'
                        className="btn-secondary py-2 px-6 text-sm whitespace-nowrap flex-1 md:flex-none justify-center"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PrivacyBanner
