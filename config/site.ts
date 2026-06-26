// ============================================================
// MASTER CLIENT CONFIG — change this file to rebrand the site
// ============================================================

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────
  companyName: "Shaw Family Homes",
  serviceArea: "Across the Country",
  serviceState: "Nationwide",
  phone: "(888) 751-4557",
  email: "roberts@webuyhouses.com",
  logo: "/images/logo.png",

  // ── Brand Colors ───────────────────────────────────────────
  colors: {
    primary: "#1D2226",       // nav, buttons, headings — charcoal from logo
    primaryDark: "#0F1518",   // button hover states
    accent: "#C8A96E",        // warm gold — complements charcoal + white
    bg: "#FFFFFF",
    surface: "#F8F9FA",
    text: "#1A1A1A",
  },

  // ── Tracking (leave as "" if not yet set up) ───────────────
  metaPixelId: "",
  clarityId: "",

  // ── Zapier Webhooks ────────────────────────────────────────
  zapierWebhookStep1: "",
  zapierWebhookStep2: "",

  // ── Social Proof ───────────────────────────────────────────
  stats: {
    homesBought: 500,       // 15+ years buying — update with Bob's actual number
    yearsInBusiness: 15,
    reviewCount: 0,         // add once Google/Trustpilot reviews are gathered
    rating: 0,
  },

  // ── Testimonials ───────────────────────────────────────────
  // Empty array = section hidden automatically — add real reviews when available
  testimonials: [] as Array<{ name: string; location: string; quote: string; stars: number }>,

  // ── Media Logos ────────────────────────────────────────────
  mediaLogos: [] as string[],

  // ── Cash Offer Comparison ──────────────────────────────────
  comparison: {
    cashOfferPrice: 215000,
    listingPrice: 245000,
    commissionRate: 6,
    closingCostRate: 2,
    estimatedRepairs: 8000,
    estimatedMonthlyMortgage: 1600,
    cashOfferDays: "14 Days",
    traditionalDays: "90+ Days",
  },

  // ── About Page ─────────────────────────────────────────────
  founderName: "Bob Shaw",
  founderTitle: "Founder & Owner",
  founderPhoto: "", // add Bob's photo to /public/images and set path here
  founderBio:
    "Since 2010, Shaw Family Homes has been buying houses directly from homeowners across the country — no agents, no fees, no hassle. I started this company because I saw how stressful and slow the traditional selling process could be. My mission has always been simple: treat every seller like family and make the process easy from day one.",
  companyMission:
    "We believe every homeowner deserves a fast, fair, and honest option when it's time to sell. We operate in the top 25 counties across the U.S. and close on your schedule — whether that's 7 days or 60.",
};
