import { useEffect, useRef } from 'prop-types'
import PropTypes from 'prop-types'

/**
 * AdSense component - ONLY use on content pages, NEVER in analysis flow
 * @param {string} slot - AdSense ad slot ID
 * @param {string} format - Ad format ('auto', 'fluid', 'rectangle', etc.)
 * @param {boolean} responsive - Whether ad should be responsive
 */
const AdSenseAd = ({ slot = '1234567890', format = 'auto', responsive = true }) => {
    const adRef = useRef(null)

    useEffect(() => {
        try {
            if (window.adsbygoogle && adRef.current) {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (error) {
            console.error('AdSense error:', error)
        }
    }, [])

    return (
        <div className="my-8">
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-6468719418870560"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive.toString()}
            />
        </div>
    )
}

AdSenseAd.propTypes = {
    slot: PropTypes.string,
    format: PropTypes.string,
    responsive: PropTypes.bool
}

export default AdSenseAd
