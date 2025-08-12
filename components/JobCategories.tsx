import { JobCategories } from "@/lib/api";
import JobCategoryCard from "./JobCategoryCard";

const JobCategory = async ({ category }: { category?: string }) => {

  const { categories } = await JobCategories();

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
      <h1 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 pb-2">Organization Type</h1>
      <div className="flex flex-row md:flex-col lg:flex-col gap-2 ">
        <JobCategoryCard data={categories} category={category} />
      </div>
    </div>
  );
};

export default JobCategory;
