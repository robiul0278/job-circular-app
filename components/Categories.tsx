'use client'
import { useRouter } from "next/navigation";
import { TCategories } from "./Hero";
import { startTransition, useState } from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { categoryToBangla } from "@/utils/utils";
import PingLoader from "./PingLoader";

const Categories = ({ categories }: { categories: TCategories[] }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    startTransition(() => {
      const current = new URLSearchParams(window.location.search);
      current.set("category", category.toString());
      const query = current.toString();
      router.push(`/jobs?${query}`);
    });
  };

  // প্রতিটা ক্যাটাগরির জন্য আইকন সিলেকশন
  const getIcon = (category: string) => {
    if (category === "govt") {
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
<div className="flex flex-wrap gap-2 md:gap-2 lg:gap-2">
  {categories?.map((category: TCategories, i: number) => {
    const isSelected = selectedCategory === category.category;
    return (
      <div
        key={i}
        onClick={() => handleCategory(category.category)}
        className="flex-1 min-w-[140px]" // ensures each card uses space evenly
      >
        <Card
          className={`relative p-4 rounded-lg shadow-sm transition-all duration-300 ease-in-out cursor-pointer select-none
            ${isSelected
              ? "bg-green-800 text-white border border-green-600 shadow-lg"
              : "border-dashed border-green-800 hover:bg-green-50 dark:bg-gray-900 dark:hover:bg-green-900"
            }`}
        >
          {!isSelected && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 dark:hidden rounded-xl pointer-events-none"></div>
          )}

          <CardContent className="relative z-10 flex flex-row items-center gap-2 md:gap-3 lg:gap-3">
            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
              {getIcon(category.category)}
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight transition-colors duration-300 ease-in-out">
              {category.count}
            </p>
            <p className="flex-1 text-sm sm:text-base md:text-xl font-medium text-center md:text-start">
              {categoryToBangla(category.category)}
            </p>
            <PingLoader />
          </CardContent>
        </Card>
      </div>
    );
  })}
</div>


  );
};

export default Categories;
