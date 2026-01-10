
import { blogPosts } from '../data/blogPosts'
import { PromoBannerSquare } from './PromoBanner'

function BlogPost({ postId, onBack }) {
    const post = blogPosts.find(p => p.id === postId)

    if (!post) return null

    return (
        <div className="min-h-screen pt-28 pb-16 bg-white">
            <article className="max-w-3xl mx-auto px-4">
                <button
                    onClick={onBack}
                    className="mb-8 text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al blog
                </button>

                <header className="mb-8 text-center">
                    <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} de lectura</span>
                    </div>
                </header>

                <div className="w-full h-64 md:h-96 rounded-3xl mb-12 overflow-hidden shadow-xl relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div
                    className="prose prose-lg prose-purple mx-auto text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <PromoBannerSquare />
                </div>
            </article>
        </div>
    )
}

export default BlogPost
