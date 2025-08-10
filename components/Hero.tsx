import Image from "next/image"
import SearchForm from "./SearchForm";
import Categories from "./Categories";

export default function Heros({ query }: { query?: string; }) {
    return (
        <section className="max-w-6xl mx-auto px-2 md:p-0 lg:p-0  bg-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-green-700">
                        “ডিপ্লোমা সব চাকরির সার্কুলার”
                    </h1>
                    <p className="text-lg text-gray-600">
                        সরকারি হোক বা বেসরকারি — Civil, Electrical, Mechanical, Power বা Computer — প্রতিটি ট্রেডের চাকরির বিজ্ঞপ্তি এক জায়গায়।
                    </p>

                    {/* Stats Cards */}
                   <Categories/>

                    {/* Search Bar */}
                    <div className="flex gap-2">
                        <SearchForm query={query} />
                    </div>

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
                </div>

                {/* Right Side (Illustration) */}
                <div className="justify-center hidden md:flex lg:flex">
                    <Image
                        src="/hero-image.png" // replace with actual illustration
                        alt="Hero Image"
                        width={400}
                        height={400}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
