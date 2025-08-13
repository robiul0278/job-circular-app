"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Form from 'next/form';
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SearchForm = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handlePagination = (e: FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      const current = new URLSearchParams(window.location.search);
      current.set("query", keyword.trim());
      const query = current.toString();
      router.push(`/jobs?${query}`);
    });
  };

  return (
    <Form
      action="/"
      scroll={false}
      id="search-form"
      className="w-full max-w-xl"
      onSubmit={handlePagination}
    >
      <div className="flex gap-2 bg-white dark:bg-gray-900 p-2 rounded-xl shadow border dark:border-gray-700">
        <div className="relative flex-1 w-full">
          <Input
            name="query"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="🔍 চাকরি খুঁজুন..."
            className="w-full pl-4 pr-12 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-green-800"
          />
        </div>

        <Button
          variant="outline"
          type="submit"
          className="px-6  py-2 text-sm sm:text-base text-green-600 border-green-700 hover:bg-green-600 rounded-lg cursor-pointer hover:text-white"
        >
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
