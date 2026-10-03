"use client";

import React from "react";
import { Code, Layout, Cpu, Database, Users, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  borderColor: string;
  skills: { name: string; level: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Automation & AI Integrations",
    icon: Cpu,
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-500/30",
    skills: [
      { name: "Zoho Deluge Scripting", level: "Production" },
      { name: "Google Apps Script", level: "Production" },
      { name: "Gemini AI Integration", level: "Production" },
      { name: "Workflow Automation (14+ Rules)", level: "Advanced" },
      { name: "Chrome Extensions", level: "Specialist" },
      { name: "Low-Code / Vibe Coding", level: "Advanced" },
    ],
  },
  {
    title: "CRM & Business Platforms",
    icon: Database,
    color: "from-purple-400 to-fuchsia-500",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "Zoho CRM (Enterprise)", level: "Production" },
      { name: "Zoho Writer API", level: "Production" },
      { name: "Google Ads Script", level: "Production" },
      { name: "Cloudinary API", level: "Advanced" },
      { name: "Google Sheets Data Pipelines", level: "Advanced" },
      { name: "Gmail API Automation", level: "Production" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-pink-400 to-rose-500",
    borderColor: "border-pink-500/30",
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "SQL / Data Queries", level: "Proficient" },
    ],
  },
  {
    title: "Web & E-Commerce Technologies",
    icon: Layout,
    color: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "React.js", level: "Advanced" },
      { name: "Vue.js", level: "Production" },
      { name: "Shopify Liquid", level: "Production" },
      { name: "Theme Development", level: "Advanced" },
      { name: "REST APIs & JSON", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>Real Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
          Technical <span className="text-gradient-vibrant">Skills & Capabilities</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Verified programming languages, automation tools, and web technologies deployed across live systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className={`mnc-card rounded-3xl p-6 sm:p-8 border ${cat.borderColor} relative overflow-hidden`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Leadership & Professional Soft Skills Banner */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Technical Leadership & Collaboration</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Led a 2-member in-house development team as first technical hire in a newly formed tech function.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Problem-Solving", "Client Interaction", "Cross-Functional Collaboration", "Technical Documentation", "Time Management"].map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
