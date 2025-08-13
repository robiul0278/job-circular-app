import { JobCategories } from "@/lib/api";
import JobCategoryCard from "./JobCategoryCard";

const JobCategory = async ({ category }: { category?: string }) => {

  const { categories } = await JobCategories();

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
      <h1 className="font-semibold text-sm flex items-center dark:text-gray-100 pb-2">Organization Type</h1>
   
        <JobCategoryCard data={categories} category={category} />
    </div>
  );
};

export default JobCategory;
