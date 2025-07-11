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
    question: "How do I apply for a job on Diploma Jobs BD?",
    answer:
      'Browse jobs by category or use the search feature. Click on "View Details" to see the full job circular and follow the application instructions.',
  },
  {
    question: "Can I save jobs to view later?",
    answer:
      "Yes. You can bookmark jobs after logging in, and access them anytime from your account.",
  },
  {
    question: "How often is the site updated?",
    answer:
      "New job circulars are added daily to keep you informed with the latest opportunities.",
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold mb-4 text-primary">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are here to help diploma engineers. Have a question or need support? Reach out to us anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="rounded-xl border p-8 space-y-6 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>

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
              +880 1234 567 890
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span>123 Diploma Street, Dhaka, Bangladesh</span>
          </div>

          <div className="flex gap-6 pt-4">
            <Link href="https://facebook.com/diplomajobsbd" target="_blank">
              <Facebook className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com/diplomajobsbd" target="_blank">
              <Twitter className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com/company/diplomajobsbd" target="_blank">
              <Linkedin className="w-5 h-5 hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-xl border p-8 space-y-6 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

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
          <Button variant="outline" className="inline-flex items-center gap-2">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
