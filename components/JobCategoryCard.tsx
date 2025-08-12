"use client";

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categoryToBangla } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { Badge } from "./ui/badge";

type ICategory = {
    category: string;
    count: number;
};

export default function JobCategoryCard({
    data,
    category,
}: {
    data: ICategory[];
    category?: string;
}) {
    const router = useRouter();

    const handlePagination = (selectedCategory: string) => {
        startTransition(() => {
            const current = new URLSearchParams(window.location.search);
            current.set("categories", selectedCategory.toString());
            const query = current.toString();
            router.push(`?${query}`);
        });
    };

    return (
        <div className="w-full max-w-sm">
            <Select
                value={category || ""}
                onValueChange={(value) => handlePagination(value)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="ক্যাটেগরি নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                    {data.map((item) => (
                        <SelectItem
                            key={item.category}
                            value={item.category}
                            className="flex w-full justify-between items-center"
                        >
                            <span>{categoryToBangla(item.category)}</span>
                            <Badge variant="outline" className="dark:bg-gray-500">
                                {item.count}
                            </Badge>
                        </SelectItem>


                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
