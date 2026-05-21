import { siteConfig } from "@/config/site";
import LeadForm from "./LeadForm";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
      }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          transform: "translate(-40%, 40%)",
        }}
      />

      {/* Trust strip at top */}
      <div
        className="relative border-b py-2.5"
        style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(0,0,0,0.15)" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-white/70 text-xs font-medium">
          {[
            "✓ No Repairs Required",
            "✓ Zero Commissions or Fees",
            "✓ Cash Offer in 24 Hours",
            "✓ Close in as Little as 7 Days",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Copy */}
        <div className="text-white">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wider"
            style={{ backgroundColor: siteConfig.colors.accent + "25", border: `1px solid ${siteConfig.colors.accent}50`, color: siteConfig.colors.accent }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: siteConfig.colors.accent }}
            />
            Local Cash Buyers · {siteConfig.serviceArea}, {siteConfig.serviceState}
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5">
            Sell Your House Fast —{" "}
            <span
              className="relative inline-block"
              style={{ color: siteConfig.colors.accent }}
            >
              Get Cash
            </span>{" "}
            in {siteConfig.serviceArea}
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
            We make fair cash offers on homes in any condition. Skip the repairs,
            skip the agents, skip the waiting. Close on <strong className="text-white">your</strong> timeline.
          </p>

          {/* Proof row */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: "🏠", label: "Any Condition" },
              { icon: "⚡", label: "Offer in 24 Hrs" },
              { icon: "💰", label: "No Fees Ever" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              Prefer to call? <span className="font-bold text-white">{siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div id="get-offer" className="relative">
          {/* Glow behind form */}
          <div
            className="absolute inset-0 rounded-2xl blur-2xl opacity-20 pointer-events-none"
            style={{ backgroundColor: siteConfig.colors.accent, transform: "scale(0.9) translateY(10px)" }}
          />
          <div className="relative">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
