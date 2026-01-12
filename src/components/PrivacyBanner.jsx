
import { useState, useEffect } from 'react'

function PrivacyBanner() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('mycolors_cookie_consent')
        if (!consent) {
            // Small delay to avoid showing immediately on page load
            const timer = setTimeout(() => setShow(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('mycolors_cookie_consent', 'accepted')
        setShow(false)
        // Enable personalized ads
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'ad_personalization': 'granted',
                'ad_user_data': 'granted'
            })
        }
    }

    const handleReject = () => {
        localStorage.setItem('mycolors_cookie_consent', 'rejected')
        setShow(false)
        // Disable personalized ads but allow basic functionality
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_personalization': 'denied',
                'ad_user_data': 'denied'
            })
        }
    }

    if (!show) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[1000] p-4 animate-slide-up">
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            🍪 Tu privacidad es importante
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-2">
                            Utilizamos cookies propias y de terceros (incluido Google AdSense) para mejorar tu experiencia, analizar el tráfico y mostrarte anuncios personalizados basados en tu navegación.
                        </p>
                        <p className="text-xs text-gray-500">
                            Puedes aceptar todas las cookies, rechazarlas (se mostrarán anuncios no personalizados) o consultar nuestra{' '}
                            <a href="/?p=privacy" className="text-purple-600 hover:underline font-medium">Política de Privacidad</a>
                            {' '}para más información.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={handleAccept}
                            className="btn-primary py-2.5 px-6 text-sm whitespace-nowrap flex-1 md:flex-none justify-center"
                        >
                            Aceptar todo
                        </button>
                        <button
                            onClick={handleReject}
                            className="btn-secondary py-2.5 px-6 text-sm whitespace-nowrap flex-1 md:flex-none justify-center border border-gray-300"
                        >
                            Solo necesarias
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyBanner
