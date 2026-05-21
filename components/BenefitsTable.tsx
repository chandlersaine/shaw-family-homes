import { siteConfig } from "@/config/site";

const rows = [
  { label: "Realtor Commissions", us: false, traditional: true },
  { label: "Repairs or Renovations", us: false, traditional: true },
  { label: "Open Houses & Showings", us: false, traditional: true },
  { label: "Closing Costs", us: false, traditional: true },
  { label: "Months of Waiting", us: false, traditional: true },
  { label: "Uncertainty & Fall-Throughs", us: false, traditional: true },
  { label: "Cash in Hand Fast", us: true, traditional: false },
  { label: "Close on Your Timeline", us: true, traditional: false },
  { label: "Sell As-Is (Any Condition)", us: true, traditional: false },
  { label: "No Obligation Offer", us: true, traditional: false },
];

function Check({ show }: { show: boolean }) {
  if (show) {
    return (
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center mx-auto"
        style={{ backgroundColor: siteConfig.colors.accent }}
      >
        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mx-auto">
      <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

export default function BenefitsTable() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: siteConfig.colors.surface }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            Why Sell to Us vs. Listing with an Agent?
          </h2>
          <p className="text-gray-600 text-lg">
            The traditional way is slow, expensive, and stressful. Here's how we compare.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-500 bg-gray-50 rounded-tl-2xl" style={{ width: "50%" }}>
                  &nbsp;
                </th>
                <th
                  className="py-4 px-6 text-center text-sm font-bold text-white rounded-none"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                >
                  {siteConfig.companyName}
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-gray-500 bg-gray-50 rounded-tr-2xl">
                  Traditional Agent
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3.5 px-6 text-sm font-medium text-gray-700">
                    {row.label}
                  </td>
                  <td className="py-3.5 px-6">
                    <Check show={row.us} />
                  </td>
                  <td className="py-3.5 px-6">
                    <Check show={row.traditional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <a
            href="#get-offer"
            className="btn-primary inline-block px-8 py-4 rounded-lg text-white font-bold text-lg"
          >
            Get My No-Obligation Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
}
