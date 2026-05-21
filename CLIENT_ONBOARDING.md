# New Client Website Onboarding

## What to Send Chandler When You Need a New Site

When a new client signs up for a we-buy-houses website, just send Chandler a message with the following info. He'll pass it to Claude Code and the site will be built and live on Netlify within a couple hours.

---

## The 15-Item Intake List

1. **Company Name**
   - Example: "Atlanta Cash Home Buyers"

2. **Service Area (City)**
   - Example: "Atlanta"

3. **Service State**
   - Example: "Georgia"

4. **Phone Number**
   - Example: "(404) 555-0000"

5. **Email Address**
   - Example: "offers@atlantacashhomebuyers.com"

6. **Logo File**
   - PNG preferred, transparent background
   - If no logo: I'll use a text logo (company name styled)

7. **Primary Brand Color (Hex Code)**
   - Example: "#1B3A6B" (navy blue)
   - Default if none: Navy Blue #1B3A6B

8. **Accent Color (Hex Code)**
   - Example: "#22C55E" (green)
   - Default if none: Green #22C55E

9. **Homes Purchased Count**
   - Example: 47
   - Enter 0 if brand new (stats bar auto-hides)

10. **Years in Business**
    - Example: 3
    - Enter 0 if brand new

11. **Google Review Count + Average Rating**
    - Example: 34 reviews, 4.9 stars
    - Enter 0 if none

12. **Testimonials** (as many as they have — or none)
    - For each: Name, Location (City, State), Quote, Star Rating (1-5)
    - Example: "Sarah M., Atlanta GA — 'The process was so simple…' — 5 stars"

13. **Founder Name + Title**
    - Example: "John Smith, Founder & Owner"

14. **Founder Bio** (3-5 sentences)
    - Their story and why they started the company

15. **Founder Photo** (optional)
    - JPG or PNG, ideally professional

16. **Meta Pixel ID** (optional — can add later)
    - Example: "1234567890123456"

17. **Microsoft Clarity ID** (optional — can add later)
    - Example: "abc123xyz"

18. **Zapier Webhook URLs** (one or two)
    - Step 1 webhook (fires when name/phone/email/address submitted)
    - Step 2 webhook (fires when qualification questions submitted)

---

## How the Site Works (For Context)

- **Main page**: Full sales landing page — hero, how it works, benefits comparison, pain points, testimonials (if any), CTA
- **About page**: Founder story, mission, why us
- **Contact page**: Phone, email, contact form
- **Qualified page**: "You qualify — here's what happens next" — walks them through the 3-step process
- **Disqualified page**: Soft landing, keeps door open

**2-Step Form Logic:**
- Step 1: Name, phone, email, address → fires to Zapier immediately
- Step 2: 4 questions → qualified/disqualified decision
- Disqualified if: "No" to investor question, OR owned less than 3 years

**Zero Social Proof Mode:**
- If stats are all 0 and testimonials are empty, those sections auto-hide
- The site leads with process and guarantees instead
- Works perfectly for brand-new companies

---

## What I Need to Do (Claude Code's Checklist)

1. Update `config/site.ts` with all client data
2. Drop logo into `public/images/logo.png`
3. Drop founder photo into `public/images/founder.jpg` (if provided)
4. Create new GitHub repo: `chandlersaine/[company-slug]-website`
5. Push code to GitHub
6. Create new Netlify site, connect to GitHub repo
7. Return live URL to Chandler

**Estimated time: 30-60 minutes from receiving the intake info.**
