import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}: {query: string}) => {

  return (
    <Form
      action="/"
      scroll={false}
      id='search-form'
      className=" flex items-center gap-2 w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-2xl"
    >
      <div className="relative flex-1">
        <Input
          name="query"
          placeholder="Search Blog..."
          className="pr-10 text-black"
        />
        {query && (
       <SearchFormReset/>
        )}
      </div>

      <Button type="submit" className="rounded-xl px-4 cursor-pointer">
        Search
      </Button>
    </Form>
  )
}

export default SearchForm
