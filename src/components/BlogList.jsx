
import { blogPosts } from '../data/blogPosts'

function BlogList({ onPostClick, onBack }) {
    return (
        <div className="min-h-screen pt-28 pb-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver al inicio
                    </button>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Blog de Colorimetría</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trucos, guías y consejos expertos para potenciar tu imagen personal a través del color.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <article
                            key={post.id}
                            onClick={() => onPostClick(post.id)}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{post.category}</span>
                                    <span>{post.readTime} lectura</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-purple-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                                    <span>{post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogList
