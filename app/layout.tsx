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
  title: "Srimanikandan K | AI Automation Engineer & Systems Architect",
  description:
    "AI Automation Engineer architecting business-critical automation systems, 4-layer CRM engines, and zero-cost Gemini AI Google Ads intelligence pipelines.",
  keywords: [
    "Srimanikandan K",
    "AI Engineer",
    "AI Automation Engineer",
    "Zoho CRM Automation",
    "Gemini AI Integration",
    "Google Ads Intelligence",
    "FastAPI",
    "Next.js",
    "Erode Tamil Nadu",
  ],
  authors: [{ name: "Srimanikandan K" }],
  openGraph: {
    title: "Srimanikandan K | AI Automation Engineer & Systems Architect",
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
      <body className="min-h-full flex flex-col bg-[#050816] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
