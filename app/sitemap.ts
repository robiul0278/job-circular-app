import { getAllJobQuery } from "@/lib/api";
import { IJobCircular } from "@/types/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.diplomajobsbd.com";

  const params: Record<string, string> = {
    fields: 'slug,updatedAt',
    limit: '1000',
  };

  // 1️⃣ fetch all job circulars
  const { result } = await getAllJobQuery({ params });

  // 2️⃣ All jobs page
  const allJobsUrl: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/circulars`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // 3️⃣ Category filtered jobs pages
  const categories = ["govt", "private"];
  const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/circulars?category=${cat}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // 4️⃣ Individual job detail pages with lastmod
  const jobUrls: MetadataRoute.Sitemap = result.map((job: IJobCircular) => ({
    url: `${baseUrl}/circular/${job.slug}`,
    lastModified: new Date(job.updatedAt).toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // 5️⃣ Homepage + all URLs combine
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...allJobsUrl,
    ...categoryUrls,
    ...jobUrls,
  ];
}
