import type { Metadata } from "next";
import Link from "next/link";
import { AetherMark } from "@/components/icons";
import { bot } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dashboard",
  description: `Manage your servers with ${bot.name}.`,
};

/**
 * Dashboard shell. This intentionally mirrors the marketing palette so the two
 * halves of the app feel like one product. The real navigation (server switcher,
 * module sidebar, auth state) will be layered in when the dashboard is built —
 * for now this provides the structural frame those pieces drop into.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-night">
      <header className="glass sticky top-0 z-40 border-b border-white/[0.07]">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <AetherMark className="h-7 w-7" />
            <span className="font-heading text-lg font-bold tracking-tight">{bot.name}</span>
            <span className="ml-1 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-subtext">
              Dashboard
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-subtext transition-colors hover:text-white"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      <main className="container-x py-10">{children}</main>
    </div>
  );
}
