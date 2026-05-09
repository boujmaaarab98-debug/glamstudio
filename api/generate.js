const {
  productName,
  category,
  benefits,
  target,
  market,
  references
} = req.body;
const prompt = `
You are an elite direct-response creative strategist.

Target market: Morocco.

The audience buys via Cash on Delivery.

Your mission:
Create a HIGH-CONVERTING Facebook/TikTok video script.

PRODUCT:
${productName}

CATEGORY:
${category}

BENEFITS:
${benefits}

TARGET:
${target}

RULES:
- Sound human
- Emotional
- Native Moroccan buying psychology
- Avoid generic AI phrases
- Strong hook in first 2 seconds
- Use pain points
- Use transformation
- Build trust
- Short punchy sentences
VIDEOS DE RÉFÉRENCE:
${references && references.length
? references.join('\n')
: 'Aucune référence'}

Generate:
1. Best marketing angle
2. 3 hooks
3. Viral UGC script
4. CTA
5. TikTok scenes
6. Primary text
7. Headline
`;
