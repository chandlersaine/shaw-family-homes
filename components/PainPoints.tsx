import { siteConfig } from "@/config/site";

const situations = [
  {
    icon: "🏦",
    title: "Facing Foreclosure",
    description:
      "Behind on mortgage payments? We can move quickly to help you avoid foreclosure and protect your credit.",
  },
  {
    icon: "⚖️",
    title: "Going Through Divorce",
    description:
      "Need to sell quickly and split the proceeds? We make the process simple and fast with no added stress.",
  },
  {
    icon: "🏚️",
    title: "House Needs Major Repairs",
    description:
      "Foundation issues, roof damage, mold — we buy houses as-is. You don't fix a single thing.",
  },
  {
    icon: "🏠",
    title: "Inherited Property",
    description:
      "Inherited a house you don't want to maintain? We handle the process respectfully and quickly.",
  },
  {
    icon: "✈️",
    title: "Job Relocation",
    description:
      "Need to move fast for a new job? We can close in days so you can focus on your next chapter.",
  },
  {
    icon: "🔑",
    title: "Tired Landlord",
    description:
      "Done dealing with tenants, repairs, and headaches? Sell your rental property without evicting anyone.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            We Buy Houses in Any Situation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whatever brought you here, we can help. We've worked with hundreds of
            homeowners across {siteConfig.serviceArea} in every situation imaginable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              style={{ backgroundColor: siteConfig.colors.surface }}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: siteConfig.colors.primary }}
              >
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            Don't see your situation? That's okay — call us and we'll talk it through.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 font-semibold text-lg"
            style={{ color: siteConfig.colors.primary }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
