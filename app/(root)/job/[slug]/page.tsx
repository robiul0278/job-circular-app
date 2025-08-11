
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Views from "@/components/Views";
import BookmarkButton from "@/components/BookmarkButton";
import CircularTime from "@/components/CircularTime";
import Telegram from "@/components/Telegram";
import { getSingleJob } from "@/lib/api";
import ShowMoreJobs from "@/components/ShowMoreJobs";
import MarkdownPreview from "@/components/MarkdownPreview";
import ImageWithDownload from "@/components/ImageWithDownload";
import SocialShare from "@/components/SocialShare";

export const dynamic = "force-static";

const JobDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const singleJob = await getSingleJob(slug);

  const {
    _id,
    title,
    companyName,
    deadline,
    images,
    description,
  } = singleJob;

  return (
    <section className="max-w-6xl mx-auto py-2 md:py-4 lg:py-4 px-2 md:px-0 lg-px-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="rounded px-1 py-3">
            <CardHeader className="px-2 relative">
              {/* Top: Title and Bookmark */}
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-2xl lg:text-2xl dark:text-slate-200">{title}</CardTitle>
                <div className="absolute right-1"><BookmarkButton jobId={_id} /></div>
              </div>
              <div className="text-sm font-medium text-teal-600">
                {companyName}
              </div>
            </CardHeader>

            <CardContent className="space-y-4 px-2">
              {/*CircularTime */}
              <CircularTime deadline={deadline} />
              <div className="flex items-center gap-2 my-4">
                <hr className="flex-grow border-gray-300" />
                <p className="text-center text-sm font-medium whitespace-nowrap">বিস্তারিত</p>
                <hr className="flex-grow border-gray-300" />
              </div>
              {/*Markdown Preview */}
              <MarkdownPreview description={description} />
              {/*Job Image Preview */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {images.map((src: string, idx: number) => (
                    <ImageWithDownload key={idx} src={src} index={idx} />
                  ))}
                </div>
              )}
              {/* ✅ Social Share Buttons */}
              <SocialShare title={title} slug={slug} />
            </CardContent>
          </Card>
          <ShowMoreJobs />

        </div>

        {/* Sidebar */}
        <aside className="space-y-4">

          <Telegram />
        </aside>
      </div>


      {/* Views */}
      <div className="fixed bottom-4 left-4 z-50">
        <Views id={_id} />
      </div>
    </section>
  );
};

export default JobDetailsPage;
