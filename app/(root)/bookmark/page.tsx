"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useGetBookmarkQuery, useRemoveBookmarkMutation } from "@/redux/api/api";
import { TGenericErrorResponse, IJobCircular } from "@/types/types";
import React from "react";

export default function BookmarkPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [removeBookmark, { isLoading: isRemoving }] = useRemoveBookmarkMutation();
  const { data: bookmark, isLoading } = useGetBookmarkQuery(user?._id, {
    skip: !user,
  });


  const handleRemove = async (jobId: string) => {
    if (!user?._id) {
      toast.error("User not logged in");
      return;
    }
    try {
      const res = await removeBookmark({ userId: user._id, jobId }).unwrap();
      if (res?.data?.modifiedCount > 0) {
        toast.success("Bookmark removed successfully!");
      }
    } catch (err) {
      const error = err as { data: TGenericErrorResponse };
      const message =
        error?.data?.message || "Something went wrong while removing bookmark";
      console.error("Bookmark remove error:", error);
      toast.error(message);
    }
  };

  if (!user?._id) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-lg text-gray-500">সংরক্ষিত চাকরিগুলো দেখতে হলে অনুগ্রহ করে লগইন করুন।</p>
      </div>

    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!bookmark?.data) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-lg text-gray-500">You haven’t saved any jobs yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Saved Jobs</h1>

      {/* Google Ad placeholder */}
      <div className="mb-6">
        <div className="w-full h-28 bg-gray-100 border border-gray-300 flex items-center justify-center text-sm text-gray-400">
          Google Ad Placeholder (Horizontal Banner)
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {bookmark?.data.map((job: IJobCircular, index: number) => (
          <React.Fragment key={index}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{job.companyName}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemove(job._id)}
                  >
                    {isRemoving ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4 mr-1" /> Remove
                      </>
                    )}
                  </Button>
                  <a
                    href={`/job/${job.slug}`}
                    className="text-sm text-green-600 hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Insert ad after every 4 items */}
            {(index + 1) % 4 === 0 && (
              <div className="md:col-span-2">
                <div className="w-full h-24 bg-gray-100 border border-gray-300 flex items-center justify-center text-sm text-gray-400">
                  Google Ad Placeholder (Mid-grid Ad)
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
