import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}: {query?: string}) => {

  return (
    <Form
      action="/"
      scroll={false}
      id='search-form'
      className="bg-gray-50 dark:bg-gray-800 flex items-center gap-2 w-full max-w-md mx-auto p-4 shadow-md rounded-2xl"
    >
      <div className="relative flex-1">
        <Input
          name="query"
          placeholder="চাকরি খুঁজুন..."
          className="pr-10 text-black"
        />
        {query && (
       <SearchFormReset/>
        )}
      </div>

      <Button 
      variant="outline" 
      type="submit" 
      className="cursor-pointer "
      >
        Search
      </Button>
    </Form>
  )
}

export default SearchForm;
