import { useState, useEffect } from 'react'
import Header from './components/Header'
import UploadSection from './components/UploadSection'
import ResultsPage from './components/ResultsPage'
import UpgradeModal from './components/UpgradeModal'
import Footer from './components/Footer'
import { analyzeImage } from './utils/colorAnalysis'
import { determineSeason } from './utils/seasonDetection'
import { SEASON_PALETTES, PREMIUM_PALETTES } from './data/seasonColors'

function App() {
    // User state
    const [userState, setUserState] = useState(() => {
        const saved = localStorage.getItem('mycolors_user')
        return saved ? JSON.parse(saved) : {
            analyzesUsed: 0,
            isPremium: false,
            lastAnalysisDate: null
        }
    })

    // App state
    const [currentPage, setCurrentPage] = useState('home') // 'home' | 'results'
    const [uploadedImage, setUploadedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [analysisResult, setAnalysisResult] = useState(null)
    const [showUpgradeModal, setShowUpgradeModal] = useState(false)
    const [toast, setToast] = useState(null)

    // Persist user state
    useEffect(() => {
        localStorage.setItem('mycolors_user', JSON.stringify(userState))
    }, [userState])

    // Check for payment success in URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if (params.get('success') === 'true' && !userState.isPremium) {
            setUserState(prev => ({ ...prev, isPremium: true }))
            showToast('¡Pago completado! Ya eres Premium ✨')
            // Clean URL
            window.history.replaceState({}, document.title, "/")
        }
    }, [])

    // Check if user can analyze
    const canAnalyze = () => {
        if (userState.isPremium) return true

        // Allow up to 2 analyses
        if (userState.analyzesUsed < 2) return true

        // If they have used 2 or more, check if 22h have passed since the last one
        if (userState.lastAnalysisDate) {
            const lastDate = new Date(userState.lastAnalysisDate).getTime()
            const now = new Date().getTime()
            const diffHours = (now - lastDate) / (1000 * 60 * 60)

            // If more than 22h passed, reset count (effectively)
            if (diffHours >= 22) return true
        }

        return false
    }

    // Show toast notification
    const showToast = (message, duration = 3000) => {
        setToast(message)
        if (window._toastTimeout) clearTimeout(window._toastTimeout)
        window._toastTimeout = setTimeout(() => setToast(null), duration)
    }

    // Handle image upload
    const handleImageUpload = (file) => {
        if (!file) {
            setUploadedImage(null)
            setImagePreview(null)
            return
        }

        // Check file type
        if (!file.type.startsWith('image/')) {
            showToast('Por favor, sube una imagen válida')
            return
        }

        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            showToast('La imagen es demasiado grande. Máximo 10MB')
            return
        }

        setUploadedImage(file)
        const reader = new FileReader()
        reader.onload = (e) => {
            setImagePreview(e.target.result)
        }
        reader.readAsDataURL(file)
    }

    // Helper to convert file to base64
    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    // Handle analyze click
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
                // 1. Try Real AI Analysis (Gemini)
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

                if (aiData.error) {
                    throw new Error(aiData.error);
                }

                seasonResult = aiData
                skinTone = aiData.skinTone
            } catch (aiError) {
                console.error('AI analysis failed:', aiError)
                // 2. Fallback to Local Algorithmic Analysis
                skinTone = await analyzeImage(uploadedImage)
                seasonResult = determineSeason(skinTone)

                // Alert the user that we are using fallback mode (for debugging)
                console.warn('Using local fallback mode due to:', aiError.message)
            }

            const basePalette = SEASON_PALETTES[seasonResult.season]

            // Merge premium colors if applicable
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

            // Update user state
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

            setCurrentPage('results')
        } catch (error) {
            console.error('Analysis error:', error)
            showToast('Error al analizar la imagen. Intenta con otra foto.')
        } finally {
            setIsAnalyzing(false)
        }
    }

    // Handle back to home
    const handleBackToHome = () => {
        setCurrentPage('home')
        setUploadedImage(null)
        setImagePreview(null)
        setAnalysisResult(null)
    }

    // Handle upgrade success
    const handleUpgradeSuccess = () => {
        setUserState(prev => ({
            ...prev,
            isPremium: true
        }))
        setShowUpgradeModal(false)
        showToast('¡Bienvenido a Premium! 🎉')
    }

    return (
        <div className="min-h-screen">
            <Header
                isPremium={userState.isPremium}
                onUpgradeClick={() => setShowUpgradeModal(true)}
                showBackButton={currentPage === 'results'}
                onBackClick={handleBackToHome}
            />

            <main>
                {currentPage === 'home' ? (
                    <UploadSection
                        imagePreview={imagePreview}
                        onImageUpload={handleImageUpload}
                        onAnalyze={handleAnalyze}
                        isAnalyzing={isAnalyzing}
                        canAnalyze={canAnalyze()}
                        onUpgradeClick={() => setShowUpgradeModal(true)}
                        isPremium={userState.isPremium}
                    />
                ) : (
                    <ResultsPage
                        result={analysisResult}
                        userPhoto={imagePreview}
                        isPremium={userState.isPremium}
                        onAnalyzeAnother={handleBackToHome}
                        onUpgradeClick={() => setShowUpgradeModal(true)}
                        showToast={showToast}
                    />
                )}
            </main>

            <Footer />

            {/* Upgrade Modal */}
            {showUpgradeModal && (
                <UpgradeModal
                    onClose={() => setShowUpgradeModal(false)}
                    onSuccess={handleUpgradeSuccess}
                />
            )}

            {/* Toast Notification */}
            {toast && (
                <div className="toast">
                    {toast}
                </div>
            )}
        </div>
    )
}

export default App
