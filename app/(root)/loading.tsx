import HeroSkeleton from "@/components/HeroSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Alert bar */}
      <div className="relative w-full px-4 md:px-0 lg-px-0 bg-yellow-100 dark:bg-yellow-800 py-1.5 overflow-hidden border-y border-yellow-300 dark:border-yellow-700">
        <div className="max-w-6xl mx-auto flex space-x-8">
          <Skeleton className="h-5 w-20 bg-yellow-200/70" />
          <Skeleton className="h-5 w-full bg-yellow-200/70" />
        </div>
      </div>
      {/* Hero Skeleton*/}
      <HeroSkeleton />
      {/* Card Header */}
      <div className="max-w-6xl pl-3 lg:pl-3 mx-auto flex items-center gap-2 mt-4">
        <Skeleton className="h-6 md:h-6 w-48 md:w-48 bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="size-5  bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto gap-5 py-6">
        {/* Left: Job Cards */}
        <div className=" lg:col-span-9 space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="list-none w-full px-2 lg:p-0">
              <div className="block group">
                <div className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

                  {/* Image Left */}
                  <div className="sm:w-1/3 h-48 sm:h-auto relative p-2">
                    <Skeleton className="w-full h-full p-2 rounded-2xl" />
                    <div className="absolute top-3 right-3">
                      <Skeleton className="h-6 w-20 rounded-md" />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="relative flex flex-col sm:w-2/3 p-4">
                    <div className="flex-1 pb-6 space-y-2">
                      <Skeleton className="h-5 w-3/4" /> {/* Title */}
                      <Skeleton className="h-3 w-1/2" /> {/* Company */}

                      <div className="mt-3 space-y-2">
                        <Skeleton className="h-3 w-2/3" /> {/* Deadline */}
                        <Skeleton className="h-3 w-2/4" /> {/* Vacancy */}
                      </div>
                    </div>

                    {/* Sticky Footer */}
                    <div className="absolute bottom-0 left-0 w-full px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-between text-sm">
                      <Skeleton className="h-4 w-24" /> {/* Time ago */}
                      <Skeleton className="h-4 w-12" /> {/* Views */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-4 animate-pulse">
          {/* FOLLOW US */}
          <div className="rounded-lg p-4 border dark:bg-gray-900">
            <Skeleton className="w-24 h-5 mb-3 rounded-md" />
            <Skeleton className="w-full h-10 rounded-md" />
          </div>

          {/* সাম্প্রতিক আপডেট */}
          <aside className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
            {/* Title Skeleton: matches <h4> text size (text-sm, font-semibold), approx 10px height, width to fit the text */}
            <Skeleton className="w-40 h-5 mb-3 rounded-md" />

            {/* List Skeleton */}
            <ul className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <li
                  key={i}
                  className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-none"
                >
                  <div className="block">
                    {/* Notice title: text-sm font-medium line-clamp-2 → approx 1.25rem height per line, 2 lines → ~2.5rem height */}
                    <Skeleton className="w-full h-10 mb-1 rounded-md" />
                    {/* Date span: text-xs → ~0.75rem height, small width */}
                    <Skeleton className="w-24 h-3 rounded-md" />
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
