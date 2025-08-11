import Link from "next/link";
import { categoryToBangla } from "@/utils/utils";
import { JobCategories } from "@/lib/api";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Users } from "lucide-react";

type ICategory = {
  category: string;
  count: number;
};

const Categories = async ({ category }: { category?: string }) => {


  console.log(category); //categories query params

  const { categories } = await JobCategories();

  // নির্দিষ্ট ৩ ক্যাটাগরি ফিল্টার
  const fixedCategories = ["government", "private", "autonomous"];
  const filtered = categories?.filter((c: ICategory) =>
    fixedCategories.includes(c.category)
  );

  // প্রতিটা ক্যাটাগরির জন্য আইকন সিলেকশন
  const getIcon = (category: string) => {
    if (category === "government") {
      return (
        <Image
          src="/govt.png"
          alt="govt"
          width={30}
          height={30}
        />
      );
    }
    return <Users />;
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
      {filtered?.map((data: ICategory) => (
        <Link
          key={data.category}
          href={`?categories=${data.category}`}
          className="flex-1"
        >
          <Card
            className={`
      p-2 rounded border-dashed border-green-200
      transition-colors duration-300 ease-in-out
      ${category === data.category
                ? "border-green-500 bg-green-50 dark:bg-green-900 shadow-lg"
                : "hover:border-green-500 hover:bg-green-100 dark:hover:bg-green-800"
              }
    `}
          >
            <CardContent className="flex items-center gap-2">
              {getIcon(data.category)}
              <p
                className={`
          text-2xl font-bold
          transition-colors duration-300 ease-in-out
          ${category === data.category
                    ? ""
                    : "text-green-600"
                  }
        `}
              >
                {data.count}
              </p>
              <p className="text-sm">{categoryToBangla(data.category)}</p>
            </CardContent>
          </Card>
        </Link>

      ))}
    </div>
  );
};

export default Categories;
