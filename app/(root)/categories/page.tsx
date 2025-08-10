
import { ChevronRight } from "lucide-react";
import Pagination from "@/components/Pagination";
import { categoryToBangla } from "@/utils/utils";
import Categories from "@/components/Categories";
import Telegram from "@/components/Telegram";
import Departments from "@/components/Departments";
import { getAllJobQuery } from "@/lib/api";
import { JobCard } from "@/components/JobCard";

export default async function JobCategoryPage({ searchParams }: {
  searchParams: Promise<{ query?: string; page?: string }>
}) {

const resolvedParams = await searchParams;
const query = resolvedParams.query;
const currentPage = parseInt(resolvedParams.page || '1');
const specialCategories = ['government', 'private', 'autonomous'];
const path = "/categories"

type TParams = {
  searchTerm?: string;
  page?: string;
  departments?: string;
  categories?: string;
}

const params: TParams = {
  page: currentPage.toString(),
};

if (query) {
  if (specialCategories.includes(query)) {
    params.categories = query;
  } else {
    params.departments = query;
  }
}

const jobs = await getAllJobQuery({ params });

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 lg:px-0 md:px-0 py-6">
        <p className="text-2xl font-semibold mb-2 flex items-center">
          {query
            ? `Results for "${categoryToBangla(query)}"`
            : "All Job Circular"}
          {!query && <ChevronRight className="size-6 text-primary" />}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            <ul className="grid grid-cols-1 gap-4">
              <JobCard jobs={jobs.result} />
            </ul>
            <Pagination totalPages={jobs.meta.totalPage} currentPage={currentPage} path={path} />
          </div>
          {/* Right: Google AdSense or Placeholder */}
          <aside className="lg:col-span-3 space-y-4">
            <Telegram />
            <Categories />
            <Departments />
            {/* AdSense Script or Placeholder */}
            {/* Replace below with actual AdSense code */}
            <div className=" border rounded-lg h-96 flex items-center justify-center text-gray-700 ">
              <span>Google AdSense Ad</span>
            </div>
          </aside>
        </div>
      </section>

    </>
  );
}
