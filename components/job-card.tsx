'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { deadlineCountdown, timeAgo } from "@/lib/utils";
import { IJobPost } from "@/types";
import {
  EyeIcon,
  Timer,
  CalendarArrowUpIcon,
  Building,
  GraduationCap,
  UserPlus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JobCard = ({ post, index }: { post: IJobPost, index: number }) => {
  const {
    jobId,
    jobTitle,
    companyName,
    image,
    education,
    deadline,
    views,
    vacancy,
    createdAt
  } = post;

  return (
    <li className="list-none w-full mx-auto">
      <Link
        href={`/jobs/${jobId}`}
        className="block"
        aria-label={`View details for ${jobTitle}`}
      >
        <Card className="flex flex-col sm:flex-row h-full border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300 p-0 gap-0 bg-white dark:bg-gray-900 cursor-pointer">
          {/* Left: Logo + Deadline */}
          <div className="sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">
            <CardHeader className="p-0 flex items-center justify-center h-full">
              <Image
                src={image}
                alt={jobTitle}
                width={300}
                height={300}
                className="w-full object-cover p-2 sm:rounded-l-2xl sm:rounded-tr-none"
              />
            </CardHeader>
            <div className="flex items-center justify-center gap-1 text-sm text-yellow-600 font-medium border-t py-2 rounded-bl-lg">
              <CalendarArrowUpIcon className="size-4 text-yellow-600" />
              <span>{deadlineCountdown(deadline)}</span>
            </div>
          </div>

          {/* Right: Content + Footer */}
          <div className="flex flex-col justify-between sm:w-2/3 h-full">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-1 leading-snug text-blue-400 dark:text-gray-100">
                {jobTitle}
              </CardTitle>

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1 font-semibold">
                <Building className="size-4 text-gray-600 dark:text-gray-400" />
                {companyName}
              </div>

              {/* পদসংখ্যা */}
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-start gap-1">
                <UserPlus className="size-4 mt-0.5 text-gray-600 dark:text-gray-400" />
                <div>
                  <span className="font-medium">পদসংখ্যাঃ</span>   {vacancy ? `${vacancy} জন ।` : "উল্লেখ নেই"}
                </div>
              </div>

              {/* শিক্ষা যোগ্যতা */}
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-1">
                <GraduationCap className="size-4 mt-0.5 text-gray-600 dark:text-gray-400" />
                <div>
                  <div className="font-medium">শিক্ষাগত যোগ্যতাঃ</div>
                  <ul className="list-disc">
                    {education?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>


            <CardFooter className="flex items-center justify-between py-2 px-4">
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <Timer className="size-4 text-gray-600 dark:text-gray-400" />
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
      {(index + 1) % 3 === 0 && (
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
