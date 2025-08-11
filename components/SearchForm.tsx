import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Form from 'next/form';

const SearchForm = async () => {
  return (
    <Form
      action="/"
      scroll={false}
      id="search-form"
      className="w-full max-w-xl mx-auto"
    >
      <div className="flex items-center gap-1 bg-white dark:bg-gray-900 p-2 rounded-xl shadow-md border dark:border-gray-700">
        <div className="relative flex-1 w-full">
          <Input
            name="query"
            placeholder="🔍 চাকরি খুঁজুন..."
            className="w-full pl-4 pr-12 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-teal-500"
          />
        </div>

        <Button
          variant="outline"
          type="submit"
          className="px-6 py-2 text-sm sm:text-base rounded-lg cursor-pointer"
        >
          Search
        </Button>
      </div>
    </Form>


  );
};

export default SearchForm;
