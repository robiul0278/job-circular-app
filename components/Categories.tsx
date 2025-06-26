import { Badge } from "./ui/badge";

const Categories = () => {
const jobCategories = [
  { name: "Diploma in Civil", count: 112 },
  { name: "Diploma in Electrical", count: 134 },
  { name: "Diploma in Mechanical", count: 128 },
  { name: "Diploma in Computer", count: 143 },
  { name: "Diploma in Power", count: 95 },
  { name: "Diploma in Electronics", count: 88 },
  { name: "Diploma in Architecture", count: 72 },
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
