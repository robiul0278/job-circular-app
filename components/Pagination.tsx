'use client';

import { useTransition } from 'react';
import { ChevronLeft, ChevronRight, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function PaginationForm({
  currentPage,
  totalPages,
  path,
}: {
  currentPage: number;
  totalPages: number;
  path: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handlePagination = (page: number) => {
    startTransition(() => {
      // 👇 Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      router.push(`/${path}?page=${page}`);
    });
  };

  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <div className="flex items-center justify-center gap-4 py-6 text-gray-700 dark:text-gray-300">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1 || isPending}
        onClick={() => handlePagination(prevPage)}
        className="flex items-center gap-2"
      >
        {isPending ? <Loader className="h-4 w-4 animate-spin" /> : (
          <>
            <ChevronLeft className="h-4 w-4" /> Previous
          </>
        )}
      </Button>

      <div className="text-sm">
        Page{' '}
        <span className="font-medium text-primary dark:text-primary-light">
          {currentPage}
        </span>{' '}
        of <span className="font-medium">{totalPages}</span>
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages || isPending}
        onClick={() => handlePagination(nextPage)}
        className="flex items-center gap-2"
      >
        {isPending ? <Loader className="h-4 w-4 animate-spin" /> : (
          <>
            Next <ChevronRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
}
