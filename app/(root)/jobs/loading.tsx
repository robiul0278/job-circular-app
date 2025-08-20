import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="max-w-6xl mx-auto px-2 pb-2 lg:p-0 relative">
      {/* HEADER skeleton */}
      <div className="flex flex-col lg:flex-row md:flex-row justify-between my-4 gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-14 w-full max-w-sm rounded-2xl hidden lg:flex" />
      </div>
      <hr className="mb-4 hidden lg-flex md:flex" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-2">
        {/* Left sidebar skeleton */}
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto bg-white dark:bg-gray-900 z-20 md:sticky md:top-0 md:z-30 md:p-4 lg:p-4 rounded-lg">
          {/* Categories Skeleton */}
          <div className="space-y-3 border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
            <Skeleton className="h-6 w-2/3" />
            <div className="w-full max-w-sm">
              {/* One dropdown option skeleton */}
              <div className="mt-2 flex items-center justify-between h-9 rounded-md px-3 bg-gray-100 dark:bg-gray-800 animate-pulse">
                <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main content skeleton */}
        <div className="lg:col-span-8">
          <ul role="list" className="space-y-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Left image skeleton */}
                <div className="sm:w-1/3 h-auto relative p-2">
                  <Skeleton className="w-full h-full rounded-2xl" />
                </div>


                {/* Right content skeleton */}
                <div className="relative flex flex-col sm:w-2/3 p-4 flex-1">
                  <div className="flex-1 space-y-4">
                    <Skeleton className="h-6 w-3/4 rounded" />
                    <Skeleton className="h-5 w-1/2 rounded" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-5/6 rounded" />
                      <Skeleton className="h-4 w-2/3 rounded" />
                    </div>
                  </div>

                  {/* Footer skeleton */}
                  <div className="absolute bottom-0 left-0 w-full px-3 py-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
