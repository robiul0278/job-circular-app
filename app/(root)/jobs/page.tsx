
import { ChevronRight } from "lucide-react";
import { JobCard } from "@/components/JobCard";
import { getAllJobQuery } from "@/lib/api";
import Pagination from "@/components/Pagination";
import SearchForm from "@/components/SearchForm";
import JobCategory from "@/components/JobCategories";
import JobDepartments from "@/components/JobDepartments";
import ResetQuery from "@/components/ResetQuery";

export default async function JobsPage({ searchParams }: {
  searchParams: Promise<{
    category?: string;
    department?: string;
    query?: string;
    page?: string;
  }>;
}) {
  const resolvedParams = await searchParams;
  const { category, department, query } = resolvedParams;
  const currentPage = parseInt(resolvedParams.page || '1');

  const params: Record<string, string> = {
    ...(category ? { categories: category } : {}),
    ...(department ? { departments: department } : {}),
    ...(query ? { searchTerm: query } : {}),
    page: currentPage.toString(),
  };

  const { result, meta, categories, departments } = await getAllJobQuery({ params });

  return (
    <>
      <section className="max-w-6xl mx-auto px-2 pb-2 lg:p-0 relative">
        {/* HEADER: results text + search bar */}
        <div className="flex flex-col lg:flex-row md:flex-row justify-between my-4  md:mx-4 lg:mx-4 gap-4">
          <p className="text-xl md:text-2xl lg:text-2xl  font-bold text-slate-700 dark:text-slate-300 flex items-center">
            {(query || department || category)
              ? `Results for "${[query, department, category].filter(Boolean).join(' | ')}"`
              : "সকল চাকরির বিজ্ঞপ্তি"}
            {!query && !department && !category && (
              <ChevronRight className="size-7 pb-1 text-slate-700 dark:text-slate-300" />
            )}
          </p>

          <SearchForm />
        </div>
        <hr className="mb-4 hidden lg:flex md:flex"/>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-2">

          {/* Left sidebar */}
          <aside
            className="
              lg:col-span-4
              space-y-4 rounded-lg
              lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto bg-gray-50 
             dark:bg-gray-900 z-20
              md:sticky md:top-0 md:z-30 p-0 md:p-4 lg:p-4
              "
            style={{ minHeight: 'auto' }}
          >
            <JobCategory  categories={categories}/>
            <JobDepartments departments={departments}/>

            <div className="flex justify-end px-2 pb-2">
              {(query || department || category) && (
                  <ResetQuery />
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-8 bg-gray-50  dark:bg-gray-900 rounded-2xl p-0 md:p-4 lg:p-4">
            {result.length === 0 ? (
              <div className="text-center py-8 text-slate-600 dark:text-slate-400">
                <p className="text-xl font-medium">
                  {query ? `"${query}" এর জন্য কোনো চাকরির বিজ্ঞপ্তি পাওয়া যায়নি।` : "এই মুহূর্তে কোনো চাকরির বিজ্ঞপ্তি পাওয়া যাচ্ছে না।"}
                </p>
                <p className="text-sm mt-2">দয়া করে অন্য কীওয়ার্ড দিয়ে আবার চেষ্টা করুন।</p>
              </div>
            ) : (
              <JobCard jobs={result} />
            )}
            <Pagination totalPages={meta.totalPage} currentPage={currentPage} />
          </div>

        </div>
      </section>
    </>
  );
}
