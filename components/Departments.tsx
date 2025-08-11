import { JobCategories } from "@/lib/api";
import DepartmentCard from "./DepartmentCard";

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
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
        {departments?.map((dept: IDepartments, index: number) => {
          const isActive = department === dept.department;

         return (
           <DepartmentCard  dept={dept} isActive={isActive} key={index}/>
         )
        })}
      </div>
    </div>
  );
};

export default Departments;
