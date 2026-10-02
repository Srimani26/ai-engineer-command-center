import type { Metadata } from "next";
import { Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srimanikandan T — Lead AI Systems & Automation Architect",
  description:
    "First technical hire & Tech Lead @ Standard Roofs. Architecting autonomous AI pipelines, 4-layer CRM quotation engines, and high-ROI multi-agent business operating systems.",
  keywords: [
    "Srimanikandan T",
    "AI Systems Architect",
    "AI Automation Engineer",
    "Tech Lead Standard Roofs",
    "Multi-Agent AI",
    "Zoho CRM Quotation Engine",
    "Gemini API",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Srimanikandan T" }],
  openGraph: {
    title: "Srimanikandan T — Lead AI Systems & Automation Architect",
    description:
      "Production AI architectures, multi-layer quotation engines & high-impact autonomous systems.",
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
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#03030c] font-sans text-slate-100 selection:bg-cyan-400/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
