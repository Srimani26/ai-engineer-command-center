import FadeIn from "./FadeIn";
import ArchitectureDiagram from "./ArchitectureDiagram";
export default function FlagshipProject() {
  return (
    
    <section className="bg-[#050816] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Flagship Project
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Sri AI Smart Memory System
          </h2>

          <p className="mt-6 max-w-4xl text-xl text-gray-400">
            A cloud-hosted AI memory platform that enables multiple AI systems
            to search, access and share a centralized knowledge workspace.
            Built using MCP architecture, OAuth authentication, GitHub sync
            and cloud deployment to eliminate repetitive context sharing
            across AI tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <FadeIn>
          <div>

            <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6">
                Project Highlights
              </h3>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Cloud Hosted MCP Server</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>OAuth Authentication Layer</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Claude Desktop Integration</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Workspace Search Engine</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>GitHub Auto Sync</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span>Multi-AI Architecture</span>
                </div>

              </div>
            </div>

            <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Technology Stack
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "FastAPI",
                  "Python",
                  "MCP",
                  "OAuth 2.1",
                  "Render",
                  "GitHub",
                  "Claude",
                  "Knowledge Base",
                  "Workspace Search"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>

          </div>
          </FadeIn>

          {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<FadeIn>
  <ArchitectureDiagram />
</FadeIn>
        </div>

      </div>
      
    </section>
  );
}