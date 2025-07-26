
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Form from 'next/form';

export default async function PaginationForm({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <div className="flex items-center justify-center gap-4 py-6 text-gray-700 dark:text-gray-300">
      <Form action="/">
        <input type="hidden" name="page" value={prevPage} />
        <Button
          variant="outline"
          size="sm"
          type="submit"
          disabled={currentPage === 1}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      </Form>

      <div className="text-sm">
        Page{' '}
        <span className="font-medium text-primary dark:text-primary-light">
          {currentPage}
        </span>{' '}
        of{' '}
        <span className="font-medium">{totalPages}</span>
      </div>

      <Form action="/">
        <input type="hidden" name="page" value={nextPage} />
        <Button
          variant="outline"
          size="sm"
          type="submit"
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 cursor-pointer"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Form>
    </div>
  );
}
