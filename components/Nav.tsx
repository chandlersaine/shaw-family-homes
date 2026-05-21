"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              className="text-lg font-bold tracking-tight"
              style={{ color: siteConfig.colors.primary }}
            >
              {siteConfig.companyName}
            </span>
          )}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            How It Works
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>

        {/* Right side — phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="hidden lg:flex items-center gap-1.5 text-gray-700 font-semibold text-sm hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>

          <a
            href="#get-offer"
            className="px-4 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors btn-primary"
          >
            Get My Cash Offer
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3">
          <Link href="/how-it-works" className="text-sm font-medium text-gray-700 py-1" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 py-1" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 py-1" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-sm font-semibold text-gray-700 py-1">
            {siteConfig.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
