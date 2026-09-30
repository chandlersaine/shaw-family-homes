import { siteConfig } from "@/config/site";

export default function OwnerVideo() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: siteConfig.colors.accent }}>
          Meet the Owner
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: siteConfig.colors.primary }}>
          A Message from Robert Shaw
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Hear directly from Robert about how Shaw Family Homes helps homeowners sell fast, for cash, with no hassle.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-xl bg-black" style={{ border: `3px solid ${siteConfig.colors.accent}` }}>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://drive.google.com/file/d/1Byzusr3dwlSv_WXutoSteBoGCRf5oYKR/preview"
              title="A Message from Robert Shaw"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
