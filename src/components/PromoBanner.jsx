import { useEffect } from 'react'

/**
 * PromoBanner Component - Displays Google AdSense ads
 * Only shown to non-premium users
 */
function PromoBanner({ isPremium, slot, format = 'auto', className = '' }) {
    useEffect(() => {
        // Initialize AdSense after component mounts
        if (!isPremium && typeof window !== 'undefined') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            } catch (e) {
                console.log('AdSense error:', e)
            }
        }
    }, [isPremium])

    // Don't show ads to premium users
    if (isPremium) return null

    return (
        <div className={`ad-container my-6 ${className}`}>
            <div className="text-xs text-gray-400 text-center mb-1">Publicidad</div>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT || "ca-pub-6468719418870560"}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    )
}

/**
 * PromoBannerHorizontal - For between sections
 */
export function PromoBannerHorizontal({ isPremium }) {
    return (
        <PromoBanner
            isPremium={isPremium}
            slot="1234567890" // TODO: Update with real Horizontal Slot ID
            format="horizontal"
            className="max-w-4xl mx-auto px-4"
        />
    )
}

/**
 * PromoBannerSquare - For sidebars or cards
 */
export function PromoBannerSquare({ isPremium }) {
    return (
        <PromoBanner
            isPremium={isPremium}
            slot="0987654321" // TODO: Update with real Square Slot ID
            format="rectangle"
            className="max-w-sm mx-auto"
        />
    )
}

/**
 * PromoBannerInFeed - For between content items
 */
export function PromoBannerInFeed({ isPremium }) {
    return (
        <PromoBanner
            isPremium={isPremium}
            slot="1122334455" // TODO: Update with real InFeed Slot ID
            format="fluid"
            className="w-full"
        />
    )
}

export default PromoBanner
