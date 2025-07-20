"use client";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { categoryToBangla} from "@/utils/utils";
import { useGetAllJobsQuery } from "@/redux/api/api";
import CategoriesSkeleton from "./CategoriesSkeleton";
import ErrorMessage from "./ErrorMessage";

type ICategory = {
  category: string;
  count: number;
};


const Categories = () => {
    const { data: circular, isLoading, isError } = useGetAllJobsQuery(undefined);
  
    const categories = circular?.data.categoryCount;

    if (isLoading) return <CategoriesSkeleton />;
    if (isError) return <ErrorMessage />;
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 p-2">
        Job by Category
      </h4>
      <div>
        {categories?.map((data: ICategory, index: number) => (
          <Link
            key={index}
            href={`/categories?query=${data.category}`}
            className="flex items-center justify-between group cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
          >
            <span className="text-green-500 font-medium transition-colors text-sm">
              {categoryToBangla(data.category)}
            </span>
            <Badge variant="outline" className="dark:bg-gray-500">
              {data.count}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
