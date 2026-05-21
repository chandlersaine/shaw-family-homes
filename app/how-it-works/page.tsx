import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    description:
      "Fill out our short form or give us a call. We just need some basic info — address, your situation, and how to reach you. Takes less than 60 seconds.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Make You a Cash Offer",
    description:
      "We review your property and call you within 24 hours with a fair, written cash offer. No lowballing. No pressure. Our offer is guaranteed — it won't be reduced or renegotiated later.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You Pick the Closing Date",
    description:
      "Accept the offer and choose any closing date that works for you — as fast as 7 days or as far out as you need. We handle all the paperwork. You show up and walk away with cash.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const timeline = [
  {
    day: "Day 1",
    title: "Initial Conversation",
    description: "We talk through your situation, learn about the property, and answer any questions. No obligation.",
  },
  {
    day: "Day 1–2",
    title: "Property Assessment",
    description: "We research the property — condition, location, market — and put together a fair number.",
  },
  {
    day: "Day 2–3",
    title: "Written Cash Offer",
    description: "You receive a written offer. This offer is guaranteed — it cannot be lowered, renegotiated, or withdrawn.",
  },
  {
    day: "Day 3–5",
    title: "Title & Paperwork",
    description: "We open title with a trusted local company and handle all the paperwork on our end. You don't lift a finger.",
  },
  {
    day: "Day 7–14",
    title: "Closing Day",
    description: "You sign, we pay. Cash in hand the same day. You can stay in the home up to 30 days after closing if needed.",
  },
];

const ourProcess = [
  "No repairs or cleaning required",
  "Written offer within 24 hours",
  "Guaranteed offer — no renegotiation",
  "Close in as little as 7 days",
  "Zero commissions or fees",
  "We handle all title and paperwork",
  "You choose the closing date",
  "Cash at closing — no financing risk",
];

const traditionalProcess = [
  "Repairs and staging required",
  "Weeks or months to get an offer",
  "Buyer can renegotiate after inspection",
  "Average 90+ days to close",
  "5–6% realtor commission",
  "You coordinate title, escrow, paperwork",
  "Closing date set by buyer's lender",
  "Deal can fall through at any time",
];

