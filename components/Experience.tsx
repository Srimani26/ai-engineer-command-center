"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from "lucide-react";
import FadeIn from "./FadeIn";

const EXPERIENCES = [
  {
    role: "AI Engineer & Technical Team Lead",
    company: "Standard Roofs",
    location: "Erode, Tamil Nadu",
    period: "Jan 2026 – Present",
    badge: "CURRENT • FIRST TECHNICAL HIRE",
    description:
      "First technical hire on a newly formed in-house tech team; lead two engineers across enterprise CRM automation, Google Ads artificial intelligence, and e-commerce infrastructure.",
    bullets: [
      "Architected and deployed an end-to-end Zoho CRM Quotation Automation System using a 4-layer tech stack (Workflow Rules, Deluge Functions, Client Scripts, Zoho Writer API), reducing quote generation time to under 1 minute with zero manual errors.",
      "Automated 30+ CRM fields across 14+ workflow rules — including serial number generation, client data auto-fetch, roofing spec autofill, product image sync via Cloudinary, and PDF generation.",
      "Built and deployed an AI-Powered Google Ads Auditor (v5.0, Live) that pulls daily keyword/search-term performance data (285+ real queries), processes it through Gemini AI, and delivers a color-coded STOP/SCALE/FIX report via HTML email by 7:00 AM IST.",
      "Identified ₹14,952 in wasted ad spend (97% of ₹15,113 tracked) within 8 days of deployment using automated AI analysis at zero monthly cost.",
      "Leading front-end development for a live commercial Shopify storefront, owning theme customization, storefront performance, and conversion-focused UX decisions.",
      "Collaborated directly with business stakeholders across all initiatives to translate operational requirements into scalable AI-driven solutions.",
    ],
    skills: ["Zoho Deluge", "Google Apps Script", "Gemini AI", "Google Ads Script", "Shopify Liquid", "Cloudinary", "Zoho Writer API"],
  },
  {
    role: "Front-End Web Developer",
    company: "Macincode Technologies – Clops AI",
    location: "Salem, Tamil Nadu",
    period: "Apr 2025 – Aug 2025",
    description:
      "Developed responsive, user-centric web applications and real-time ordering portals utilizing modern JavaScript frameworks.",
    bullets: [
      "Developed responsive, user-centric web applications using HTML, CSS, JavaScript, React.js, and Vue.js.",
      "Built and deployed the frontend of MonsterFoods — a live, real-time food ordering web application — using Vue.js.",
      "Translated UI/UX designs into clean, functional front-end code; applied component-based architecture, state management, and performance optimization for scalable solutions.",
      "Collaborated with cross-functional teams on production projects and contributed to code quality and delivery timelines.",
    ],
    skills: ["Vue.js", "React.js", "JavaScript", "HTML5", "CSS3", "State Management", "REST APIs"],
  },
  {
    role: "Product Support Engineer",
    company: "Sixth Force Solution PVT LTD",
    location: "Chennai, Tamil Nadu",
    period: "May 2023 – Nov 2023",
    description:
      "Provided technical product troubleshooting and system workflows across enterprise client deployments.",
    bullets: [
      "Provided technical support and troubleshooting across product lines, maintaining high customer satisfaction rates.",
      "Delivered customer training sessions that improved product adoption; reduced average response time by 20% through process documentation and workflow improvements.",
      "Collaborated with cross-functional engineering teams to diagnose and resolve complex technical issues efficiently.",
    ],
    skills: ["Technical Support", "Workflow Optimization", "Documentation", "Client Training", "Troubleshooting"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#050713] text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 border-b border-white/10 pb-8">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              CAREER TRAJECTORY &amp; LEADERSHIP
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Work Experience &amp; Impact
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
              Track record of building, shipping, and leading production engineering initiatives with verified business outcomes.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <FadeIn key={exp.company}>
              <div className="rounded-3xl premium-card p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-cyan-400 block mt-0.5">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <span>{exp.period}</span>
                    <span>&bull;</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-white/[0.03] text-xs font-mono text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Education Card */}
          <FadeIn>
            <div className="rounded-3xl premium-card p-6 sm:p-8 space-y-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      B.E. in Electronics &amp; Communication Engineering
                    </h3>
                    <span className="text-xs text-slate-400">
                      M.P.Nachimuthu M.Jaganathan Engineering College &bull; Erode, TN
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-indigo-300 font-bold hidden sm:inline-block">
                  Graduated 2021
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Strong engineering foundation in digital signal processing, computing architecture, embedded systems, and systems automation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
