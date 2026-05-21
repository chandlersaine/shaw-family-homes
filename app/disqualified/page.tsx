import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function DisqualifiedPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h1
              className="font-playfair text-3xl md:text-4xl font-bold mb-4"
              style={{ color: siteConfig.colors.primary }}
            >
              We May Not Be the Right Fit Right Now
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Based on your answers, we don&apos;t think we can provide the best value for your
              situation at this time — and we&apos;d rather be honest with you than waste your time.
            </p>

            <div
              className="rounded-2xl p-6 mb-8"
              style={{ backgroundColor: siteConfig.colors.surface }}
            >
              <p className="text-gray-700 leading-relaxed">
                If your situation changes — or you&apos;d just like to talk it through — we&apos;re always
                here. Sometimes a quick conversation opens up options you didn&apos;t know existed.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-gray-800">Give us a call anytime:</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-3xl font-bold block"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.phone}
              </a>
              <p className="text-gray-500 text-sm">No pressure. Just a conversation.</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg font-semibold border-2 text-gray-700 hover:bg-gray-50 transition-colors"
                style={{ borderColor: siteConfig.colors.primary + "40" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
