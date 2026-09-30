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
  founderPhoto: "/images/founder-bob-shaw.jpg",
  founderBio:
    "Robert Shaw is a real estate investor and entrepreneur dedicated to helping homeowners move forward with confidence. With deep experience in property acquisition, wholesaling, and cash home buying, Robert has built his career around one simple idea: selling a house should feel like an opportunity, not an obstacle. He specializes in creating fast, flexible, and stress-free solutions for people ready to sell — whether they're facing a tough situation, a big life change, or simply want a straightforward sale without the hassle of repairs, showings, or waiting.\n\nWhat sets Robert apart is his genuine passion for people. He listens first, then builds a solution tailored to each seller's needs, so they can close the chapter on one property and step confidently into the next one. For Robert, real estate isn't just about transactions — it's about helping people move forward, one home at a time.",
  companyMission:
    "We believe every homeowner deserves a fast, fair, and honest option when it's time to sell. We operate in the top 25 counties across the U.S. and close on your schedule — whether that's 7 days or 60.",

  // ── Team ───────────────────────────────────────────────────
  team: [
    {
      name: "JJ Clark",
      title: "Client Care Manager",
      photo: "/images/team-jj.jpg",
      bio: "JJ Clark is a real estate professional with over 10 years of experience helping homeowners navigate the sale of their property with confidence. Specializing in working directly with sellers, JJ takes the time to understand each homeowner's unique situation — whether that's a tight timeline, an inherited property, deferred maintenance, or simply the desire for a fast, hassle-free sale — and builds a solution tailored to their needs.\n\nOver the past decade, JJ has guided countless sellers through every stage of the process, combining deep market knowledge with a straightforward, no-pressure approach. Clients consistently point to JJ's honesty, responsiveness, and ability to find creative solutions where a traditional sale might fall short.\n\nWhether the goal is a quick as-is cash sale or exploring the full range of options available, JJ Clark is committed to making the process simple, transparent, and centered on what's best for the seller.",
    },
    {
      name: "Gabe Anderson",
      title: "Client Care Manager",
      photo: "/images/team-gabe.jpg",
      bio: "Gabe Anderson is dedicated to providing dependable customer service and finding practical solutions for every client. He takes the time to understand each seller's individual needs, priorities, and timeline, then works hard to make the process as clear and stress-free as possible. By putting himself in the seller's position, Gabe negotiates with their best interests in mind and remains focused on achieving the strongest possible outcome.",
    },
    {
      name: "Pete Sampedro",
      title: "Customer Service Specialist",
      photo: "/images/team-pete.jpg",
      bio: "Pete Sampedro is a client-focused professional who believes great service begins with listening. He works closely with sellers to understand their goals and provide straightforward guidance throughout the process. Pete approaches every negotiation from the seller's perspective, advocating for their interests while seeking practical solutions and the best possible result.",
    },
  ],
};
