'use client';

import { Skeleton } from "@/components/ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <li className="list-none w-full mx-auto">
      <div className="flex flex-col sm:flex-row h-full rounded-none border border-green-600 p-0 gap-0 hover:shadow-md transition-all duration-300">
        
        {/* Left: Logo + Deadline */}
        <div className="sm:w-1/3 border-b sm:border-b-0 sm:border-r flex flex-col justify-between">
          <div className="flex items-center justify-center h-full p-4 sm:rounded-l-2xl sm:rounded-tr-none">
            <Skeleton className="w-full h-40" />
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-green-700 font-medium border-t bg-gray-50 py-2">
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {/* Right: Content + Footer */}
        <div className="flex flex-col justify-between sm:w-2/3 h-full">
          <div className="p-4 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="flex items-center justify-between bg-gray-50 py-2 px-4 border border-b-0 border-x-0">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCardSkeleton;
