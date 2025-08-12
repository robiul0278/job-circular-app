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

const DepartmentCard = ({ dept}: { dept: IDepartments; }) => {
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
            className="flex items-center justify-between group cursor-pointer rounded-lg p-1 border
                transition-colors duration-300 ease-in-out"
        >
            <span
                className="text-[13px] font-medium transition-colors duration-300 ease-in-out"
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