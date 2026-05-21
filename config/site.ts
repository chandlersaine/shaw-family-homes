// ============================================================
// MASTER CLIENT CONFIG — change this file to rebrand the site
// ============================================================

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────
  companyName: "Level Up Home Buyers",
  serviceArea: "Atlanta",
  serviceState: "Georgia",
  phone: "(404) 800-0000",
  email: "offers@leveluphomebuyers.com",
  logo: "", // path to logo in /public/images — leave blank to show text logo

  // ── Brand Colors ───────────────────────────────────────────
  // Swap these hex values to match client branding
  colors: {
    primary: "#1B3A6B",       // nav, buttons, headings
    primaryDark: "#122852",   // button hover states
    accent: "#22C55E",        // highlight badges, checkmarks
    bg: "#FFFFFF",            // page background
    surface: "#F8F9FA",       // card / section backgrounds
    text: "#1A1A1A",          // body text
  },

  // ── Tracking (leave as "" if not yet set up) ───────────────
  metaPixelId: "",
  clarityId: "",

  // ── Zapier Webhooks ────────────────────────────────────────
  // Step 1 fires immediately when name/phone/email/address submitted
  // Step 2 fires when qualification questions answered
  zapierWebhookStep1: "",
  zapierWebhookStep2: "",

  // ── Social Proof ───────────────────────────────────────────
  // Set all to 0 for brand-new companies — stats bar hides automatically
  stats: {
    homesBought: 0,
    yearsInBusiness: 0,
    reviewCount: 0,
    rating: 0,
  },

  // ── Testimonials ───────────────────────────────────────────
  // Empty array = section hidden automatically
  testimonials: [
    // Uncomment and fill in to show testimonials:
    // {
    //   name: "Sarah M.",
    //   location: "Atlanta, GA",
    //   quote: "The process was so simple. I got a fair cash offer within 24 hours and closed in two weeks. No stress, no repairs, no realtor fees.",
    //   stars: 5,
    // },
    // {
    //   name: "Marcus T.",
    //   location: "Marietta, GA",
    //   quote: "I inherited my mom's house and had no idea what to do. These guys walked me through everything and made it so easy.",
    //   stars: 5,
    // },
  ] as Array<{ name: string; location: string; quote: string; stars: number }>,

  // ── Media Logos ────────────────────────────────────────────
  // Empty array = "As Seen On" section hidden
  mediaLogos: [] as string[], // e.g. ["ABC", "FOX", "CBS", "NBC"]

  // ── About Page ─────────────────────────────────────────────
  founderName: "John Smith",
  founderTitle: "Founder & Owner",
  founderPhoto: "", // path in /public/images — leave blank to hide photo
  founderBio:
    "After watching friends and family struggle with the traditional home-selling process — the repairs, the open houses, the months of waiting — I decided there had to be a better way. I founded Level Up Home Buyers to give homeowners in Atlanta a simple, stress-free alternative. We pay fair cash prices and close on your schedule.",
  companyMission:
    "We believe every homeowner deserves a fast, fair, and honest option when it's time to sell. No games, no pressure, no surprises.",
};
