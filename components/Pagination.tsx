'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { animate } from 'framer-motion';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPageAction: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPageAction,
}: PaginationProps) {
  const handlePageChange = (newPage: number) => {
    setCurrentPageAction(Math.max(1, Math.min(newPage, totalPages)));
  };

  // Scroll to top when currentPage changes
  useEffect(() => {
    animate(window.scrollY, 500, {
      duration: 0.5,
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center gap-4 py-6 text-gray-700 dark:text-gray-300">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <div className="text-sm">
        Page{' '}
        <span className="font-medium text-primary dark:text-primary-light">
          {currentPage}
        </span>{' '}
        of{' '}
        <span className="font-medium">{totalPages}</span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 cursor-pointer"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
