// USES GLOBAL FETCH (Available in Node 18+)
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { imageBase64 } = req.body;

        if (!imageBase64) {
            return res.status(400).json({ error: 'Image data is required' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY is not configured');
            return res.status(500).json({ error: 'AI Service not configured' });
        }

        // Extract mime type and base64 data
        const mimeTypeMatch = imageBase64.match(/^data:(image\/\w+);base64,/);
        const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : 'image/jpeg';
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');

        // Call Gemini 2.0 Flash API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `Eres un experto profesional en colorimetría personal y asesoría de imagen de élite. 
                                Tu tarea es realizar un análisis de colorimetría basado en la teoría de las 12 estaciones.
                                
                                INSTRUCCIONES CRÍTICAS:
                                1. IGNORA EL FONDO, ROPA O ACCESORIOS (gafas de sol, sombreros, etc.). Enfócate solo en la piel, ojos y labios.
                                2. Analiza el contraste, la temperatura (warm/cool) y la profundidad.
                                3. En la foto puede haber elementos distractores (como nieve o gafas de esquí), NO dejes que afecten al análisis. Extrae el tono de piel real de las zonas visibles de la cara o cuello.
                                
                                Responde ÚNICAMENTE con un objeto JSON válido. No incluyas explicaciones fuera del JSON.
                                Estructura:
                                {
                                  "season": "PRIMAVERA" | "VERANO" | "OTOÑO" | "INVIERNO",
                                  "type": "Nombre específico de la sub-estación (ej: Invierno Brillante, Otoño Cálido)",
                                  "description": "Explicación técnica de por qué los rasgos del usuario encajan en esta estación, mencionando específicamente su contraste y undertone.",
                                  "characteristics": ["Ej: Contraste alto", "Subtono frío", "Piel oliva"],
                                  "bestFor": "Resumen de su paleta ideal",
                                  "avoid": "Colores que apagan su rostro",
                                  "skinTone": {
                                    "hex": "#XXXXXX (el tono percibido)",
                                    "warmth": 0-100,
                                    "lightness": 0-100,
                                    "saturation": 0-100,
                                    "undertone": "warm" | "cool" | "neutral"
                                  }
                                }`
                            },
                            {
                                inline_data: {
                                    mime_type: mimeType,
                                    data: base64Data
                                }
                            }
                        ]
                    }
                ],
                generationConfig: {
                    response_mime_type: "application/json"
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error details:', JSON.stringify(errorData));
            throw new Error(errorData.error?.message || `Gemini API Error (${response.status})`);
        }

        const data = await response.json();

        if (!data.candidates || !data.candidates[0]) {
            throw new Error('No se recibió respuesta de la IA');
        }

        let aiResponseText = data.candidates[0].content.parts[0].text;

        // Defensive JSON parsing: remove possible markdown blocks
        aiResponseText = aiResponseText.replace(/```json\s?|```/g, '').trim();

        const analysis = JSON.parse(aiResponseText);
        res.status(200).json(analysis);
    } catch (err) {
        console.error('AI Analysis Error:', err);
        res.status(500).json({
            error: 'Error al procesar el análisis de IA',
            message: err.message
        });
    }
}
