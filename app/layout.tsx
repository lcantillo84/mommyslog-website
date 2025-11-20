import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
