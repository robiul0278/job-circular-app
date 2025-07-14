'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchFormReset = () => {
  const router = useRouter()
  const handleReset = () => {
    const form = document.getElementById('.search-form' ) as HTMLFormElement;

    if ( form ) form.reset();
     // Remove query parameters from URL
     router.replace(window.location.pathname)
  }

  return (
    <button
    onClick={handleReset}
    type="reset"
    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer"
  >
    <X size={18} />
  </button>
  ) 
}

export default SearchFormReset
