"use client";

import { useEffect, useRef } from "react";
import { useUpdateViewsMutation } from "@/redux/api/api";
import PingLoader from "./ping-loader";

const View = ({ id, views }: { id: string; views: string }) => {
  const [updateViews] = useUpdateViewsMutation();
  const hasUpdated = useRef(false); // guard flag

  useEffect(() => {
    if (id && !hasUpdated.current) {
      hasUpdated.current = true; // mark as triggered
      updateViews(id)
    }
  }, [id, updateViews]);

  return (
    <div className="absolute bottom-2 left-2 backdrop-blur-md dark:bg-gray-800 dark:text-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2">
      <div className="absolute -top-1 -right-1">
        <PingLoader />
      </div>
      <div className="w-full flex justify-center items-center gap-1">
        <p className="text-sm font-semibold">
          {Number(views).toLocaleString()}
        </p>
        <p className="text-sm">views</p>
      </div>
    </div>
  );
};

export default View;
