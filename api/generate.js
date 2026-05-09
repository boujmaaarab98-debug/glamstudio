export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  try {

    const {
      productName,
      category,
      benefits,
      target,
      market
    } = req.body;

    const prompt = `
Tu es un expert Facebook Ads et e-commerce.

Analyse ce produit :

Nom : ${productName}
Catégorie : ${category}
Bénéfices : ${benefits}
Cible : ${target}
Marché : ${market}

Génère :

1. Analyse du marché
2. Angle marketing gagnant
3. Hook Facebook Ads
4. Script UGC court
5. CTA puissant

Réponds uniquement en JSON.
`;

    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':
            `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.8
        })
      }
    );

    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }

}
