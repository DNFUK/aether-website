import type { Metadata } from "next";
import { bot } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm">Last updated: placeholder — replace before launch.</p>

      <h2>Overview</h2>
      <p>
        This is a placeholder privacy policy for {bot.name}. Replace this content with your finalized
        policy describing what data the bot collects, how it is used, and how users can request its
        removal.
      </p>

      <h2>Data we store</h2>
      <p>
        Document the data points {bot.name} persists (e.g. server IDs, configuration, economy
        balances, leveling XP) and the retention period for each.
      </p>

      <h2>Contact</h2>
      <p>
        Add a support contact or Discord server link so users can reach you with privacy requests.
      </p>
    </>
  );
}
