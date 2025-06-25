import { Badge } from "./ui/badge";

const Categories = () => {
const jobCategories = [
  { name: "Civil Engineering", count: 112 },
  { name: "Electrical Engineering", count: 134 },
  { name: "Mechanical Engineering", count: 128 },
  { name: "Computer Engineering", count: 143 },
  { name: "Power Engineering", count: 95 },
  { name: "Electronics Engineering", count: 88 },
  { name: "Architecture Engineering", count: 72 },
];



  return (
    <div className="space-y-3 border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 p-2">
        Job Categories
      </h4>

      <div className="">
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between group cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors text-blue-400 hover:underline"
          >
            <span className=" dark:text-gray-300 transition-colors text-sm  ">
              {category.name}
            </span>
            <Badge variant="outline" className=" dark:bg-gray-500 ">
              {category.count}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
