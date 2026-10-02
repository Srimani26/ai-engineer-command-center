"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, Cpu, Flame, Zap, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { GithubIcon } from "./Icons";
import FadeIn from "./FadeIn";

interface RealWork {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  gradientHeader: string;
  borderColor: string;
  title: string;
  subtitle: string;
  company: string;
  problem: string;
  solution: string;
  architecture: { step: string; detail: string }[];
  impactMetrics: { label: string; value: string; color: string }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const REAL_WORKS: RealWork[] = [
  {
    id: "google-ads-auditor",
    category: "MARKETING AI & AUTOMATED AUDITING",
    badge: "LIVE IN PRODUCTION • DAILY CRON",
    badgeColor: "from-emerald-400 to-teal-500",
    gradientHeader: "from-emerald-500 via-teal-500 to-cyan-500",
    borderColor: "hover:border-emerald-400 hover:shadow-emerald-500/25",
    title: "AI-Powered Google Ads Auditor (v5.0)",
    subtitle: "Autonomous daily keyword performance auditor & wasted spend mitigation engine",
    company: "Standard Roofs (In-House Production)",
    problem:
      "Marketing ad budget was hemorrhaging cash on high-CPC, zero-converting search keywords with manual auditing taking hours of human review.",
    solution:
      "Engineered an autonomous daily AI pipeline that triggers at 6:00 AM IST via Google Apps Script, extracts 285+ real search queries, reasons over 7-day conversion/CTR data using Gemini AI, and dispatches a color-coded STOP/SCALE/FIX HTML audit report directly to leadership by 7:00 AM IST.",
    architecture: [
      { step: "01. Trigger & Data Pull", detail: "Google Ads Script API pulls 285+ keyword and search query metrics into Google Sheets data warehouse at 6:00 AM IST." },
      { step: "02. Dual-Engine Failover", detail: "Custom dual Gemini API key failover architecture with exponential backoff & static fallback to ensure 100% daily report reliability." },
      { step: "03. Waste Classification", detail: "Gemini classifies query intent, identifying negative match candidates, junk clicks, and high-converting commercial searches." },
      { step: "04. Report Delivery", detail: "Generates and dispatches a color-coded HTML email to executive leadership via Gmail API by 7:00 AM IST before daily ad spend begins." },
    ],
    impactMetrics: [
      { label: "Ad Waste Caught", value: "₹14,952 (97%)", color: "text-rose-400" },
      { label: "Daily Queries", value: "285+ Audited", color: "text-cyan-400" },
      { label: "Report Delivery", value: "07:00 AM IST", color: "text-violet-300" },
      { label: "Run Cost", value: "₹0 / mo", color: "text-emerald-400" },
    ],
    stack: ["Google Apps Script", "Google Ads Script API", "Gemini AI", "Google Sheets Warehouse", "Gmail API"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "zoho-quotation-engine",
    category: "ENTERPRISE CRM WORKFLOW AUTOMATION",
    badge: "95% DEPLOYED • TECH LEAD",
    badgeColor: "from-amber-400 to-rose-500",
    gradientHeader: "from-amber-500 via-orange-500 to-rose-500",
    borderColor: "hover:border-amber-400 hover:shadow-amber-500/25",
    title: "Zoho CRM 4-Layer Quotation Automation Platform",
    subtitle: "Enterprise proposal generator & media sync engine slashing drafting time to < 48 seconds",
    company: "Standard Roofs (Tech Lead)",
    problem:
      "Creating roofing proposals required manual multi-step square-footage calculations, pricing matrices, and manual photo uploads taking 30+ minutes per quote with frequent arithmetic errors.",
    solution:
      "Architected a robust 4-layer technical stack (Workflow Rules, Deluge Backend, Client Script JS, Zoho Writer API) that automates 30+ CRM fields, calculates specs dynamically, syncs product images via Cloudinary, and generates PDF proposals in 48 seconds with 0% calculation errors.",
    architecture: [
      { step: "Layer 1: Workflow Rules", detail: "Validates 14+ CRM required parameters, enforces status gates, and auto-generates serial numbers." },
      { step: "Layer 2: Deluge Business Logic", detail: "Calculates complex roofing square-footage formulas, tax slabs, pricing matrices, and vendor discounts dynamically." },
      { step: "Layer 3: Client Script (JS)", detail: "Instant UI feedback, real-time roofing color-to-image preview, and Cloudinary media asset synchronization." },
      { step: "Layer 4: Zoho Writer API", detail: "Compiles custom branded PDF documents and automatically attaches them directly to client CRM deal records." },
    ],
    impactMetrics: [
      { label: "Quote Creation", value: "< 48 seconds", color: "text-emerald-400" },
      { label: "CRM Fields", value: "30+ Automated", color: "text-cyan-400" },
      { label: "Workflow Rules", value: "14+ Active", color: "text-amber-400" },
      { label: "Manual Errors", value: "0%", color: "text-emerald-400" },
    ],
    stack: ["Zoho CRM Enterprise", "Deluge Functions", "Client Script (JS)", "Zoho Writer API", "Cloudinary"],
  },
  {
    id: "sri-ai-business-os",
    category: "FLAGSHIP MULTI-TENANT PLATFORM",
    badge: "PRODUCTION READY • FASTAPI",
    badgeColor: "from-violet-500 to-fuchsia-500",
    gradientHeader: "from-violet-600 via-indigo-600 to-fuchsia-600",
    borderColor: "hover:border-violet-400 hover:shadow-violet-500/25",
    title: "Sri AI Business OS",
    subtitle: "Autonomous multi-tenant operating system for enterprise intake, triage and governance",
    company: "Proprietary Architecture",
    problem:
      "Businesses struggle with disorganized inbound requests, manual task triage, lack of SLA enforcement, and insecure API integrations across multi-tenant clients.",
    solution:
      "Engineered an end-to-end multi-tenant business operating system with FastAPI, Neon Cloud PostgreSQL, and Next.js. Ingests raw unstructured business messages through Gemini Flash, enforces human-in-the-loop triage governance, and automates operational milestones with sub-45ms latency.",
    architecture: [
      { step: "01. Intake Pipeline", detail: "Deterministic AI request parser extracting structured objectives, SLA deadlines, and urgency confidence." },
      { step: "02. Multi-Tenant Isolation", detail: "Strict data separation across Organizations -> Workspaces -> Projects -> Tasks with role-based access control." },
      { step: "03. Triage Governance", detail: "Human-in-the-loop review queue gating AI decisions before task dispatch or stakeholder notification." },
      { step: "04. Developer Gateway", detail: "Cryptographic HMAC-SHA256 webhook dispatch, rate limiting, and secret API key management." },
    ],
    impactMetrics: [
      { label: "API Latency", value: "< 45ms", color: "text-emerald-400" },
      { label: "Intake Accuracy", value: "99.2%", color: "text-cyan-400" },
      { label: "Security", value: "HMAC-SHA256", color: "text-violet-300" },
      { label: "Database", value: "Neon Cloud", color: "text-amber-400" },
    ],
    stack: ["FastAPI", "Python 3.12", "Neon PostgreSQL", "Next.js 16", "TypeScript", "TailwindCSS", "Gemini Flash"],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
  },
  {
    id: "shopify-storefront",
    category: "COMMERCE & FRONT-END LEADERSHIP",
    badge: "LIVE STOREFRONT • TECH LEAD",
    badgeColor: "from-teal-400 to-cyan-500",
    gradientHeader: "from-teal-500 via-cyan-500 to-blue-500",
    borderColor: "hover:border-cyan-400 hover:shadow-cyan-500/25",
    title: "Shopify E-Commerce Commercial Storefront",
    subtitle: "High-ticket roofing storefront theme customization & conversion UX optimization",
    company: "Standard Roofs",
    problem:
      "Standard Roofs needed a dedicated commercial online storefront tailored for high-ticket residential and industrial roofing inquiries with fast mobile loading speeds.",
    solution:
      "Led front-end development of the live commercial Shopify storefront. Customized Liquid themes, built responsive components, and optimized mobile Core Web Vitals to deliver sub-2s initial load and maximize buyer conversion.",
    architecture: [
      { step: "01. Custom Liquid Themes", detail: "Engineered bespoke Shopify Liquid templates tailored for industrial specifications and lead capture." },
      { step: "02. Mobile CWV Optimization", detail: "Compressed asset delivery, deferred script loading, and streamlined checkout pathways for sub-2s load." },
      { step: "03. Executive Collaboration", detail: "Collaborated with business leadership to connect storefront inquiries directly into automated sales pipelines." },
    ],
    impactMetrics: [
      { label: "Storefront", value: "Live Online", color: "text-emerald-400" },
      { label: "Role", value: "Front-End Lead", color: "text-cyan-400" },
      { label: "Architecture", value: "Shopify Liquid", color: "text-teal-300" },
      { label: "UX Metric", value: "Sub-2s CWV", color: "text-emerald-400" },
    ],
    stack: ["Shopify Liquid", "Theme Development", "JavaScript", "CSS3", "Conversion UX"],
  },
  {
    id: "monsterfoods-app",
    category: "REAL-TIME WEB APPLICATION",
    badge: "DEPLOYED IN PRODUCTION",
    badgeColor: "from-pink-500 to-rose-500",
    gradientHeader: "from-pink-500 via-rose-500 to-purple-600",
    borderColor: "hover:border-pink-400 hover:shadow-pink-500/25",
    title: "MonsterFoods Real-Time Food Ordering Portal",
    subtitle: "Vue.js component-based food ordering platform engineered at Macincode Technologies",
    company: "Macincode Technologies (Clops AI)",
    problem:
      "Requirement for a responsive, reactive web application for real-time menu browsing, cart management, and order checkout.",
    solution:
      "Built and deployed the front-end of MonsterFoods using Vue.js. Translated UI/UX design mockups into reactive, accessible components, managed complex real-time cart states, and integrated REST APIs.",
    architecture: [
      { step: "01. Reactive State Architecture", detail: "Engineered real-time cart state management, checkout flows, and dynamic menu category filtering." },
      { step: "02. UI/UX Translation", detail: "Translated high-fidelity Figma mockups into pixel-perfect, accessible, mobile-responsive code." },
      { step: "03. API Integration", detail: "Tested and integrated backend REST API endpoints with robust error handling and loading skeletons." },
    ],
    impactMetrics: [
      { label: "Framework", value: "Vue.js", color: "text-pink-400" },
      { label: "Role", value: "Front-End Dev", color: "text-cyan-400" },
      { label: "Type", value: "Real-time Portal", color: "text-rose-300" },
      { label: "Status", value: "Deployed", color: "text-emerald-400" },
    ],
    stack: ["Vue.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "State Management"],
  },
];

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState<string>("google-ads-auditor");

  const currentWork = REAL_WORKS.find((w) => w.id === activeTab) || REAL_WORKS[0];

  return (
    <section id="works" className="py-28 bg-[#030014] text-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-400" />
                VERIFIED REAL PRODUCTION WORKS &bull; ZERO FLUFF
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">
                Battle-Tested AI &amp; Systems
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
                Strictly real systems deployed in commercial operations. Click each system below to inspect the real architecture.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30">
                5 VERIFIED BUILDS
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Dynamic Glowing Project Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {REAL_WORKS.map((work) => (
            <button
              key={work.id}
              onClick={() => setActiveTab(work.id)}
              className={`px-5 py-3 rounded-full text-xs font-black transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === work.id
                  ? `bg-gradient-to-r ${work.gradientHeader} text-slate-950 shadow-lg shadow-cyan-500/25 font-black`
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              <span>{work.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Project Case Study Card */}
        <FadeIn key={currentWork.id}>
          <div className={`rounded-3xl galaxy-card p-6 sm:p-10 space-y-8 relative overflow-hidden transition-all duration-300 ${currentWork.borderColor}`}>
            {/* Colorful top accent gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${currentWork.gradientHeader}`} />

            {/* Top Bar: Title, Badge, Company */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 pt-2">
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase">
                    {currentWork.category}
                  </span>
                  <span
                    className={`text-[10px] font-black px-3 py-1 rounded-full text-slate-950 bg-gradient-to-r ${currentWork.badgeColor} shadow-md`}
                  >
                    {currentWork.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {currentWork.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 font-medium">
                  {currentWork.subtitle} &bull; <strong className="text-cyan-300">{currentWork.company}</strong>
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {currentWork.githubUrl && (
                  <a
                    href={currentWork.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400 bg-white/[0.05] text-slate-200 hover:text-white text-xs font-bold flex items-center gap-2 transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Code</span>
                  </a>
                )}
                {currentWork.liveUrl && (
                  <a
                    href={currentWork.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/20 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  The Business Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentWork.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  The Engineered Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentWork.solution}
                </p>
              </div>
            </div>

            {/* Architecture Stepper Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                Technical Execution Architecture
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentWork.architecture.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-cyan-300 font-mono block">
                      {item.step}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics Row */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {currentWork.impactMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                      {m.label}
                    </span>
                    <span className={`text-lg sm:text-xl font-mono font-black ${m.color}`}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Pills */}
            <div className="pt-2 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-400 mr-2 font-bold">Tech Stack:</span>
              {currentWork.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/[0.06] text-xs font-mono text-slate-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
