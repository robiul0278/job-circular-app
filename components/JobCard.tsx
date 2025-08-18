import { formatDate } from "@/utils/format-date";
import { timeAgo } from "@/utils/format-time";
import {
  Users,
  Clock,
  Eye,
  Calendar1,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { categoryToBangla } from "@/utils/utils";
import { IJobCircular } from "@/types/types";
import BookmarkButton from "./BookmarkButton";
import Image from "next/image";

export interface JobProps {
  jobs: IJobCircular[] | null;
}

export function JobCard({ jobs }: JobProps) {

  return (
    <ul>
      {jobs?.map((job) => (
        <li key={job._id} className="list-none w-full mb-4">

          <div className="relative flex flex-col sm:flex-row 
  dark:bg-gray-900 
  border border-gray-200 dark:border-gray-700 
  rounded-lg overflow-hidden 
  shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Left */}
            <Link href={`/job/${job.slug}`} className="sm:w-1/3 h-48 sm:h-auto relative cursor-pointer">
              <Image
                src={job.banner}
                alt={`ডিপ্লোমা চাকরি সার্কুলার – ${job.title}`}
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
            </Link>

            {/* Right Content */}
            <div className="relative flex flex-col sm:w-2/3 p-3">
              <div className="flex-1 pb-6">
                <Link href={`/job/${job.slug}`} className="cursor-pointer" >
                  <h3 className="text-lg leading-tight font-semibold group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="text-sm font-medium text-green-800 dark:text-green-600 flex items-center gap-1 mb-2">
                    {job.companyName}
                  </div>
                </Link>

                <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <div className="flex items-center gap-1">
                      <Calendar1 className="size-4" />
                      <span className="font-medium">
                        শেষ তারিখঃ <strong>{formatDate(job.deadline)}</strong>

                      </span>

                    </div>

                    <div className="flex items-center gap-1">
                      <Users className="size-4 text-gray-500 dark:text-gray-400" />
                      <span className="font-medium">
                        ডিপ্লোমা শূন্যপদঃ <strong>{job.vacancy}</strong> টি
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-4 lg:gap-4 items-center">
                    <Link
                      href={`/job/${job.slug}`}
                      className="px-3 py-1 rounded bg-green-700 text-white text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                    >
                      বিস্তারিত দেখুন
                    </Link>

                    <BookmarkButton jobId={job._id} />
                  </div>

                </div>
              </div>

              {/* Sticky Footer */}
              <div className="absolute bottom-0 left-0 w-full px-3 py-1 border-t border-gray-200 dark:border-gray-700  dark:bg-gray-900 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 ">
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
        </li>
      ))}
    </ul>
  );
}
