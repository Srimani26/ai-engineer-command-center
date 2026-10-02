"use client";

import React, { useState } from "react";
import { Terminal, Play, RotateCcw, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from "lucide-react";

interface LogEntry {
  timestamp: string;
  type: "info" | "success" | "warn" | "accent";
  message: string;
}

export default function LiveExecutionLab() {
  const [activeSimulation, setActiveSimulation] = useState<"ads" | "quote" | "whoami">("ads");
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      timestamp: "17:20:01.104",
      type: "info",
      message: "[SYSTEM BOOT] AI Systems Command Terminal Initialized.",
    },
    {
      timestamp: "17:20:01.218",
      type: "accent",
      message: "[READY] Select an autonomous pipeline above to trigger live diagnostic execution.",
    },
  ]);

  const runAdsAuditSimulation = () => {
    setIsRunning(true);
    setLogs([
      { timestamp: "17:20:04.012", type: "info", message: "[TRIGGER] Ingesting Google Ads script telemetry..." },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "17:20:04.421", type: "info", message: "• Extracted 1,482 search term queries across 12 ad groups." },
        { timestamp: "17:20:04.750", type: "warn", message: "• Anomaly Detected: 34 broad match queries triggering zero-intent spend ($420/wk leakage)." },
      ]);
    }, 400);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "17:20:05.310", type: "info", message: "[LLM REASONING] Gemini 1.5 Pro executing multi-tier negative keyword mapping..." },
        { timestamp: "17:20:05.980", type: "success", message: "• Generated 18 verified negative exact keywords." },
        { timestamp: "17:20:06.410", type: "success", message: "[COMPLETE] Projected Monthly Budget Savings: $1,680 (32.4% Optimization)." },
      ]);
      setIsRunning(false);
    }, 1100);
  };

  const runQuoteEngineSimulation = () => {
    setIsRunning(true);
    setLogs([
      { timestamp: "17:20:08.102", type: "info", message: "[TRIGGER] Ingesting Civil Engineering Roof BOM specifications..." },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "17:20:08.380", type: "info", message: "• Parameters: 14,200 sq.ft industrial shed | 12° pitch | 0.50mm Galvalume profile." },
        { timestamp: "17:20:08.710", type: "info", message: "• Layer 2 Calculation: 420 trapezoidal sheets, 1,680 self-drilling fasteners, 84 ridge caps." },
      ]);
    }, 400);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "17:20:09.250", type: "accent", message: "• Layer 3 Pricing Index: Applying live steel raw-material index (₹78.50/kg) + 14% target margin." },
        { timestamp: "17:20:09.890", type: "success", message: "• Layer 4 Zoho Sync: Deal quote generated: ₹18,42,650 (All taxes & transport included)." },
        { timestamp: "17:20:10.120", type: "success", message: "[COMPLETE] Client PDF dispatched to Zoho CRM deal record in 0.82 seconds." },
      ]);
      setIsRunning(false);
    }, 1100);
  };

  const runWhoamiSimulation = () => {
    setIsRunning(true);
    setLogs([
      { timestamp: "17:20:12.001", type: "info", message: "Querying Engineer Profile & Credentials..." },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "17:20:12.300", type: "accent", message: "NAME: Srimanikandan T" },
        { timestamp: "17:20:12.450", type: "accent", message: "ROLE: First Technical Hire & Tech Lead @ Standard Roofs" },
        { timestamp: "17:20:12.600", type: "info", message: "SUPERPOWER: Autonomous AI pipelines, mathematical pricing engines, and zero-cost business OS." },
        { timestamp: "17:20:12.800", type: "success", message: "STATUS: Available for Senior AI / Full-Stack Leadership opportunities." },
        { timestamp: "17:20:12.950", type: "success", message: "CONTACT: srimanikandan.swe@gmail.com | +91 9361626177" },
      ]);
      setIsRunning(false);
    }, 500);
  };

  return (
    <section id="terminal" className="py-20 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive MNC Terminal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
          Live AI Automation <span className="text-gradient-vibrant">Diagnostic Console</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Execute simulated runs of Srimanikandan's production pipelines directly in your browser.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="rounded-3xl bg-[#050518]/95 border border-white/10 shadow-2xl shadow-black overflow-hidden backdrop-blur-2xl">
        {/* Terminal Title Bar */}
        <div className="px-5 py-3 bg-[#0a0a24] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">
              sri@ai-command-center:~ v5.0-prod
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveSimulation("ads");
                runAdsAuditSimulation();
              }}
              disabled={isRunning}
              className="px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3" />
              <span>run audit-ads</span>
            </button>

            <button
              onClick={() => {
                setActiveSimulation("quote");
                runQuoteEngineSimulation();
              }}
              disabled={isRunning}
              className="px-3 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3" />
              <span>run quote-engine</span>
            </button>

            <button
              onClick={() => {
                setActiveSimulation("whoami");
                runWhoamiSimulation();
              }}
              disabled={isRunning}
              className="px-3 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3" />
              <span>whoami</span>
            </button>
          </div>
        </div>

        {/* Console Log Area */}
        <div className="p-6 font-mono text-xs sm:text-sm space-y-2.5 min-h-[260px] max-h-[380px] overflow-y-auto">
          {logs.map((log, lIdx) => (
            <div key={lIdx} className="flex items-start gap-3">
              <span className="text-slate-500 text-[11px] shrink-0">{log.timestamp}</span>
              <span
                className={
                  log.type === "success"
                    ? "text-emerald-400"
                    : log.type === "warn"
                    ? "text-amber-400"
                    : log.type === "accent"
                    ? "text-cyan-300 font-bold"
                    : "text-slate-300"
                }
              >
                {log.message}
              </span>
            </div>
          ))}

          {isRunning && (
            <div className="flex items-center gap-2 text-cyan-400 pt-2 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Streaming pipeline telemetry...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
