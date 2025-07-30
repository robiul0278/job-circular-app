import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

const SearchForm = async ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      id="search-form"
      className="w-full max-w-xl mx-auto px-10 md:px-4 lg:px-4 py-6"
    >
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md border dark:border-gray-700">
        <div className="relative flex-1 w-full">
          <Input
            name="query"
            placeholder="🔍 চাকরি খুঁজুন..."
            className="w-full pl-4 pr-12 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          {query && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <SearchFormReset />
            </div>
          )}
        </div>

        <Button
          variant="outline"
          type="submit"
          className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base rounded-lg cursor-pointer"
        >
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
