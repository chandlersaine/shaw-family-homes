import { siteConfig } from "@/config/site";

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function BenefitsTable() {
  const c = siteConfig.comparison;

  const commissions = Math.round(c.listingPrice * (c.commissionRate / 100));
  const closingCosts = Math.round(c.listingPrice * (c.closingCostRate / 100));
  const totalDeductions = commissions + closingCosts + c.estimatedRepairs + c.miscCarryingCosts;
  const traditionalWalkaway = c.listingPrice - totalDeductions;
  const cashWalkaway = c.cashOfferPrice;
  const youKeepMore = cashWalkaway - traditionalWalkaway;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            Cash Offer vs. Traditional Listing
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A higher listing price doesn&apos;t always mean more money in your pocket. See how the
            math actually works when you account for fees, repairs, and time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* ── Our Cash Offer ── */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg border-2"
            style={{ borderColor: siteConfig.colors.accent }}
          >
            {/* Badge */}
            <div
              className="px-6 py-2.5 text-white text-xs font-bold uppercase tracking-widest text-center"
              style={{ backgroundColor: siteConfig.colors.accent }}
            >
              ✦ The Smarter Choice
            </div>

            <div className="bg-white p-6">
              {/* Title + price */}
              <p className="text-sm font-semibold text-gray-500 mb-1">Our Cash Offer</p>
              <p
                className="font-playfair text-4xl font-bold mb-5"
                style={{ color: siteConfig.colors.primary }}
              >
                {fmt(c.cashOfferPrice)}
              </p>

              {/* Line items */}
              <div className="space-y-3 mb-5">
                {[
                  { label: "Commissions", value: 0 },
                  { label: "Closing Costs", value: 0 },
                  { label: "Repairs Needed", value: 0 },
                  { label: "Misc Fees", value: 0 },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-gray-800 text-sm">{fmt(row.value)}</span>
                  </div>
                ))}
              </div>

              {/* Walk away */}
              <div
                className="flex items-center justify-between rounded-xl px-4 py-3 mb-5"
                style={{ backgroundColor: siteConfig.colors.accent + "15" }}
              >
                <span className="font-bold text-gray-800">Walk Away With</span>
                <span
                  className="font-bold text-xl"
                  style={{ color: siteConfig.colors.accent }}
                >
                  {fmt(cashWalkaway)}
                </span>
              </div>

              {/* Meta */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time Period</span>
                  <span className="font-semibold text-gray-800">{c.cashOfferDays}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Guaranteed</span>
                  <span className="font-semibold" style={{ color: siteConfig.colors.accent }}>Yes ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Traditional Listing ── */}
          <div className="rounded-2xl overflow-hidden shadow-sm border-2 border-gray-200">
            {/* Badge placeholder to match height */}
            <div className="px-6 py-2.5 bg-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest text-center">
              Traditional Listing
            </div>

            <div className="bg-white p-6">
              {/* Title + price */}
              <p className="text-sm font-semibold text-gray-500 mb-1">Listed Price</p>
              <p className="font-playfair text-4xl font-bold text-gray-800 mb-5">
                {fmt(c.listingPrice)}
              </p>

              {/* Line items */}
              <div className="space-y-3 mb-5">
                {[
                  { label: `Commissions (${c.commissionRate}%)`, value: commissions },
                  { label: `Closing Costs (${c.closingCostRate}%)`, value: closingCosts },
                  { label: "Estimated Repairs", value: c.estimatedRepairs },
                  { label: "Misc Carrying Costs", value: c.miscCarryingCosts },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-red-500 text-sm">− {fmt(row.value)}</span>
                  </div>
                ))}
              </div>

              {/* Walk away */}
              <div className="flex items-center justify-between rounded-xl bg-red-50 px-4 py-3 mb-5">
                <span className="font-bold text-gray-800">Walk Away With</span>
                <span className="font-bold text-xl text-red-500">{fmt(traditionalWalkaway)}</span>
              </div>

              {/* Meta */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time Period</span>
                  <span className="font-semibold text-gray-800">{c.traditionalDays}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Guaranteed</span>
                  <span className="font-semibold text-red-400">No ✗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You keep more callout */}
        {youKeepMore > 0 && (
          <div
            className="text-center rounded-2xl py-5 px-6 mb-8"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <p className="text-white/80 text-sm mb-1">With our cash offer, you keep an extra</p>
            <p className="text-white font-bold text-2xl">
              {fmt(youKeepMore)} more — in a fraction of the time
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <a
            href="#get-offer"
            className="btn-primary inline-block px-8 py-4 rounded-lg text-white font-bold text-lg"
          >
            Get My Free Cash Offer
          </a>
          <p className="text-gray-400 text-xs mt-3">No obligation. No pressure. 100% free.</p>
        </div>
      </div>
    </section>
  );
}
