
import { useParams, Link, Navigate } from 'react-router-dom'
import { blogArticles } from '../data/blogArticles'
import { PromoBannerSquare } from './PromoBanner'
import SEOHead from './SEOHead'
import AdSenseAd from './AdSenseAd'

function BlogPost() {
    const { slug } = useParams()
    const post = blogArticles.find(p => p.slug === slug)

    if (!post) {
        return <Navigate to="/blog" replace />
    }

    return (
        <>
            <SEOHead
                title={`${post.title} | MyColors Blog`}
                description={post.excerpt}
                image={post.image}
                author={post.author}
                publishedTime={post.publishedDate}
                type="article"
                keywords={post.keywords || ['colorimetría', 'estilo']}
                url={`/blog/${post.slug}`}
            />

            <div className="min-h-screen pt-28 pb-16 bg-white">
                <article className="max-w-3xl mx-auto px-4">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 font-medium mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al blog
                    </Link>

                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <span>{post.author}</span>
                            </div>
                            <span>•</span>
                            <time>{post.publishedDate}</time>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                {post.readTime}
                            </span>
                        </div>
                    </header>

                    <div className="w-full aspect-video rounded-3xl mb-12 overflow-hidden shadow-2xl relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>

                    <AdSenseAd slot="1234567890" />

                    <div className="prose prose-lg prose-purple mx-auto text-gray-700 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <AdSenseAd slot="0987654321" />

                    {/* Author Bio Section */}
                    <div className="mt-16 bg-gray-50 rounded-2xl p-8 flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-2xl flex-shrink-0">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Escrito por {post.author}</h3>
                            <p className="text-gray-600 text-sm">Experta en colorimetría y asesora de imagen personal. Apasionada por ayudar a las personas a descubrir su mejor versión a través del color.</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Te ha gustado este artículo?</h3>
                        <PromoBannerSquare />
                    </div>
                </article>
            </div>
        </>
    )
}

export default BlogPost
