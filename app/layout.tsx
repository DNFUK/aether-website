import type { Metadata, Viewport } from "next";
import { Syne, Outfit } from "next/font/google";
import { bot } from "@/lib/site-config";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aether.bot"),
  title: {
    default: `${bot.name} — ${bot.tagline}`,
    template: `%s · ${bot.name}`,
  },
  description: bot.description,
  keywords: [
    "Aether",
    "Discord bot",
    "AI Discord bot",
    "moderation",
    "economy",
    "leveling",
    "music bot",
  ],
  openGraph: {
    title: `${bot.name} — ${bot.tagline}`,
    description: bot.description,
    type: "website",
    siteName: bot.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${bot.name} — ${bot.tagline}`,
    description: bot.description,
  },
  // Icons are auto-detected from app/favicon.ico and app/icon.svg
  // (Next.js App Router file convention), so no manual links are needed here.
};

export const viewport: Viewport = {
  themeColor: "#0a0b1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
