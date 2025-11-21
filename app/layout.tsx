import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mommy's Log - Baby Feeding & Diaper Tracker",
  description: "Track your baby's feedings and diaper changes privately and simply. 100% free, no ads, all data stays on your device.",
  keywords: "baby tracker, feeding log, diaper tracker, breastfeeding app, baby app, newborn tracker",
  openGraph: {
    title: "Mommy's Log - Baby Feeding & Diaper Tracker",
    description: "Track your baby's feedings and diaper changes privately and simply. 100% free, no ads.",
    url: "https://mommyslog.com",
    siteName: "Mommy's Log",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mommy's Log - Baby Feeding & Diaper Tracker",
    description: "Track your baby's feedings and diaper changes privately and simply. 100% free, no ads.",
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
