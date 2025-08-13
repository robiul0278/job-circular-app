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

const CategoryCard = ({ data }: { data: ICategory; }) => {
    const router = useRouter();

    const handlePagination = (category: string) => {
        startTransition(() => {
            const current = new URLSearchParams(window.location.search);
            current.set("categories", category.toString());
            const query = current.toString();
            router.push(`/jobs?${query}`);
        });
    };

    // প্রতিটা ক্যাটাগরির জন্য আইকন সিলেকশন
    const getIcon = (category: string) => {
        if (category === "government") {
            return (
                <Image
                    src="/govt.png"
                    alt="govt"
                    width={25}
                    height={25}
                />
            );
        }
        return <Users />;
    };


    return (
        <div
            onClick={() => handlePagination(data.category)}
            className="flex-1 w-full"
        >
            <Card
                className="relative p-2 sm:p-3 md:p-4 rounded border-dashed border-green-200 
      transition-colors duration-300 ease-in-out cursor-pointer select-none"
            >
                  {/* Gradient wrapper only light mode */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 dark:hidden rounded-xl pointer-events-none"></div>

                <CardContent className="elative z-10 flex items-center gap-2 md:gap-4 p-0">
                    {/* Icon scales based on device */}
                    <div className="flex-shrink-0 text-lg sm:text-xl md:text-2xl">
                        {getIcon(data.category)}
                    </div>

                    <p
                        className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight
            transition-colors duration-300 ease-in-out "
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

export default CategoryCard;