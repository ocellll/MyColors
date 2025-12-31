const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).json({ error: 'Method Not Allowed' })
    }

    try {
        const { priceId, successUrl, cancelUrl } = req.body

        // Validate required fields
        if (!priceId) {
            return res.status(400).json({ error: 'Price ID is required' })
        }

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: successUrl || `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl || `${req.headers.origin}/`,
            metadata: {
                product: 'MyColors Premium',
                source: 'web_app'
            },
            allow_promotion_codes: true,
            billing_address_collection: 'auto'
        })

        // Return the session ID for client-side redirect
        res.status(200).json({
            id: session.id,
            url: session.url
        })
    } catch (err) {
        console.error('Stripe error:', err)
        res.status(500).json({
            error: 'Error creating checkout session',
            message: err.message
        })
    }
}
