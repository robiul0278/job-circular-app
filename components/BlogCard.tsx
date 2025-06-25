'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { formatDate, timeAgo } from "@/lib/utils";
import { IJobPost } from "@/types";
import {
  EyeIcon,
  Timer,
  CalendarArrowUpIcon,
  Building2Icon,
  BadgeCheckIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JobCard = ({ post }: { post: IJobPost }) => {
  const {
    jobId,
    jobTitle,
    companyName,
    companyLogo,
    deadline,
    jobDescription,
    views,
    createdAt
  } = post;

  return (
    <li className="list-none w-full mx-auto">
      {/* <Link href={`/jobs/${jobId}`}> */}
        <Card className="flex flex-col sm:flex-row h-full border border-gray-300 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300 p-0 gap-0 bg-white dark:bg-gray-900 cursor-pointer">


          {/* Left: Logo + Deadline */}
          <div className="sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">
            <CardHeader className="p-0 flex items-center justify-center h-full">
              <Image
                src={companyLogo}
                alt={companyName}
                width={300}
                height={300}
                className="w-full h-30 object-contain p-2 sm:rounded-l-2xl sm:rounded-tr-none"
              />
            </CardHeader>
            <div className="flex items-center justify-center gap-1 text-sm text-yellow-600 font-medium border-t py-2 rounded-bl-lg">
              <CalendarArrowUpIcon className="size-4 text-yellow-600 " />
              <span>Deadline: {formatDate(deadline)}</span>
            </div>

          </div>

          {/* Right: Content + Footer */}
          <div className="flex flex-col justify-between sm:w-2/3 h-full">
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-1 leading-snug text-blue-400 dark:text-gray-100">
                <Link
                  href={`/jobs/${jobId}`}
                  className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition"
                >
                  <BadgeCheckIcon className="inline-block size-4 mr-1 text-blue-400 dark:text-gray-400" />
                  {jobTitle}
                </Link>
              </CardTitle>

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                <Building2Icon className="size-4 text-gray-600 dark:text-gray-400" />
                {companyName}
              </div>

              <CardDescription className="text-sm text-gray-700 dark:text-gray-300">
                {jobDescription?.length > 10 ? (
                  <>
                    {jobDescription.slice(0, 150)}
                    <span className="text-blue-500 hover:underline hover:opacity-80 hover:cursor-pointer">
                      {" "}
                      ...see more
                    </span>
                  </>
                ) : (
                  jobDescription
                )}
              </CardDescription>

            </CardContent>

            <CardFooter className="flex items-center justify-between py-2 px-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Timer className="size-4 text-gray-600 dark:text-gray-400" />
                <span>{timeAgo(createdAt)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <EyeIcon className="size-4 text-gray-600 dark:text-gray-400" />
                <span>{views}</span>
              </div>
            </CardFooter>
          </div>
        </Card>
      {/* </Link> */}
    </li>
  );
};

export default JobCard;
