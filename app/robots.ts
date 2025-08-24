import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',          // Home
          '/*',         // Home এর under যত পেজ আছে সব
          '/about',
          '/bookmark',
          '/circular/*',
          '/circulars',
          '/contact',
          '/privacy-policy',
          '/terms-of-service',
        ],
        disallow: [
          '/dashboard/*',
          '/unauthorized',
          '/reset-password',
        ],
      },
    ],
    sitemap: 'https://diplomajobsbd.com/sitemap.xml',
  }
}
