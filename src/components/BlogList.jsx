
import { Link } from 'react-router-dom'
import { blogArticles } from '../data/blogArticles'
import SEOHead from './SEOHead'

function BlogList() {
    return (
        <>
            <SEOHead
                title="Blog de Colorimetría y Estilo | MyColors AI"
                description="Consejos expertos sobre colorimetría personal, moda, belleza y estilo. Aprende a combinar colores y potenciar tu imagen."
                keywords={['blog colorimetría', 'consejos moda', 'estilo personal', 'combinar colores']}
                url="/blog"
            />

            <div className="min-h-screen pt-28 pb-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Blog de Colorimetría ✍️
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Trucos, guías y consejos expertos para potenciar tu imagen personal a través del color.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogArticles.map(post => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-[10px]">
                                                {post.author.charAt(0)}
                                            </div>
                                            <span>{post.author}</span>
                                        </div>
                                        <span>{post.publishedDate}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogList
