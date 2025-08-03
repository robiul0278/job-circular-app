"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "./ui/spinner";
import { getAllJobQuery } from "@/lib/fetch-job";
import { IJobCircular } from "@/types/types";
import { JobCard } from "./JobCard";

export function LoadMore() {
  const [jobs, setJobs] = useState<IJobCircular[]>([]);
  const [pages, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreBeers = async () => {
    if (!hasMore) return;

    await delay(1000);
    const page = ((pages % 9) + 1).toString();
    const newProducts = (await getAllJobQuery({ params: { page } })) ?? [];

    if (newProducts.length === 0) {
      setHasMore(false); // আর কিছু নেই
      return;
    }

    setJobs((prev) => [...prev, ...newProducts]);
    setPage(Number(page));
  };

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreBeers();
    }
  }, [inView]);

  return (
    <>
      <JobCard jobs={jobs} />
      {hasMore && (
        <div
          className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          <Spinner />
        </div>
      )}
    </>
  );
}
