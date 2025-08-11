'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchFormReset = () => {
  const router = useRouter()
  const handleReset = () => {
    const form = document.getElementById('search-form') as HTMLFormElement;

    if (form) form.reset();
    // Remove query parameters from URL
    router.replace(window.location.pathname)
  }

  return (
    <button
      onClick={handleReset}
      type="reset"
      className="flex items-center gap-1 px-2 rounded bg-amber-400 hover:bg-amber-600 hover:text-white text-gray-600 shadow-sm border border-gray-300 dark:bg-amber-600 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-red-500 transition-all duration-200 cursor-pointer py-0.5"
    >
      <X size={16} strokeWidth={2} />
      <span className="text-sm font-medium">Reset</span>
    </button>
  )
}

export default SearchFormReset
