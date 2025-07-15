import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ডিপ্লোমা চাকরির খবর - বাংলাদেশ",
  description: "শুধুমাত্র ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য নির্ভরযোগ্য চাকরির সার্কুলার ও তথ্যভিত্তিক প্ল্যাটফর্ম। প্রতিদিনের আপডেট, সরকারি ও বেসরকারি ডিপ্লোমা চাকরির খবর একসাথে।",
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