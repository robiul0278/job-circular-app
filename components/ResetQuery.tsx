'use client'

import { X } from 'lucide-react'

const ResetQuery = () => {
  const handleReset = () => {
    const form = document.getElementById('search-form') as HTMLFormElement;

    if (form) form.reset();

    // Page reload সহ URL reset
    window.location.href = window.location.pathname;
  }

  return (
    <button
      onClick={handleReset}
      type="reset"
      className="flex items-center gap-1 px-2 rounded bg-amber-600 hover:bg-amber-700 text-white shadow-sm border border-gray-300 dark:bg-amber-700 dark:border-gray-700 dark:text-white dark:hover:bg-amber-800 transition-all duration-200 cursor-pointer"
    >
      <X size={16} strokeWidth={2} />
      <span className="text-sm font-medium">Reset</span>
    </button>
  )
}

export default ResetQuery;
