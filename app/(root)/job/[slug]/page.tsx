
import { Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Views from "@/components/Views";
import BookmarkButton from "@/components/BookmarkButton";
import { formatQuery } from "@/utils/utils";
import CircularTime from "@/components/CircularTime";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Telegram from "@/components/Telegram";
import Technology from "@/components/Technology";
import Categories from "@/components/Categories";
import { getSingleJob } from "@/lib/api";
import ShowMoreJobs from "@/components/ShowMoreJobs";
import MarkdownPreview from "@/components/MarkdownPreview";

const JobDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const singleJob = await getSingleJob(slug);

  const {
    _id,
    title,
    companyName,
    vacancy,
    websiteLink,
    published,
    applyStart,
    deadline,
    technology,
    images,
    description,
    views,
  } = singleJob;

  return (
    <section className="max-w-7xl mx-auto py-2  px-2">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="rounded-none">
            <CardHeader className="">
              {/* Top: Title and Bookmark */}
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-lg md:text-2xl lg:text-2xl dark:text-slate-200">{title}</CardTitle>
                <div className="hidden lg:flex md:flex"><BookmarkButton jobId={_id} /></div>
              </div>
              <div className="text-sm font-medium text-green-600">
                {companyName}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex lg:hidden md:hidden"><BookmarkButton jobId={_id} /></div>
              <CircularTime published={published} applyStart={applyStart} deadline={deadline} />
              <hr />
              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  শিক্ষাগত যোগ্যতাঃ
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {technology.map((item: string, i: number) => (
                    <li key={i}>Diploma in {formatQuery(item)}</li>
                  ))}
                </ul>

              </div>
              <hr />
              {/* শূন্য আসন */}
              <div className="mb-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  ডিপ্লোমা পাশে শূন্য আসনঃ
                </h4>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{vacancy} জন।</span>
                </div>
              </div>
              <hr />
              <MarkdownPreview description={description} />

              {/*Job Image Preview */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-1">
                  {images.map((src: string, idx: number) => (
                    <div key={idx} className="flex flex-col items-center space-y-1">
                      <Image
                        width={1200}
                        height={600}
                        src={src}
                        alt={`Preview ${idx + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
              <Link href={websiteLink} target="_blank" rel="noopener noreferrer" className="flex justify-end">
                <Button className="bg-amber-600 cursor-pointer" size="default">
                  Apply করতে বা বিস্তারিত জানতে ভিজিট করুন । 
                </Button>
              </Link>
            </CardContent>
          </Card>
          <ShowMoreJobs />

        </div>

        {/* Sidebar */}
        <aside className="space-y-6">

          <Telegram />
          <Categories />
          <Technology />
        </aside>
      </div>


      {/* Views */}
      <div className="fixed bottom-4 left-4 z-50">
        <Views id={_id} views={views} />
      </div>
    </section>
  );
};

export default JobDetailsPage;
