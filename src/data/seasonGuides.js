export const seasonGuides = {
    spring: {
        id: 'spring',
        title: 'La Guía Completa: Primavera (Spring)',
        color: 'yellow',
        description: 'Cálida, Clara y Brillante. Descubre los secretos de la estación Primavera.',
        intro: `Si eres Primavera, tu belleza natural evoca el despertar de la naturaleza: fresca, vibrante y llena de luz. Las personas de esta estación tienen una coloración cálida y clara, con un brillo dorado subyacente. Los colores que mejor te sientan son aquellos que comparten estas cualidades: vivos, alegres y con base amarilla.`,
        characteristics: [
            {
                title: 'Piel',
                description: 'Tu piel tiene un subtono dorado, melocotón o crema. Puede ser clara y delicada, a menudo con pecas doradas. Te bronceas con facilidad o te pones un poco roja antes de broncearte, pero siempre con ese resplandor cálido.'
            },
            {
                title: 'Ojos',
                description: 'Tus ojos son claros y brillantes. Pueden ser azul claro, verde, turquesa, avellana dorado o marrón miel claro. A menudo tienen un anillo dorado alrededor de la pupila.'
            },
            {
                title: 'Cabello',
                description: 'Tu cabello tiene reflejos dorados, cobrizos o rojizos. Puede ir desde un rubio lino hasta un castaño dorado o pelirrojo claro. Incluso si oscurece con la edad, mantiene esa calidez.'
            }
        ],
        palette: {
            description: 'Tu paleta es un jardín en plena floración. Evita los colores oscuros, apagados y fríos.',
            bestColors: ['Coral', 'Melocotón', 'Amarillo Narciso', 'Verde Manzana', 'Turquesa', 'Azul Real', 'Marfil', 'Beige Dorado', 'Salmón'],
            avoidColors: ['Negro puro', 'Blanco nieve', 'Gris frío', 'Fucsia frío', 'Borgoña oscuro']
        },
        makeup: {
            title: 'Maquillaje para Primavera',
            tips: [
                'Base: Busca tonos con base amarilla o melocotón. Evita los rosados.',
                'Rubor: El coral y el melocotón son tus mejores amigos. Te dan un aspecto saludable inmediato.',
                'Labios: Desde un gloss nude cálido hasta un rojo amapola brillante. Evita los vinos y ciruelas oscuros.',
                'Ojos: Sombras en tonos bronce, oro, marrón cálido y verde musgo.'
            ]
        },
        outfitTips: [
            'Usa el color cerca de tu rostro para iluminar tus facciones.',
            'El negro puede ser muy duro para ti. Sustitúyelo por azul marino cálido o marrón chocolate.',
            'Los estampados florales y alegres encajan perfectamente con tu esencia.',
            'Tus joyas ideales son el oro amarillo. El oro rosa también te favorece, pero evita la plata fría.'
        ]
    },
    summer: {
        id: 'summer',
        title: 'La Guía Completa: Verano (Summer)',
        color: 'blue',
        description: 'Fría, Suave y Delicada. Descubre la elegancia de la estación Verano.',
        intro: `La estación Verano se caracteriza por la suavidad, la elegancia y la frescura. Tu belleza es como un paisaje difuminado por la neblina o el calor del atardecer. Tienes un subtono frío (azulado) pero con bajo contraste. Los colores que te favorecen son los tonos pastel, empolvados y con base azul, que armonizan con tu delicadeza natural.`,
        characteristics: [
            {
                title: 'Piel',
                description: 'Tu piel tiene un subtono rosado, azulado o beige frío. Suele ser fina y translúcida. A menudo tienes un rubor natural en las mejillas. Te quemas fácilmente bajo el sol o te bronceas en un tono marrón grisáceo.'
            },
            {
                title: 'Ojos',
                description: 'Tus ojos son suaves y misteriosos. Pueden ser azul grisáceo, verde grisáceo, avellana frío o marrón ceniza. A menudo tienen un patrón de "encaje blanco" en el iris.'
            },
            {
                title: 'Cabello',
                description: 'Tu cabello es naturalmente cenizo, sin reflejos dorados ni rojizos. Va desde el rubio platino ceniza hasta el castaño oscuro ceniza (a veces llamado "marrón ratón" inmerecidamente).'
            }
        ],
        palette: {
            description: 'Tu paleta es como una acuarela suave. Colores frescos y elegantes.',
            bestColors: ['Azul Cielo', 'Lavanda', 'Rosa Empolvado', 'Malva', 'Gris Perla', 'Blanco Suave', 'Frambuesa', 'Verde Menta', 'Azul Acero'],
            avoidColors: ['Naranja', 'Amarillo mostaza', 'Negro intenso', 'Colores neón', 'Tonos tierra cálidos']
        },
        makeup: {
            title: 'Maquillaje para Verano',
            tips: [
                'Base: Tonos beige rosado o neutros. Evita bases amarillas que te hagan ver enferma.',
                'Rubor: Rosas fríos y ciruelas suaves. El acabado mate suele ser mejor que el muy brillante.',
                'Labios: Rosa palo, malva, frambuesa y tintos suaves. El brillo labial plateado te queda genial.',
                'Ojos: Grises, azules ahumados, lilas y marrones fríos (taupe).'
            ]
        },
        outfitTips: [
            'El "look" monocromático en tonos grises o azules te da mucha sofisticación.',
            'Evita los contrastes muy fuertes. Prefiere combinaciones de tonos suaves.',
            'Las telas fluidas, mates y delicadas (gasa, seda mate) van bien con tu estación.',
            'Tus joyas son la plata, el oro blanco y las perlas. Evita el oro amarillo intenso.'
        ]
    },
    autumn: {
        id: 'autumn',
        title: 'La Guía Completa: Otoño (Autumn)',
        color: 'orange',
        description: 'Cálida, Rica y Profunda. La intensidad de la naturaleza en Otoño.',
        intro: `Otoño es la estación de la riqueza y la profundidad. Tu coloración es cálida pero intensa, recordando a los bosques en octubre. Tienes un contraste medio o bajo, pero con colores saturados y terrosos. Te favorecen los tonos que evocan la tierra, las especias y las hojas secas.`,
        characteristics: [
            {
                title: 'Piel',
                description: 'Tu piel tiene un claro subtono dorado o bronce. Puede ser desde marfil cálido hasta beige dorado, bronce o ébano cálido. A menudo tienes pecas. Te bronceas fácilmente adquiriendo un tono dorado intenso.'
            },
            {
                title: 'Ojos',
                description: 'Tus ojos son cálidos y profundos. Marrón chocolate, ámbar, verde oliva, avellana con motas doradas o azul petróleo. Suelen tener un borde oscuro alrededor del iris.'
            },
            {
                title: 'Cabello',
                description: 'Tu cabello tiene reflejos cálidos y ricos: castaño dorado, castaño rojizo, cobrizo intenso, caoba o rubio miel oscuro. Brilla bajo el sol con tonos fuego.'
            }
        ],
        palette: {
            description: 'Tu paleta es un paseo por el bosque. Colores de especias y tierra.',
            bestColors: ['Terracota', 'Mostaza', 'Verde Oliva', 'Marrón Chocolate', 'Calabaza', 'Rojo Ladrillo', 'Crema', 'Verde Bosque', 'Oro Viejo'],
            avoidColors: ['Rosa chicle', 'Azul bebé', 'Gris frío', 'Negro azulado', 'Colores pasteles fríos']
        },
        makeup: {
            title: 'Maquillaje para Otoño',
            tips: [
                'Base: Tonos beige cálido o dorado. Evita los rosados a toda costa.',
                'Rubor: Bronceadores, terracota, albaricoque y salmón oscuro.',
                'Labios: Tonos ladrillo, marrón cálido, nude caramelo y rojo tomate.',
                'Ojos: Verdes, bronces, cobres y marrones café.'
            ]
        },
        outfitTips: [
            'Los tonos tierra son tus neutros básicos. Úsalos como base de tu armario.',
            'Las texturas ricas como la lana, el ante, el terciopelo y el cuero te favorecen muchísimo.',
            'Los estampados étnicos, paisley y naturales encajan con tu estilo.',
            'Tus joyas son el oro (especialmente envejecido), el cobre, el bronce y la madera.'
        ]
    },
    winter: {
        id: 'winter',
        title: 'La Guía Completa: Invierno (Winter)',
        color: 'indigo',
        description: 'Fría, Brillante y Profunda. El drama y el contraste del Invierno.',
        intro: `Invierno es la estación de los contrastes dramáticos y la claridad. Eres la única estación que realmente brilla con el negro puro y el blanco puro. Tu coloración es fría y saturada. Te favorecen los colores intensos, puros y helados que replican el contraste de tu propia belleza.`,
        characteristics: [
            {
                title: 'Piel',
                description: 'Tu piel puede ser muy pálida (blanca como la nieve) o muy oscura (ébano frío), o un beige frío/aceitunado. Lo clave es el subtono frío/azul. No sueles tener pecas. El contraste con tu pelo suele ser alto.'
            },
            {
                title: 'Ojos',
                description: 'Ojos penetrantes y brillantes. Negro profundo, marrón muy oscuro, azul zafiro, violeta o verde esmeralda. El blanco de tus ojos (esclerótica) suele ser muy blanco, creando contraste.'
            },
            {
                title: 'Cabello',
                description: 'Negro azabache, castaño muy oscuro (casi negro), o rubio platino blanco (natural o teñido). También el gris plata o blanco puro en edades maduras. No hay reflejos cálidos.'
            }
        ],
        palette: {
            description: 'Tu paleta es intensa y majestuosa. Colores de piedras preciosas.',
            bestColors: ['Negro Puro', 'Blanco Puro', 'Rojo Rubí', 'Azul Real', 'Esmeralda', 'Fucsia', 'Violeta Intenso', 'Amarillo Limón', 'Plata'],
            avoidColors: ['Naranja', 'Marrón dorado', 'Beige cálido', 'Tonos pastel apagados', 'Mostaza']
        },
        makeup: {
            title: 'Maquillaje para Invierno',
            tips: [
                'Base: Tonos neutros o fríos (rosados/beige). Evita las bases amarillas que te harán ver cansada.',
                'Rubor: Rosas fríos, fucsias y ciruelas. Pocos toques son suficientes.',
                'Labios: Rojo sangre, fucsia brillante, vino y rosa intenso.',
                'Ojos: Negro para delinear, sombras grises, plateadas, azules fríos o violetas.'
            ]
        },
        outfitTips: [
            'Eres la reina del contraste. Combina blanco y negro para un éxito asegurado.',
            'Usa bloques de color sólido en lugar de estampados pequeños y difusos.',
            'Los tejidos brillantes como el satén y el charol te quedan bien.',
            'Tus joyas son la plata brillante, el platino, los diamantes y los cristales. El oro blanco es ideal.'
        ]
    }
}
