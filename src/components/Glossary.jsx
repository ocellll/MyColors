import SEOHead from './SEOHead'
import { glossaryData, glossaryCategories, searchGlossary } from '../data/glossaryData'
import { useState } from 'react'

const Glossary = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredTerms = searchQuery
        ? searchGlossary(searchQuery)
        : selectedCategory
            ? glossaryData.filter(term => term.category === selectedCategory)
            : glossaryData

    return (
        <>
            <SEOHead
                title="Glosario de Colorimetría Personal - Términos y Definiciones"
                description="Glosario completo de términos de colorimetría personal: subtono, temperatura del color, contraste, saturación y más. Aprende el vocabulario esencial."
                keywords={['glosario colorimetría', 'términos colorimetría', 'definiciones color']}
                url="/glossary"
            />

            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className=" text-5xl font-bold text-gray-900 mb-6 text-center">
                        Glosario de Colorimetría 📖
                    </h1>
                    <p className="text-xl text-gray-700 text-center mb-12">
                        Todos los términos que necesitas conocer sobre colorimetría personal
                    </p>

                    {/* Search */}
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Buscar término..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl border-2 border-indigo-200 focus:border-indigo-500 outline-none text-lg"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        <button
                            onClick={() => { setSelectedCategory(null); setSearchQuery('') }}
                            className={`px-6 py-3 rounded-full font-medium transition ${!selectedCategory && !searchQuery
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-indigo-100'
                                }`}
                        >
                            Todos
                        </button>
                        {glossaryCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => { setSelectedCategory(category); setSearchQuery('') }}
                                className={`px-6 py-3 rounded-full font-medium transition ${selectedCategory === category
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-indigo-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Terms Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredTerms.map(term => (
                            <div
                                key={term.id}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                            >
                                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{term.term}</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">{term.definition}</p>
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                    {term.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    {filteredTerms.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No se encontraron términos que coincidan con tu búsqueda.
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            ¿Quieres Aprender Más?
                        </h2>
                        <p className="text-lg mb-6">
                            Consulta nuestro blog y FAQ para profundizar en colorimetría
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="/blog"
                                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
                            >
                                Ver Blog
                            </a>
                            <a
                                href="/faq"
                                className="bg-indigo-500 px-8 py-4 rounded-full font-bold hover:bg-indigo-400 transition"
                            >
                                Ver FAQ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Glossary
