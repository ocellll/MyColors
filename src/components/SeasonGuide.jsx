import { Navigate } from 'react-router-dom'
import { seasonGuides } from '../data/seasonGuides'
import SEOHead from './SEOHead'
import AdSenseAd from './AdSenseAd'
import { PromoBannerSquare } from './PromoBanner'

const SeasonGuide = ({ season }) => {
    const guide = seasonGuides[season]

    if (!guide) {
        return <Navigate to="/" replace />
    }

    const { color } = guide
    const lightBg = `bg-${color}-50`
    const borderCol = `border-${color}-200`
    const textCol = `text-${color}-800`
    const titleCol = `text-${color}-600`

    return (
        <>
            <SEOHead
                title={`${guide.title} - MyColors AI`}
                description={guide.description}
                keywords={[`guía ${season}`, `colores ${season}`, `paleta ${season}`, 'colorimetría personal']}
                url={`/guia-${season}`}
            />

            <div className={`min-h-screen ${lightBg} py-20`}>
                <div className="max-w-4xl mx-auto px-4">
                    <header className="text-center mb-16">
                        <span className={`inline-block px-4 py-2 rounded-full bg-white ${titleCol} font-bold text-sm tracking-wide uppercase mb-4 shadow-sm`}>
                            Guía de Estación
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display">
                            {guide.title.split(':')[1]}
                        </h1>
                        <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            {guide.description}
                        </p>
                    </header>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
                        <div className="p-8 md:p-12">
                            <h2 className={`text-3xl font-bold ${titleCol} mb-6`}>Tu Esencia Natural</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                                {guide.intro}
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                {guide.characteristics.map((char) => (
                                    <div key={char.title} className={`bg-gray-50 rounded-2xl p-6 border ${borderCol}`}>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{char.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {char.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <AdSenseAd slot="1234567890" />

                    {/* Palette Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tu Paleta de Colores</h2>
                        <div className="bg-white rounded-3xl shadow-lg p-8">
                            <p className="text-lg text-gray-700 mb-8 text-center">{guide.palette.description}</p>

                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                                    <span>✅</span> Tus Mejores Colores
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {guide.palette.bestColors.map(c => (
                                        <span key={c} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                                    <span>❌</span> Colores a Evitar
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {guide.palette.avoidColors.map(c => (
                                        <span key={c} className="px-4 py-2 bg-red-50 text-red-800 font-medium">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Makeup & Tips */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <section className="bg-white rounded-3xl shadow-lg p-8">
                            <h2 className={`text-2xl font-bold ${titleCol} mb-6`}>Maquillaje Ideal</h2>
                            <ul className="space-y-4">
                                {guide.makeup.tips.map((tip, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700">
                                        <span className="text-lg">💄</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl shadow-lg p-8">
                            <h2 className={`text-2xl font-bold ${titleCol} mb-6`}>Consejos de Estilo</h2>
                            <ul className="space-y-4">
                                {guide.outfitTips.map((tip, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700">
                                        <span className="text-lg">👗</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <AdSenseAd slot="0987654321" />

                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Sigue Descubriendo</h2>
                        <PromoBannerSquare />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeasonGuide
