"use client"
import { formatQuery } from '@/utils/utils';
import React, { startTransition } from 'react'
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

type IDepartments = {
    count: number;
    department: string;
};

const DepartmentCard = ({ dept, isActive }: { dept: IDepartments; isActive?: boolean }) => {
    const router = useRouter();

    const handlePagination = (department: string) => {
        startTransition(() => {
            const current = new URLSearchParams(window.location.search);
            current.set("departments", department.toString());
            const query = current.toString();
            router.push(`/jobs?${query}`);
        });
    };
    return (
        <Button
            onClick={() => handlePagination(dept.department)}
            variant="outline"
            className={`
                flex items-center justify-between group cursor-pointer rounded-lg p-1 border
                transition-colors duration-300 ease-in-out
                ${isActive
                    ? "border-green-800 bg-green-200 dark:bg-green-900 shadow-lg"
                    : "border-gray-300 dark:border-gray-700 hover:bg-green-200 dark:hover:bg-gray-700  hover:shadow-md"
                }
              `}
        >
            <span
                className={`
                  text-[13px] font-medium transition-colors duration-300 ease-in-out
                  ${isActive ? "" : "dark:text-white"}
                `}
            >
                {formatQuery(dept.department)}
            </span>
            <Badge variant="outline" className="dark:bg-gray-500">
                {dept.count}
            </Badge>
        </Button>
    );
}

export default DepartmentCard