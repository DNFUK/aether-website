"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AetherMark, ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { navLinks, links, bot } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${bot.name} home`}>
          <span className="relative grid h-9 w-9 place-items-center">
            <span className="absolute inset-0 rounded-xl bg-gold/20 blur-md transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
            <AetherMark className="relative h-8 w-8 transition-transform duration-500 group-hover:rotate-90" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight">{bot.name}</span>
        </Link>

        {/* Center links (desktop) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={"external" in item && item.external ? "_blank" : undefined}
              rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
              className="rounded-full px-4 py-2 text-sm text-subtext transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Button href={links.login} variant="ghost" size="md">
            Login
          </Button>
          <Button href={links.addToServer} variant="gold" size="md" external>
            Add to Server
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-0 top-16 bg-night/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container-x flex flex-col gap-2 py-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/[0.06] bg-panel/60 px-5 py-4 text-lg text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button href={links.login} variant="outline" size="lg" onClick={() => setOpen(false)}>
                Login
              </Button>
              <Button href={links.addToServer} variant="gold" size="lg" external>
                Add to Server
                <ArrowIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
