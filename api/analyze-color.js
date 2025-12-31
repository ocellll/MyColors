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
                                text: `Eres un experto profesional en colorimetría personal y asesoría de imagen. 
                                Analiza cuidadosamente la piel, ojos y cabello de la persona en esta foto para determinar su temporada de color.
                                
                                Responde ESTRICTAMENTE en formato JSON plano con esta estructura (no incluyas markdown, solo el objeto):
                                {
                                  "season": "PRIMAVERA" | "VERANO" | "OTOÑO" | "INVIERNO",
                                  "type": "Ej: Cálida y Luminosa",
                                  "description": "Explicación detallada de por qué se ha elegido esta temporada basada en sus rasgos",
                                  "characteristics": ["Característica 1", "Característica 2"],
                                  "bestFor": "Resumen de lo que mejor le queda",
                                  "avoid": "Lo que debe evitar",
                                  "skinTone": {
                                    "hex": "#XXXXXX",
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
            throw new Error(errorData.error?.message || 'Gemini API Error');
        }

        const data = await response.json();
        const aiResponseText = data.candidates[0].content.parts[0].text;

        // Parse the JSON response from AI
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
