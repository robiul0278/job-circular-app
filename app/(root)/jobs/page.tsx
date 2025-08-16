
import { ChevronRight } from "lucide-react";
import { JobCard } from "@/components/JobCard";
import { getAllJobQuery } from "@/lib/api";
import Pagination from "@/components/Pagination";
import SearchForm from "@/components/SearchForm";
import JobCategory from "@/components/JobCategories";
import JobDepartments from "@/components/JobDepartments";
import ResetQuery from "@/components/ResetQuery";
import { categoryToBangla, departmentToBangla } from "@/utils/utils";
import Breadcrumb from "@/components/Breadcrumb";

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
        {/* HEADER: Breadcrumb + search bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center
        py-2 gap-2">
 

          {/* Page Title */}
          <h1 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2  dark:bg-gray-900 px-3 py-1 rounded-lg shadow-sm">
            সকল চাকরির বিজ্ঞপ্তি
            <ChevronRight className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          </h1>

                   {/* Breadcrumb */}
          <Breadcrumb pageName="Jobs" />

          {/* Search Form (desktop only) */}
          <div className="hidden md:flex lg:flex justify-end">
            <SearchForm />
          </div>
        </div>
        <hr className="mb-4 hidden lg:flex md:flex" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-2">
          {/* Left sidebar */}
          <aside
            className="
              lg:col-span-4
              space-y-2 rounded-lg
              lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto bg-gray-50 
             dark:bg-gray-900 z-20
              md:sticky md:top-0 md:z-30 p-0 md:p-4 lg:p-4
              "
            style={{ minHeight: 'auto' }}
          >
            <JobCategory categories={categories} />
            <JobDepartments departments={departments} />

            <div className="flex items-center my-4 mx-2 gap-2">
              {/* Left content */}
              <div className="flex-1">
                {query || department || category ? (
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 text-left md:text-left">
                    Results for{" "}
                    <span className="text-amber-600 font-normal lg:text-[14px]">
                      {[query, department, category]
                        .filter(Boolean)
                        .map((item) => {
                          if (item === department) return departmentToBangla(item as string);
                          return categoryToBangla(item as string);
                        })
                        .join(" | ")}
                    </span>
                  </p>
                ) : (
                  <div className="md:hidden" />
                )}
              </div>
              {/* Always right aligned */}
              <div className="flex justify-end">
                {(query || department || category) && (
                  <ResetQuery />
                )}
              </div>
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
