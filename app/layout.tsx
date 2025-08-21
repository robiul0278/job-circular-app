import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://diplomajobsbd.com"),
  title: {
    default: "Diploma Jobs in Bangladesh",
    template: "%s | ডিপ্লোমা চাকরির খবর",
  },
  description:
    "ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য সর্বশেষ সরকারি ও বেসরকারি চাকরির সার্কুলার, নিয়োগ বিজ্ঞপ্তি, আবেদন তথ্য এবং ক্যারিয়ার আপডেট।",
  keywords: [
    "ডিপ্লোমা চাকরি",
    "ডিপ্লোমা ইঞ্জিনিয়ার চাকরি",
    "ডিপ্লোমা সরকারি চাকরি",
    "ডিপ্লোমা বেসরকারি চাকরি",
    "Diploma engineer jobs in Bangladesh",
    "Diploma চাকরির খবর",
    "ডিপ্লোমা নিয়োগ বিজ্ঞপ্তি",
    "ডিপ্লোমা জবস বিডি",
    "diploma jobs in bd",
    "diploma jobs in bangladesh",
    "bd gov jobs",
    "bd govt jobs",
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
        url: "https://diplomajobsbd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diploma Jobs BD - ডিপ্লোমা চাকরির খবর",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@diplomajobsbd", // যদি টুইটার অ্যাকাউন্ট থাকে
    title: "ডিপ্লোমা চাকরির খবর - Diploma Jobs BD",
    description:
      "ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য সরকারি ও বেসরকারি চাকরির সার্কুলার ও ক্যারিয়ার আপডেট।",
    images: ["https://diplomajobsbd.com/og-image.jpg"],
  },
  authors: [{ name: "Diploma Jobs BD Team", url: "https://diplomajobsbd.com" }],
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="bn">
      <body style={{ fontFamily: "var(--font-bangla)" }}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}