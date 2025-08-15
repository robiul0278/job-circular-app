import { Skeleton } from "./ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="hero px-2 md:px-0 lg:px-0 py-6 md:py-12 lg:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-2">

          {/* Title & Subtitle Skeleton */}
          <div className="space-y-2">
            <Skeleton className="w-48 h-10 rounded-md" />
            <Skeleton className="w-64 h-6 rounded-md" />
          </div>

          {/* Categories & Departments Skeleton (like Cards) */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-2">
            {[1, 2, 3].map((_, i) => (
              <Skeleton
                key={i}
                className="flex-1 h-16 rounded-md"
              />
            ))}
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
            <Skeleton className="w-full h-6 rounded-md mb-4" />
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-8 rounded-md"
                />
              ))}
            </div>
          </div>
          {/* Search Bar Skeleton */}
          <Skeleton className="w-full h-12 rounded-md" />
          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((_, i) => (
              <Skeleton
                key={i}
                className="h-20 rounded-lg"
              />
            ))}
          </div>
        </div>
        {/* Right Side Skeleton (Image placeholder) */}
        <div className="justify-center hidden md:flex lg:flex">
          <Skeleton className="w-[300px] h-[300px] rounded-md" />
        </div>

      </div>
    </section>
  );
}
