"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetBookmarkQuery, useRemoveBookmarkMutation } from "@/redux/api/api";
import { TGenericErrorResponse, IJobCircular } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar1, Loader2, Trash2} from "lucide-react";
import { toast } from "sonner";
import { formatDate } from "@/utils/format-date";

export default function BookmarkPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading } = useGetBookmarkQuery(user?._id, { skip: !user });
  const [removeBookmark] = useRemoveBookmarkMutation();
  const [removingJobId, setRemovingJobId] = useState<string | null>(null);

  const bookmarks = data?.data || [];

  const handleRemove = async (jobId: string) => {
    if (!user?._id) {
      toast.error("User not logged in");
      return;
    }
    try {
      setRemovingJobId(jobId);
      const res = await removeBookmark({ userId: user._id, jobId }).unwrap();
      if (res?.data?.modifiedCount > 0) {
        toast.success("Job removed from bookmarks");
      }
    } catch (err) {
      const error = err as { data: TGenericErrorResponse };
      toast.error(error?.data?.message || "Failed to remove bookmark");
    } finally {
      setRemovingJobId(null);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loader2 className="w-6 h-6 animate-spin text-primary" aria-label="Loading bookmarks" />
      </div>
    );
  }

  // Not logged in
  if (!user?._id) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-center">
        <p className="text-lg text-muted-foreground">
          সংরক্ষিত চাকরিগুলো দেখতে হলে অনুগ্রহ করে লগইন করুন।
        </p>
      </div>
    );
  }

  // No bookmarks
  if (bookmarks.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-center">
        <p className="text-lg text-muted-foreground">
          You haven’t saved any jobs yet.
        </p>
      </div>
    );
  }

  // Main content
  return (
    <section className="max-w-6xl mx-auto px-3 md:px-2 lg:px-0 py-12">
      <h1 className="text-4xl font-extrabold mb-10 text-foreground">
        Your Saved Jobs
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {bookmarks.map((job: IJobCircular) => (
          <Card
            key={job._id}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-border overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{job.companyName}</p>

              <div className="flex flex-col md:flex-row gap-4 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar1 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span>
                    শেষ তারিখঃ <strong>{formatDate(job.deadline)}</strong>
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => handleRemove(job._id)}
                  disabled={removingJobId === job._id}
                >
                  {removingJobId === job._id ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" /> Remove
                    </>
                  )}
                </Button>

                <a
                  href={`/job/${job.slug}`}
                  className="text-sm font-medium text-green-700 dark:text-green-400 hover:underline"
                >
                  View Details
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
