import FadeIn from "./FadeIn";

export default function Metrics() {
  const metrics = [
    {
      value: "30+",
      label: "CRM Automations",
    },
    {
      value: "285+",
      label: "Keywords Audited Daily",
    },
    {
      value: "₹4952",
      label: "Waste Identified",
    },
    {
      value: "100%",
      label: "Real Business Projects",
    },
  ];

  return (
    <section className="bg-[#050816] text-white pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <FadeIn key={item.label}>
              <div className="bg-[#0B1220] border border-gray-800 rounded-3xl p-8">
                <h3 className="text-4xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}