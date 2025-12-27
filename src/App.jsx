import { useState, useEffect } from 'react'
import Header from './components/Header'
import UploadSection from './components/UploadSection'
import ResultsPage from './components/ResultsPage'
import UpgradeModal from './components/UpgradeModal'
import { analyzeImage } from './utils/colorAnalysis'
import { determineSeason } from './utils/seasonDetection'
import { SEASON_PALETTES } from './data/seasonColors'

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

    // Check if user can analyze
    const canAnalyze = () => {
        if (userState.isPremium) return true
        return userState.analyzesUsed < 1
    }

    // Show toast notification
    const showToast = (message, duration = 3000) => {
        setToast(message)
        setTimeout(() => setToast(null), duration)
    }

    // Handle image upload
    const handleImageUpload = (file) => {
        if (!file) return

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
            // Simulate analysis time for better UX
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Analyze the image
            const skinTone = await analyzeImage(uploadedImage)
            const seasonResult = determineSeason(skinTone)
            const palette = SEASON_PALETTES[seasonResult.season]

            setAnalysisResult({
                skinTone,
                season: seasonResult,
                colors: palette.colors,
                avoidColors: palette.avoidColors,
                bestCombinations: palette.bestCombinations,
                gradientStart: palette.gradientStart,
                gradientEnd: palette.gradientEnd
            })

            // Update user state
            setUserState(prev => ({
                ...prev,
                analyzesUsed: prev.analyzesUsed + 1,
                lastAnalysisDate: new Date().toISOString()
            }))

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
