import { siteConfig } from "@/config/site";

export default function MediaLogos() {
  if (siteConfig.mediaLogos.length === 0) return null;

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">
          As Seen On
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {siteConfig.mediaLogos.map((logo, i) => (
            <span
              key={i}
              className="text-2xl font-black text-gray-300 tracking-tight"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
