import { JobCategories } from "@/lib/api";
import CategoryCard from "./CategoryCard";

type ICategory = {
  category: string;
  count: number;
};

const Categories = async () => {

  const { categories } = await JobCategories();

  return (
    <div className="flex md:flex-row lg:flex-row gap-2">
      {categories?.map((data: ICategory, i: number) => (
      <CategoryCard data={data} key={i}/>
      ))}
    </div>
  );
};

export default Categories;
