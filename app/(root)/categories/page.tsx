
import { ChevronRight } from "lucide-react";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import { formatQuery } from "@/utils/utils";
import { TJobCircular } from "@/types/types";
import Categories from "@/components/Categories";
import Telegram from "@/components/Telegram";
import { getAllJobQuery } from "@/lib/api";

export default async function JobCategoryPage({ searchParams }: {
  searchParams: Promise<{ query?: string; page?: string }>
}) {

  const resolvedParams = await searchParams;
  const query = resolvedParams.query;
  const currentPage = parseInt(resolvedParams.page || '1');

  const specialCategories = ['government', 'private', 'autonomous'];

  const urlParams = new URLSearchParams();

  if (query) {
    if (specialCategories.includes(query)) {
      urlParams.set("categories", query);
    } else {
      urlParams.set("technology", query);
    }
  }

  urlParams.set("page", currentPage.toString());

  const jobs = await getAllJobQuery(urlParams.toString());



  return (
    <>
      <section className="max-w-6xl mx-auto px-4 lg:px-0 md:px-0 py-6">
        <p className="text-2xl font-semibold mb-2 flex items-center">
          {query
            ? `Results for "${formatQuery(query)}"`
            : "All Job Circular"}
          {!query && <ChevronRight className="size-6 text-primary" />}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            <ul className="grid grid-cols-1 gap-4">
              {jobs.result.map((post: TJobCircular, index: number) => (
                <JobCard key={index} post={post} index={index} />
              ))
              }
            </ul>
            <Pagination totalPages={jobs.meta.totalPage} currentPage={currentPage} />
          </div>
          {/* Right: Google AdSense or Placeholder */}
          <aside className="lg:col-span-3 space-y-4">
            <Telegram />
            <Categories />
            {/* AdSense Script or Placeholder */}
            {/* Replace below with actual AdSense code */}
            <div className=" border rounded-lg h-96 flex items-center justify-center text-gray-700 ">
              <span>Google AdSense Ad</span>
            </div>

          </aside>
        </div>
      </section>

    </>
  );
}
