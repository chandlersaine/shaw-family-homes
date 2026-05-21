import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  const whyUs = [
    {
      title: "Fair, Honest Offers",
      description:
        "We run the numbers transparently and explain how we arrived at your offer. No lowball games.",
    },
    {
      title: "We Close Fast",
      description:
        "Once you accept, we can close in as little as 7 days — or on whatever timeline works for you.",
    },
    {
      title: "Zero Fees or Commissions",
      description:
        "The offer we give you is the check you get. No deductions, no surprises at closing.",
    },
  ];

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="py-16 md:py-20 text-white"
          style={{
            background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              About {siteConfig.companyName}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We're a local, family-owned real estate investment company based in{" "}
              {siteConfig.serviceArea}, {siteConfig.serviceState}. We buy houses
              directly from homeowners — no agents, no banks, no games.
            </p>
          </div>
        </section>

        {/* Founder section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              {siteConfig.founderPhoto && (
                <div className="flex justify-center">
                  <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={siteConfig.founderPhoto}
                      alt={siteConfig.founderName}
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Bio */}
              <div className={siteConfig.founderPhoto ? "" : "col-span-2 max-w-2xl mx-auto"}>
                <p
                  className="text-sm font-semibold tracking-widest uppercase mb-2"
                  style={{ color: siteConfig.colors.accent }}
                >
                  Our Story
                </p>
                <h2
                  className="font-playfair text-3xl font-bold mb-2"
                  style={{ color: siteConfig.colors.primary }}
                >
                  {siteConfig.founderName}
                </h2>
                <p
                  className="text-gray-500 text-sm mb-4"
                  style={{ color: siteConfig.colors.primary + "99" }}
                >
                  {siteConfig.founderTitle}
                </p>
                <p className="text-gray-700 leading-relaxed">{siteConfig.founderBio}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          className="py-14 md:py-16"
          style={{ backgroundColor: siteConfig.colors.surface }}
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2
              className="font-playfair text-3xl font-bold mb-4"
              style={{ color: siteConfig.colors.primary }}
            >
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;{siteConfig.companyMission}&rdquo;
            </p>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className="font-playfair text-3xl font-bold"
                style={{ color: siteConfig.colors.primary }}
              >
                Why Homeowners Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4"
                    style={{ backgroundColor: siteConfig.colors.primary }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-14"
          style={{
            background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Ready to Get Your Cash Offer?
            </h2>
            <p className="text-white/80 mb-6">
              No pressure, no fees, no obligation. Just a fair offer from real people.
            </p>
            <Link
              href="/#get-offer"
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg text-white transition-colors"
              style={{ backgroundColor: siteConfig.colors.accent }}
            >
              Get My Free Cash Offer
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
