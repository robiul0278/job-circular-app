'use client';

import { TJobCircular } from "@/types/types";
import { formatDate } from "@/utils/format-date";
import { timeAgo } from "@/utils/format-time";
import {
  Building,
  Timer,
  Users,
  Clock,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { categoryToBangla } from "@/utils/utils";

const JobCard = ({ post, index }: { post: TJobCircular; index: number }) => {
  const {
    slug,
    title,
    companyName,
    banner,
    categories,
    deadline,
    vacancy,
    views,
    createdAt,
  } = post;

  return (
    <li className="list-none w-full px-2 lg:p-0">
      <Link
        href={`/job/${slug}`}
        className="block group"
        aria-label={`View details for ${title}`}
      >
        <div className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

          {/* Image Left */}
          <div className="sm:w-1/3 h-48 sm:h-auto relative">
            <Image
              src={banner}
              alt={title}
              width={600}
              height={400}
              className="w-full h-full p-2 rounded-2xl"
            />
            <Badge
              variant="destructive"
              className="absolute top-3 right-3 rounded-md"
            >{categoryToBangla(categories)}</Badge>
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col sm:w-2/3 p-4">
            <div className="flex-1 pb-14">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-green-700 transition-colors">
                {title}
              </h3>
              <div className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1 mt-1">
                <Building className="size-4" />
                {companyName}
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2 text-yellow-600">
                  <Timer className="size-4" />
                  <span>আবেদনের শেষ তারিখঃ {formatDate(deadline)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-gray-500 dark:text-gray-400" />
                  <span>ডিপ্লোমা শূন্যপদঃ ({vacancy} জন)</span>
                </div>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                {timeAgo(createdAt)}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="size-4" />
                {views}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Optional Ad Slot after every 30 cards */}
      {(index + 1) % 30 === 0 && (
        <div className="mt-4">
          <div className="w-full h-24 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-sm text-gray-400">
            Google Ad Placeholder (Mid-grid Ad)
          </div>
        </div>
      )}
    </li>
  );
};

export default JobCard;
