import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Alert bar */}
      <div className="relative w-full bg-yellow-100 dark:bg-yellow-900 py-1.5 overflow-hidden border-y border-yellow-300 dark:border-yellow-700">
        <div className="max-w-7xl mx-auto flex space-x-8">
          <Skeleton className="h-5 w-20 bg-yellow-200/70" />
          <Skeleton className="h-5 w-full bg-yellow-200/70" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-8 w-62 mx-auto mt-4" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-1/4 mx-auto" />
            <div className="flex items-center gap-2 max-w-md mx-auto mt-10 border border-muted rounded-2xl shadow-sm p-2">
              <Skeleton className="h-10 flex-1 rounded-md" />
              <Skeleton className="h-10 w-20 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Card Header */}
      <div className="max-w-7xl pl-3 lg:p-0 mx-auto flex items-center gap-2">
        <Skeleton className="h-6 md:h-8 w-48 md:w-48 bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="size-7 hidden md:inline-block bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] max-w-7xl mx-auto gap-6 py-6">
        {/* Left: Job Cards */}
        <div className="space-y-4">
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
                    <div className="flex-1 pb-14 space-y-2">
                      <Skeleton className="h-5 w-3/4" /> {/* Title */}
                      <Skeleton className="h-4 w-1/2" /> {/* Company */}

                      <div className="mt-3 space-y-2">
                        <Skeleton className="h-4 w-2/3" /> {/* Deadline */}
                        <Skeleton className="h-4 w-2/4" /> {/* Vacancy */}
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
        <div className="space-y-4 animate-pulse">
          {/* FOLLOW US */}
          <div className="rounded-md border bg-card p-4">
            <p className="text-sm font-medium text-muted-foreground mb-3">FOLLOW US</p>
            <Skeleton className="h-8 w-full rounded-md" />
          </div>

          {/* JOB BY CATEGORY */}
          <div className="rounded-md border bg-card p-4">
            <p className="text-sm font-medium text-muted-foreground mb-3">JOB BY CATEGORY</p>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* JOB BY TECHNOLOGY */}
          <div className="rounded-md border bg-card p-4">
            <p className="text-sm font-medium text-muted-foreground mb-3">JOB BY TECHNOLOGY</p>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
