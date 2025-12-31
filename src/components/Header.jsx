import { useState } from 'react'

function Header({ isPremium, onUpgradeClick, showBackButton, onBackClick }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
            <div className="glass-card mx-4 mt-4 px-6 py-4 rounded-2xl pointer-events-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {showBackButton && (
                            <button
                                onClick={onBackClick}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-2"
                                aria-label="Volver"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        <div className="flex items-center gap-2">
                            {/* Palette Icon */}
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 p-2 flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.97-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm4.5 4c-.83 0-1.5-.67-1.5-1.5S18.17 8 19 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gradient">MyColors — Test de Color</h1>
                                <p className="text-xs text-gray-500 hidden sm:block">Análisis de colorimetría personal</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        {isPremium ? (
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium">
                                <span>👑</span>
                                <span>Premium</span>
                            </div>
                        ) : (
                            <button
                                onClick={onUpgradeClick}
                                className="btn-premium flex items-center gap-2"
                            >
                                <span>👑</span>
                                <span>Upgrade to Premium</span>
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Menu"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                        {isPremium ? (
                            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium">
                                <span>👑</span>
                                <span>Premium Activo</span>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    onUpgradeClick()
                                    setMenuOpen(false)
                                }}
                                className="btn-premium w-full flex items-center justify-center gap-2"
                            >
                                <span>👑</span>
                                <span>Upgrade to Premium</span>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
