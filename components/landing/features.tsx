import { Reveal } from "@/components/ui/reveal";
import { featureIcons } from "@/components/icons";
import { features } from "@/lib/site-config";

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Everything in one bot
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Power for every corner of your server
          </h2>
          <p className="mt-4 text-base text-subtext sm:text-lg">
            From AI conversations to airtight moderation, Aether brings a constellation of features
            together so you can run one bot instead of seven.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = featureIcons[feature.key];
            const isGold = feature.accent === "gold";
            return (
              <Reveal key={feature.key} delay={(i % 3) * 0.08}>
                <article
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-panel/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-card"
                >
                  {/* Accent glow on hover */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                      isGold ? "bg-gold/20" : "bg-celeste/20"
                    }`}
                  />

                  <div
                    className={`relative grid h-12 w-12 place-items-center rounded-xl border transition-colors duration-300 ${
                      isGold
                        ? "border-gold/25 bg-gold/[0.08] text-gold group-hover:border-gold/50"
                        : "border-celeste/25 bg-celeste/[0.08] text-celeste group-hover:border-celeste/50"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative mt-5 font-heading text-xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-subtext">
                    {feature.description}
                  </p>

                  {/* Bottom hairline accent */}
                  <div
                    className={`absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                      isGold ? "bg-gold-gradient" : "bg-celeste-gradient"
                    }`}
                  />
                </article>
              </Reveal>
            );
          })}

          {/* Closing "and more" tile */}
          <Reveal delay={0.08}>
            <article className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-dashed border-white/[0.12] bg-gradient-to-br from-celeste/[0.06] to-gold/[0.06] p-7">
              <h3 className="font-heading text-xl font-bold tracking-tight">+ much more</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-subtext">
                Reaction roles, welcome cards, custom commands, logging, giveaways and a growing
                galaxy of tools — all configurable from the dashboard.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
