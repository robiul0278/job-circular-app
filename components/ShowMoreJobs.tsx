import { IJobCircular } from "@/types/types";
import { formatDate } from "@/utils/format-date";
import Link from "next/link";
import { getAllJobQuery } from "@/lib/api";

export default async function ShowMoreJobs() {
    const params: Record<string, string> = {
        categories: "government",
        limit: "5",
    };

    const { result } = await getAllJobQuery({ params });

    return (
        <div className="border shadow p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3 text-slate-700 dark:text-slate-200">
                সরকারি চাকরির বিজ্ঞপ্তি
            </h2>

            {result.length > 0 ? (
                <ul className="space-y-2">
                    {result.map((job: IJobCircular) => (
                        <li
                            key={job._id}
                            className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-none"
                        >
                            <Link
                                href={`/job/${job.slug}`}
                                className="block group"
                                aria-label={`View details for ${job.title}`}
                            >
                                <h3 className="text-sm font-medium group-hover:text-green-800 dark:group-hover:text-green-400">
                                    {job.title}
                                </h3>
                                <span className="text-xs text-green-800 dark:text-green-600">
                                    শেষ তারিখঃ <strong>{formatDate(job.deadline)}</strong>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    বিজ্ঞপ্তি পাওয়া যায়নি।
                </p>
            )}
        </div>
    );
}
