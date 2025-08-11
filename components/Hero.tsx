import Image from "next/image"
import SearchForm from "./SearchForm";
import Categories from "./Categories";
import Departments from "./Departments";
import SearchFormReset from "./SearchFormReset";

export default function Hero({ categories, departments, query }: { categories?: string; departments?: string; query?: string; }) {
    return (
        <section className=" hero px-2 md:px-0 lg:px-0 py-6 md:py-12 lg:py-12">
            <div className="max-w-6xl mx-auto flex gap-10 items-center">

                {/* Left Side */}
                <div className="space-y-4 basis-7/12">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-green-700">
                            ডিপ্লোমা চাকরির সার্কুলার
                        </h1>
                        <p className="text-sm lg:text-lg md:text-lg">
                            Diploma Engineer চাকরির খবর এক জায়গায় এক ক্লিকে!
                        </p>
                    </div>
                    {/* Search Bar */}
                    <SearchForm />
                    {/* Stats Cards */}
                    <Categories category={categories} />
                    <Departments department={departments} />

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-2">
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">272</p>
                            <p className="font-medium">Live Jobs</p>
                        </div>
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">0</p>
                            <p className="font-medium">Posted Today</p>
                        </div>
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">6</p>
                            <p className="font-medium">Deadline Today</p>
                        </div>
                        <div className="bg-green-700 text-white rounded-lg p-4 text-center">
                            <p className="text-lg font-bold">9</p>
                            <p className="font-medium">Expires in 3 days</p>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        {(query || departments || categories) && (
                            <div className="-mb-14">
                                <SearchFormReset />
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Side (Illustration) */}
                <div className="justify-center basis-5/12 hidden md:flex lg:flex">
                    <Image
                        src="https://res.cloudinary.com/dhnkviblq/image/upload/v1754932901/rwz6mlllfhil3ycmhl2w.png"
                        alt="Hero Image"
                        width={500}
                        height={500}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
