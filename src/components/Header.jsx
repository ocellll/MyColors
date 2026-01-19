import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../config/site'

function Header({ isPremium, onUpgradeClick, showBackButton, onBackClick }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    // Helper to check active state
    const isActive = (path) => location.pathname === path

    return (
        <header className="fixed top-0 left-0 right-0 z-[999]">
            <div className="glass-card mx-4 mt-4 px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white/20">
                <div className="flex items-center justify-between">
                    {/* Logo area */}
                    <div className="flex items-center gap-3">
                        {showBackButton && (
                            <button
                                onClick={onBackClick}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-2 text-gray-600"
                                aria-label="Volver"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.97-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm4.5 4c-.83 0-1.5-.67-1.5-1.5S18.17 8 19 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    MyColors AI
                                </h1>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => {
                            if (link.submenu) {
                                return (
                                    <div key={link.label} className="relative group">
                                        <button className="text-gray-600 hover:text-purple-600 font-medium transition-colors py-2 flex items-center gap-1">
                                            {link.label}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                            {link.submenu.map((subLink) => (
                                                <Link
                                                    key={subLink.path}
                                                    to={subLink.path}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                                >
                                                    {subLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`font-medium transition-colors ${isActive(link.path) ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-purple-600'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}

                        {/* Premium Button */}
                        {isPremium ? (
                            <a
                                href="https://billing.stripe.com/p/login/3cI28r4Qr7Kw0Wx1OXdfG00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium hover:scale-105 transition-transform shadow-md"
                            >
                                <span>👑</span>
                                <span>Premium</span>
                            </a>
                        ) : (
                            <button
                                type="button"
                                onClick={onUpgradeClick}
                                className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                <span>👑</span>
                                <span>Premium</span>
                            </button>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
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
                    <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                if (link.submenu) {
                                    return (
                                        <div key={link.label} className="py-2">
                                            <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider mb-2">
                                                {link.label}
                                            </div>
                                            <div className="pl-4 border-l-2 border-gray-100 flex flex-col gap-2">
                                                {link.submenu.map((subLink) => (
                                                    <Link
                                                        key={subLink.path}
                                                        to={subLink.path}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="text-gray-600 py-1"
                                                    >
                                                        {subLink.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={`py-3 px-4 rounded-xl transition-colors ${isActive(link.path)
                                                ? 'bg-purple-50 text-purple-600 font-bold'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}

                            {/* Mobile Premium */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                {isPremium ? (
                                    <div className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-white font-bold">
                                        <span>👑</span>
                                        <span>Premium Activo</span>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            onUpgradeClick()
                                            setMenuOpen(false)
                                        }}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl font-bold"
                                    >
                                        <span>👑</span>
                                        <span>Upgrade to Premium</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
