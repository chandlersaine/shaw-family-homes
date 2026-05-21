import { siteConfig } from "@/config/site";

export default function Testimonials() {
  if (siteConfig.testimonials.length === 0) return null;

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: siteConfig.colors.surface }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            What Our Sellers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from real homeowners in {siteConfig.serviceArea}.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4"
                    fill={siteConfig.colors.accent}
                    viewBox="0 0 20 20"
                    style={{ color: siteConfig.colors.accent }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
