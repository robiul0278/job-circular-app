import type { Metadata } from "next";
import { Hind_Siliguri} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-bangla",
});


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
      <body className={`${hindSiliguri.className}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
