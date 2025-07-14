// app/circular/[id]/page.tsx
import { notFound } from "next/navigation";
import { Send, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import View from "@/components/view";
import BookmarkButton from "@/components/bookmark-button";
import Categories from "@/components/Categories";
import { formatQuery } from "@/utils/utils";
import CircularTime from "@/components/circular-time";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MarkdownPreview } from "@/components/markdown-preview";
import { getSingleJob } from "@/lib/api";

type Props = {
  params: { id: string };
};

const CircularViewPage = async ({ params }: Props) => {
  const { id } = params;
  const decodedId = decodeURIComponent(id);
  const job = await getSingleJob(decodedId);
  if (!job) return notFound();

  const {
    _id,
    title,
    companyName,
    vacancy,
    applyLink,
    published,
    applyStart,
    deadline,
    technology,
    description,
    views,
  } = job;

  return (
    <section className="max-w-7xl mx-auto py-2 grid grid-cols-1 lg:grid-cols-4 gap-5 px-2">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-8">
        <Card className="">
          <CardHeader className="">
            {/* Top: Title and Bookmark */}
            <div className="flex justify-between items-start gap-2">
              <CardTitle className="text-lg md:text-2xl lg:text-2xl dark:text-slate-200">{title}</CardTitle>
              <div className="hidden lg:flex md:flex"><BookmarkButton jobId={_id} /></div>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
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

            <Link href={applyLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full cursor-pointer" size="lg" variant="outline">
                বিস্তারিত জানতে ও ফরম ডাউনলোড করতে ভিজিট করুন
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="rounded-lg p-4 border dark:bg-gray-900">
          <h3 className="font-semibold mb-3 text-sm uppercase">Follow Us</h3>
          <a href="https://t.me/your_channel_name" target="_blank" rel="noopener noreferrer">
            <Button className="flex w-full items-center space-x-2 bg-green-700 hover:bg-green-600 text-white hover:text-white font-medium px-4 py-2 rounded cursor-pointer">
              <Send size={16} />
              <span>Telegram</span>
            </Button>
          </a>
        </div>
        <Categories />
        {/* <div className="bg-gray-100 border border-gray-300 rounded-lg h-96 flex items-center justify-center text-gray-700 dark:text-gray-300">
          <span>Google AdSense Ad</span>
        </div> */}
      </aside>

      {/* Views */}
      <div className="fixed bottom-4 left-4 z-50">
        <View id={decodedId} views={views} />
      </div>
    </section>
  );
};

export default CircularViewPage;
