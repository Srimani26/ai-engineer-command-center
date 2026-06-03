import FadeIn from "./FadeIn";

export default function GoogleAdsProject() {
  return (
    <section className="bg-[#050816] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Project 02
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Google Ads Intelligence Engine
          </h2>

          <p className="mt-6 max-w-4xl text-xl text-gray-400">
            Production AI system that automatically audits Google Ads
            campaigns, identifies wasteful spending, analyzes search
            terms, generates optimization recommendations and delivers
            daily intelligence reports without manual intervention.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              ₹4952
            </h3>
            <p className="mt-3 text-gray-400">
              Waste Identified
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              285+
            </h3>
            <p className="mt-3 text-gray-400">
              Search Queries Analysed
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-cyan-400">
              371+
            </h3>
            <p className="mt-3 text-gray-400">
              Rows Processed Daily
            </p>
          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-green-400">
              ₹0
            </h3>
            <p className="mt-3 text-gray-400">
              Operating Cost
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              System Workflow
            </h3>

            <div className="space-y-5">

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Google Ads
              </div>

              <div className="text-center text-cyan-400">
                ↓
              </div>

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Google Ads Scripts
              </div>

              <div className="text-center text-cyan-400">
                ↓
              </div>

              <div className="border border-gray-700 rounded-2xl p-4 text-center">
                Google Sheets
              </div>

              <div className="text-center text-cyan-400">
                ↓
              </div>

              <div className="border border-cyan-500 bg-cyan-500/10 rounded-2xl p-4 text-center">
                Gemini AI Analysis Engine
              </div>

              <div className="text-center text-cyan-400">
                ↓
              </div>

              <div className="border border-green-500 bg-green-500/10 rounded-2xl p-4 text-center">
                Automated Email Report
              </div>

            </div>

          </div>

          <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Key Capabilities
            </h3>

            <div className="space-y-4">

              <div>✓ Automated Search Term Analysis</div>
              <div>✓ Waste Spend Detection</div>
              <div>✓ Quality Score Monitoring</div>
              <div>✓ AI Generated Recommendations</div>
              <div>✓ Daily Scheduled Reports</div>
              <div>✓ Dual Gemini Architecture</div>
              <div>✓ Trend Intelligence</div>
              <div>✓ Zero Manual Intervention</div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}