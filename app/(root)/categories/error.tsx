'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-3xl font-bold text-red-600">😥 কিছু ভুল হয়েছে [CATEGORIES]</h1>
      <p className="mt-3 text-teal-600">
        {error.message}
      </p>
      <div className="mt-6">
        <button
          onClick={reset}
          className="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </div>
  );
}
