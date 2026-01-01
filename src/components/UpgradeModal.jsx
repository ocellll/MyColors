function UpgradeModal({ onClose, onSuccess }) {
    const handleUpgrade = async () => {
        // For demo purposes, we'll simulate a successful upgrade
        // In production, this would integrate with Stripe Checkout

        // Check if Stripe is configured
        const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY

        if (stripePublicKey && stripePublicKey !== 'your_stripe_public_key_here') {
            try {
                // Dynamic import of Stripe
                const { loadStripe } = await import('@stripe/stripe-js')
                const stripe = await loadStripe(stripePublicKey)

                // Create checkout session
                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        priceId: import.meta.env.VITE_STRIPE_PRICE_ID || 'price_xxx',
                        successUrl: `${window.location.origin}?success=true`,
                        cancelUrl: window.location.origin
                    })
                })

                if (!response.ok) {
                    throw new Error('Failed to create checkout session')
                }

                const session = await response.json()
                await stripe.redirectToCheckout({ sessionId: session.id })
            } catch (error) {
                console.error('Stripe error:', error)
                // Show the actual error to help debugging
                alert(`Error: ${error.message || 'Error desconocido'}`)
            }
        } else {
            // Check for missing keys
            console.error('Stripe Public Key is missing or invalid in .env')
            alert('El sistema de pagos no está configurado correctamente. Contacta al soporte.')
        }
    }

    const simulateUpgrade = () => {
        // Simulate processing
        const button = document.getElementById('upgrade-btn')
        if (button) {
            button.disabled = true
            button.innerHTML = '<span class="loading-spinner !w-5 !h-5 !border-2"></span> Procesando...'
        }

        setTimeout(() => {
            onSuccess()
        }, 1500)
    }

    const benefits = [
        { icon: '🚫', text: 'Sin anuncios - Experiencia limpia' },
        { icon: '✨', text: 'Sin marca de agua en descargas' },
        { icon: '🔓', text: 'Análisis ilimitados de fotos' },
        { icon: '🎨', text: 'Paleta extendida de 24 colores' },
        { icon: '💾', text: 'Descarga en alta resolución' },
        { icon: '⚡', text: 'Análisis prioritario más rápido' }
    ]

    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal-content">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Cerrar"
                >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Premium icon */}
                <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl shadow-lg">
                        👑
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Hazte Premium
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Disfruta sin anuncios y sin marcas de agua
                    </p>
                </div>

                {/* Benefits list */}
                <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                        >
                            <span className="text-xl">{benefit.icon}</span>
                            <span className="text-gray-700">{benefit.text}</span>
                            <svg className="w-5 h-5 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-baseline gap-1">
                        <span className="text-lg text-gray-400 line-through mr-2">4,99 €</span>
                        <span className="text-4xl font-bold text-gradient">1,99 €</span>
                        <span className="text-gray-500 font-medium">/ mes</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        Suscripción mensual • Cancela en cualquier momento
                    </p>
                    <p className="text-xs text-green-600 font-medium mt-2">
                        🎉 ¡Oferta de lanzamiento! Ahorra 60%
                    </p>
                </div>

                {/* Upgrade button */}
                <button
                    id="upgrade-btn"
                    onClick={handleUpgrade}
                    className="btn-premium w-full text-lg flex items-center justify-center gap-2 py-4"
                >
                    <span>Suscribirse Ahora</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>

                {/* Trust signals */}
                <div className="flex flex-col items-center gap-4 mt-6">
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Pago seguro</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Garantía 30 días</span>
                        </div>
                    </div>

                    <a
                        href="https://billing.stripe.com/p/login/3cI28r4Qr7Kw0Wx1OXdfG00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-600 hover:underline font-medium"
                    >
                        ¿Ya has pagado? Gestionar o restaurar acceso
                    </a>
                </div>

                {/* Stripe badge */}
                <div className="flex justify-center mt-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <span>Powered by</span>
                        <svg className="h-5" viewBox="0 0 60 25" fill="currentColor">
                            <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-3.67-3.07c0-1.38-.57-2.52-1.98-2.52-1.28 0-2 1.12-2.22 2.52h4.2zM41.24 20.57V5.66h3.67l.17 1.87c.7-1.55 2.07-2.15 3.48-2.15.8 0 1.37.12 1.72.28v3.78c-.35-.11-.85-.21-1.5-.21-1.45 0-2.72.5-3.42 2.03v9.31h-4.12zM32.25 20.57V5.66h4.12v14.91h-4.12zm.05-20.57h4.08v3.64h-4.08V0zM23.48 20.5c-1.23.51-2.71.78-4.27.78-4.52 0-6.67-2.53-6.67-6.42V9.25h-2.16V5.66h2.16V1.73l4.12-.74v4.67h4.47l-.4 3.59h-4.07v5.33c0 2 .8 2.84 2.39 2.84.67 0 1.41-.17 2.22-.5l2.21 3.58zM6.4 8.27c0-3.87-1.62-5.45-5.7-5.45H0V.1h1.01c5.91 0 9.6 2.41 9.6 8.46 0 5.93-3.62 8.9-9.3 8.9H0v-2.73h.73c4.04 0 5.67-1.69 5.67-6.46z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpgradeModal
