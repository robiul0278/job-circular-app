import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Views from "@/components/Views";
import CircularTime from "@/components/CircularTime";
import Telegram from "@/components/Telegram";
import { getSingleJob } from "@/lib/api";
import ShowMoreJobs from "@/components/ShowMoreJobs";
import MarkdownPreview from "@/components/MarkdownPreview";
import ImageWithDownload from "@/components/ImageWithDownload";
import SocialShare from "@/components/SocialShare";
import { makeAbsoluteUrl } from "@/utils/utils";

// ---------------------
// Dynamic Metadata
// ---------------------
type Props = {
  params: Promise<{ slug: string }>; // Notice: params is a Promise
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ Await before use
  const job = await getSingleJob(slug);

  if (!job) {
    return {
      title: "Job not found | Diploma Jobs BD",
      description: "The job you are looking for does not exist.",
    };
  }

 const imageUrl = makeAbsoluteUrl(job.banner || "/default-banner.png");
 const metaDescription = `${job.companyName} এ নতুন নিয়োগ বিজ্ঞপ্তি: ${job.title}. Find the latest diploma job circulars in Bangladesh.`;

  return {
    title: `${job.title} | Diploma Jobs BD`,
    description: metaDescription,
    openGraph: {
      title: `${job.title} | Diploma Jobs BD`,
      description: metaDescription,
      url: makeAbsoluteUrl(`/circular/${slug}`),
      siteName: "Diploma Jobs BD",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: job.title,
        },
      ],
      locale: "bn_BD",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | Diploma Jobs BD`,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

// ---------------------
// Page UI Component (unchanged)
// ---------------------
export const dynamic = "force-static";

const CircularDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const job = await getSingleJob(slug);

  const { _id, title, companyName, deadline, images, description } = job;

  return (
    <section className="max-w-6xl mx-auto md:py-4 lg:py-4 p-1 lg-p-0">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card className="rounded-lg p-0 md:p-2 lg:p-2 gap-0">
            <CardHeader className="m-1 p-2 pt-2 dark:bg-gray-800 rounded-lg shadow-sm">
              <CardTitle className="text-xl dark:text-slate-200">{title}</CardTitle>
              <h2 className="font-medium text-green-600 dark:text-green-400">
                {companyName}
              </h2>
              <CircularTime deadline={deadline} />
            </CardHeader>

            <CardContent className="px-2 pb-3">
              <MarkdownPreview description={description} />

              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {images.map((src: string, idx: number) => (
                    <ImageWithDownload key={idx} src={src} index={idx} title={title} />
                  ))}
                </div>
              )}

              <SocialShare />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Telegram />
          <ShowMoreJobs />
        </aside>
      </div>

      {/* Views */}
      <div className="fixed bottom-4 left-4 z-50">
        <Views id={_id} />
      </div>
    </section>
  );
};

export default CircularDetailsPage;
