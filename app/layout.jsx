import "./globals.css";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const ADSENSE_CLIENT = "ca-pub-3275113356221002";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // set in Netlify → Site settings → Environment variables

export const metadata = {
  metadataBase: new URL("https://returnonreno.com"),
  title: {
    default: "Renovation Cost & ROI Calculator | Return on Reno",
    template: "%s | Return on Reno",
  },
  description:
    "Free calculator: estimate what a renovation costs and how much you get back at resale. Compare 15+ projects by ROI.",
  // ?v=2 query busts the cached old favicon without changing the file path.
  icons: {
    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }, { url: "/favicon.ico?v=2" }],
    apple: "/apple-touch-icon.png?v=2",
  },
  openGraph: {
    type: "website",
    siteName: "Return on Reno",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  // Confirms the AdSense publisher for this site
  other: { "google-adsense-account": ADSENSE_CLIENT },
};

export const viewport = { themeColor: "#0b6b52" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />

        {/* Google AdSense Auto Ads — serves automatically once the site is approved in AdSense */}
        <Script
          id="adsbygoogle-init"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        />

        {/* Google Analytics 4 — only loads if NEXT_PUBLIC_GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
