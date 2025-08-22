import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4 select-none">
        😞 পোষ্টটি পাওয়া যায়নি
      </h1>
      <p className="max-w-md text-green-800 mb-6 leading-relaxed">
        দুঃখিত, আপনি যে পোষ্টটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা বর্তমানে নেই।
        দয়া করে অন্য কোনো পোষ্ট দেখুন অথবা হোমপেজে ফিরে যান।
      </p>
      <Link
        href="/"
        className="inline-block rounded-md bg-red-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-red-700 transition"
      >
        হোমপেজে ফিরে যান
      </Link>
    </div>
  );
}
