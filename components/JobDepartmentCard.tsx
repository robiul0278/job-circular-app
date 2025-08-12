"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatQuery } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { Badge } from "./ui/badge";

type IDepartments = {
  count: number;
  department: string;
};

export default function JobDepartmentCard({
  departments,
  department,
}: {
  departments: IDepartments[];
  department?: string;
}) {
  const router = useRouter();

  const handlePagination = (department: string) => {
    startTransition(() => {
      const current = new URLSearchParams(window.location.search);
      current.set("departments", department);
      const query = current.toString();
      router.push(`?${query}`);
    });
  };

  return (
    <div className="w-full max-w-sm">
      <Select
        value={department || ""}
        onValueChange={(value) => handlePagination(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="ডিপার্টমেন্ট নির্বাচন করুন" />
        </SelectTrigger>
        <SelectContent>
          {departments.map((dept) => (
            <SelectItem
              key={dept.department}
              value={dept.department}
              className="flex w-full justify-between items-center"
            >
              <span>{formatQuery(dept.department)}</span>
              <Badge variant="outline" className="dark:bg-gray-500">
                {dept.count}
              </Badge>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
