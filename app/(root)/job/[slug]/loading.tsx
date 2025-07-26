// components/JobCircularPageSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto py-2 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="rounded-none">
            <CardHeader>
              <div className="flex justify-between items-start gap-2">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-6 w-6" />
              </div>
              <Skeleton className="h-4 w-1/3 mt-2" />
            </CardHeader>

            <CardContent className="space-y-4">
              <Skeleton className="h-6 w-1/4" />

              {/* Time block */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-1/2" />

              <hr />

              {/* Education Section */}
              <Skeleton className="h-5 w-1/3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/4" />
              </div>

              <hr />

              {/* Vacancy Section */}
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-1/6" />

              <hr />

              {/* Markdown description */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Image preview skeletons */}
              <div className="grid grid-cols-1 gap-4 mt-4">
                <Skeleton className="w-full h-[300px] rounded-md" />
              </div>

              {/* Button */}
              <Skeleton className="h-10 w-full rounded-md" />
            </CardContent>
          </Card>

          {/* Circular Tabs */}
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 animate-pulse">
        {/* Right Sidebar */}
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
        </aside>
      </div>

      {/* Fixed views */}
      <div className="fixed bottom-4 left-4 z-50">
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
    </section>
  )
}
