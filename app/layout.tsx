import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mommyslog.com"),
  title: {
    default: "Mommy's Log - Free Baby Feeding & Diaper Tracker App",
    template: "%s | Mommy's Log",
  },
  description: "Free baby feeding tracker app for iPhone. Log breastfeeding, bottle feeding, and diaper changes in seconds. No ads, no account — all data stays on your device.",
  keywords: [
    "baby feeding tracker app",
    "free baby tracker app",
    "newborn feeding log",
    "breastfeeding tracker",
    "diaper tracker app",
    "baby feeding schedule",
    "baby tracker no subscription",
    "infant feeding tracker",
    "baby log app",
    "newborn tracker app",
    "breastfeeding log",
    "baby feeding app iPhone",
    "track baby feedings and diapers",
    "free baby app no ads",
  ],
  openGraph: {
    title: "Mommy's Log - Free Baby Feeding & Diaper Tracker App",
    description: "Free baby feeding tracker app for iPhone. Log breastfeeding, bottle, and diapers in seconds. No ads, no account — private and simple.",
    url: "https://mommyslog.com",
    siteName: "Mommy's Log",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mommy's Log - Free Baby Feeding & Diaper Tracker App",
    description: "Free baby feeding tracker app for iPhone. No ads, no account — all data stays on your device.",
    site: "@mommyslog",
  },
  alternates: {
    canonical: "https://mommyslog.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="E-8CwF3hdBl_e-q_3xT2Uzx_qvsaE0UJHXxUbyBZcYQ" />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0TV051EP9P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0TV051EP9P');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
