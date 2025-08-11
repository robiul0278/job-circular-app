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

const CategoryCard = ({ data, category }: { data: ICategory; category?: string }) => {
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
          width={30}
          height={30}
        />
      );
    }
    return <Users />;
  };


    return (
        <div
            onClick={() => handlePagination(data.category)}
            className="flex-1"
        >
            <Card
                className={`
      p-2 rounded border-dashed border-green-200
      transition-colors duration-300 ease-in-out cursor-pointer
      ${category === data.category
                        ? "border-green-500 bg-green-50 dark:bg-green-900 shadow-lg"
                        : "hover:border-green-500 hover:bg-green-100 dark:hover:bg-green-800"
                    }
    `}
            >
                <CardContent className="flex items-center gap-2">
                    {getIcon(data.category)}
                    <p
                        className={`
          text-2xl font-bold
          transition-colors duration-300 ease-in-out
          ${category === data.category
                                ? ""
                                : "text-green-600"
                            }
        `}
                    >
                        {data.count}
                    </p>
                    <p className="text-sm">{categoryToBangla(data.category)}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default CategoryCard