
import { ChevronRight } from "lucide-react";
import NoticeMarquee from "@/components/NoticeMarquee";
import Telegram from "@/components/Telegram";
import { JobCard } from "@/components/JobCard";
import { getAllJobQuery } from "@/lib/api";
import Pagination from "@/components/Pagination";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";

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
  const path = "/"

  const params: Record<string, string> = {
    ...(categories ? { categories: categories } : {}),
    ...(departments ? { departments: departments } : {}),
    ...(query ? { searchTerm: query } : {}),
    page: (currentPage).toString(),
  };

  const { result, meta } = await getAllJobQuery({ params });

  return (
    <>
      <NoticeMarquee />
      <Hero categories={categories} departments={departments} query={query} />
      <section className="max-w-6xl mx-auto px-2 pb-2 lg:p-0">
        <p className="text-lg md:text-2xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 py-4 pl-3 flex items-center">
          {(query || departments || categories)
            ? `Results for "${[query, departments, categories].filter(Boolean).join(' | ')}"`
            : "সর্বশেষ চাকরির বিজ্ঞপ্তি"}
          {!query && !departments && !categories && (
            <ChevronRight className="size-7 pb-1 text-slate-700 dark:text-slate-300" />
          )}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-2">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            {result.length === 0 ? (
              <div className="text-center py-8 text-slate-600 dark:text-slate-400">
                <p className="text-xl font-medium">
                  {query ? `"${query}" এর জন্য কোনো চাকরির বিজ্ঞপ্তি পাওয়া যায়নি।` : "এই মুহূর্তে কোনো চাকরির বিজ্ঞপ্তি পাওয়া যাচ্ছে না।"}
                </p>
                <p className="text-sm mt-2">দয়া করে অন্য কীওয়ার্ড দিয়ে আবার চেষ্টা করুন।</p>
              </div>
            ) : (
              <JobCard jobs={result} />
            )}
            <Pagination totalPages={meta.totalPage} currentPage={currentPage} path={path} />
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
