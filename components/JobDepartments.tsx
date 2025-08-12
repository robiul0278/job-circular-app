import { JobCategories } from "@/lib/api";
import JobDepartmentCard from "./JobDepartmentCard";


const JobDepartments = async ({ department }: { department?: string }) => {
  const { departments } = await JobCategories();

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 pb-2">
        Job by Departments
      </h4>
           <JobDepartmentCard  departments={departments} department={department}/>
    
    </div>
  );
};

export default JobDepartments;
