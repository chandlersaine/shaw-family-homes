import { siteConfig } from "@/config/site";

export default function StatsBar() {
  const { stats } = siteConfig;
  // Only render if at least one stat is non-zero
  const hasStats =
    stats.homesBought > 0 ||
    stats.yearsInBusiness > 0 ||
    stats.reviewCount > 0;

  if (!hasStats) return null;

  const items = [
    stats.homesBought > 0 && {
      value: `${stats.homesBought}+`,
      label: "Homes Purchased",
    },
    stats.yearsInBusiness > 0 && {
      value: `${stats.yearsInBusiness}+`,
      label: "Years in Business",
    },
    stats.reviewCount > 0 && {
      value: `${stats.rating > 0 ? `${stats.rating} ★` : `${stats.reviewCount}`}`,
      label: stats.rating > 0 ? `out of ${stats.reviewCount} Reviews` : "5-Star Reviews",
    },
  ].filter(Boolean) as Array<{ value: string; label: string }>;

  return (
    <section
      className="py-8"
      style={{ backgroundColor: siteConfig.colors.primary }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-white">
          {items.map((item, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold mb-1">{item.value}</div>
              <div className="text-white/70 text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
