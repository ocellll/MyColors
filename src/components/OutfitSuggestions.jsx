import { OUTFIT_ITEMS } from '../data/outfitLinks'

function OutfitSuggestions({ season, colors }) {
    const outfits = OUTFIT_ITEMS[season] || []

    if (outfits.length === 0) return null

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    🛍️ Compra ropa en tus colores
                </h3>
                <p className="text-center text-gray-600 mb-12">
                    Encuentra prendas perfectas para tu paleta en las mejores tiendas
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outfits.map((outfit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Image placeholder with color */}
                            <div
                                className="h-48 flex items-center justify-center relative overflow-hidden"
                                style={{ backgroundColor: outfit.color }}
                            >
                                <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                                    {outfit.icon}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            <div className="p-5">
                                {/* Color indicator */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div
                                        className="w-4 h-4 rounded-full shadow-sm border border-gray-200"
                                        style={{ backgroundColor: outfit.color }}
                                    />
                                    <span className="text-xs text-gray-500">{outfit.colorName}</span>
                                </div>

                                <h4 className="font-bold text-gray-800 mb-3">
                                    {outfit.item}
                                </h4>

                                {/* Store links */}
                                <div className="space-y-2">
                                    {outfit.stores.map((store, storeIndex) => (
                                        <a
                                            key={storeIndex}
                                            href={store.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group/store"
                                        >
                                            <span className="text-sm font-medium text-gray-700">
                                                Ver en {store.name}
                                            </span>
                                            <svg
                                                className="w-4 h-4 text-gray-400 group-hover/store:text-gray-600 group-hover/store:translate-x-1 transition-all"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-500 mt-8">
                    * Los enlaces pueden contener códigos de afiliado que nos ayudan a mantener el servicio gratuito
                </p>
            </div>
        </section>
    )
}

export default OutfitSuggestions
