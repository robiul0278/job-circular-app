"use client";

import { use } from "react";
import { useGetSingleJobQuery } from "@/redux/api/api";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Users, CalendarCheck, BookOpen } from "lucide-react";
import { formatDateTimeBangla } from "@/lib/formatDateTimeBangla";
import View from "@/components/View";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
  const { id } = use(params);
  const { data: singleJob, error, isLoading } = useGetSingleJobQuery(id);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md bg-red-50 border border-red-300">
          <CardContent>
            <p className="text-red-700 font-semibold">
              ❌ চাকরির বিস্তারিত লোড করতে ব্যর্থ হয়েছে।
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading || !singleJob?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Skeleton className="w-full max-w-3xl h-96 rounded-lg" />
      </div>
    );
  }

  const {
    jobTitle,
    companyName,
    image,
    education,
    description,
    vacancy,
    published,
    startApply,
    deadline,
    applyLink,
    views
  } = singleJob.data;

  return (
    <section className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-8">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden shrink-0">
              {image ? (
                <Image
                  src={image}
                  alt={`${companyName} logo`}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Logo
                </div>
              )}
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl">{jobTitle}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {companyName}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Table Title with Icon */}
            <div className="flex items-center gap-2 mb-3">
              <CalendarCheck className="w-5 h-5 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                সময়সূচী
              </h4>
            </div>

       <div className="grid gap-4 md:grid-cols-3">
  <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">📅 প্রকাশের তারিখ</h4>
    <p className="text-sm text-gray-800 dark:text-gray-300">{formatDateTimeBangla(published)}</p>
  </div>

  <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">🚀 আবেদন শুরুর তারিখ</h4>
    <p className="text-sm text-gray-800 dark:text-gray-300">{formatDateTimeBangla(startApply)}</p>
  </div>

  <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">⏰ আবেদনের শেষ তারিখ</h4>
    <p className="text-sm text-gray-800 dark:text-gray-300">{formatDateTimeBangla(deadline)}</p>
  </div>
</div>


            {/* Vacancy Info */}
            <p className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-semibold">
              <Users className="w-5 h-5 text-blue-500" />
              পদসংখ্যা: {vacancy ? `${vacancy} জন` : "উল্লেখ নেই"}
            </p>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  শিক্ষাগত যোগ্যতা
                </h4>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {education.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              চাকরির বিবরণ
            </h3>
            <ScrollArea className="h-48 rounded-md mb-6 border border-gray-200 dark:border-gray-700 p-4">
              <p className="whitespace-pre-wrap leading-relaxed text-gray-700 dark:text-gray-300">
                {description || "বিবরণ পাওয়া যায়নি।"}
              </p>
            </ScrollArea>

            {/* Apply Button */}
            <div className="text-center">
              <a href={applyLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button size="lg">Apply Now</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <Card className="h-48 flex items-center justify-center">
          <p className="text-center text-sm text-gray-500">📢 Google Ad Placeholder</p>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">📂 চাকরির ধরন</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="hover:underline cursor-pointer">সরকারি</p>
            <p className="hover:underline cursor-pointer">প্রাইভেট</p>
            <p className="hover:underline cursor-pointer">এনজিও</p>
            <p className="hover:underline cursor-pointer">আইটি</p>
            <p className="hover:underline cursor-pointer">ব্যাংক</p>
          </CardContent>
        </Card>
      </aside>
      <View id={id} views={views}/>
    </section>
  );
};

export default Page;
