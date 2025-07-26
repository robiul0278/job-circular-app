import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4 select-none">
        😞 সার্কুলার পাওয়া যায়নি
      </h1>
      <p className="max-w-md text-green-600 mb-6 leading-relaxed">
        দুঃখিত, আপনি যে সার্কুলার খুঁজছেন তা হয়তো বর্তমানে নেই। 
      </p>
      <Link
        href="/"
        className="inline-block rounded-md bg-red-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-red-700 transition"
      >
        Server Problem!
      </Link>
    </div>
  );
}
