import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { Noto_Sans, Noto_Sans_Bengali } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://diplomajobsbd.com"),
  title: {
    default: "Diploma Jobs BD | Diploma Jobs in Bangladesh.",
    template: "%s | ডিপ্লোমা চাকরির খবর",
  },
  description:
    "Diploma Jobs BD - ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য সর্বশেষ সরকারি ও বেসরকারি চাকরির সার্কুলার, নিয়োগ বিজ্ঞপ্তি, আবেদন তথ্য এবং ক্যারিয়ার আপডেট।",
keywords: [
  // Core Keywords
  "diploma jobs in Bangladesh",
  "diploma engineer jobs in Bangladesh",
  "diploma jobs BD",
  "ডিপ্লোমা চাকরি",
  "ডিপ্লোমা চাকরির খবর",
  "diploma job circular",
  "diploma jobs",

  // Long-Tail Keywords
  "diploma govt jobs in Bangladesh",
  "diploma private jobs in Bangladesh",
  "diploma engineer job circular 2025",
  "diploma job vacancy in Bangladesh",
  "diploma job news Bangladesh",
  "diploma career Bangladesh",
  "diploma job portal BD",

  // Department/Category Keywords
  "diploma civil engineering jobs in Bangladesh",
  "diploma electrical engineering jobs in Bangladesh",
  "diploma mechanical jobs BD",
  "diploma textile jobs Bangladesh",
  "diploma computer jobs in BD"
],
  alternates: {
    canonical: "https://diplomajobsbd.com",
  },
  openGraph: {
    type: "website",
    url: "https://diplomajobsbd.com",
    title: "ডিপ্লোমা চাকরির খবর - Diploma Jobs BD",
    description:
      "ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য নির্ভরযোগ্য চাকরির সার্কুলার ও তথ্যভিত্তিক প্ল্যাটফর্ম।",
    siteName: "Diploma Jobs BD",
    images: [
      {
        url: "https://diplomajobsbd.com/default-banner.png",
        width: 1200,
        height: 630,
        alt: "Diploma Jobs BD - ডিপ্লোমা চাকরির খবর",
      },
    ],
    locale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    site: "@diplomajobsbd", // যদি official Twitter handle থাকে
    title: "ডিপ্লোমা চাকরির খবর - Diploma Jobs BD",
    description:
      "ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য সরকারি ও বেসরকারি চাকরির সার্কুলার ও ক্যারিয়ার আপডেট।",
    images: ["https://diplomajobsbd.com/default-banner.png"],
  },
  authors: [{ name: "Diploma Jobs BD Team", url: "https://diplomajobsbd.com" }],
  creator: "Diploma Jobs BD",
  publisher: "Diploma Jobs BD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        {/* Performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${notoSans.className} ${notoSansBengali.className}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>

    </html>
  );
}