const faqs = [
  {
    q: "Do I have to make any repairs before selling?",
    a: "Not a single one. We buy houses in any condition — whether it needs a new roof, has foundation issues, mold, fire damage, or hasn't been touched in 20 years. You don't clean, repair, or even take anything you don't want.",
  },
  {
    q: "How is your offer calculated?",
    a: "We look at the property's location, current condition, comparable sales nearby, and what it will take to get it market-ready. We're transparent about how we arrived at your number and happy to walk you through it.",
  },
  {
    q: "Is there any obligation to accept the offer?",
    a: "Zero. Getting an offer from us is completely free and there's no pressure to accept. If the number doesn't work for you, no hard feelings.",
  },
  {
    q: "What if I'm behind on payments or facing foreclosure?",
    a: "This is actually one of the most common situations we help with. Moving quickly can stop foreclosure and protect your credit. Call us as soon as possible — the sooner we connect, the more options you have.",
  },
  {
    q: "What types of properties do you buy?",
    a: `We buy single-family homes, multi-family properties, condos, townhomes, and land in ${siteConfig.serviceArea} and the surrounding ${siteConfig.serviceState} area. Occupied, vacant, rented — all of it.`,
  },
  {
    q: "What happens at closing?",
    a: "You meet at a title company, sign the paperwork, and receive your funds — either by wire or certified check. The whole closing typically takes under an hour.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-16 md:py-24 text-white"
          style={{
            background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
            style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
          />
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wider"
              style={{ backgroundColor: siteConfig.colors.accent + "25", border: `1px solid ${siteConfig.colors.accent}50`, color: siteConfig.colors.accent }}
            >
              Simple. Fast. Guaranteed.
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Sell Your House in{" "}
              <span style={{ color: siteConfig.colors.accent }}>3 Simple Steps</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              No agents. No repairs. No surprises. We make selling your home to a cash buyer as straightforward as it should be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#get-offer"
                className="px-8 py-4 rounded-lg font-bold text-lg text-white transition-colors"
                style={{ backgroundColor: siteConfig.colors.accent }}
              >
                Get My Cash Offer
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:border-white transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* ── 3 Steps ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2
                className="font-playfair text-3xl md:text-4xl font-bold mb-3"
                style={{ color: siteConfig.colors.primary }}
              >
                Here&apos;s Exactly How It Works
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                From first contact to cash in hand — typically in 7 to 14 days.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5"
                      style={{ backgroundColor: siteConfig.colors.accent + "30" }}
                    />
                  )}
                  <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: siteConfig.colors.primary }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-xs font-black tracking-widest uppercase"
                      style={{ color: siteConfig.colors.accent }}
                    >
                      Step {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: siteConfig.colors.surface }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="font-playfair text-3xl md:text-4xl font-bold mb-3"
                style={{ color: siteConfig.colors.primary }}
              >
                Our Guaranteed Process
              </h2>
              <p className="text-gray-500 text-lg">
                A typical deal from first call to closing in 7–14 days.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[2.25rem] md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                style={{ backgroundColor: siteConfig.colors.accent + "30" }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex items-start gap-6 md:gap-0">
                    {/* Desktop: alternating left/right */}
                    <div className="hidden md:flex w-full items-start gap-8">
                      {i % 2 === 0 ? (
                        <>
                          <div className="w-1/2 text-right pr-8">
                            <span
                              className="text-xs font-black tracking-widest uppercase"
                              style={{ color: siteConfig.colors.accent }}
                            >
                              {item.day}
                            </span>
                            <h3 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.description}</p>
                          </div>
                          <div className="relative flex items-center justify-center z-10">
                            <div
                              className="w-5 h-5 rounded-full border-4 border-white shadow"
                              style={{ backgroundColor: siteConfig.colors.accent }}
                            />
                          </div>
                          <div className="w-1/2 pl-8" />
                        </>
                      ) : (
                        <>
                          <div className="w-1/2 pr-8" />
                          <div className="relative flex items-center justify-center z-10">
                            <div
                              className="w-5 h-5 rounded-full border-4 border-white shadow"
                              style={{ backgroundColor: siteConfig.colors.accent }}
                            />
                          </div>
                          <div className="w-1/2 text-left pl-8">
                            <span
                              className="text-xs font-black tracking-widest uppercase"
                              style={{ color: siteConfig.colors.accent }}
                            >
                              {item.day}
                            </span>
                            <h3 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.description}</p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Mobile: single column */}
                    <div className="md:hidden flex items-start gap-5">
                      <div className="relative flex flex-col items-center shrink-0 pt-1">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 relative"
                          style={{ backgroundColor: siteConfig.colors.accent }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      <div className="pb-6">
                        <span
                          className="text-xs font-black tracking-widest uppercase"
                          style={{ color: siteConfig.colors.accent }}
                        >
                          {item.day}
                        </span>
                        <h3 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Us vs Traditional ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="font-playfair text-3xl md:text-4xl font-bold mb-3"
                style={{ color: siteConfig.colors.primary }}
              >
                Our Process vs. Traditional Listing
              </h2>
              <p className="text-gray-500 text-lg">
                Every step of the traditional process costs you time, money, and certainty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Us */}
              <div
                className="rounded-2xl border-2 overflow-hidden"
                style={{ borderColor: siteConfig.colors.accent }}
              >
                <div
                  className="px-6 py-3 text-white text-sm font-bold text-center"
                  style={{ backgroundColor: siteConfig.colors.accent }}
                >
                  ✦ {siteConfig.companyName}
                </div>
                <div className="bg-white p-6 space-y-3">
                  {ourProcess.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: siteConfig.colors.accent }}
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traditional */}
              <div className="rounded-2xl border-2 border-gray-200 overflow-hidden">
                <div className="px-6 py-3 bg-gray-100 text-gray-500 text-sm font-bold text-center">
                  Traditional Agent Listing
                </div>
                <div className="bg-white p-6 space-y-3">
                  {traditionalProcess.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-20" style={{ backgroundColor: siteConfig.colors.surface }}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="font-playfair text-3xl md:text-4xl font-bold mb-3"
                style={{ color: siteConfig.colors.primary }}
              >
                Common Questions
              </h2>
              <p className="text-gray-500 text-lg">
                Everything you need to know before getting your offer.
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16 md:py-20 text-white text-center"
          style={{
            background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Get your free, no-obligation cash offer today. No repairs, no fees, no stress — just a fair offer and a fast close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#get-offer"
                className="px-8 py-4 rounded-lg font-bold text-lg text-white"
                style={{ backgroundColor: siteConfig.colors.accent }}
              >
                Get My Free Cash Offer
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:border-white transition-colors"
              >
                Call Us: {siteConfig.phone}
              </a>
            </div>
            <p className="text-white/40 text-xs mt-6">No obligation. No pressure. 100% free.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
