import { siteConfig } from "@/config/site";
import LeadForm from "./LeadForm";

export default function HeroSection() {
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="text-white">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: siteConfig.colors.accent, color: "#fff" }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Cash Offers in {siteConfig.serviceArea}
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            Sell Your House Fast in{" "}
            <span style={{ color: siteConfig.colors.accent }}>
              {siteConfig.serviceArea}
            </span>{" "}
            — For Cash
          </h1>

          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            No repairs. No commissions. No open houses. Get a fair cash offer
            within 24 hours and close on your schedule — sometimes in as little
            as 7 days.
          </p>

          <ul className="space-y-2.5 text-white/90 text-sm">
            {[
              "No repairs or cleaning required",
              "Zero realtor commissions or fees",
              "Cash offer in 24 hours",
              "Close in as little as 7 days",
              "No obligation — completely free",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: siteConfig.colors.accent }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div id="get-offer">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
