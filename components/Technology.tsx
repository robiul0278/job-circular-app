"use client"
import Link from "next/link";
import { Badge } from "./ui/badge";
import { formatQuery } from "@/utils/utils";
import { useGetAllJobsQuery } from "@/redux/api/api";
import { Skeleton } from "./ui/skeleton";

type ITechnology = {
  technology: string;
  count: number;
}
const Technology = () => {
  const { data: technology, isLoading } = useGetAllJobsQuery(undefined);

  const jobCategories = technology?.data.technologyCount

  if (isLoading) {
    return (
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
    )
  }


  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 p-2">
        Job by Technology
      </h4>

      <div>
        {jobCategories?.map((category: ITechnology, index: number) => (
          <Link
            key={index}
            href={`/categories?query=${category.technology}`}
            className="flex items-center justify-between group cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
          >
            <span className="text-green-500 font-medium transition-colors text-sm">
              Diploma in {formatQuery(category.technology)}
            </span>
            <Badge variant="outline" className="dark:bg-gray-500">
              {category.count}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Technology;
