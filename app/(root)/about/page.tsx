
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Diploma Jobs BD",
              "url": "https://diplomajobsbd.com",
              "logo": "https://diplomajobsbd.com/logo.png",
              "sameAs": [
                "https://facebook.com/diplomajobsbd",
                "https://t.me/diplomajobsbd"
              ],
              "description":
                "Diploma Jobs BD is a professional job portal built for diploma engineers in Bangladesh, providing the latest govt and private job circulars."
            })
          }}
        />
      </Head>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">About Diploma Jobs BD</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your trusted platform dedicated to empowering diploma engineers in Bangladesh with verified job circulars, career resources, and opportunities to thrive.
          </p>
        </div>

        <div className="space-y-12 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">🎯 Our Mission</h2>
            <p>
              At <strong>Diploma Jobs BD</strong>, our mission is to simplify the job search for diploma engineers by offering a tailored platform where they can explore government and private sector job circulars easily, filtered by department, location, and relevance.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">💡 What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time updates of verified job circulars</li>
              <li>Smart filtering by engineering departments</li>
              <li>Save/bookmark jobs for future reference</li>
              <li>Mobile-friendly design with dark mode</li>
              <li>Secure and fast custom authentication</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-primary">🛠 Technology Stack</h2>
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
            <h2 className="text-2xl font-semibold mb-3 text-primary">📫 Contact Information</h2>
            <p>
              For any suggestions, collaborations, or feedback – we’d love to hear from you!
            </p>
            <p className="mt-2">
              Email: <a href="mailto:support@diplomajobsbd.com" className="text-blue-500 underline">support@diplomajobsbd.com</a>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button size="lg" variant="default" className="px-6">
                Browse Jobs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
