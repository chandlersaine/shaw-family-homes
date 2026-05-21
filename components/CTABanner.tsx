import { siteConfig } from "@/config/site";

export default function CTABanner() {
  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Ready to Sell Your {siteConfig.serviceArea} House for Cash?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Get your free, no-obligation cash offer in 24 hours. No repairs, no
          fees, no stress. Just a fair offer and a fast close.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#get-offer"
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center"
            style={{
              backgroundColor: siteConfig.colors.accent,
              color: "#fff",
            }}
          >
            Get My Free Cash Offer
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/40 hover:border-white transition-colors text-center"
          >
            Call Us: {siteConfig.phone}
          </a>
        </div>

        <p className="text-white/50 text-xs mt-6">
          No obligation. No pressure. 100% free.
        </p>
      </div>
    </section>
  );
}
