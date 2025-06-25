"use client";

import { use } from "react";
import { useGetSingleJobQuery } from "@/redux/api/api";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import View from "@/components/View";
import Image from "next/image";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
  const { id } = use(params);
  const { data: singleJob, error, isLoading } = useGetSingleJobQuery(id);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md bg-red-50 border-red-300">
          <CardContent>
            <p className="text-red-700 font-semibold">❌ Failed to load job details.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading || !singleJob?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Skeleton className="w-full max-w-3xl h-96" />
      </div>
    );
  }

  const {
    jobId,
    jobTitle,
    companyName,
    companyLogo,
    deadline,
    jobDescription,
    views,
    createdAt,
  } = singleJob.data;

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      {/* Job Header */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden shrink-0">
            {companyLogo ? (
              <Image
                src={companyLogo}
                alt={`${companyName} logo`}
                width={96}
                height={96}
                className="object-contain"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Logo
              </div>
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl">{jobTitle}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              {companyName}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <Badge variant="secondary">Job ID</Badge>
              <p className="mt-1 font-mono">{jobId}</p>
            </div>
            <div>
              <Badge variant="secondary">Posted On</Badge>
              <p className="mt-1">{new Date(createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <Badge variant="secondary">Deadline</Badge>
              <p className="mt-1">{new Date(deadline).toLocaleDateString()}</p>
            </div>
            <div>
              <Badge variant="secondary">Views</Badge>
              <p className="mt-1">{views || 0}</p>
            </div>
          </div>

          {/* Job Description */}
          <h3 className="text-lg font-semibold mb-3">Job Description</h3>
          <ScrollArea className="h-48 rounded-md border p-4 mb-6">
            <p className="whitespace-pre-wrap leading-relaxed">{jobDescription || "No description available."}</p>
          </ScrollArea>

          {/* Apply Button */}
          <div className="text-center">
            <Button size="lg" variant="default">
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* View Count fixed bottom left */}
      <div className="fixed bottom-4 left-4">
        <Suspense fallback={<Skeleton className="w-20 h-6" />}>
          <View id={jobId} views={views} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
