'use client'
import { useRouter } from "next/navigation";
import { TCategories } from "./Hero";
import { startTransition, useState } from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { categoryToBangla } from "@/utils/utils";

const Categories = ({categories}:{categories:TCategories[]}) => {
    const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handlePagination = (category: string) => {
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
    <div className="flex md:flex-row lg:flex-row gap-2">
      {categories?.map((category: TCategories, i: number) => {
        const isSelected = selectedCategory === category.category;
          return(
        <div
      key={i}
      onClick={() => handlePagination(category.category)}
      className="flex-1 w-full"
    >
      <Card
        className={`relative p-2 sm:p-3 md:p-4 rounded 
          transition-all duration-300 ease-in-out cursor-pointer select-none 
          ${
            isSelected
              ? "bg-green-800 text-white border border-green-600 shadow-lg"
              : "border-dashed border-green-800 hover:bg-green-50 dark:hover:bg-green-900"
          }`}
      >
        {/* Hide gradient for selected */}
        {!isSelected && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 dark:hidden rounded-xl pointer-events-none"></div>
        )}

        <CardContent className="relative z-10 flex items-center gap-2 md:gap-4 p-0">
          <div className="flex-shrink-0 text-lg sm:text-xl md:text-2xl">
            {getIcon(category.category)}
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight transition-colors duration-300 ease-in-out">
            {category.count}
          </p>
          <p className="text-sm font-medium md:text-xl">
            {categoryToBangla(category.category)}
          </p>
        </CardContent>
      </Card>
    </div>
  )
      })}
    </div>
  );
};

export default Categories;
