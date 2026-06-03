import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Professional Journey
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-8">

          <FadeIn>
            <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

              <div className="flex flex-col lg:flex-row lg:justify-between">

                <div>
                  <h3 className="text-2xl font-bold">
                    AI Engineer
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    Standard Roofs
                  </p>
                </div>

                <div className="text-gray-400 mt-4 lg:mt-0">
                  Current
                </div>

              </div>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>
                  • Built AI-powered CRM automation systems using Zoho CRM
                </li>

                <li>
                  • Developed Google Ads auditing and optimization workflows
                </li>

                <li>
                  • Created AI agents for business process automation
                </li>

                <li>
                  • Automated quotation, lead management and reporting systems
                </li>

                <li>
                  • Designed production-ready AI solutions for internal operations
                </li>

              </ul>

            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}