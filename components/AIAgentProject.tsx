import FadeIn from "./FadeIn";

export default function AIAgentProject() {
  return (
    <section className="bg-[#050816] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Project 04
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            AI Agent Platform
          </h2>

          <p className="mt-6 max-w-4xl text-xl text-gray-400">
            Modular AI agent ecosystem designed to automate business
            workflows, retrieve organizational knowledge, execute
            multi-step tasks and assist decision making through
            intelligent orchestration.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              Multi
            </h3>
            <p className="mt-3 text-gray-400">
              Agent Architecture
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              MCP
            </h3>
            <p className="mt-3 text-gray-400">
              Tool Integration
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              AI
            </h3>
            <p className="mt-3 text-gray-400">
              Decision Support
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-green-400">
              LIVE
            </h3>
            <p className="mt-3 text-gray-400">
              Development Status
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Agent Workflow
            </h3>

            <div className="space-y-5">

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                User Request
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Agent Router
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-cyan-500 bg-cyan-500/10 rounded-2xl p-4 text-center">
                Specialized Agents
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Memory + Tools
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-green-500 bg-green-500/10 rounded-2xl p-4 text-center">
                Automated Outcome
              </div>

            </div>

          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Core Capabilities
            </h3>

            <div className="space-y-4">

              <div>✓ Memory-Augmented AI Agents</div>

              <div>✓ MCP Tool Integration</div>

              <div>✓ Multi-Step Task Execution</div>

              <div>✓ Knowledge Retrieval</div>

              <div>✓ Workflow Automation</div>

              <div>✓ Business Process Support</div>

              <div>✓ Context Management</div>

              <div>✓ Multi-Agent Coordination</div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}