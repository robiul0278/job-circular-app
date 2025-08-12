"use client"

import { Card, CardContent } from "./ui/card";
import { categoryToBangla } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import Image from "next/image";
import { Users } from "lucide-react";

type ICategory = {
    category: string;
    count: number;
};

const JobCategoryCard = ({ data, category }: { data: ICategory; category?: string }) => {
    const router = useRouter();

    const handlePagination = (category: string) => {
        startTransition(() => {
            const current = new URLSearchParams(window.location.search);
            current.set("categories", category.toString());
            const query = current.toString();
            router.push(`?${query}`);
        });
    };

    // প্রতিটা ক্যাটাগরির জন্য আইকন সিলেকশন
    const getIcon = (category: string) => {
        if (category === "government") {
            return (
                <Image
                    src="/govt.png"
                    alt="govt"
                    width={20}
                    height={20}
                />
            );
        }
        return <Users size={20}/>;
    };


    return (
        <div
            onClick={() => handlePagination(data.category)}
            className="flex-1 w-full"
        >
            <Card
                className={`
      p-2 rounded border-dashed border-green-200
      transition-colors duration-300 ease-in-out cursor-pointer select-none
      ${category === data.category
                        ? "border-green-800  bg-green-200 dark:bg-green-900 shadow-lg"
                        : "hover:border-green-800  hover:bg-green-100 dark:hover:bg-green-800 "
                    }
    `}
            >
                <CardContent className="flex items-center gap-1 md:gap-4 p-0">
                    {/* Icon scales based on device */}
                    <div className="flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                        {getIcon(data.category)}
                    </div>

                        <p
                            className={`
            text-xl sm:text-2xl  font-bold leading-tight
            transition-colors duration-300 ease-in-out 
            ${category === data.category ? "" : " dark:text-white"}
          `}
                        >
                            {data.count}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base">
                            {categoryToBangla(data.category)}
                        </p>
                </CardContent>
            </Card>
        </div>

    )
}

export default JobCategoryCard;