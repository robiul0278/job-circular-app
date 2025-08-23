import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/bookmark',
          '/circular/*',
          '/circulars',
          '/contact',
          '/privacy-policy',
          '/terms-of-service',
        ],
        disallow: ['/dashboard/*', '/unauthorized', '/reset-password',],
      },
    ],
    sitemap: 'https://diplomajobsbd.com/sitemap.xml',
  }
}
