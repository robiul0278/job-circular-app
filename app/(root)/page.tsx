
import { ChevronRight } from "lucide-react";
import JobCard from "@/components/JobCard";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import { TJobCircular } from "@/types/types";
import Technology from "@/components/Technology";
import NoticeMarquee from "@/components/NoticeMarquee";
import Categories from "@/components/Categories";
import Telegram from "@/components/Telegram";
import { getAllJobQuery } from "@/lib/api";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string; page?: string }>
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.query;
  const currentPage = parseInt(resolvedParams.page || '1');

  const params = new URLSearchParams();

  if (query) {
    params.set("searchTerm", query);
  }
  params.set("page", resolvedParams.page || "1");
  const jobs = await getAllJobQuery(params.toString());

  return (
    <>
      <NoticeMarquee />
      <Hero query={query} />
      <section className="max-w-6xl mx-auto px-2 pb-2 lg:p-0">
        <p className="text-lg md:text-2xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 py-4 pl-3 flex items-center">
          {query ? `Search results for "${query}"` : "সর্বশেষ চাকরির বিজ্ঞপ্তি"}
          {!query && <ChevronRight className="size-7 pb-1 text-slate-700 dark:text-slate-300" />}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-2">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            <ul className="grid grid-cols-1 gap-4">
              {jobs.result.map((post: TJobCircular, index: number) => (
                <JobCard key={index} post={post} index={index} />
              ))
              }
            </ul>
            <Pagination totalPages={jobs?.meta.totalPage} currentPage={currentPage} />
          </div>
          {/* Right */}
          <aside className="lg:col-span-3 space-y-4">
            <Telegram />
            <Categories />
            <Technology />
          </aside>
        </div>
      </section>
    </>
  );
}
