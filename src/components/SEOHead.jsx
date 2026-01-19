import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

const SEOHead = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    article = null,
    noindex = false
}) => {
    const siteTitle = 'MyColors AI'
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
    const baseUrl = 'https://mycolorspro.vercel.app'
    const fullUrl = url ? `${baseUrl}${url}` : baseUrl
    const defaultImage = `${baseUrl}/og-image.jpg`
    const ogImage = image || defaultImage

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            {description && <meta property="twitter:description" content={description} />}
            <meta property="twitter:image" content={ogImage} />

            {/* Article specific tags */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedDate} />
                    <meta property="article:author" content={article.author} />
                    {article.tags && article.tags.map((tag, index) => (
                        <meta key={index} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Structured Data for Article */}
            {article && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: title,
                        description: description,
                        image: ogImage,
                        author: {
                            '@type': 'Person',
                            name: article.author
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: siteTitle,
                            logo: {
                                '@type': 'ImageObject',
                                url: `${baseUrl}/favicon.svg`
                            }
                        },
                        datePublished: article.publishedDate,
                        dateModified: article.modifiedDate || article.publishedDate
                    })}
                </script>
            )}

            {/* Structured Data for FAQPage */}
            {article && article.content && article.content.faq && article.content.faq.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: article.content.faq.map(item => ({
                            '@type': 'Question',
                            name: item.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: item.answer
                            }
                        }))
                    })}
                </script>
            )}
        </Helmet>
    )
}

SEOHead.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    article: PropTypes.shape({
        publishedDate: PropTypes.string,
        modifiedDate: PropTypes.string,
        author: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        faq: PropTypes.arrayOf(PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string
        }))
    }),
    noindex: PropTypes.bool
}

export default SEOHead
