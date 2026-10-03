import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srimanikandan K — AI Automation Engineer & Systems Architect",
  description:
    "Official portfolio of Srimanikandan K. AI Automation Engineer building Sri AI Business OS, 4-layer Zoho CRM quotation automation systems, AI-powered Google Ads audit pipelines, and live Shopify storefronts.",
  keywords: [
    "Srimanikandan K",
    "AI Automation Engineer",
    "Sri AI Business OS",
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
    title: "Srimanikandan K — AI Automation Engineer",
    description:
      "Official portfolio of Srimanikandan K. Hands-on AI automation, enterprise CRM systems, and autonomous business architectures.",
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
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans bg-[#03030c] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
