"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { RootState } from "@/redux/store";
import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
  useGetBookmarkQuery,
} from "@/redux/api/api";
import { Button } from "./ui/button";
import { TJobCircular } from "@/types/types";

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
      const isBookmarked = bookmark.data.some((job: TJobCircular) => job._id === jobId);
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
      size="sm"
      onClick={toggleBookmark}
      disabled={isAdding || isRemoving || isFetching}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      className={`group rounded-full px-4 py-2 border border-muted-foreground/20 backdrop-blur-sm
    bg-muted/30 dark:bg-muted/40 text-sm font-medium transition-all duration-200
    hover:shadow-md hover:bg-muted/40 dark:hover:bg-muted/50
    flex items-center cursor-pointer
    ${bookmarked ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300"}
  `}
      type="button"
    >
      {bookmarked ? (
        <BookmarkCheck className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
      ) : (
        <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
      )}
      <span className="text-[12px] md:text-sm lg:text-sm">
        {bookmarked ? "Bookmarked" : "Bookmark"}
      </span>
    </Button>

  );
};

export default BookmarkButton;
