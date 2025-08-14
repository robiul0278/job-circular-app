import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "ডিপ্লোমা জবস বিডি-তে কিভাবে চাকরির জন্য আবেদন করবো?",
    answer:
      'ক্যাটাগরি অনুযায়ী চাকরি ব্রাউজ করুন অথবা সার্চ ফিচার ব্যবহার করুন। "বিস্তারিত দেখুন" এ ক্লিক করে পুরো সার্কুলার দেখুন এবং আবেদনের নির্দেশনা অনুসরণ করুন।',
  },
  {
    question: "আমি কি চাকরিগুলো সংরক্ষণ করতে পারবো?",
    answer:
      "হ্যাঁ, আপনি লগইন করার পর চাকরি বুকমার্ক করতে পারবেন এবং পরে তা আপনার অ্যাকাউন্ট থেকে দেখতে পারবেন।",
  },
  {
    question: "এই সাইটটি কত ঘন ঘন আপডেট করা হয়?",
    answer:
      "প্রতিদিন নতুন চাকরির বিজ্ঞপ্তি যোগ করা হয় যাতে আপনি সর্বশেষ সুযোগগুলো পেতে পারেন।",
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-extrabold mb-4 text-primary">যোগাযোগ করুন</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          আমরা ডিপ্লোমা ইঞ্জিনিয়ারদের সাহায্য করতে এখানে আছি। আপনার কোনো প্রশ্ন আছে বা সহায়তা প্রয়োজন? আমাদের সাথে যোগাযোগ করুন।
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* যোগাযোগের তথ্য */}
        <div className="rounded-xl border p-8 space-y-6 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold mb-4">যোগাযোগের বিস্তারিত</h2>

          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:support@diplomajobsbd.com"
              className="hover:underline"
            >
              support@diplomajobsbd.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:+8801234567890" className="hover:underline">
              +8801811325705
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span>ঢাকা, বাংলাদেশ</span>
          </div>

          <div className="flex gap-6 pt-4">
            <Link href="#" target="_blank">
              <Facebook className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="#" target="_blank">
              <Twitter className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="#" target="_blank">
              <Linkedin className="w-5 h-5 hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* প্রশ্নোত্তর */}
        <div className="rounded-xl border p-8 space-y-6 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold mb-4">সচরাচর জিজ্ঞাসা (FAQ)</h2>

          {faqs.map((faq, index) => (
            <details key={index} className="group border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/">
          <Button variant="outline" className="inline-flex items-center gap-2 cursor-pointer">
            হোমপেইজে ফিরে যান <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
