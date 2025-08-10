"use client"
import { deadlineCountdown, formatDate } from "@/utils/format-date";
import { timeAgo } from "@/utils/format-time";
import {
  Timer,
  Users,
  Clock,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { categoryToBangla } from "@/utils/utils";
import { IJobCircular } from "@/types/types";

export interface JobProps {
  jobs: IJobCircular[] | null;
}

export function JobCard({ jobs }: JobProps) {

  return (
    <ul className="">
      {jobs?.map((job) => (
        <li key={job._id} className="list-none w-full px-2 lg:p-0 mb-4">
          <Link
            href={`/job/${job.slug}`}
            className="block group"
            aria-label={`View details for ${job.title}`}
          >
            <div className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Image Left */}
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <Image
                  src={job.banner}
                  alt={job.title}
                  width={600}
                  height={400}
                  className="w-full h-full p-2 rounded-2xl"
                />
                <Badge
                  variant="outline"
                  className="absolute top-3 right-3 text-white"
                >
                  {categoryToBangla(job.categories)}
                </Badge>
                <Badge
                  variant="outline"
                  className="absolute top-3 left-3 text-white"
                >
                   <span className="text-amber-400 text-[12px]">{deadlineCountdown(job.deadline)}</span>
                </Badge>
              </div>

              {/* Right Content */}
              <div className="relative flex flex-col sm:w-2/3 p-3">
                <div className="flex-1 pb-6">
                  <h3 className="text-lg leading-tight font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="text-sm font-medium text-teal-600 dark:text-teal-600 flex items-center gap-1 mb-2">
                    {job.companyName}
                  </div>

                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Timer className="size-4" />
                      <span className="font-medium">
                        Deadline: <strong>{formatDate(job.deadline)}</strong> 
                        
                      </span>
                      
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="size-4 text-gray-500 dark:text-gray-400" />
                      <span className="font-medium">
                        ডিপ্লোমা শূন্যপদঃ <strong>{job.vacancy}</strong> টি
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sticky Footer */}
                <div className="absolute bottom-0 left-0 w-full px-3 py-1 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {timeAgo(job.createdAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="size-4" />
                    {job.views}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
