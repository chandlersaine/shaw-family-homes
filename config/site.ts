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
  metaPixelId: "1317223190528019",
  clarityId: "",

  // ── Webhooks ───────────────────────────────────────────────
  zapierWebhookStep1: "",
  zapierWebhookStep2: "/api/shaw-lead",
  ghlWebhook: "https://services.leadconnectorhq.com/hooks/nGTFMqFavoP286N1jfXR/webhook-trigger/fb0d5bd2-9d0f-41b8-a24e-c280d1bdf518",

  // ── Social Proof ───────────────────────────────────────────
  stats: {
    homesBought: 500,
    yearsInBusiness: 15,
    reviewCount: 18,
    rating: 5.0,
  },

  // ── Testimonials ───────────────────────────────────────────
  testimonials: [
    {
      name: "Rod Bateman",
      location: "Boise, ID",
      quote: "Shaw Family Homes came out the same day I called them, made a good offer, and closed within two weeks. It could have taken months to go through a real estate agent.",
      stars: 5,
    },
    {
      name: "Debbie Florence",
      location: "Boise, ID",
      quote: "They understood my concerns, listened to my needs, and helped me get way more than I thought I could for my house. I can't thank Bob enough for what they've done for me.",
      stars: 5,
    },
    {
      name: "Bryce Lattin",
      location: "Boise, ID",
      quote: "They made everything extremely easy and I didn't feel pressured to accept their offer. I was able to get close to what I was hoping for the house.",
      stars: 5,
    },
    {
      name: "Stephanie Kaesemeyer",
      location: "Boise, ID",
      quote: "This company worked fast but diligently with us to sell our home. They were super friendly and trustworthy and made the process smooth and easy.",
      stars: 5,
    },
    {
      name: "Michael Thiel",
      location: "Boise, ID",
      quote: "The team at Shaw Family Homes made the sale of the house seamless. If you have property to sell and need to get it done quick, they are the ones to call.",
      stars: 5,
    },
    {
      name: "Nick Staub",
      location: "Boise, ID",
      quote: "He was collaborative and we ended up with a sweet early closing thanks to his efficiency. He made the entire sale process so easy and ensured a fantastic experience for all parties involved.",
      stars: 5,
    },
  ] as Array<{ name: string; location: string; quote: string; stars: number }>,

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
