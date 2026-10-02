import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srimanikandan T — AI Systems & Automation Lead",
  description:
    "First technical hire & Tech Lead @ Standard Roofs. Architecting autonomous AI pipelines, 4-layer CRM quotation engines, and high-ROI business operating systems.",
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
    title: "Srimanikandan T — AI Systems & Automation Lead",
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
      className={`${jakarta.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
