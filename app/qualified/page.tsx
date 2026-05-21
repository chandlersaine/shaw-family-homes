import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { siteConfig } from "@/config/site";

const nextSteps = [
  {
    step: "1",
    title: "We Call You Within 24 Hours",
    description:
      "One of our team members will reach out to learn more about your property and answer any questions you have. This call is relaxed, no pressure — just a conversation.",
  },
  {
    step: "2",
    title: "You Receive a Fair Cash Offer",
    description:
      "Based on what we learn, we'll present you with a written cash offer. We'll walk you through how we got there so you can feel confident in the number.",
  },
  {
    step: "3",
    title: "You Pick the Closing Date",
    description:
      "Accept the offer, choose when you want to close, and show up to sign. We handle everything — title, paperwork, the whole thing. You walk away with cash.",
  },
];

const faqs = [
  {
    q: "Is there any obligation to accept the offer?",
    a: "Absolutely none. Our offers are 100% free with zero pressure. If you don't love it, you walk away and we part as friends.",
  },
  {
    q: "How fast can I close?",
    a: "As fast as 7 days in most cases. Or we can extend to whatever date works best for your situation.",
  },
  {
    q: "Do I need to fix anything before selling?",
    a: "Not a thing. We buy houses as-is — any condition, any situation. Don't clean, don't repair, don't stress.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "Zero. The offer we make is the check you receive. No realtor commissions, no closing costs, no hidden fees.",
  },
];

export default function QualifiedPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="py-16 md:py-20 text-white text-center"
          style={{
            background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: siteConfig.colors.accent }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              You Qualify — Great News!
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Based on your answers, your property is a great fit. Here&apos;s exactly what
              happens next.
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              className="font-playfair text-3xl font-bold text-center mb-12"
              style={{ color: siteConfig.colors.primary }}
            >
              Here&apos;s What Happens Next
            </h2>

            <div className="space-y-8">
              {nextSteps.map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0"
                    style={{ backgroundColor: siteConfig.colors.primary }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl border-2 text-center" style={{ borderColor: siteConfig.colors.accent + "60", backgroundColor: siteConfig.colors.accent + "08" }}>
              <p className="text-gray-700 text-sm font-medium mb-3">
                Have questions before we call? Reach out now:
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-2xl font-bold"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Proof */}
        <Testimonials />

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="font-playfair text-3xl font-bold text-center mb-10"
              style={{ color: siteConfig.colors.primary }}
            >
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
