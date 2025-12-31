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

        // List of models to try in order of preference/stability
        const modelsToTry = [
            'gemini-1.5-flash',
            'gemini-1.5-flash-latest',
            'gemini-1.5-pro',
            'gemini-2.0-flash'
        ];

        let lastError = null;
        let analysis = null;

        for (const model of modelsToTry) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [
                                { text: `Eres un experto en colorimetría. Analiza la foto y responde SOLO con un JSON: {"season": "PRIMAVERA"|"VERANO"|"OTOÑO"|"INVIERNO", "type": "...", "description": "...", "characteristics": [], "bestFor": "...", "avoid": "...", "skinTone": {"hex": "...", "warmth": 0, "lightness": 0, "saturation": 0, "undertone": "..."}}` },
                                { inline_data: { mime_type: mimeType, data: base64Data } }
                            ]
                        }]
                    })
                });

                if (!response.ok) {
                    const errorMsg = await response.text();
                    console.warn(`Model ${model} failed: ${errorMsg}`);
                    lastError = new Error(errorMsg);
                    continue; // Try next model
                }

                const data = await response.json();
                if (data.candidates && data.candidates[0]) {
                    let aiResponseText = data.candidates[0].content.parts[0].text;
                    aiResponseText = aiResponseText.replace(/```json\s?|```/g, '').trim();
                    analysis = JSON.parse(aiResponseText);
                    break; // Success!
                }
            } catch (err) {
                console.warn(`Attempt with ${model} threw:`, err);
                lastError = err;
            }
        }

        if (!analysis) {
            throw lastError || new Error('All AI models failed to respond');
        }

        res.status(200).json(analysis);
    } catch (err) {
        console.error('Final AI Analysis Error:', err);
        res.status(500).json({
            error: 'Error persistente en la IA',
            message: err.message
        });
    }
}
