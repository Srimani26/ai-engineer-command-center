import FadeIn from "./FadeIn";

export default function ZohoProject() {
  return (
    <section className="bg-[#050816] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Project 03
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Zoho CRM Automation Platform
          </h2>

          <p className="mt-6 max-w-4xl text-xl text-gray-400">
            End-to-end CRM automation ecosystem designed to eliminate
            manual business processes, automate lead handling,
            quotation generation, project tracking and operational
            workflows across the organization.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              30+
            </h3>
            <p className="mt-3 text-gray-400">
              CRM Automations
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              100%
            </h3>
            <p className="mt-3 text-gray-400">
              Real Business Usage
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              LIVE
            </h3>
            <p className="mt-3 text-gray-400">
              Production Status
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-green-400">
              ACTIVE
            </h3>
            <p className="mt-3 text-gray-400">
              Daily Operations
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Automation Ecosystem
            </h3>

            <div className="space-y-5">

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Lead Capture
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                CRM Processing
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-cyan-500 bg-cyan-500/10 rounded-2xl p-4 text-center">
                Workflow Automation
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Quotation Generation
              </div>

              <div className="text-center text-cyan-400">↓</div>

              <div className="border border-green-500 bg-green-500/10 rounded-2xl p-4 text-center">
                Business Operations
              </div>

            </div>

          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Implemented Systems
            </h3>

            <div className="space-y-4">

              <div>✓ Automated Lead Management</div>

              <div>✓ Dynamic Roofing Calculators</div>

              <div>✓ Quotation Automation</div>

              <div>✓ Sales Workflow Automation</div>

              <div>✓ CRM Data Processing</div>

              <div>✓ Custom Deluge Functions</div>

              <div>✓ Business Reporting Systems</div>

              <div>✓ End-to-End Process Automation</div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}