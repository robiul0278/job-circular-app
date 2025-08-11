import Link from "next/link";

type Notice = {
  title: string;
  date: string;
};

const demoNotices: Notice[] = [
  {
    title: "110 জন ডিপ্লোমা ইঞ্জিনিয়ার আবশ্যক – Nasir Group of Industries",
    date: "10 Aug 2025",
  },
  {
    title: "Beximco Textiles এ Trainee Engineer নিয়োগ বিজ্ঞপ্তি",
    date: "15 Aug 2025",
  },
  {
    title: "Akij Group এ Production Officer পদে নিয়োগ",
    date: "20 Aug 2025",
  },
];

export default function Blog() {
  return (
    <aside className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 text-green-600 mb-3">
       সাম্প্রতিক আপডেট
      </h4>
      <ul className="space-y-3">
        {demoNotices.map((notice, index) => (
          <li
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-none"
          >
            <Link
              href="#"
              className="block hover:text-teal-500 dark:hover:text-teal-400"
            >
              <p className="text-sm font-medium line-clamp-2">
                {notice.title}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {notice.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
