"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, Cpu, Flame, Zap, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { GithubIcon } from "./Icons";
import FadeIn from "./FadeIn";

interface RealWork {
  id: string;
  category: string;
  badge: string;
  badgeType: "emerald" | "rose" | "indigo" | "teal";
  title: string;
  subtitle: string;
  company: string;
  problem: string;
  solution: string;
  architecture: { step: string; detail: string }[];
  impactMetrics: { label: string; value: string; highlight?: boolean }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const REAL_WORKS: RealWork[] = [
  {
    id: "google-ads-auditor",
    category: "MARKETING AI & AUTOMATED AUDITING",
    badge: "LIVE IN PRODUCTION • DAILY CRON",
    badgeType: "emerald",
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
      { label: "Ad Waste Caught", value: "₹14,952 (97%)", highlight: true },
      { label: "Daily Queries", value: "285+ Audited" },
      { label: "Report Delivery", value: "07:00 AM IST" },
      { label: "Operating Cost", value: "₹0 / mo" },
    ],
    stack: ["Google Apps Script", "Google Ads Script API", "Gemini AI", "Google Sheets Warehouse", "Gmail API"],
    githubUrl: "https://github.com/Srimani26",
  },
  {
    id: "zoho-quotation-engine",
    category: "ENTERPRISE CRM WORKFLOW AUTOMATION",
    badge: "95% DEPLOYED • TECH LEAD",
    badgeType: "rose",
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
      { label: "Quote Creation", value: "< 48 seconds", highlight: true },
      { label: "CRM Fields", value: "30+ Automated" },
      { label: "Workflow Rules", value: "14+ Active" },
      { label: "Manual Errors", value: "0%" },
    ],
    stack: ["Zoho CRM Enterprise", "Deluge Functions", "Client Script (JS)", "Zoho Writer API", "Cloudinary"],
  },
  {
    id: "sri-ai-business-os",
    category: "FLAGSHIP MULTI-TENANT PLATFORM",
    badge: "PRODUCTION READY • FASTAPI",
    badgeType: "indigo",
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
      { label: "API Latency", value: "< 45ms", highlight: true },
      { label: "Intake Accuracy", value: "99.2%" },
      { label: "Security", value: "HMAC-SHA256" },
      { label: "Database", value: "Neon PostgreSQL" },
    ],
    stack: ["FastAPI", "Python 3.12", "Neon PostgreSQL", "Next.js 16", "TypeScript", "TailwindCSS", "Gemini Flash"],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
  },
  {
    id: "shopify-storefront",
    category: "COMMERCE & FRONT-END LEADERSHIP",
    badge: "LIVE STOREFRONT • TECH LEAD",
    badgeType: "teal",
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
      { label: "Storefront", value: "Live Online", highlight: true },
      { label: "Role", value: "Front-End Lead" },
      { label: "Architecture", value: "Shopify Liquid" },
      { label: "UX Metric", value: "Sub-2s CWV" },
    ],
    stack: ["Shopify Liquid", "Theme Development", "JavaScript", "CSS3", "Conversion UX"],
  },
  {
    id: "monsterfoods-app",
    category: "REAL-TIME WEB APPLICATION",
    badge: "DEPLOYED IN PRODUCTION",
    badgeType: "teal",
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
      { label: "Framework", value: "Vue.js", highlight: true },
      { label: "Role", value: "Front-End Dev" },
      { label: "Type", value: "Real-time Web App" },
      { label: "Status", value: "Deployed" },
    ],
    stack: ["Vue.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "State Management"],
  },
];

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState<string>("google-ads-auditor");

  const currentWork = REAL_WORKS.find((w) => w.id === activeTab) || REAL_WORKS[0];

  return (
    <section id="works" className="py-28 bg-[#050713] text-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                PROVEN ENGINEERING TRACK RECORD
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Verified Production Works
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
                Exclusively real, battle-tested systems actively deployed for businesses. Zero toy demos.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                5 PRODUCTION BUILDS
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {REAL_WORKS.map((work) => (
            <button
              key={work.id}
              onClick={() => setActiveTab(work.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold transition whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === work.id
                  ? "bg-white text-slate-950 font-bold shadow-lg shadow-white/10"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              <span>{work.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Project In-Depth Case Study Card */}
        <FadeIn key={currentWork.id}>
          <div className="rounded-3xl premium-card p-6 sm:p-10 space-y-8">
            {/* Top Bar: Title, Badge, Company */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase">
                    {currentWork.category}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-3 py-0.5 rounded-full border ${
                      currentWork.badgeType === "emerald"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : currentWork.badgeType === "rose"
                        ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                        : "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                    }`}
                  >
                    {currentWork.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentWork.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 font-normal">
                  {currentWork.subtitle} &bull; <strong className="text-slate-200">{currentWork.company}</strong>
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {currentWork.githubUrl && (
                  <a
                    href={currentWork.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-slate-300 hover:text-white text-xs font-medium flex items-center gap-2 transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {currentWork.liveUrl && (
                  <a
                    href={currentWork.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-rose-400 block">
                  The Business Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentWork.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 block">
                  The Engineered Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentWork.solution}
                </p>
              </div>
            </div>

            {/* Architecture Stepper Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Technical Execution Architecture
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentWork.architecture.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
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
            <div className="p-5 rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {currentWork.impactMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {m.label}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-mono font-extrabold ${
                        m.highlight ? "text-emerald-400" : "text-white"
                      }`}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Pills */}
            <div className="pt-2 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
              {currentWork.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/5"
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
