'use client'

import { categoryToBangla } from "@/utils/utils";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";

type ICategory = {
    category: string;
    count: number;
};

const JobCategory = ({ categories }: { categories: ICategory[] }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get("category") || "";
    const [selectedCategories, setSelectedCategory] = useState<string>(selectedCategory);

    const handlePagination = (category: string) => {
        setSelectedCategory(category);
        startTransition(() => {
            const current = new URLSearchParams(window.location.search);
            current.set("category", category.toString());
            const query = current.toString();
            router.push(`?${query}`);
        });
    };
    return (
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
            <h1 className="font-semibold text-sm flex items-center dark:text-gray-100 pb-2">Organization Type</h1>
            <div className="w-full max-w-sm">
                <Select
                    value={selectedCategories || ""}
                    onValueChange={(value) => handlePagination(value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="ক্যাটেগরি নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((item) => (
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
        </div>
    );
};

export default JobCategory;
