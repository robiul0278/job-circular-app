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

export const dynamic = "force-static";

type Job = {
  _id: string;
  title: string;
  description: string;
  companyName: string;
  deadline: string;
  slug: string;
  images: string[];
  banner?: string;
  location?: string;
  createdAt?: string;
};

// ✅ Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const slugs = decodeURIComponent(slug);
  const job: Job = await getSingleJob(slug);

  const bannerImage = job.banner
    ? job.banner
    : "https://diplomajobsbd.com/og-image.jpg"; // fallback

  return {
    title: `${job.title} | ${job.companyName} - Diploma Jobs BD`,
    description: `${job.companyName} এ ${job.title} পদের জন্য নিয়োগ বিজ্ঞপ্তি। আবেদন করার শেষ তারিখ: ${job.deadline}.`,
    alternates: {
      canonical: `https://diplomajobsbd.com/jobs/${slugs}`,
    },
    openGraph: {
      type: "article",
      url: `https://diplomajobsbd.com/jobs/${slugs}`,
      title: `${job.title} | ${job.companyName}`,
      description: `${job.companyName} এ ${job.title} পদের জন্য নিয়োগ বিজ্ঞপ্তি। আবেদন করার শেষ তারিখ: ${job.deadline}.`,
      siteName: "Diploma Jobs BD",
      images: [
        {
          url: bannerImage,
          width: 1200,
          height: 630,
          alt: `${job.title} - Diploma Jobs BD`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | ${job.companyName}`,
      description: `${job.companyName} এ ${job.title} পদের জন্য নিয়োগ বিজ্ঞপ্তি। আবেদন করার শেষ তারিখ: ${job.deadline}.`,
      images: [bannerImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ Page Component
const JobDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const job: Job = await getSingleJob(slug);

  const {
    _id,
    title,
    companyName,
    deadline,
    images = [],
    description,
    location = "Bangladesh",
    createdAt,
  } = job;

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
                  {images.map((src, idx) => (
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

      {/* ✅ JSON-LD JobPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title,
            description,
            hiringOrganization: {
              "@type": "Organization",
              name: companyName,
              sameAs: "https://diplomajobsbd.com",
              logo: "https://diplomajobsbd.com/logo.png",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: location,
                addressCountry: "BD",
              },
            },
            datePosted: createdAt || new Date().toISOString(),
            validThrough: new Date(deadline).toISOString(),
            employmentType: "FULL_TIME",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Bangladesh",
            },
          }),
        }}
      />
    </section>
  );
};

export default JobDetailsPage;
