import Image from "next/image"
import SearchForm from "./SearchForm";
import Categories from "./Categories";
import Departments from "./Departments";
import StatsCard from "./StatsCard";

export default function Hero() {
    return (
        <section className="hero px-2 md:px-0 py-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10 items-center  justify-between">

                {/* Left Side */}
                <div className="space-y-4 w-full md:w-2/3">
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-bold dark:text-green-600 text-green-700">
                            ডিপ্লোমা জব সার্কুলার
                        </h1>
                        <p className="text-sm md:text-lg">
                            Diploma Engineer চাকরির খবর এক জায়গায় এক ক্লিকে!
                        </p>
                    </div>
                    {/* Search Bar */}
                    <SearchForm />
                    {/* Stats Cards */}
                    <Categories />
                    <Departments />
                    {/* Stats Row */}
                    <StatsCard />
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
