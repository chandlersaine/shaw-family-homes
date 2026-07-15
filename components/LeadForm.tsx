"use client";
import { useState, useRef } from "react";
import { siteConfig } from "@/config/site";

function generateLeadId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function firePixelEvent(eventName: string) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName);
  }
}

type Step1Data = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

type Step2Data = {
  sellingToInvestor: string;
  yearsOwned: string;
  timeframe: string;
  condition: string;
};

function isQualified(s2: Step2Data): boolean {
  if (s2.sellingToInvestor === "No") return false;
  if (s2.yearsOwned === "Less than 3 years") return false;
  return true;
}

export default function LeadForm() {
  const leadIdRef = useRef<string>("");
  const step1Ref = useRef<Step1Data | null>(null);

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [s1, setS1] = useState<Step1Data>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [s2, setS2] = useState<Step2Data>({
    sellingToInvestor: "",
    yearsOwned: "",
    timeframe: "",
    condition: "",
  });

  async function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const leadId = generateLeadId();
    leadIdRef.current = leadId;
    step1Ref.current = s1;

    const payload = {
      leadId,
      step: 1,
      name: s1.name,
      phone: s1.phone,
      email: s1.email,
      address: s1.address,
      submittedAt: new Date().toISOString(),
      source: "website",
    };

    // Fire Step 1 webhook (non-blocking — don't wait for it)
    if (siteConfig.zapierWebhookStep1) {
      fetch(siteConfig.zapierWebhookStep1, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }

    firePixelEvent("Lead");
    setLoading(false);
    setStep(2);

    // Scroll to form top
    document.getElementById("get-offer")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const qualified = isQualified(s2);

    firePixelEvent("CompleteRegistration");
    firePixelEvent(qualified ? "QualifiedLead" : "DisqualifiedLead");

    const payload = {
      name: step1Ref.current?.name ?? "",
      phone: step1Ref.current?.phone ?? "",
      email: step1Ref.current?.email ?? "",
      address: step1Ref.current?.address ?? "",
      sellingToInvestor: s2.sellingToInvestor,
      yearsOwned: s2.yearsOwned,
      timeframe: s2.timeframe,
      condition: s2.condition,
      qualified: qualified ? "1" : "0",
      source: "website",
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch("/.netlify/functions/shaw-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // proceed to redirect even if webhook fails
    }

    window.location.href = qualified ? "/qualified" : "/disqualified";
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Progress header */}
      <div
        className="px-6 py-4 text-white"
        style={{ backgroundColor: siteConfig.colors.primaryDark }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-sm">
            {step === 1 ? "Step 1 of 2 — Your Property" : "Step 2 of 2 — Quick Questions"}
          </p>
          <p className="text-white/60 text-xs">{step === 1 ? "50%" : "100%"} complete</p>
        </div>
        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: step === 1 ? "50%" : "100%",
              backgroundColor: siteConfig.colors.accent,
            }}
          />
        </div>
      </div>

      <div className="px-6 py-6">
        {step === 1 ? (
          <form onSubmit={handleStep1} className="space-y-4">
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">
                Get Your Free Cash Offer
              </h3>
              <p className="text-gray-500 text-sm">
                Takes less than 60 seconds. No obligation.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={s1.name}
                onChange={(e) => setS1({ ...s1, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow"
                style={{ "--tw-ring-color": siteConfig.colors.primary } as React.CSSProperties}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="(888) 555-0000"
                value={s1.phone}
                onChange={(e) => setS1({ ...s1, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={s1.email}
                onChange={(e) => setS1({ ...s1, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Address
              </label>
              <input
                type="text"
                required
                placeholder="123 Main St, City, State 00000"
                value={s1.address}
                onChange={(e) => setS1({ ...s1, address: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg text-white font-bold text-base transition-colors disabled:opacity-60"
              style={{ backgroundColor: siteConfig.colors.primary }}
            >
              {loading ? "Please wait..." : "Next Step →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              🔒 Your info is private and never shared.
            </p>
          </form>
        ) : (
          <form onSubmit={handleStep2} className="space-y-5">
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">
                Almost Done — A Few Quick Questions
              </h3>
              <p className="text-gray-500 text-sm">
                This helps us prepare your offer.
              </p>
            </div>

            {/* Q1 */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                1. Are you looking to sell your property to an investor?
              </legend>
              <div className="grid grid-cols-2 gap-3">
                {["Yes", "No"].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer text-sm font-medium transition-all ${
                      s2.sellingToInvestor === opt
                        ? "border-current text-white"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                    style={
                      s2.sellingToInvestor === opt
                        ? { backgroundColor: siteConfig.colors.primary, borderColor: siteConfig.colors.primary }
                        : {}
                    }
                  >
                    <input
                      type="radio"
                      name="sellingToInvestor"
                      value={opt}
                      required
                      className="sr-only"
                      onChange={() => setS2({ ...s2, sellingToInvestor: opt })}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q2 */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                2. How long have you owned the property?
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {["Less than 3 years", "3–5 years", "5–10 years", "10+ years"].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-center p-2.5 rounded-lg border-2 cursor-pointer text-xs font-medium text-center transition-all ${
                      s2.yearsOwned === opt
                        ? "border-current text-white"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                    style={
                      s2.yearsOwned === opt
                        ? { backgroundColor: siteConfig.colors.primary, borderColor: siteConfig.colors.primary }
                        : {}
                    }
                  >
                    <input
                      type="radio"
                      name="yearsOwned"
                      value={opt}
                      required
                      className="sr-only"
                      onChange={() => setS2({ ...s2, yearsOwned: opt })}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q3 */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                3. How soon are you looking to sell?
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {["ASAP", "1–3 months", "3–6 months", "6+ months"].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-center p-2.5 rounded-lg border-2 cursor-pointer text-xs font-medium text-center transition-all ${
                      s2.timeframe === opt
                        ? "border-current text-white"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                    style={
                      s2.timeframe === opt
                        ? { backgroundColor: siteConfig.colors.primary, borderColor: siteConfig.colors.primary }
                        : {}
                    }
                  >
                    <input
                      type="radio"
                      name="timeframe"
                      value={opt}
                      required
                      className="sr-only"
                      onChange={() => setS2({ ...s2, timeframe: opt })}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q4 */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                4. What is the condition of the property?
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {["Remodeled", "Good", "Needs Work", "Needs a Lot of Work"].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-center p-2.5 rounded-lg border-2 cursor-pointer text-xs font-medium text-center transition-all ${
                      s2.condition === opt
                        ? "border-current text-white"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                    style={
                      s2.condition === opt
                        ? { backgroundColor: siteConfig.colors.primary, borderColor: siteConfig.colors.primary }
                        : {}
                    }
                  >
                    <input
                      type="radio"
                      name="condition"
                      value={opt}
                      required
                      className="sr-only"
                      onChange={() => setS2({ ...s2, condition: opt })}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg text-white font-bold text-base transition-colors disabled:opacity-60"
              style={{ backgroundColor: siteConfig.colors.primary }}
            >
              {loading ? "Submitting..." : "Get My Cash Offer →"}
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Go back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
