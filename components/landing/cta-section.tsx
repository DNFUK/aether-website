import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { AetherMark, ArrowIcon, DiscordIcon } from "@/components/icons";
import { links } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-panel/60 px-6 py-16 text-center sm:px-16 sm:py-20">
            {/* Glowing gold background effect */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]" />
              <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[100px]" />
              <div className="absolute inset-0 bg-grid opacity-40" />
            </div>

            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center">
              <AetherMark className="h-14 w-14 animate-float drop-shadow-[0_0_30px_rgba(240,192,96,0.5)]" />
            </div>

            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-subtext sm:text-lg">
              Add Aether to your server in seconds — free to start, no credit card, no fuss. Your
              community&apos;s celestial upgrade is one click away.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={links.addToServer} variant="gold" size="lg" external>
                <DiscordIcon className="h-5 w-5" />
                Add to Server
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href={links.support} variant="outline" size="lg" external>
                Join Support Server
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
