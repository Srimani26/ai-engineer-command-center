import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srimanikandan K - AI Automation Engineer",
  description:
    "Official portfolio of Srimanikandan K. AI Automation Engineer with hands-on experience building 4-layer Zoho CRM quotation automation systems, AI-powered Google Ads audit pipelines (Gemini AI), and live Shopify storefronts.",
  keywords: [
    "Srimanikandan K",
    "AI Automation Engineer",
    "Zoho CRM Automation",
    "Zoho Deluge",
    "Google Ads AI Auditor",
    "Gemini AI",
    "Google Apps Script",
    "Shopify Storefront Development",
    "React.js",
    "Vue.js",
    "Erode Tamil Nadu",
  ],
  authors: [{ name: "Srimanikandan K" }],
  openGraph: {
    title: "Srimanikandan K - AI Automation Engineer",
    description:
      "Official portfolio of Srimanikandan K. Hands-on AI automation, Zoho CRM systems, and Google Ads intelligence pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-[#03030c] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
