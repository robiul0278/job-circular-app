"use client";

import { ChevronRight, Send } from "lucide-react";
import { useGetAllJobsQuery } from "@/redux/api/api";
import { useSearchParams } from "next/navigation";
import JobCard from "@/components/job-card";
import { IJobPost } from "@/types";
import JobCardSkeleton from "@/components/job-card-skeleton";
import ErrorMessage from "@/components/error-message";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import Categories from "@/components/Categories";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [currentPage, setCurrentPage] = useState(1);

  const params = {
    ...(query && { searchTerm: query, technology: query }),
    page: currentPage,
  };

  // Redux Toolkit 
  const { data: posts, isLoading, isError } = useGetAllJobsQuery(params);
  if (isError) return <ErrorMessage />;

  return (
    <>
      <Hero query={query} />
      <section className="max-w-7xl mx-auto px-2 pb-2 lg:p-0">
        <p className="text-2xl font-semibold text-slate-600 dark:text-slate-300 py-4 flex items-center">
          {query ? `Search results for "${query}"` : "Latest Job Circular"}
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
                posts.data.result.map((post: IJobPost, index: number) => (
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

            {/* AdSense Script or Placeholder */}
            {/* Replace below with actual AdSense code */}
            {/* <div className="bg-gray-100 border border-gray-300 rounded-lg h-96 flex items-center justify-center text-gray-700 dark:text-gray-300">
              <span>Google AdSense Ad</span>
            </div> */}

          </aside>
        </div>
      </section>

    </>
  );
}
