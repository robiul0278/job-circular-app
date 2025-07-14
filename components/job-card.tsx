'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { IJobPost } from "@/types";
import { formatDate } from "@/utils/format-date";
import { timeAgo } from "@/utils/format-time";
import {
  EyeIcon,
  Timer,
  Building,
  Users,
  ClockFading,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JobCard = ({ post, index }: { post: IJobPost, index: number }) => {
  const {
    slug,
    title,
    companyName,
    image,
    deadline,
    vacancy,
    views,
    createdAt
  } = post;

  return (
    <li className="list-none w-full mx-auto">
      <Link
        href={`/circular/${slug}`}
        className="block"
        aria-label={`View details for ${title}`}
      >
        <Card className="flex flex-col sm:flex-row h-full border border-gray-300 dark:border-gray-700 rounded hover:shadow-md transition-all duration-300 p-0 gap-0 bg-white dark:bg-gray-900 cursor-pointer">
          {/* Left: Logo + Deadline */}
          <div className="sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">
            <CardHeader className="overflow-hidden w-full p-0">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={600} 
                className="w-full h-48 pt-2"
              />
            </CardHeader>
          </div>

          {/* Right: Content + Footer */}
          <div className="flex flex-col justify-between sm:w-2/3 h-full">
            <CardContent className="px-4 py-2">
              <CardTitle className="text-lg text-slate-600 dark:text-slate-300 font-semibold mb-1 leading-snug">
                {title}
              </CardTitle>

              <div className="text-sm text-green-700 mb-2 flex items-center gap-1 font-semibold">
                <Building className="size-4" />
                {companyName}
              </div>
              <div className="flex gap-1 text-sm  font-medium py-2  dark:text-slate-300">
                <Timer className="size-4" />
                <span>আবেদনের শেষ তারিখঃ {formatDate(deadline)}</span>
              </div>
              <div className="flex gap-1 text-sm  font-medium dark:text-slate-300">
                <Users className="size-4" />
                <span>ডিপ্লোমা শূন্যপদঃ ({vacancy} জন)</span>
              </div>
            </CardContent>


            <CardFooter className="flex items-center justify-between py-2 px-4">
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <ClockFading className="size-4 text-gray-600 dark:text-gray-400" />
                <span>{timeAgo(createdAt)}</span>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <EyeIcon className="size-4 text-gray-600 dark:text-gray-400" />
                <span>{views}</span>
              </div>
            </CardFooter>
          </div>
        </Card>
      </Link>
      {/* Insert ad after every 4 items */}
      {(index + 1) % 30 === 0 && (
        <div className="md:col-span-2 mt-4">
          <div className="w-full h-24 rounded bg-gray-100 border border-gray-300 flex items-center justify-center text-sm text-gray-400">
            Google Ad Placeholder (Mid-grid Ad)
          </div>
        </div>
      )}
    </li>

  );
};

export default JobCard;
