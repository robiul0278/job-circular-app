"use client";

import { ChevronRight} from "lucide-react";
import { useGetAllJobsQuery } from "@/redux/api/api";
import { useSearchParams } from "next/navigation";
import JobCard from "@/components/JobCard";
import JobCardSkeleton from "@/components/JobCardSkeleton";
import ErrorMessage from "@/components/ErrorMessage";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { formatQuery } from "@/utils/utils";
import { TJobCircular } from "@/types/types";
import Technology from "@/components/Technology";
import Categories from "@/components/Categories";
import Telegram from "@/components/Telegram";

export default function JobCategoryPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [currentPage, setCurrentPage] = useState(1); 


const specialCategories = ['government', 'private', 'autonomous'];

const params = {
  ...(specialCategories.includes(query) ? { categories: query } : { technology: query }),
  page: currentPage,
};

console.log(params);

  // Redux Toolkit 
  const { data: posts, isLoading, isError } = useGetAllJobsQuery(params);
  if (isError) return <ErrorMessage />;


  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-6">
        {/* Top AdSense */}
        <div className="mb-6">
          <div className="w-full h-28 bg-gray-100 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            Google AdSense Ad (Top Banner)
          </div>
        </div>
        <p className="text-2xl font-semibold mb-6 flex items-center">
          {query
            ? `Results for "Diploma in ${formatQuery(query)}"`
            : "All Job Circular"}
          {!query && <ChevronRight className="size-6 text-primary" />}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            <ul className="grid grid-cols-1 gap-4">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <JobCardSkeleton key={i} />
                ))
              ) : posts?.data.result.length > 0 ? (
                posts.data.result.map((post: TJobCircular, index: number) => (
                  <JobCard key={index} post={post} index={index} />
                ))
              ) : (
                <p className="text-center  text-gray-500 dark:text-gray-400 col-span-full">
                  No job found
                </p>
              )}
            </ul>
            <Pagination totalPages={posts?.data.meta.totalPage} currentPage={currentPage} setCurrentPageAction={setCurrentPage} />
          </div>
          {/* Right: Google AdSense or Placeholder */}
          <aside className="lg:col-span-3 space-y-2">
 <Telegram />
            <Categories />
            <Technology/>

            {/* AdSense Script or Placeholder */}
            {/* Replace below with actual AdSense code */}
            <div className=" bg-gray-100 border border-gray-300 rounded-lg h-96 flex items-center justify-center text-gray-700 dark:text-gray-300">
              <span>Google AdSense Ad</span>
            </div>

          </aside>
        </div>
      </section>

    </>
  );
}
