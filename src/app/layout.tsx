import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuthentiTune Proof - AI disclosure + provenance release pack",
  description:
    "Generate a Release Pack with AI disclosure summaries, provenance receipts, and platform-aware risk checks for music releases.",
  openGraph: {
    title: "AuthentiTune Proof",
    description:
      "Generate a Release Pack with AI disclosure summaries, provenance receipts, and platform-aware risk checks for music releases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
