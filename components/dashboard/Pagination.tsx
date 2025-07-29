'use client';

import { Button } from '../ui/button';

interface PaginationProps {
  setPageAction: (page: number) => void;
  page: number;
  totalPage: number; // Just a number like 5, 10, etc.
}

export default function Pagination({ setPageAction, page, totalPage }: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) {
      setPageAction(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setPageAction(page + 1);
    }
  };

  return (
    <div className="pagination flex gap-2 items-center justify-center py-4">
      <Button variant="outline" onClick={handlePrev} disabled={page === 1}>
        Prev
      </Button>

      {[...Array(totalPage)].map((_, index) => {
        const number = index + 1;
        return (
          <Button
            key={number}
            onClick={() => setPageAction(number)}
            variant={page === number ? 'default' : 'outline'}
          >
            {number}
          </Button>
        );
      })}

      <Button variant="outline" onClick={handleNext} disabled={page === totalPage}>
        Next
      </Button>
    </div>
  );
}
