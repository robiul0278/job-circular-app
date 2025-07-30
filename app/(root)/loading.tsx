import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Alert bar */}
      <div className="relative w-full px-4 md:px-0 lg-px-0 bg-yellow-100 dark:bg-yellow-900 py-1.5 overflow-hidden border-y border-yellow-300 dark:border-yellow-700">
        <div className="max-w-6xl mx-auto flex space-x-8">
          <Skeleton className="h-5 w-20 bg-yellow-200/70" />
          <Skeleton className="h-5 w-full bg-yellow-200/70" />
        </div>
      </div>

    <section className="hero relative w-full py-10 md:py-28 lg:py-28 overflow-hidden bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-300">
          <Skeleton className="h-6 sm:h-10 w-[90%] mx-auto rounded-md" />
        </h1>
        {/* Subheadline */}
        <div className="text-center max-w-2xl mx-auto">
          <Skeleton className="h-4 md:h-4 w-[95%] sm:w-[90%] mx-auto rounded-md" />
          <Skeleton className="h-4 md:h-4 w-[80%] sm:w-[75%] mx-auto mt-2 rounded-md" />
        </div>

        {/* Search Form */}
        <div className="w-full max-w-xl mx-auto px-8 md:px-4 lg:px-4 py-4">
          <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md border dark:border-gray-700">
            <Skeleton className="h-10 flex-1 rounded-lg" />
            <Skeleton className="h-10 w-24 rounded-lg" />
          </div>
        </div>
      </div>
    </section>

      {/* Card Header */}
      <div className="max-w-6xl pl-3 lg:pl-3 mx-auto flex items-center gap-2">
        <Skeleton className="h-6 md:h-6 w-48 md:w-48 bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="size-5 hidden md:inline-block bg-slate-200 dark:bg-slate-700 rounded-full" />
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
