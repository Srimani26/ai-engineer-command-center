"use client";

import React from "react";
import { Cpu, Code2, Globe, Database, Users, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const SKILL_GROUPS = [
  {
    title: "AI & Automation Engineering",
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    skills: [
      "Gemini AI Integration (Flash & Pro)",
      "Zoho Deluge (Enterprise)",
      "Google Apps Script",
      "Google Ads Script API",
      "Autonomous AI Pipelines & RAG",
      "Agentic Tool Calling",
      "Workflow Automation",
      "Chrome Extensions",
      "Low-Code / Vibe Coding",
    ],
  },
  {
    title: "Backend & Cloud Architecture",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    skills: [
      "Python 3.12",
      "FastAPI",
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "RESTful API Architecture",
      "OAuth 2.1 Security",
      "HMAC-SHA256 Webhooks",
    ],
  },
  {
    title: "Frontend & Modern Web",
    icon: <Globe className="w-5 h-5 text-teal-400" />,
    skills: [
      "React.js",
      "Next.js (App Router)",
      "Vue.js",
      "Shopify Liquid & Themes",
      "TailwindCSS",
      "HTML5 / Modern CSS3",
      "Component Architecture",
      "State Management",
    ],
  },
  {
    title: "CRM, Cloud & Media APIs",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    skills: [
      "Zoho CRM (Enterprise)",
      "Zoho Writer API",
      "Cloudinary Media Sync",
      "PostgreSQL (Neon Cloud)",
      "Google Sheets API",
      "Git & GitHub Versioning",
      "Render Cloud Hosting",
      "Gmail API Automation",
    ],
  },
  {
    title: "Leadership & Agency",
    icon: <Users className="w-5 h-5 text-rose-400" />,
    skills: [
      "Tech Team Leadership (2 Engineers)",
      "First Technical Hire Agency",
      "Operational Requirements Intake",
      "Product Troubleshooting",
      "Stakeholder Communication",
      "Rapid Prototyping & MVP Shipping",
    ],
  },
  {
    title: "Reliability & Security",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    skills: [
      "Dual-API Failover Logic",
      "Exponential Backoff & 503 Retry",
      "Multi-Tenant Isolation",
      "Role-Based Access Control",
      "Zero-Cost Architecture Design",
      "Automated Audit Logging",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#050713] text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8 text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              TECHNICAL ARSENAL
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Skills Matrix &amp; Frameworks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 font-normal">
              Battle-tested tools and frameworks used daily to engineer resilient AI pipelines, CRM engines, and production web apps.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <FadeIn key={group.title}>
              <div className="h-full rounded-3xl premium-card p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-2xl bg-white/[0.04] border border-white/10">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-white/[0.03] text-xs font-mono text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
