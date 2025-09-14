import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",              // Homepage
          "/circular/*",    // All job details
          "/circulars",     // All jobs listing
        ],
        disallow: [
          "/dashboard/*",   // Private dashboard
          "/unauthorized",
          "/reset-password",
        ],
      },
    ],
    sitemap: "https://www.diplomajobsbd.com/sitemap.xml",
  };
}
