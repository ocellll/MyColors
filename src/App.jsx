import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ResultsPage from './components/ResultsPage'
import UpgradeModal from './components/UpgradeModal'
import WardrobeSection from './components/WardrobeSection'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import AboutUs from './components/AboutUs'
import ContactPage from './components/ContactPage'
import DisclaimerPage from './components/DisclaimerPage'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Glossary from './components/Glossary'
import Resources from './components/Resources'
import SeasonGuide from './components/SeasonGuide'
import PrivacyBanner from './components/PrivacyBanner'
import { analyzeImage } from './utils/colorAnalysis'
import { determineSeason } from './utils/seasonDetection'
import { SEASON_PALETTES, PREMIUM_PALETTES } from './data/seasonColors'

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    // --- STATE MANAGEMENT ---

    // User state (Premium, Usage limits)
    const [userState, setUserState] = useState(() => {
        const saved = localStorage.getItem('mycolors_user')
        return saved ? JSON.parse(saved) : {
            analyzesUsed: 0,
            isPremium: false,
            lastAnalysisDate: null
        }
    })

    // Wardrobe state
    const [wardrobe, setWardrobe] = useState(() => {
        const saved = localStorage.getItem('mycolors_wardrobe')
        return saved ? JSON.parse(saved) : []
    })

    // Application state
    const [uploadedImage, setUploadedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [analysisResult, setAnalysisResult] = useState(() => {
        const saved = localStorage.getItem('mycolors_result')
        return saved ? JSON.parse(saved) : null
    })
    const [showUpgradeModal, setShowUpgradeModal] = useState(false)
    const [toast, setToast] = useState(null)

    // --- PERSISTENCE EFFECT ---
    useEffect(() => {
        localStorage.setItem('mycolors_user', JSON.stringify(userState))
    }, [userState])

    useEffect(() => {
        localStorage.setItem('mycolors_wardrobe', JSON.stringify(wardrobe))
    }, [wardrobe])

    useEffect(() => {
        localStorage.setItem('mycolors_result', JSON.stringify(analysisResult))
    }, [analysisResult])

    // --- PAYMENT CHECK ---
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if (params.get('success') === 'true' && !userState.isPremium) {
            setUserState(prev => ({ ...prev, isPremium: true }))
            showToast('¡Pago completado! Ya eres Premium ✨')
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname)
        }
    }, [])

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    // --- CORE LOGIC ---

    const canAnalyze = () => {
        if (userState.isPremium) return true
        if (userState.analyzesUsed < 2) return true
        if (userState.lastAnalysisDate) {
            const lastDate = new Date(userState.lastAnalysisDate).getTime()
            const now = new Date().getTime()
            const diffHours = (now - lastDate) / (1000 * 60 * 60)
            if (diffHours >= 22) return true
        }
        return false
    }

    const showToast = (message, duration = 3000) => {
        setToast(message)
        if (window._toastTimeout) clearTimeout(window._toastTimeout)
        window._toastTimeout = setTimeout(() => setToast(null), duration)
    }

    const handleImageUpload = (file) => {
        if (!file) {
            setUploadedImage(null)
            setImagePreview(null)
            return
        }
        if (!file.type.startsWith('image/')) {
            showToast('Por favor, sube una imagen válida')
            return
        }
        if (file.size > 10 * 1024 * 1024) {
            showToast('La imagen es demasiado grande. Máximo 10MB')
            return
        }
        setUploadedImage(file)
        const reader = new FileReader()
        reader.onload = (e) => setImagePreview(e.target.result)
        reader.readAsDataURL(file)
    }

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    const handleAnalyze = async () => {
        if (!uploadedImage) {
            showToast('Por favor, sube una foto primero')
            return
        }

        if (!canAnalyze()) {
            setShowUpgradeModal(true)
            return
        }

        setIsAnalyzing(true)

        try {
            let seasonResult;
            let skinTone;

            try {
                // Try Real AI Analysis
                const imageBase64 = await fileToBase64(uploadedImage)
                const response = await fetch('/api/analyze-color', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ imageBase64 })
                })

                if (!response.ok) {
                    const errorDetails = await response.json()
                    throw new Error(errorDetails.message || `API Error ${response.status}`)
                }

                const aiData = await response.json()
                if (aiData.error) throw new Error(aiData.error)

                seasonResult = aiData
                skinTone = aiData.skinTone
            } catch (aiError) {
                console.warn('Using local fallback mode due to:', aiError.message)
                skinTone = await analyzeImage(uploadedImage)
                seasonResult = determineSeason(skinTone)
            }

            let basePalette = SEASON_PALETTES[seasonResult.season]
            if (basePalette?.alias) {
                basePalette = SEASON_PALETTES[basePalette.alias]
            }

            let finalColors = basePalette.colors
            if (userState.isPremium && PREMIUM_PALETTES[seasonResult.season]) {
                finalColors = [...basePalette.colors, ...PREMIUM_PALETTES[seasonResult.season].additionalColors]
            }

            setAnalysisResult({
                skinTone,
                season: seasonResult,
                colors: finalColors,
                avoidColors: basePalette.avoidColors,
                bestCombinations: basePalette.bestCombinations,
                gradientStart: basePalette.gradientStart,
                gradientEnd: basePalette.gradientEnd
            })

            setUserState(prev => {
                const now = new Date()
                const lastDate = prev.lastAnalysisDate ? new Date(prev.lastAnalysisDate) : null
                const diffHours = lastDate ? (now - lastDate) / (1000 * 60 * 60) : 22
                return {
                    ...prev,
                    analyzesUsed: diffHours >= 22 ? 1 : prev.analyzesUsed + 1,
                    lastAnalysisDate: now.toISOString()
                }
            })

            navigate('/results')
        } catch (error) {
            console.error('Analysis error:', error)
            showToast('Error al analizar la imagen. Intenta con otra foto.')
        } finally {
            setIsAnalyzing(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                isPremium={userState.isPremium}
                onUpgradeClick={() => setShowUpgradeModal(true)}
            />

            <main className="flex-grow">
                <Routes>
                    {/* Main Tool Routes */}
                    <Route path="/" element={
                        <HomePage
                            imagePreview={imagePreview}
                            onImageUpload={handleImageUpload}
                            onAnalyze={handleAnalyze}
                            isAnalyzing={isAnalyzing}
                            canAnalyze={canAnalyze()}
                            onUpgradeClick={() => setShowUpgradeModal(true)}
                            isPremium={userState.isPremium}
                        />
                    } />

                    <Route path="/results" element={
                        analysisResult ? (
                            <ResultsPage
                                result={analysisResult}
                                userPhoto={imagePreview}
                                isPremium={userState.isPremium}
                                onAnalyzeAnother={() => {
                                    setUploadedImage(null)
                                    setImagePreview(null)
                                    setAnalysisResult(null)
                                    navigate('/')
                                }}
                                onUpgradeClick={() => setShowUpgradeModal(true)}
                                showToast={showToast}
                                onWardrobeClick={() => navigate('/wardrobe')}
                            />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    } />

                    <Route path="/wardrobe" element={
                        <WardrobeSection
                            userSeason={analysisResult}
                            wardrobe={wardrobe}
                            onUpdateWardrobe={setWardrobe}
                            showToast={showToast}
                        />
                    } />

                    {/* Blog Routes */}
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />

                    {/* Informational Pages */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/resources" element={<Resources />} />

                    {/* Season Guides */}
                    <Route path="/guia-primavera" element={<SeasonGuide season="spring" />} />
                    <Route path="/guia-verano" element={<SeasonGuide season="summer" />} />
                    <Route path="/guia-otono" element={<SeasonGuide season="autumn" />} />
                    <Route path="/guia-invierno" element={<SeasonGuide season="winter" />} />

                    {/* Legal & Contact */}
                    <Route path="/privacy" element={<PrivacyPolicy onBack={() => navigate('/')} />} />
                    <Route path="/terms" element={<TermsOfService onBack={() => navigate('/')} />} />
                    <Route path="/contact" element={<ContactPage onBack={() => navigate('/')} />} />
                    <Route path="/disclaimer" element={<DisclaimerPage onBack={() => navigate('/')} />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />

            {showUpgradeModal && (
                <UpgradeModal
                    onClose={() => setShowUpgradeModal(false)}
                    onSuccess={() => {
                        setUserState(prev => ({ ...prev, isPremium: true }))
                        setShowUpgradeModal(false)
                        showToast('¡Bienvenido a Premium! 🎉')
                    }}
                />
            )}

            <PrivacyBanner />

            {toast && (
                <div className="toast">
                    {toast}
                </div>
            )}
        </div>
    )
}

export default App
