"use client"
import { useRouter } from "next/navigation";
import { TDepartments } from "./Hero";
import { Button } from "./ui/button";
import { startTransition, useState } from "react";
import { formatQuery } from "@/utils/utils";
import { Badge } from "./ui/badge";

type IDepartments = {
  count: number;
  department: string;
};

const Departments = ({ departments }: { departments: TDepartments[] }) => {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');

  const handleDepartment = (department: string) => {
    setSelectedDepartment(department);
    startTransition(() => {
      const current = new URLSearchParams(window.location.search);
      current.set("department", department.toString());
      const query = current.toString();
      router.push(`/jobs?${query}`);
    });
  };
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 pb-2">
        Job by Departments
      </h4>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
        {departments?.map((dept: IDepartments, index: number) => {
          const isSelected = selectedDepartment === dept.department;
          return (
            <Button
              key={index}
              onClick={() => handleDepartment(dept.department)}
              variant="outline"
              className={`flex items-center justify-between group cursor-pointer rounded-lg p-1 border
                transition-colors duration-300 ease-in-out
                   ${isSelected
                  ? "bg-green-800 text-white"
                  : ""}`}
            >
              <span
                className="text-[13px] font-medium transition-colors duration-300 ease-in-out"
              >
                {formatQuery(dept.department)}
              </span>
              <Badge variant="outline"
                className={`dark:bg-gray-500 ${isSelected
                  ? " text-white"
                  : ""}`}>
                {dept.count}
              </Badge>
            </Button>
          )
        })}
      </div>
    </div>
  );
};

export default Departments;
