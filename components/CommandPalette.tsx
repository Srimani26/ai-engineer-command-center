"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Search, Zap, Download, FileText, TrendingUp, Cpu, X, Phone, Mail } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    {
      title: "View AI-Powered Google Ads Auditor v5.0",
      desc: "Flagged ₹4,952 in ad waste (97% waste rate) at 6:00 AM IST",
      icon: <TrendingUp className="w-4 h-4 text-rose-400" />,
      action: () => {
        window.location.hash = "#systems";
        setOpen(false);
      },
    },
    {
      title: "Inspect Zoho CRM Quotation Automation",
      desc: "Reduced quote turnaround from multi-step manual process to < 1 min",
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = "#systems";
        setOpen(false);
      },
    },
    {
      title: "Launch Telemetry Terminal",
      desc: "Interactive live pipeline simulation console",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.location.hash = "#terminal";
        setOpen(false);
      },
    },
    {
      title: "Download Srimanikandan's Resume (PDF)",
      desc: "Official verified PDF resume",
      icon: <Download className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open("/Srimanikandan_Resume_Professional.pdf", "_blank");
        setOpen(false);
      },
    },
    {
      title: "Quick Email Srimanikandan",
      desc: "srimanikandanece2000@gmail.com",
      icon: <Mail className="w-4 h-4 text-teal-400" />,
      action: () => {
        window.location.href = "mailto:srimanikandanece2000@gmail.com";
        setOpen(false);
      },
    },
    {
      title: "Quick WhatsApp / Call",
      desc: "+91 6382121634",
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.href = "tel:+916382121634";
        setOpen(false);
      },
    },
  ];

  const filtered = query.trim()
    ? actions.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.desc.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

  return (
    <>
      {/* Floating launcher badge at bottom left */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2.5 rounded-2xl bg-[#091020]/90 hover:bg-[#0f1b36] border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold shadow-2xl shadow-cyan-950/60 backdrop-blur-xl flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer glow-cyan"
        title="Open AI Command HUD (Ctrl+K)"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <Terminal className="w-4 h-4 text-cyan-400" />
        <span className="hidden sm:inline">AI HUD</span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/60 border border-cyan-500/30 text-[10px] text-cyan-300">
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl rounded-3xl border border-cyan-500/40 bg-[#070c18] p-5 shadow-2xl shadow-cyan-950/80 space-y-4">
            {/* Search Header */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search systems, telemetry, projects, or shortcuts..."
                className="w-full bg-transparent text-white text-sm font-mono placeholder:text-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Actions list */}
            <div className="space-y-1.5 max-h-[340px] overflow-y-auto">
              {filtered.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full p-3 rounded-2xl bg-[#050812] hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/40 text-left transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#091020] border border-white/5 text-slate-300 group-hover:text-cyan-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block group-hover:text-cyan-300">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                  <Zap className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition" />
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-8 text-xs font-mono text-slate-500">
                  No matching systems found. Type "resume" or "ads" or "zoho".
                </div>
              )}
            </div>

            {/* Footer tips */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Navigate with click &bull; ESC to exit</span>
              <span className="text-cyan-400">Sri AI Command Center</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
