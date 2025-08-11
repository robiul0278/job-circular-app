import Image from "next/image"
import SearchForm from "./SearchForm";
import Categories from "./Categories";
import Departments from "./Departments";
import SearchFormReset from "./SearchFormReset";

export default function Hero({ categories, departments, query }: { categories?: string; departments?: string; query?: string; }) {
    return (
        <section className="hero px-2 py-6 md:px-0 md:py-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10 items-center  justify-between">

                {/* Left Side */}
                <div className="space-y-4 w-full md:w-2/3">
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-bold dark:text-green-600 text-green-700">
                            ডিপ্লোমা চাকরির সার্কুলার
                        </h1>
                        <p className="text-sm md:text-lg">
                            Diploma Engineer চাকরির খবর এক জায়গায় এক ক্লিকে!
                        </p>
                    </div>

                    {/* Search Bar */}
                    <SearchForm />

                    {/* Stats Cards */}
                    <Categories category={categories} />
                    <Departments department={departments} />

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                            { count: 272, label: "Live Jobs" },
                            { count: 0, label: "Posted Today" },
                            { count: 6, label: "Deadline Today" },
                            { count: 9, label: "Expires in 3 days" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-green-800 text-white rounded-lg p-3 text-center"
                            >
                                <p className="text-base sm:text-lg font-bold">{item.count}</p>
                                <p className="text-xs sm:text-sm font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        {(query || departments || categories) && (
                            <div className="-mb-10">
                                <SearchFormReset />
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side (Illustration) */}
                <div className="hidden md:flex w-full md:w-1/3 items-center justify-center">
                    <Image
                        src="https://res.cloudinary.com/dhnkviblq/image/upload/v1754932901/rwz6mlllfhil3ycmhl2w.png"
                        alt="Hero Image"
                        width={400}
                        height={400}
                        className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
                    />
                </div>

            </div>
        </section>

    )
}
