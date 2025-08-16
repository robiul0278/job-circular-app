
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

const JobDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const singleJob = await getSingleJob(slug);

  const {
    title,
    companyName,
    deadline, 
    images,
    description,
  } = singleJob;

  return (
    <section className="max-w-6xl mx-auto  md:py-4 lg:py-4 p-1 lg-p-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Content */}
        <div className="lg:col-span-3 ">
          <Card className="rounded-lg p-0 md:p-2 lg:p-2 gap-0">
            <CardHeader className="p-2 pt-2 dark:bg-gray-800 rounded-lg shadow-sm">
              {/* Top: Title and Bookmark */}
                <CardTitle className="text-xl  dark:text-slate-200">{title}</CardTitle>
              <h2 className="font-medium text-green-600 dark:text-green-400">
                {companyName}
              </h2>
                    {/*CircularTime */}
              <CircularTime deadline={deadline} />
            </CardHeader>

            <CardContent className="px-2 pb-3">
              {/*Markdown Preview */}
              <MarkdownPreview description={description} />
              {/*Job Image Preview */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {images.map((src: string, idx: number) => (
                    <ImageWithDownload key={idx} src={src} index={idx}  title={title} />
                  ))}
                </div>
              )}
              {/* ✅ Social Share Buttons */}
              <SocialShare/>
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
        <Views id={singleJob?._id} />
      </div>
    </section>
  );
};

export default JobDetailsPage;
