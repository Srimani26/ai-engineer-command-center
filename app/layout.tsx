import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans bg-[#03030c] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
