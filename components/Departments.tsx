import Link from "next/link";
import { Badge } from "./ui/badge";
import { formatQuery } from "@/utils/utils";
import { JobCategories } from "@/lib/api";

type IDepartments = {
  count: number;
  department: string;
}
const Departments = async () => {
  const { departments } = await JobCategories();

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 p-2">
        Job by Departments
      </h4>
      <div>
        {departments?.map((department: IDepartments, index: number) => (
          <Link
            key={index}
            href={`/categories?query=${department.department}`}
            className="flex items-center justify-between group cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
          >
            <span className="text-teal-500 font-medium transition-colors text-sm">
              Diploma in {formatQuery(department.department)}
            </span>
            <Badge variant="outline" className="dark:bg-gray-500">
              {department.count}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Departments;
