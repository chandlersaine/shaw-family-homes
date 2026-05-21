import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: `Sell Your House Fast in ${siteConfig.serviceArea} | ${siteConfig.companyName}`,
  description: `Get a fair cash offer for your ${siteConfig.serviceArea} home in 24 hours. No repairs, no fees, no commissions. Close in as little as 7 days.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Microsoft Clarity */}
        {siteConfig.clarityId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${siteConfig.clarityId}");`,
            }}
          />
        )}

        {/* Meta Pixel */}
        {siteConfig.metaPixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${siteConfig.metaPixelId}');fbq('track','PageView');`,
            }}
          />
        )}
        {siteConfig.metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${siteConfig.metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-gray-900"
        style={
          {
            "--color-primary": siteConfig.colors.primary,
            "--color-primary-dark": siteConfig.colors.primaryDark,
            "--color-accent": siteConfig.colors.accent,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
