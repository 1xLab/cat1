import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { baseMetadata } from "@/lib/seo";
import { LabSchema } from "@/components/seo/lab-schema";
import { TagManager } from "@/components/analytics/tag-manager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="sunrise">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TagManager />
        <LabSchema />
        <Header />
        <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
