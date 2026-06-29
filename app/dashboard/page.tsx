import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

/**
 * Server picker — the landing spot after login. Real data will come from the
 * Discord OAuth session (guilds the user can manage). Placeholder cards below
 * show the intended shape so the data layer can slot straight in.
 */
const placeholderServers = [
  { id: "demo-1", name: "Celestial Hub", members: "12,480" },
  { id: "demo-2", name: "Starlight Gaming", members: "3,902" },
  { id: "demo-3", name: "Aether Test Server", members: "318" },
];

export default function DashboardHome() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-heading text-3xl font-bold tracking-tight">Select a server</h1>
      <p className="mt-2 text-subtext">
        Choose a server to configure Aether. (Wired to Discord OAuth in a later pass.)
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderServers.map((server) => (
          <Link
            key={server.id}
            href={`/dashboard/${server.id}`}
            className="group rounded-2xl border border-white/[0.07] bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-card"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-celeste-gradient font-heading text-lg font-bold text-night">
              {server.name.charAt(0)}
            </div>
            <h2 className="mt-4 font-heading text-lg font-semibold">{server.name}</h2>
            <p className="text-sm text-subtext">{server.members} members</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
              Manage
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
