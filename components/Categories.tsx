import { JobCategories } from "@/lib/api";
import CategoryCard from "./CategoryCard";

type ICategory = {
  category: string;
  count: number;
};

const Categories = async ({ category }: { category?: string }) => {


  const { categories } = await JobCategories();

  // নির্দিষ্ট ৩ ক্যাটাগরি ফিল্টার
  const fixedCategories = ["government", "private", "autonomous"];
  const filtered = categories?.filter((c: ICategory) =>
    fixedCategories.includes(c.category)
  );



  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
      {filtered?.map((data: ICategory, i: number) => (
      <CategoryCard data={data} key={i} category={category}/>

      ))}
    </div>
  );
};

export default Categories;
