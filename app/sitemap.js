
export default async function sitemap() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/our-services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/thank-you`,
            lastModified: new Date(),
            priority: 0.1,
        },

    ]
}