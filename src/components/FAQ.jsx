import SEOHead from './SEOHead'
import { faqData, faqCategories } from '../data/faqData'
import { useState } from 'react'

const FAQ = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredFAQs = faqData.filter(faq => {
        const matchesCategory = !selectedCategory || faq.category === selectedCategory
        const matchesSearch = !searchQuery ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <>
            <SEOHead
                title="Preguntas Frecuentes sobre Colorimetría Personal"
                description="Encuentra respuestas a las 20 preguntas más comunes sobre colorimetría personal, análisis de color, temporadas y cómo aplicar tu paleta de colores."
                keywords={['FAQ colorimetría', 'preguntas colorimetría', 'dudas análisis de color']}
                url="/faq"
            />

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Preguntas Frecuentes 💬
                        </h1>
                        <p className="text-xl text-gray-700">
                            Todo lo que necesitas saber sobre colorimetría personal
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Buscar pregunta..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 outline-none text-lg"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-6 py-3 rounded-full font-medium transition ${!selectedCategory
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-purple-100'
                                }`}
                        >
                            Todas
                        </button>
                        {faqCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition ${selectedCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-purple-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* FAQs */}
                    <div className="space-y-4">
                        {filteredFAQs.map(faq => (
                            <details
                                key={faq.id}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition group"
                            >
                                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                                    <span>{faq.question}</span>
                                    <span className="text-purple-600 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </div>
                                <div className="mt-3">
                                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                        {faq.category}
                                    </span>
                                </div>
                            </details>
                        ))}
                    </div>

                    {filteredFAQs.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No se encontraron preguntas que coincidan con tu búsqueda.
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            ¿No encuentras tu respuesta?
                        </h2>
                        <p className="text-lg mb-6">
                            Contáctanos y te ayudaremos personalmente
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>

            {/* Structured Data for FAQPage */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqData.map(faq => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: faq.answer
                        }
                    }))
                })}
            </script>
        </>
    )
}

export default FAQ
