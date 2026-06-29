import Link from "next/link";
import { AetherMark } from "@/components/icons";
import { bot } from "@/lib/site-config";

/**
 * Shared chrome for static legal pages (privacy, terms). Keeps them on-brand
 * without pulling in the full marketing nav.
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-night">
      <header className="border-b border-white/[0.07]">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <AetherMark className="h-7 w-7" />
            <span className="font-heading text-lg font-bold tracking-tight">{bot.name}</span>
          </Link>
          <Link href="/" className="text-sm text-subtext transition-colors hover:text-white">
            ← Back to site
          </Link>
        </div>
      </header>
      <main className="container-x max-w-3xl py-16">
        <article className="prose-invert space-y-4 text-subtext [&_h1]:font-heading [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-white [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_a]:text-celeste hover:[&_a]:underline">
          {children}
        </article>
      </main>
    </div>
  );
}
