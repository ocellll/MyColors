import { useEffect } from 'react'

/**
 * AdBanner Component - Displays Google AdSense ads
 * Only shown to non-premium users
 */
function AdBanner({ isPremium, slot, format = 'auto', className = '' }) {
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
 * AdBannerHorizontal - For between sections
 */
export function AdBannerHorizontal({ isPremium }) {
    return (
        <AdBanner
            isPremium={isPremium}
            slot="1234567890"
            format="horizontal"
            className="max-w-4xl mx-auto px-4"
        />
    )
}

/**
 * AdBannerSquare - For sidebars or cards
 */
export function AdBannerSquare({ isPremium }) {
    return (
        <AdBanner
            isPremium={isPremium}
            slot="0987654321"
            format="rectangle"
            className="max-w-sm mx-auto"
        />
    )
}

/**
 * AdBannerInFeed - For between content items
 */
export function AdBannerInFeed({ isPremium }) {
    return (
        <AdBanner
            isPremium={isPremium}
            slot="1122334455"
            format="fluid"
            className="w-full"
        />
    )
}

export default AdBanner
