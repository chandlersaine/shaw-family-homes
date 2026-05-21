"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {siteConfig.logo ? (
            <Image
              src={siteConfig.logo}
              alt={siteConfig.companyName}
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: siteConfig.colors.primary }}
            >
              {siteConfig.companyName}
            </span>
          )}
        </Link>

        {/* Phone — center/right */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="hidden sm:flex items-center gap-1.5 text-gray-700 font-semibold hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {siteConfig.phone}
          </a>
          <a
            href="#get-offer"
            className="px-4 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors"
            style={{ backgroundColor: siteConfig.colors.primary }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                siteConfig.colors.primaryDark)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = siteConfig.colors.primary)
            }
          >
            Get My Cash Offer
          </a>
        </div>
      </div>
    </nav>
  );
}
