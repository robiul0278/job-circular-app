import Link from "next/link";
import { Badge } from "./ui/badge";
import { useGetAllJobsQuery } from "@/redux/api/api";
import ErrorMessage from "./error-message";
import { formatQuery } from "@/lib/utils";
import CategoriesSkeleton from "./categories-skeleton";

type ITechnology = {
  technology: string;
  count: number;
}

const Categories = () => {
const { data: technology, isLoading, isError } = useGetAllJobsQuery(undefined);

const jobCategories = technology?.data.technologyCount

if (isLoading) return <CategoriesSkeleton />;
if (isError) return <ErrorMessage />;

  return (
    <div className="space-y-3 border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 p-2">
        Job Categories
      </h4>

      <div>
        {jobCategories?.map((category: ITechnology, index: number) => (
          <Link
            key={index}
            href={`/technology/?query=${category.technology}`}
            className="flex items-center justify-between group cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors text-blue-400 hover:underline"
          >
            <span className="dark:text-gray-300 transition-colors text-sm">
              Diploma in {formatQuery(category.technology)}
            </span>
            <Badge variant="outline" className="dark:bg-gray-500">
              {category.count}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
