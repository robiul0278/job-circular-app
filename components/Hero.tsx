import Image from "next/image"
import SearchForm from "./SearchForm";
import Categories from "./Categories";
import Departments from "./Departments";
import SearchFormReset from "./SearchFormReset";

export default function Hero({ categories, departments, query }: { categories?: string; departments?: string; query?: string; }) {
    return (
        <section className="max-w-6xl mx-auto px-2 md:px-0 lg:px-0 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div className="space-y-4">
               <div className="">
                     <h1 className="text-3xl font-bold text-green-600">
                        ডিপ্লোমা চাকরির সার্কুলার
                    </h1>
                    <p className="text-sm lg:text-lg md:text-lg">
                       Diploma Engineer চাকরির খবর এক জায়গায় এক ক্লিকে!
                    </p>
               </div>

                    {/* Stats Cards */}
                    <Categories category={categories}/>
                    <Departments department={departments}/>

                    {/* Search Bar */}
                    <SearchForm />
                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-2">
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">272</p>
                            <p className="text-xs">Live Jobs</p>
                        </div>
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">0</p>
                            <p className="text-xs">Posted Today</p>
                        </div>
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">6</p>
                            <p className="text-xs">Deadline Today</p>
                        </div>
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">9</p>
                            <p className="text-xs">Expires in 3 days</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        {(query || departments || categories) && (
                            <div>
                                <SearchFormReset />
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Side (Illustration) */}
                <div className="justify-center hidden md:flex lg:flex">
                    <Image
                        src="/govt.png"
                        alt="Hero Image"
                        width={300}
                        height={300}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
