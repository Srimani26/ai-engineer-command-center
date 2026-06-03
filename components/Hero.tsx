import CommandCenter from "./CommandCenter";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#050816] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              AI ENGINEER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-none">
              Srimanikandan K
            </h1>

            <h2 className="mt-6 text-2xl md:text-4xl font-medium text-gray-300">
              Building Production AI Systems &
              Business Automation Platforms
            </h2>

            <p className="mt-8 max-w-3xl text-lg text-gray-400">
              AI Engineer focused on CRM automation,
              AI agents, business intelligence systems,
              workflow automation and production-ready AI solutions.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold">
                View Projects
              </button>
<a
  href="/Srimanikandan_Resume_Professional.pdf"
  target="_blank"
  className="px-6 py-3 rounded-xl border border-gray-700"
>
  Download Resume
</a>
              
            </div>

          </div>

          <div className="flex justify-center lg:justify-end">
            <CommandCenter />
          </div>

        </div>

      </div>
    </section>
  );
}