import { StarField } from "@/components/landing/star-field";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { AetherMark, ArrowIcon, DiscordIcon } from "@/components/icons";
import { links } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      {/* Star field + nebula glows */}
      <StarField />
      <div className="pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-celeste/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[30rem] w-[30rem] rounded-full bg-gold/15 blur-[140px]" />

      <div className="container-x relative grid items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-32">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-subtext backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Now with AI chat &amp; image generation
            </span>
          </Reveal>

          <Reveal delay={0.08} as="h1">
            <span className="mt-6 block font-heading text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              Bring the
              <span className="text-gradient-aurora animate-shimmer"> cosmos </span>
              to your server.
            </span>
          </Reveal>

          <Reveal delay={0.16} as="p">
            <span className="mx-auto mt-6 block max-w-xl text-base leading-relaxed text-subtext sm:text-lg lg:mx-0">
              Aether is the celestial all-in-one Discord bot — AI chat, moderation, economy,
              leveling, music and more, woven into one effortless experience your members will love.
            </span>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <Button href={links.addToServer} variant="gold" size="lg" external>
                <DiscordIcon className="h-5 w-5" />
                Add to Server
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/#features" variant="outline" size="lg">
                Explore Commands
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex items-center justify-center gap-5 text-sm text-subtext lg:justify-start">
              <div className="flex -space-x-2">
                {["#5b8dee", "#f0c060", "#8fb2f4", "#d9a63f"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-night"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>
                Trusted across <span className="font-semibold text-white">250,000+</span> servers
              </span>
            </div>
          </Reveal>
        </div>

        {/* Character art placeholder */}
        <Reveal delay={0.2} className="relative z-10">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* Halo */}
            <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-[2rem] bg-aurora opacity-30 blur-3xl" />
            {/* Orbiting ring */}
            <div className="absolute inset-[-6%] -z-10 animate-spin-slow rounded-full border border-dashed border-white/10" />

            <div className="glass relative h-full overflow-hidden rounded-[2rem] p-1 shadow-card">
              <div className="relative flex h-full flex-col items-center justify-center rounded-[1.75rem] bg-gradient-to-b from-panel/80 to-night/90 bg-grid">
                {/* Floating mark stands in for the character PNG */}
                <div className="animate-float">
                  <AetherMark className="h-28 w-28 drop-shadow-[0_0_30px_rgba(240,192,96,0.45)] sm:h-32 sm:w-32" />
                </div>
                <p className="mt-6 font-heading text-lg font-semibold text-white/90">
                  Aether
                </p>
                <p className="mt-1 px-8 text-center text-sm text-subtext">
                  Character art placeholder — drop your Aether PNG here.
                </p>

                {/* Corner sparkles */}
                <span className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-gold/80 shadow-gold" />
                <span className="absolute right-8 top-12 h-1 w-1 rounded-full bg-celeste/90" />
                <span className="absolute bottom-10 left-10 h-1 w-1 rounded-full bg-white/80" />
                <span className="absolute bottom-16 right-7 h-1.5 w-1.5 rounded-full bg-gold/70" />
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="animate-float-slow absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 backdrop-blur-md sm:block">
              <p className="font-heading text-lg font-bold text-gold">99.9%</p>
              <p className="text-xs text-subtext">Uptime</p>
            </div>
            <div className="animate-float absolute -right-4 top-8 hidden rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 backdrop-blur-md sm:block">
              <p className="font-heading text-lg font-bold text-celeste">&lt;40ms</p>
              <p className="text-xs text-subtext">Response</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Section fade into next */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}
