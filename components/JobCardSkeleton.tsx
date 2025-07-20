'use client';

import { Skeleton } from "@/components/ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <li key={index} className="list-none w-full px-2 lg:p-0">
          <div className="block group">
            <div className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

              {/* Image Left */}
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <Skeleton className="w-full h-full p-2 rounded-2xl" />
                <div className="absolute top-3 right-3">
                  <Skeleton className="h-6 w-20 rounded-md" />
                </div>
              </div>

              {/* Right Content */}
              <div className="relative flex flex-col sm:w-2/3 p-4">
                <div className="flex-1 pb-14 space-y-2">
                  <Skeleton className="h-5 w-3/4" /> {/* Title */}
                  <Skeleton className="h-4 w-1/2" /> {/* Company */}
                  
                  <div className="mt-3 space-y-2">
                    <Skeleton className="h-4 w-full" /> {/* Deadline */}
                    <Skeleton className="h-4 w-2/3" /> {/* Vacancy */}
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
    </>
  );
};

export default JobCardSkeleton;
