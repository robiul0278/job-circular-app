
import { ChevronRight } from "lucide-react";
import NoticeMarquee from "@/components/NoticeMarquee";
import Telegram from "@/components/Telegram";
import { JobCard } from "@/components/JobCard";
import { getAllJobQuery } from "@/lib/api";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";

export const dynamic = 'force-static';

export default async function Home({ searchParams }: {
  searchParams: Promise<
    {
      categories?: string;
      departments?: string;
      query?: string;
      page?: string
    }
  >
}) {
  const resolvedParams = await searchParams;
  const { categories, departments, query } = resolvedParams;
  const currentPage = parseInt(resolvedParams.page || '1');

  const params: Record<string, string> = {
    ...(categories ? { categories: categories } : {}),
    ...(departments ? { departments: departments } : {}),
    ...(query ? { searchTerm: query } : {}),
    page: (currentPage).toString(),
  };

  const { result } = await getAllJobQuery({ params });

  return (
    <>
      <NoticeMarquee />
      <Hero categories={categories} departments={departments} query={query} />
      <section className="max-w-6xl mx-auto px-2 pb-2 lg:p-0">
        <p className="text-xl md:text-2xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 pb-4 pl-3 flex items-center">
          সর্বশেষ চাকরির বিজ্ঞপ্তি
          <ChevronRight className="size-7 pb-1 text-slate-700 dark:text-slate-300" />
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-2">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            <JobCard jobs={result} />
          </div>
          {/* Right */}
          <aside className="lg:col-span-3  space-y-4">
            <Telegram />
            <Blog />
          </aside>
        </div>
      </section>
    </>
  );
}
