import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resourcesData } from '../data/resourcesData'
import SEOHead from './SEOHead'
import { PromoBannerSquare } from './PromoBanner'

const Resources = () => {
    const activeCategory = "all" // Initialize state normally, but shown here for context match
    const [currentCategory, setCurrentCategory] = useState("all") // Renaming to avoid confusion if needed, but sticking to existing variable names is safer.

    const categories = [
        { id: 'all', label: 'Todos' },
        { id: 'books', label: 'Libros' },
        { id: 'tools', label: 'Herramientas' },
        { id: 'experts', label: 'Expertos' },
        { id: 'articles', label: 'Artículos' }
    ]

    const filteredResources = currentCategory === 'all'
        ? Object.values(resourcesData).flat()
        : resourcesData[currentCategory] || []

    return (
        <>
            <SEOHead
                title="Recursos de Colorimetría y Estilo | MyColors AI"
                description="Selección curada de libros, herramientas y expertos en colorimetría para profundizar en tu análisis de color personal."
                url="/recursos"
            />

            <div className="min-h-screen pt-28 pb-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Recursos Recomendados 📚
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Nuestra selección de las mejores herramientas y lecturas para dominar tu estilo.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setCurrentCategory(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${currentCategory === cat.id
                                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-purple-50'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredResources.map(resource => (
                            <a
                                key={resource.id}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full border border-gray-100 group"
                            >
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {resource.category === 'books' && '📖'}
                                        {resource.category === 'tools' && '🛠️'}
                                        {resource.category === 'experts' && '👩‍🏫'}
                                        {resource.category === 'articles' && '📰'}
                                    </div>
                                    <span className="text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-purple-600 text-sm font-medium mb-4">
                                    {resource.author || resource.source}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {resource.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between text-sm">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                                        {resource.type || 'Recurso'}
                                    </span>
                                    <span className="text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
                                        Ver más →
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-20">
                        <PromoBannerSquare />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources
