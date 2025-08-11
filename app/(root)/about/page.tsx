import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">আমাদের সম্পর্কে</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য নির্ভরযোগ্য একটি প্ল্যাটফর্ম যেখানে পাবেন যাচাইকৃত চাকরির বিজ্ঞপ্তি, ক্যারিয়ার গাইডলাইন ও সাফল্যের সুযোগ।
          </p>
        </div>

        <div className="space-y-12 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">🎯 আমাদের লক্ষ্য</h2>
            <p>
              <strong>Diploma Jobs BD</strong> - এর লক্ষ্য হলো বাংলাদেশে ডিপ্লোমা ইঞ্জিনিয়ারদের চাকরি অনুসন্ধান সহজতর করা। এখানে সরকারি ও বেসরকারি চাকরিগুলো বিভাগের ভিত্তিতে, অবস্থান অনুযায়ী ও প্রাসঙ্গিকভাবে খুঁজে পাওয়া যাবে।
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">💡 আমরা যা অফার করি</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>রিয়েল-টাইমে যাচাইকৃত চাকরির বিজ্ঞপ্তি</li>
              <li>ডিপার্টমেন্ট অনুযায়ী স্মার্ট ফিল্টারিং</li>
              <li>পছন্দের চাকরি বুকমার্ক করে রাখা</li>
              <li>মোবাইল ফ্রেন্ডলি ডিজাইন ও ডার্ক মোড</li>
              <li>সিকিউর ও দ্রুত কাস্টম অথেনটিকেশন</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">🛠 প্রযুক্তি স্ট্যাক</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">MongoDB</Badge>
              <Badge variant="outline">Mongoose</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Shadcn UI</Badge>
              <Badge variant="outline">Redux Toolkit</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">📫 যোগাযোগ করুন</h2>
            <p>
              কোনো পরামর্শ, সহযোগিতা বা মতামত জানাতে চাইলে – আমরা জানতে আগ্রহী!
            </p>
            <p className="mt-2">
              ইমেইল: <a href="mailto:support@diplomajobsbd.com" className="text-green-700 underline">support@diplomajobsbd.com</a>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button size="lg" variant="default" className="px-6">
                চাকরি দেখুন <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
