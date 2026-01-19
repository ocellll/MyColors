import { Link } from 'react-router-dom'
import UploadSection from './UploadSection'
import HomeContent from './HomeContent'
import { blogArticles } from '../data/blogArticles'
import SEOHead from './SEOHead'

const HomePage = ({
    imagePreview,
    onImageUpload,
    onAnalyze,
    isAnalyzing,
    canAnalyze,
    onUpgradeClick,
    isPremium
}) => {
    return (
        <>
            <SEOHead />

            <HomeContent />

            <div id="analyze" className="scroll-mt-24">
                <UploadSection
                    imagePreview={imagePreview}
                    onImageUpload={onImageUpload}
                    onAnalyze={onAnalyze}
                    isAnalyzing={isAnalyzing}
                    canAnalyze={canAnalyze}
                    onUpgradeClick={onUpgradeClick}
                    isPremium={isPremium}
                />
            </div>

            {/* Latest Blog Posts Preview */}
            <section className="py-20 px-4 max-w-6xl mx-auto border-t border-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Últimas Novedades 📰</h2>
                    <p className="text-gray-600">Descubre consejos expertos sobre colorimetría, moda y maquillaje</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogArticles.slice(0, 3).map(post => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 block"
                        >
                            <div className="aspect-[16/9] overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400 text-xs flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/blog"
                        className="btn-secondary px-8 py-3 rounded-full font-medium inline-block hover:shadow-lg transition-all"
                    >
                        Ver todos los artículos
                    </Link>
                </div>
            </section>
        </>
    )
}

export default HomePage
