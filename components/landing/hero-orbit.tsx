import { AetherMark } from "@/components/icons";

/**
 * Decorative celestial layer that sits around the hero character: two rings of
 * stars slowly orbiting in opposite directions, plus a scatter of twinkling
 * sparkles. Pure CSS animation — no client JS, so the Hero stays a server
 * component. Animations are disabled under prefers-reduced-motion (globals.css).
 */

function Dot({
  className = "",
  color = "gold",
  size = 6,
}: {
  className?: string;
  color?: "gold" | "celeste" | "white";
  size?: number;
}) {
  const bg =
    color === "gold" ? "#f0c060" : color === "celeste" ? "#8fb2f4" : "#ffffff";
  const glow =
    color === "gold"
      ? "rgba(240,192,96,0.7)"
      : color === "celeste"
        ? "rgba(143,178,244,0.7)"
        : "rgba(255,255,255,0.7)";
  return (
    <span
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
        boxShadow: `0 0 ${size * 2}px ${glow}`,
      }}
    />
  );
}

export function HeroOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Outer ring — clockwise */}
      <div className="absolute inset-[-6%] animate-spin-slow">
        <Dot className="left-1/2 top-0 -translate-x-1/2" color="gold" size={7} />
        <Dot className="right-[8%] top-[28%]" color="celeste" size={5} />
        <Dot className="bottom-[10%] left-[14%]" color="white" size={4} />
      </div>

      {/* Inner ring — counter-clockwise, slower */}
      <div
        className="absolute inset-[6%] animate-spin-slow"
        style={{ animationDuration: "64s", animationDirection: "reverse" }}
      >
        <Dot className="left-[10%] top-[18%]" color="celeste" size={6} />
        <Dot className="bottom-[6%] right-[18%]" color="gold" size={5} />
        <AetherMark className="absolute right-[6%] top-[44%] h-4 w-4 opacity-80" />
      </div>

      {/* Free-floating twinkles layered over the figure */}
      <Dot className="left-[6%] top-[36%] animate-twinkle" color="gold" size={5} />
      <Dot
        className="right-[10%] top-[14%] animate-twinkle"
        color="celeste"
        size={6}
      />
      <span className="absolute right-[4%] top-[62%] animate-twinkle" style={{ animationDelay: "0.6s" }}>
        <AetherMark className="h-5 w-5 opacity-90 drop-shadow-[0_0_8px_rgba(240,192,96,0.6)]" />
      </span>
      <Dot
        className="left-[16%] top-[68%] animate-twinkle"
        color="white"
        size={4}
      />
      <Dot
        className="left-[2%] top-[52%] animate-twinkle"
        color="celeste"
        size={4}
      />
      <span className="absolute left-[12%] top-[10%] animate-twinkle" style={{ animationDelay: "1.2s" }}>
        <AetherMark className="h-4 w-4 opacity-70" />
      </span>
      <Dot
        className="right-[16%] bottom-[20%] animate-twinkle"
        color="gold"
        size={5}
      />
    </div>
  );
}
