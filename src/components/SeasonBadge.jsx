function SeasonBadge({ season }) {
    const seasonConfig = {
        PRIMAVERA: {
            emoji: '🌸',
            gradient: 'from-pink-400 to-yellow-400',
            label: 'Primavera'
        },
        VERANO: {
            emoji: '☀️',
            gradient: 'from-sky-400 to-purple-300',
            label: 'Verano'
        },
        OTOÑO: {
            emoji: '🍂',
            gradient: 'from-orange-500 to-amber-500',
            label: 'Otoño'
        },
        INVIERNO: {
            emoji: '❄️',
            gradient: 'from-blue-600 to-purple-600',
            label: 'Invierno'
        }
    }

    const config = seasonConfig[season] || seasonConfig.PRIMAVERA

    return (
        <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${config.gradient} text-white font-bold rounded-full shadow-lg animate-scale-in`}>
            <span className="text-xl">{config.emoji}</span>
            <span className="text-lg">{config.label}</span>
        </div>
    )
}

export default SeasonBadge
