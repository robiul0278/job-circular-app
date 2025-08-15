'use client'
import { formatQuery } from "@/utils/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { startTransition, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type IDepartments = {
  count: number;
  department: string;
};

const JobDepartments = ({ departments }: { departments: IDepartments[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = searchParams.get("department") || "";
  const [selectedDepartment, setSelectedDepartment] = useState<string>(params);

  const handleDepartments = (department: string) => {
    setSelectedDepartment(department);
    startTransition(() => {
      const current = new URLSearchParams(window.location.search);
      current.set("department", department);
      router.push(`?${current.toString()}`);
    });
  };

  return (
    <div className="relative border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-900">
      <h4 className="relative z-10 font-semibold text-sm flex items-center dark:text-gray-100 pb-2">
        Job by Departments
      </h4>
      <div className="grid grid-cols-3 gap-2">
        {departments.map((dept) => {
          const isSelected = selectedDepartment === dept.department;
          return (
            <>
              {/* Hide gradient for selected */}
              {!isSelected && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 dark:hidden rounded-xl pointer-events-none"></div>
              )}
              <Button
                key={dept.department}
                onClick={() => handleDepartments(dept.department)}
                variant={isSelected ? "default" : "outline"}
                className={`flex items-center justify-between z-10 group cursor-pointer rounded-lg px-2 transition-colors duration-300 ease-in-out ${isSelected ? "bg-green-800 text-white dark:bg-green-800" : ""
                  }`}
              >
                <span className="text-[13px] font-medium transition-colors duration-300 ease-in-out">
                  {formatQuery(dept.department)}
                </span>
                <Badge
                  variant="outline"
                  className={`dark:bg-gray-500 ${isSelected ? "border-white text-white" : ""
                    }`}
                >
                  {dept.count}
                </Badge>
              </Button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default JobDepartments;
