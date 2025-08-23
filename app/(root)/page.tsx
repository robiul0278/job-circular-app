import { ArrowRight, BriefcaseBusiness, ChevronRight } from "lucide-react";
import Telegram from "@/components/Telegram";
import { JobCard } from "@/components/JobCard";
import Hero from "@/components/Hero";
import { getAllJobQuery} from "@/lib/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShowMoreJobs from "@/components/ShowMoreJobs";

export default async function Home() {
    const params: Record<string, string> = {
    limit: '10',
  };

  const { result,categories } = await getAllJobQuery({ params });

  return (
    <>
      <Hero categories={categories}/>
      <section className="max-w-6xl space-y-2 mx-auto px-2 pb-2 lg:p-0">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-bold pt-2 pb-1 pl-2 text-slate-700 dark:text-slate-300 flex items-center ">
          <BriefcaseBusiness className="size-8 pr-2 pb-1 text-slate-700 dark:text-slate-300" />
          সর্বশেষ চাকরির বিজ্ঞপ্তি 
          <ChevronRight className="size-7 pb-1 text-slate-700 dark:text-slate-300" />
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-2">
          {/* Left: Job Post List */}
          <div className="lg:col-span-9">
            <JobCard jobs={result} />
            <div className="flex justify-center my-6">
              <Button
                asChild
                size="sm"
                className="group bg-green-700 hover:bg-green-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/circulars">
                  সকল চাকরি
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Right */}
          <aside className="lg:col-span-3 space-y-4">
            <Telegram />
           <ShowMoreJobs />
          </aside>
        </div>
      </section>
    </>
  );
}
