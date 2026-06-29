/**
 * Central source of truth for the Aether marketing site.
 *
 * Links are intentionally kept as constants so they can be swapped for real
 * URLs (or env-driven values) in one place. The dashboard work can import the
 * same `bot` + `links` objects rather than re-declaring them.
 */

export const bot = {
  name: "Aether",
  tagline: "The celestial all-in-one Discord bot.",
  description:
    "AI chat, moderation, economy, leveling, music and more — woven into a single bot with a touch of the cosmos.",
} as const;

export const links = {
  // Swap these for production OAuth / invite URLs when ready.
  addToServer: "https://discord.com/oauth2/authorize?client_id=AETHER_CLIENT_ID&scope=bot+applications.commands&permissions=8",
  login: "/dashboard",
  support: "https://discord.gg/aether",
  status: "https://status.aether.bot",
  commands: "/#features",
  github: "https://github.com/dnfuk/aether-website",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const navLinks = [
  { label: "Commands", href: "/#features" },
  { label: "Support", href: links.support, external: true },
  { label: "Status", href: links.status, external: true },
] as const;

export type FeatureKey =
  | "ai-chat"
  | "moderation"
  | "economy"
  | "leveling"
  | "music"
  | "web-search"
  | "image-gen";

export interface Feature {
  key: FeatureKey;
  title: string;
  description: string;
  /** Tailwind accent the card leans into. */
  accent: "gold" | "celeste";
}

export const features: Feature[] = [
  {
    key: "ai-chat",
    title: "AI Chat",
    description:
      "Hold real conversations with a context-aware assistant that answers questions, drafts messages and keeps your server lively.",
    accent: "celeste",
  },
  {
    key: "moderation",
    title: "Moderation",
    description:
      "Automod, anti-spam, timed punishments and a full infraction history. Everything your mod team needs to keep the peace.",
    accent: "gold",
  },
  {
    key: "economy",
    title: "Economy",
    description:
      "A complete currency system with shops, daily rewards and games that keep members coming back for more.",
    accent: "gold",
  },
  {
    key: "leveling",
    title: "Leveling",
    description:
      "Reward activity with XP, ranks and beautifully rendered level-up cards that members actually want to show off.",
    accent: "celeste",
  },
  {
    key: "music",
    title: "Music",
    description:
      "Crystal-clear, lag-free playback from YouTube, Spotify and more — queues, filters and full controls included.",
    accent: "celeste",
  },
  {
    key: "web-search",
    title: "Web Search",
    description:
      "Pull live answers, news and results straight from the web without anyone ever leaving the chat.",
    accent: "gold",
  },
  {
    key: "image-gen",
    title: "Image Generation",
    description:
      "Conjure stunning, original artwork from a single text prompt — celestial scenes, characters and everything between.",
    accent: "celeste",
  },
];

export interface Stat {
  label: string;
  /** Final numeric value used by the count-up animation. */
  value: number;
  /** Suffix appended after the formatted number (e.g. "M+", "K+"). */
  suffix?: string;
}

export const stats: Stat[] = [
  { label: "Servers", value: 250, suffix: "K+" },
  { label: "Commands", value: 120, suffix: "+" },
  { label: "Users reached", value: 18, suffix: "M+" },
];
