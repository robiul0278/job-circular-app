"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useGetAllJobsQuery } from "@/redux/api/api";
import ErrorMessage from "@/components/ErrorMessage";
import { TJobCircular } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/format-date";
import TabsSkeleton from "./TabsSkeleton";
import { categoryToBangla } from "@/utils/utils";
import Link from "next/link";

type ICategory = {
    category: string;
    count: number;
};

export default function CircularTabs() {
    const [tabValue, setTabValue] = useState("government");

    const params = {
        ...((tabValue) && { categories: tabValue }),
        limit: 5,
    };

    const { data: circular, isLoading, isError } = useGetAllJobsQuery(params);

    const categories = circular?.data.categoryCount;
    const Jobs = circular?.data.result;

    if (isLoading) return <TabsSkeleton />;
    if (isError) return <ErrorMessage />;

    return (
        <Tabs value={tabValue} onValueChange={setTabValue} className=" mx-auto border shadow p-4">
            <TabsList className="mb-2">
                {categories.map((data: ICategory, i: number) => (
                    <TabsTrigger key={i} value={data.category}>{categoryToBangla(data.category)}
                        <Badge variant="outline" className="dark:bg-gray-500">
                            {data.count}
                        </Badge>
                    </TabsTrigger>

                ))}
            </TabsList>
            <TabsContent value={tabValue}>
                {Jobs.length > 0 ? (
                    <ul className="space-y-3">
                        {Jobs.map((job: TJobCircular) => (
                            <li key={job._id} className="border rounded-md p-3 hover:shadow-md transition-shadow">
                                <Link
                                    href={`/circular/${job.slug}`}
                                    className="block group"
                                    aria-label={`View details for ${job.title}`}
                                >
                                    <h3 className="font-semibold">{job.title}</h3>
                                    <span>আবেদনের শেষ তারিখঃ {formatDate(job.deadline)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">No job circulars found.</p>
                )}
            </TabsContent>
        </Tabs>
    );
}
