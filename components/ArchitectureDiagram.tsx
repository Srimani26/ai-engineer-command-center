"use client";

import { motion } from "framer-motion";

const aiModels = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Grok",
];

export default function ArchitectureDiagram() {
  return (
    <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

      <h3 className="text-2xl font-semibold mb-10">
        System Architecture
      </h3>

      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-4">
          {aiModels.map((model) => (
            <motion.div
              key={model}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-center"
            >
              {model}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-cyan-400 text-4xl"
          >
            ↓
          </motion.div>
        </div>

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px rgba(34,211,238,0.2)",
              "0 0 20px rgba(34,211,238,0.5)",
              "0 0 0px rgba(34,211,238,0.2)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="rounded-2xl border border-cyan-500 p-6 text-center"
        >
          MCP Server
        </motion.div>

        <div className="flex justify-center">
          <div className="text-cyan-400 text-4xl">
            ↓
          </div>
        </div>

        <div className="rounded-2xl border border-gray-700 p-6 text-center">
          Knowledge Workspace
        </div>

        <div className="flex justify-center">
          <div className="text-cyan-400 text-4xl">
            ↓
          </div>
        </div>

        <div className="rounded-2xl border border-gray-700 p-6 text-center">
          GitHub Sync
        </div>

        <div className="flex justify-center">
          <div className="text-cyan-400 text-4xl">
            ↓
          </div>
        </div>

        <div className="rounded-2xl border border-green-500 bg-green-500/10 p-6 text-center">
          Render Cloud
        </div>

      </div>
    </div>
  );
}