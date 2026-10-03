"use client";

import React, { useState } from "react";
import { Terminal, Play, CheckCircle2, AlertTriangle, ShieldCheck, Mail } from "lucide-react";

interface LogEntry {
  timestamp: string;
  type: "info" | "warn" | "success" | "accent";
  message: string;
}

export default function LiveExecutionLab() {
  const [activeSimulation, setActiveSimulation] = useState<string>("ads");
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      timestamp: "06:00:01.104",
      type: "info",
      message: "[SYSTEM BOOT] Google Ads AI Intelligence Pipeline Initialized.",
    },
    {
      timestamp: "06:00:01.218",
      type: "accent",
      message: "[READY] Click a pipeline button above to simulate live execution.",
    },
  ]);

  const runAdsAuditSimulation = () => {
    setIsRunning(true);
    setLogs([
      { timestamp: "06:00:02.010", type: "info", message: "[CRON 6:00 AM IST] Google Ads Script extracting daily search query telemetry..." },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "06:00:02.850", type: "info", message: "• Collected 285+ keyword/search-term rows across active campaigns into Google Sheets." },
        { timestamp: "06:00:03.400", type: "warn", message: "• Identified ₹4,952 in wasted ad spend (97% of ₹5,113 tracked) over 8 days." },
      ]);
    }, 400);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "06:00:04.100", type: "info", message: "[GEMINI AI ENGINE] Dual API key architecture parsing 7-day performance trends..." },
        { timestamp: "06:00:04.750", type: "success", message: "• Retry logic & 503 backoff verified: ₹0 monthly infrastructure cost." },
        { timestamp: "06:00:05.200", type: "success", message: "[COMPLETE] Color-coded STOP/SCALE/FIX HTML email report dispatched via Gmail API by 7:00 AM IST." },
      ]);
      setIsRunning(false);
    }, 1100);
  };

  const runQuoteEngineSimulation = () => {
    setIsRunning(true);
    setLogs([
      { timestamp: "11:15:01.102", type: "info", message: "[TRIGGER] Ingesting client request & roofing specs in Zoho CRM..." },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "11:15:01.450", type: "info", message: "• Layer 1: Serial number control & client data auto-fetch executed." },
        { timestamp: "11:15:01.890", type: "info", message: "• Layer 2: Zoho Deluge BOM calculation engine computed sheets, fasteners, and dimensions." },
      ]);
    }, 400);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "11:15:02.350", type: "accent", message: "• Layer 3: Cloudinary API synced roofing spec images and color previews." },
        { timestamp: "11:15:02.900", type: "success", message: "• Layer 4: Zoho Writer API generated formatted quote PDF & auto-attached to CRM record." },
        { timestamp: "11:15:03.120", type: "success", message: "[COMPLETE] Total turnaround: < 1 minute (Reduced from multi-step manual process, 0 errors)." },
      ]);
      setIsRunning(false);
    }, 1100);
  };

  const runWhoamiSimulation = () => {
    setIsRunning(true);
    setLogs([
      { timestamp: "11:20:00.001", type: "info", message: "Querying Engineer Profile & Verified Credentials..." },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { timestamp: "11:20:00.300", type: "accent", message: "NAME: Srimanikandan K" },
        { timestamp: "11:20:00.450", type: "accent", message: "ROLE: AI Automation Engineer | Standard Roofs, Erode" },
        { timestamp: "11:20:00.600", type: "info", message: "ACHIEVEMENTS: Flagged ₹4,952 in wasted ad spend (97%), reduced CRM quote turnaround to < 1 min." },
        { timestamp: "11:20:00.800", type: "success", message: "EDUCATION: B.E. ECE (Anna University, CGPA: 7.6) | Cert of Merit: Java & Python" },
        { timestamp: "11:20:00.950", type: "success", message: "CONTACT: srimanikandanece2000@gmail.com | +91 6382121634 | Erode, TN" },
      ]);
      setIsRunning(false);
    }, 500);
  };

  return (
    <section id="terminal" className="py-20 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Diagnostic Console</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
          Live Automation <span className="text-gradient-vibrant">Telemetry Terminal</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Execute simulated runs of Srimanikandan's verified production pipelines.
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
              sri@automation-console:~ live
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveSimulation("ads");
                runAdsAuditSimulation();
              }}
              disabled={isRunning}
              className="px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3 h-3" />
              <span>run ads-auditor</span>
            </button>

            <button
              onClick={() => {
                setActiveSimulation("quote");
                runQuoteEngineSimulation();
              }}
              disabled={isRunning}
              className="px-3 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3 h-3" />
              <span>run zoho-quote</span>
            </button>

            <button
              onClick={() => {
                setActiveSimulation("whoami");
                runWhoamiSimulation();
              }}
              disabled={isRunning}
              className="px-3 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer"
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
              <span>Executing pipeline logic...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
