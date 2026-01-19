
import { useParams, Link, Navigate } from 'react-router-dom'
import { blogArticles } from '../data/blogArticles'
import { PromoBannerSquare } from './PromoBanner'
import SEOHead from './SEOHead'
import AdSenseAd from './AdSenseAd'

// Utility to format text with bold, lists, and colored keywords
const RichText = ({ text }) => {
    if (!text) return null;

    // Split text into paragraphs
    const paragraphs = text.split('\n\n');

    return (
        <div className="space-y-4">
            {paragraphs.map((paragraph, pIndex) => {
                // Check if it's a list
                if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('•')) {
                    const items = paragraph.split('\n').filter(line => line.trim());
                    return (
                        <ul key={pIndex} className="list-disc pl-6 space-y-2 my-4 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                            {items.map((item, iIndex) => {
                                const cleanItem = item.replace(/^[-•]\s*/, '');
                                return <li key={iIndex}>{parseInlineStyles(cleanItem)}</li>;
                            })}
                        </ul>
                    );
                }

                // Regular paragraph
                return (
                    <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed text-lg">
                        {parseInlineStyles(paragraph)}
                    </p>
                );
            })}
        </div>
    );
};

const parseInlineStyles = (text) => {
    // 1. Split by bold markers
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            // It's bold
            const content = part.slice(2, -2);
            return <strong key={index} className="font-extrabold text-gray-900">{parseKeywords(content)}</strong>;
        } else {
            // Regular text
            return <span key={index}>{parseKeywords(part)}</span>;
        }
    });
};

const FAQSection = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <section className="my-12 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Preguntas Frecuentes
            </h3>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <summary className="flex cursor-pointer items-center justify-between p-5 text-gray-900 font-medium hover:bg-purple-50 transition-colors marker:content-none">
                            <span>{item.question}</span>
                            <span className="transition group-open:rotate-180 text-purple-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </summary>
                        <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed">
                            <p>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};

const RelatedArticles = ({ currentArticleId, category }) => {
    // Filter articles: same category, not current one, limit to 3
    const related = blogArticles
        .filter(article => article.category === category && article.id !== currentArticleId)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <aside className="my-16 border-t border-gray-100 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(article => (
                    <Link key={article.id} to={`/blog/${article.slug}`} className="group block">
                        <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2 block">{article.category}</span>
                        <h4 className="font-bold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors">
                            {article.title}
                        </h4>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

const parseKeywords = (text) => {
    // Regex to match keywords case-insensitive
    const regex = /(Primavera|Verano|Otoño|Invierno|Cálido|Frío|Neutro)/gi;
    const parts = text.split(regex);

    return parts.map((part, index) => {
        const lower = part.toLowerCase();
        let className = "";

        // Assign colors based on season/term
        if (lower.includes('primavera')) className = "text-green-600 font-semibold";
        else if (lower.includes('verano')) className = "text-blue-400 font-semibold";
        else if (lower.includes('otoño')) className = "text-orange-600 font-semibold";
        else if (lower.includes('invierno')) className = "text-indigo-700 font-semibold";
        else if (lower.includes('cálido')) className = "text-amber-600";
        else if (lower.includes('frío')) className = "text-blue-500";
        else if (lower.includes('neutro')) className = "text-gray-500";

        if (className) {
            return <span key={index} className={`${className} bg-opacity-10 px-0.5 rounded`}>{part}</span>;
        }
        return part;
    });
};

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
                article={post} // Pass full post for schema generation
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
                                {post.readingTime}
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
                        {/* Intro */}
                        <div className="mb-8">
                            <RichText text={post.content.intro} />
                        </div>

                        {/* Sections */}
                        {post.content.sections && post.content.sections.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {section.heading}
                                </h2>
                                <RichText text={section.content} />
                            </div>
                        ))}

                        {/* Conclusion */}
                        <div className="mt-8 p-6 bg-purple-50 rounded-2xl border border-purple-100">
                            <h3 className="text-xl font-bold text-purple-900 mb-4">Conclusión</h3>
                            <div className="text-purple-800">
                                <RichText text={post.content.conclusion} />
                            </div>
                        </div>

                        {/* FAQ Section */}
                        {post.content.faq && <FAQSection items={post.content.faq} />}
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

                    {/* Related Articles */}
                    <RelatedArticles currentArticleId={post.id} category={post.category} />



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
