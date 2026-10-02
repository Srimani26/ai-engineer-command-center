import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srimanikandan T | AI Automation Engineer & Systems Lead",
  description:
    "Tech Lead & AI Automation Engineer architecting production AI pipelines, 4-layer Zoho CRM engines, and zero-cost Gemini AI Google Ads intelligence systems.",
  keywords: [
    "Srimanikandan T",
    "AI Automation Engineer",
    "Tech Lead Standard Roofs",
    "Zoho CRM Automation",
    "Gemini AI Integration",
    "Google Ads Script AI",
    "FastAPI",
    "Next.js",
    "Erode Tamil Nadu",
  ],
  authors: [{ name: "Srimanikandan T" }],
  openGraph: {
    title: "Srimanikandan T | AI Automation Engineer & Systems Lead",
    description:
      "Production AI systems, 4-layer CRM quotation engines & zero-cost business intelligence platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
