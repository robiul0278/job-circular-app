import SearchForm from "./SearchForm";

export const dynamic = "force-static";

const Hero = ({ query }: { query?: string;}) => {

  return (
    <section className="hero relative w-full py-10 md:py-28 lg:py-28  overflow-hidden bg-gradient-to-br dark:from-gray-900 dark:via-gray dark:to-gray-900">
      {/* Hero Content */}
      <div className="relative text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          <span className="text-slate-700 dark:text-slate-300">
            “একই জায়গায় ডিপ্লোমা ইঞ্জিনিয়ারদের সব চাকরির সার্কুলার”
          </span>
        </h1>
        <p className="text-sm font-medium md:text-lg lg:text-lg text-gray-700 dark:text-gray-300 px-2">
          সরকারি হোক বা বেসরকারি — Civil, Electrical, Mechanical, Power বা Computer —  
          প্রতিটি ট্রেডের চাকরির বিজ্ঞপ্তি এক জায়গায়।  
        </p>
        <div>
          <SearchForm query={query} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
