'use client';

import { Skeleton } from "@/components/ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <li className="list-none w-full mx-auto">
      <div className="flex flex-col sm:flex-row h-full border border-gray-300 dark:border-gray-700 rounded hover:shadow-md transition-all duration-300 p-0 gap-0 bg-white dark:bg-gray-900">

        {/* Left: Image Skeleton */}
        <div className="sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700">
          <div className="w-full h-48 pt-2">
            <Skeleton className="w-full h-full" />
          </div>
        </div>

        {/* Right: Content Skeleton */}
        <div className="flex flex-col justify-between sm:w-2/3 h-full">
          {/* Title and details */}
          <div className="px-4 py-2 space-y-2">
            <Skeleton className="h-5 w-3/4" /> {/* Title */}
            <Skeleton className="h-4 w-1/2" /> {/* Company */}
            <Skeleton className="h-4 w-full" /> {/* Deadline */}
            <Skeleton className="h-4 w-5/6" /> {/* Vacancy */}
          </div>

          {/* Footer: Time ago + Views */}
          <div className="flex items-center justify-between py-2 px-4 border-t border-gray-200 dark:border-gray-700">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCardSkeleton;
