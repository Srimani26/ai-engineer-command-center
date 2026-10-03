"use client";

import React, { useState } from "react";
import { Download, Phone, Mail, X, Sparkles, CheckCircle2 } from "lucide-react";

export default function RecruiterDock() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating Recruiter Dock */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setModalOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-[#0a0a24]/90 hover:bg-[#0f0f35] border border-cyan-400/40 hover:border-cyan-300 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-white tracking-wide flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recruiter Quick-Pass</span>
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white">
            Verified
          </span>
        </button>
      </div>

      {/* Recruiter Quick-Pass Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#090924] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                EXECUTIVE CANDIDATE BRIEF
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              Why Hire Srimanikandan K
            </h3>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
              AI Automation Engineer &bull; Standard Roofs, Erode
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 my-6 text-center">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xl font-heading font-black text-rose-400">₹4,952</div>
                <div className="text-[10px] text-slate-400">Ad Waste Flagged (97%)</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xl font-heading font-black text-cyan-400">&lt; 1 Min</div>
                <div className="text-[10px] text-slate-400">Quote Generation</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xl font-heading font-black text-emerald-400">₹0 / mo</div>
                <div className="text-[10px] text-slate-400">AI Operating Cost</div>
              </div>
            </div>

            {/* Core Superpowers */}
            <div className="space-y-2.5 text-xs text-slate-300 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>First Technical Hire:</strong> Led a 2-member in-house technical team at Standard Roofs; architected end-to-end Zoho CRM quotation automation reducing quote times from multi-step manual processes to under 1 minute.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Production AI Intelligence:</strong> Built and deployed live Google Ads AI Auditor pulling 285+ keyword queries daily, flagging 97% waste rate with zero monthly infrastructure cost.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Front-End & E-Commerce:</strong> Leading front-end development of live Shopify storefront; built and deployed live MonsterFoods food ordering web app with Vue.js.
                </span>
              </div>
            </div>

            {/* Fast Actions */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <a
                href="/Srimanikandan_Resume_Professional.pdf"
                download="Srimanikandan_Resume_Professional.pdf"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume (PDF)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/916382121634?text=Hi%20Srimanikandan,%20let's%20connect%20about%20an%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp (+91 6382121634)</span>
                </a>

                <a
                  href="mailto:srimanikandanece2000@gmail.com"
                  className="py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
