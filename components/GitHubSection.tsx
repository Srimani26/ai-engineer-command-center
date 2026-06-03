import FadeIn from "./FadeIn";

const repos = [
  {
    name: "AI Memory Platform",
    tech: "FastAPI • MCP • OAuth"
  },
  {
    name: "AI Engineer Portfolio",
    tech: "Next.js • Tailwind"
  },
  {
    name: "Graphify",
    tech: "AI • Automation"
  },
  {
    name: "Google Ads Intelligence",
    tech: "Gemini • Apps Script"
  }
];

export default function GitHubSection() {
  return (
    <section
      id="github"
      className="bg-[#050816] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            GitHub
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Engineering Portfolio
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {repos.map((repo) => (
            <div
              key={repo.name}
              className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {repo.name}
              </h3>

              <p className="mt-3 text-gray-400">
                {repo.tech}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-10">
          <a
            href="https://github.com/Srimani26"
            target="_blank"
            className="inline-flex px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
          >
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}