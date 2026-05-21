import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p
              className="text-white font-bold text-lg mb-2"
              style={{ color: "white" }}
            >
              {siteConfig.companyName}
            </p>
            <p className="text-sm leading-relaxed">
              We buy houses in {siteConfig.serviceArea}, {siteConfig.serviceState}{" "}
              fast, fair, and hassle-free.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#get-offer" className="hover:text-white transition-colors">
                  Get My Cash Offer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-3">Contact Us</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm">
                {siteConfig.serviceArea}, {siteConfig.serviceState}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-gray-600 space-y-1">
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights
            reserved.
          </p>
          <p>
            {siteConfig.companyName} is a real estate investment company. We are
            not real estate agents or brokers and do not list homes. All offers
            are subject to inspection and due diligence. Cash offers may be below
            market value.
          </p>
        </div>
      </div>
    </footer>
  );
}
