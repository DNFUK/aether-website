import Link from "next/link";
import { features } from "@/lib/site-config";
import { featureIcons } from "@/components/icons";

/**
 * Per-server management view. The module grid reuses the same feature list as
 * the landing page so the dashboard stays in lockstep with what's marketed.
 * Each module will become its own settings route (e.g. /dashboard/[serverId]/economy).
 */
export default function ServerDashboard({
  params,
}: {
  params: { serverId: string };
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center gap-2 text-sm text-subtext">
        <Link href="/dashboard" className="transition-colors hover:text-white">
          Servers
        </Link>
        <span>/</span>
        <span className="text-white">{params.serverId}</span>
      </div>

      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight">Server modules</h1>
      <p className="mt-2 text-subtext">
        Toggle and configure Aether&apos;s modules for this server. (UI scaffold — controls land in a
        later pass.)
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = featureIcons[feature.key];
          const isGold = feature.accent === "gold";
          return (
            <div
              key={feature.key}
              className="rounded-2xl border border-white/[0.07] bg-panel/60 p-6"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl border ${
                    isGold
                      ? "border-gold/25 bg-gold/[0.08] text-gold"
                      : "border-celeste/25 bg-celeste/[0.08] text-celeste"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                {/* Placeholder toggle */}
                <span className="flex h-6 w-11 items-center rounded-full bg-white/10 p-0.5">
                  <span className="h-5 w-5 rounded-full bg-subtext" />
                </span>
              </div>
              <h2 className="mt-4 font-heading text-lg font-semibold">{feature.title}</h2>
              <p className="mt-1.5 text-sm text-subtext">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
