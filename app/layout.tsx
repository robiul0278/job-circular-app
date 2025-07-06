import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Diploma Career",
  description: "Diploma job circular website",
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
