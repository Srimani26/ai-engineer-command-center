"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold uppercase mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Proven Technical Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
          Career <span className="text-gradient-vibrant">Trajectory & Impact</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          From first technical hire to shaping company-wide software and autonomous AI infrastructure.
        </p>
      </div>

      <div className="space-y-8">
        {/* Role 1: Standard Roofs */}
        <div className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                  FLAGSHIP LEADERSHIP ROLE
                </span>
                <span className="text-emerald-400 text-xs font-mono font-semibold">
                  Present
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mt-2">
                Tech Lead &bull; AI Systems & Automation Architect
              </h3>
              <p className="text-sm font-semibold text-cyan-300">
                Standard Roofs &bull; Industrial Engineering & Construction
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-col sm:items-end gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                First Technical Hire &bull; 2024 - Present
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Erode / Coimbatore, TN (Hybrid)
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              Spearheaded the complete digital transformation of Standard Roofs from manual operations to an autonomous, data-driven business engine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>4-Layer Quotation Engine</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conceived and authored the 4-layer pricing and bill-of-materials math engine in Zoho Deluge, reducing quote preparation time from 15 minutes to 30 seconds with 0% margin calculation errors.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>$120K+ Commercial SaaS Savings</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Architected custom internal analytics, workflow engines, and automated CRM pipelines that eliminated the need for expensive third-party SaaS subscriptions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-pink-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-pink-400" />
                  <span>Automated Deal Routing</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Configured end-to-end webhook integrations linking incoming website inquiries, WhatsApp commercial inquiries, and direct phone calls into structured Zoho CRM deals with instant sales agent dispatch.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Engineering Mentorship</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Established coding standards, automated data sanity checks, and trained executive stakeholders on leveraging automated dashboards for daily strategic decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role 2: Full-Stack & AI Systems Consulting */}
        <div className="mnc-card rounded-3xl p-6 sm:p-9 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                COMMERCIAL DELIVERABLES
              </span>
              <h3 className="text-2xl font-heading font-black text-white mt-2">
                Full-Stack & Autonomous AI Systems Consultant
              </h3>
              <p className="text-sm font-semibold text-purple-300">
                Independent / Client Deployments
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-col sm:items-end gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                2023 - Present
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                Remote / Client Engagements
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 pt-6 leading-relaxed">
            Delivered production web applications and automation engines for clients across e-commerce, advertising, and food-tech:
            authored the Google Ads AI Strategic Auditor, developed high-speed custom Shopify storefronts, and built the MonsterFoods operational Vue.js portal with 100% on-time milestone acceptance.
          </p>
        </div>
      </div>
    </section>
  );
}
