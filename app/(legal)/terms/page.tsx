import type { Metadata } from "next";
import { bot } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-sm">Last updated: placeholder — replace before launch.</p>

      <h2>Acceptance</h2>
      <p>
        This is a placeholder terms of service for {bot.name}. Replace this content with your
        finalized terms before going live.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Outline how {bot.name} may and may not be used, including any restrictions on automated abuse
        or attempts to disrupt the service.
      </p>

      <h2>Contact</h2>
      <p>Add a support contact or Discord server link for questions about these terms.</p>
    </>
  );
}
