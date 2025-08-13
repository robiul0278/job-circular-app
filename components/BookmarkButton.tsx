"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import { RootState } from "@/redux/store";
import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
  useGetBookmarkQuery,
} from "@/redux/api/api";
import { Button } from "./ui/button";
import { IJobCircular } from "@/types/types";

type Props = {
  jobId: string;
};

const BookmarkButton = ({ jobId }: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?._id;

  const [bookmarked, setBookmarked] = useState(false);

  // Bookmark list fetch
  const { data: bookmark, isLoading: isFetching } = useGetBookmarkQuery(userId, {
    skip: !userId,
  });

  //   console.log(bookmark?.data.map((job: any) => job._id));


  const [addBookmark, { isLoading: isAdding }] = useAddBookmarkMutation();
  const [removeBookmark, { isLoading: isRemoving }] = useRemoveBookmarkMutation();

  // Set bookmark state from fetched data
  useEffect(() => {
    if (bookmark?.data && Array.isArray(bookmark.data)) {
      const isBookmarked = bookmark.data.some((job: IJobCircular) => job._id === jobId);
      setBookmarked(isBookmarked);
    }
  }, [bookmark, jobId]);

  const toggleBookmark = async () => {
    if (!userId) {
      toast.error("অনুগ্রহ করে আগে লগইন করুন!");
      return;
    }

    try {
      if (bookmarked) {
        const res = await removeBookmark({ userId, jobId }).unwrap();
        if (res?.data?.modifiedCount > 0) {
          toast.success("Bookmark removed successfully!");
          setBookmarked(false);
        }
      } else {
        const res = await addBookmark({ userId, jobId }).unwrap();
        if (res?.data?.modifiedCount > 0) {
          toast.success("Bookmark added successfully!");
          setBookmarked(true);
        }
      }
    } catch (err) {
      const error = err as { data?: { message?: string } };
      const message = error?.data?.message || "Something went wrong while updating bookmark";
      toast.error(message);
    }
  };

  return (
<Button
  variant="ghost"
  onClick={toggleBookmark}
  disabled={isAdding || isRemoving || isFetching}
  aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
  className={`
    relative flex items-center justify-center rounded-full 
    w-8 h-8 p-0 backdrop-blur-sm transition-all duration-300
    hover:shadow-lg  hover:scale-105 
    focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer
    ${bookmarked 
      ? "bg-green-700 dark:bg-green-800 text-white hover:bg-green-700 dark:text-green-400" 
      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700"}
  `}
>
  <Heart
    className={`
      w-6 h-6 transition-transform duration-200 
      ${bookmarked ? "text-white" : "hover:scale-110"}
    `}
  />
</Button>
  );
};

export default BookmarkButton;
