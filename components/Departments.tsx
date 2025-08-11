import Link from "next/link";
import { Badge } from "./ui/badge";
import { formatQuery } from "@/utils/utils";
import { JobCategories } from "@/lib/api";

type IDepartments = {
  count: number;
  department: string;
};

const Departments = async ({ department }: { department?: string }) => {
  const { departments } = await JobCategories();

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 pb-2">
        Job by Departments
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {departments?.map((dept: IDepartments, index: number) => {
          const isActive = department === dept.department;

          return (
            <Link
              key={index}
              href={`?departments=${dept.department}`}
              className={`
                flex items-center justify-between group cursor-pointer rounded-lg p-1 border
                transition-colors duration-300 ease-in-out
                ${
                  isActive
                    ? "border-teal-500 bg-teal-50 dark:bg-teal-900 shadow-lg"
                    : "border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-md"
                }
              `}
            >
              <span
                className={`
                  text-sm font-medium transition-colors duration-300 ease-in-out
                  ${isActive ? "" : "text-teal-500"}
                `}
              >
                {formatQuery(dept.department)}
              </span>
              <Badge variant="outline" className="dark:bg-gray-500">
                {dept.count}
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Departments;
