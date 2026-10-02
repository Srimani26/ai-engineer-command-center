"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  architectureSteps: string[];
  metrics: { label: string; value: string; color: string }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
}

const realProjects: Project[] = [
  {
    id: "google-ads-auditor",
    badge: "PRODUCTION AI AUDITOR",
    badgeColor: "from-cyan-500 to-blue-600",
    title: "Google Ads AI Strategic Auditor v5.0",
    subtitle: "Self-correcting LLM audit system analyzing millions in ad spend",
    description:
      "Enterprise autonomous marketing diagnostic pipeline. Ingests Google Ads Script telemetry across thousands of search queries, identifies negative keyword bleed, quality-score degradation, and budget leakage with deterministic JSON validation.",
    architectureSteps: [
      "Step 1: Google Ads Script cron extracts raw metrics (CTR, CPC, Quality Score, Impression Share).",
      "Step 2: Python / FastAPI microservice aggregates anomalies and builds structured evaluation context.",
      "Step 3: Multi-layer prompt chaining with Gemini API & Claude evaluates waste with self-correcting validation schema.",
      "Step 4: Autonomous generation of executive remediation summaries and direct bid adjustments.",
    ],
    metrics: [
      { label: "Wasted Spend Identified", value: "32% Avg", color: "text-cyan-400" },
      { label: "Schema Validation", value: "99.8%", color: "text-purple-400" },
      { label: "Processing Speed", value: "< 4.2s", color: "text-pink-400" },
    ],
    techStack: [
      "Gemini 1.5 Pro",
      "Google Ads Scripts",
      "Python / FastAPI",
      "Pydantic Validation",
      "TypeScript",
      "Automated Reporting",
    ],
    githubUrl: "https://github.com/Srimani26/Google-ads-ai-strategic-auditor-v5.0",
    isFlagship: true,
  },
  {
    id: "zoho-quotation-engine",
    badge: "MISSION-CRITICAL ERP ENGINE",
    badgeColor: "from-purple-500 to-fuchsia-600",
    title: "Zoho CRM 4-Layer Dynamic Quotation Engine",
    subtitle: "Mathematical pricing engine powering multi-crore roofing contracts",
    description:
      "Engineered from scratch for Standard Roofs as first technical hire. Translates complex civil engineering dimensions into precise bills-of-materials with multi-tier supplier price matrices, dynamic margin calculations, and instantaneous PDF quote generation.",
    architectureSteps: [
      "Layer 1: Input Matrix captures roof square footage, slope angles, wind-load ratings, and profile type.",
      "Layer 2: Bill-of-Materials (BOM) Calculation Engine computes sheets, purlins, fasteners, and guttering.",
      "Layer 3: Live Steel & Raw Material Pricing Index applies tier discounts and dynamic margin rules.",
      "Layer 4: Automated Zoho Deluge triggers sync CRM Deal records, generate client PDFs, and notify sales directors.",
    ],
    metrics: [
      { label: "Quotation Turnaround", value: "15m -> 30s", color: "text-emerald-400" },
      { label: "Human Calculation Errors", value: "0.00%", color: "text-cyan-400" },
      { label: "Deal Volume Handled", value: "Multi-Crore", color: "text-purple-400" },
    ],
    techStack: [
      "Zoho Deluge Scripting",
      "Zoho CRM API",
      "Mathematical BOM Logic",
      "Webhooks Automation",
      "Automated PDF Generation",
    ],
    isFlagship: true,
  },
  {
    id: "sri-ai-business-os",
    badge: "AUTONOMOUS AGENT PLATFORM",
    badgeColor: "from-pink-500 to-rose-600",
    title: "Sri AI Business OS",
    subtitle: "Autonomous multi-agent enterprise command center",
    description:
      "Full-stack AI operating system coordinating specialized autonomous agents (Marketing Strategist, Retention Analyst, Sales Intelligence, Executive Briefing). Features persistent SQLite/PostgreSQL memory, real-time telemetry, and modular tool calling.",
    architectureSteps: [
      "FastAPI backend exposes asynchronous task orchestration with streaming LLM agents.",
      "Modular agent registry isolates tool executions (web scraping, database analytics, document synthesis).",
      "Next.js App Router frontend provides unified executive dashboard with real-time SSE streaming.",
    ],
    metrics: [
      { label: "SaaS Tools Consolidated", value: "6 Tools -> 1", color: "text-pink-400" },
      { label: "Agent Response Latency", value: "< 1.8s", color: "text-cyan-400" },
      { label: "Autonomous Tasks Run", value: "24/7", color: "text-emerald-400" },
    ],
    techStack: [
      "Next.js 16 (Turbopack)",
      "FastAPI (Python 3.12)",
      "Gemini 2.0 API",
      "Tailwind CSS",
      "SQLite / PostgreSQL",
      "Server-Sent Events",
    ],
    githubUrl: "https://github.com/Srimani26/Sri-AI-Business-OS",
  },
  {
    id: "shopify-storefront",
    badge: "HIGH-PERFORMANCE E-COMMERCE",
    badgeColor: "from-emerald-500 to-teal-600",
    title: "High-Conversion Headless Shopify Storefront",
    subtitle: "Sub-second load times & custom cart logic for direct-to-consumer brand",
    description:
      "Engineered bespoke Liquid templates, optimized bundle sizes, and custom AJAX cart drawers with tiered checkout upsells. Achieved 98+ Google Lighthouse performance scores and a 24% uplift in mobile conversion rates.",
    architectureSteps: [
      "Micro-optimized Liquid codebase stripping unused legacy scripts and third-party blocking trackers.",
      "Custom headless-style cart drawer with client-side state caching and instant checkout redirects.",
      "Integrated dynamic currency converters and custom tracking pixels.",
    ],
    metrics: [
      { label: "Google Lighthouse Score", value: "98/100", color: "text-emerald-400" },
      { label: "Checkout Conversion Lift", value: "+24%", color: "text-cyan-400" },
      { label: "Mobile First Load", value: "0.85s", color: "text-purple-400" },
    ],
    techStack: ["Shopify Liquid", "Vanilla JavaScript", "AJAX Cart API", "Tailwind CSS", "Lighthouse CI"],
  },
  {
    id: "monsterfoods-portal",
    badge: "OPERATIONAL FOOD-TECH APP",
    badgeColor: "from-amber-500 to-orange-600",
    title: "MonsterFoods Operational Platform",
    subtitle: "High-volume order management and kitchen display operations engine",
    description:
      "Interactive web application engineered with Vue.js, Pinia, and reactive state stores to coordinate real-time multi-location order dispatches, inventory status, and culinary workflow timelines.",
    architectureSteps: [
      "Reactive event-driven store tracking orders across Pending, Kitchen In-Progress, and Dispatched states.",
      "Real-time audio alert synthesis and low-latency UI re-rendering for kitchen staff.",
      "Role-based permission gating for franchise operators vs kitchen staff.",
    ],
    metrics: [
      { label: "Order Dispatch Speed", value: "4x Faster", color: "text-amber-400" },
      { label: "Active Daily Orders", value: "High-Volume", color: "text-pink-400" },
      { label: "UI Crash Rate", value: "0.00%", color: "text-emerald-400" },
    ],
    techStack: ["Vue.js 3", "Pinia Store", "TypeScript", "Vite", "Responsive UI"],
  },
];

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? realProjects
      : activeTab === "ai"
      ? realProjects.filter((p) => p.id === "google-ads-auditor" || p.id === "sri-ai-business-os")
      : activeTab === "erp"
      ? realProjects.filter((p) => p.id === "zoho-quotation-engine")
      : realProjects.filter((p) => p.id === "shopify-storefront" || p.id === "monsterfoods-portal");

  return (
    <section id="systems" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>MNC Production Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Engineered Systems. <span className="text-gradient-vibrant">Real Production Impact.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            No toy tutorials or filler repos. These are hardened, commercial-grade systems running in live business environments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0a0a20] border border-white/10 self-start md:self-end">
          {[
            { id: "all", label: "All Systems (5)" },
            { id: "ai", label: "AI & Agents" },
            { id: "erp", label: "CRM & ERP Math" },
            { id: "web", label: "Web Apps & E-Com" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden group"
          >
            {/* Top Multi-Color Radiant Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-white bg-gradient-to-r ${project.badgeColor} shadow-md`}
                  >
                    {project.badge}
                  </span>
                  {project.isFlagship && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-mono font-bold border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      FLAGSHIP
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center gap-2 transition hover:border-cyan-400/50"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Description & Impact Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Architecture Steps Breakdown */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Production Architecture Breakdown</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {project.architectureSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Metrics Column */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="grid grid-cols-1 gap-3">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                      <span className={`text-xl sm:text-2xl font-heading font-black ${m.color}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
                    Technologies Deployed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
