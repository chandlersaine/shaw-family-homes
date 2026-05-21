import { siteConfig } from "@/config/site";

const steps = [
  {
    number: "1",
    title: "Submit Your Property",
    description:
      "Fill out our quick form with your property address and contact info. Takes less than 60 seconds.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Get Your Cash Offer",
    description:
      "We'll review your property and call you within 24 hours with a fair, no-obligation cash offer.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Pick Your Close Date",
    description:
      "Accept the offer, choose a closing date that works for you, and walk away with cash in hand.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Selling your house to us is simple. Three steps, zero stress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 z-0"
                  style={{ backgroundColor: siteConfig.colors.accent + "40" }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                >
                  {step.icon}
                </div>
                <div
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: siteConfig.colors.accent }}
                >
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#get-offer"
            className="btn-primary inline-block px-8 py-4 rounded-lg text-white font-bold text-lg"
          >
            Get My Free Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
}
