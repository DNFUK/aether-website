import Link from "next/link";
import { AetherMark, DiscordIcon, GithubIcon } from "@/components/icons";
import { bot, links, navLinks } from "@/lib/site-config";

const legal = [
  { label: "Privacy Policy", href: links.privacy },
  { label: "Terms of Service", href: links.terms },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-night">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <AetherMark className="h-8 w-8" />
              <span className="font-heading text-xl font-bold tracking-tight">{bot.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-subtext">{bot.description}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={links.support}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-subtext transition-all duration-300 hover:-translate-y-0.5 hover:border-celeste/40 hover:text-celeste"
              >
                <DiscordIcon className="h-5 w-5" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-subtext transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Product
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                      className="text-subtext transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href={links.login} className="text-subtext transition-colors hover:text-white">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Community
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={links.support}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtext transition-colors hover:text-white"
                  >
                    Discord Server
                  </a>
                </li>
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtext transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {legal.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-subtext transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-subtext">
            © {new Date().getFullYear()} {bot.name}. All rights reserved.
          </p>
          <p className="text-xs text-subtext/70">Not affiliated with Discord Inc.</p>
        </div>
      </div>
    </footer>
  );
}
