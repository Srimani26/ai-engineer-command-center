import FadeIn from "./FadeIn";

export default function CommandCenter() {
  const systems = [
    {
      name: "AI Memory Platform",
      status: "ONLINE",
    },
    {
      name: "Google Ads Intelligence",
      status: "RUNNING",
    },
    {
      name: "Zoho CRM Automation",
      status: "ACTIVE",
    },
    {
      name: "AI Agent Platform",
      status: "ACTIVE",
    },
  ];

  const activity = [
    "MCP Server Connected",
    "Google Ads Pipeline Executed",
    "Zoho Workflow Triggered",
    "Memory Workspace Synced",
    "AI Agent Session Started",
  ];

  return (
    <section className="bg-[#050816] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Command Center
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Production AI Systems Dashboard
          </h2>

          <p className="mt-6 max-w-4xl text-xl text-gray-400">
            Real-world AI systems, automation workflows and business
            intelligence platforms currently running across multiple
            operational environments.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              4
            </h3>
            <p className="text-gray-400 mt-3">
              Systems Online
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              30+
            </h3>
            <p className="text-gray-400 mt-3">
              Automations Built
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              285+
            </h3>
            <p className="text-gray-400 mt-3">
              Queries Analysed
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-green-400">
              LIVE
            </h3>
            <p className="text-gray-400 mt-3">
              System Status
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Active Systems
            </h3>

            <div className="space-y-5">

              {systems.map((system) => (
                <div
                  key={system.name}
                  className="flex justify-between items-center border-b border-gray-800 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>

                    <span>{system.name}</span>
                  </div>

                  <span className="text-green-400">
                    {system.status}
                  </span>
                </div>
              ))}

            </div>

          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Activity Feed
            </h3>

            <div className="space-y-5">

              {activity.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="text-green-400">
                    ✓
                  </div>

                  <span className="text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}