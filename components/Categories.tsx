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

const Categories = async () => {
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
    <div className="flex gap-2">
      {filtered?.map((data: ICategory) => (
        <Link
          key={data.category}
          href={`/categories?query=${data.category}`}
          className="flex-1"
        >
          <Card className="p-2 border-2 border-green-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <CardContent className="flex items-center gap-2">
              {getIcon(data.category)}
              <p className="text-2xl font-bold text-green-700">
                {data.count}
              </p>
              <p className="text-sm text-gray-600">
                {categoryToBangla(data.category)}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
