import type { SVGProps } from "react";
import type { FeatureKey } from "@/lib/site-config";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/** Four-pointed celestial spark — the Aether mark. */
export function AetherMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id="aether-mark" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f6d68f" />
          <stop offset="0.5" stopColor="#f0c060" />
          <stop offset="1" stopColor="#5b8dee" />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5c.4 4.6 2.4 6.6 7 7-4.6.4-6.6 2.4-7 7-.4-4.6-2.4-6.6-7-7 4.6-.4 6.6-2.4 7-7Z"
        fill="url(#aether-mark)"
      />
      <path
        d="M19.5 14.5c.2 2.3 1.2 3.3 3.5 3.5-2.3.2-3.3 1.2-3.5 3.5-.2-2.3-1.2-3.3-3.5-3.5 2.3-.2 3.3-1.2 3.5-3.5Z"
        fill="#5b8dee"
        opacity="0.9"
      />
    </svg>
  );
}

export function AiChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V16.5H4A1.5 1.5 0 0 1 2.5 15V7A1.5 1.5 0 0 1 4 5.5Z" />
      <path d="M12 8.2l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6L9.7 10.5l1.6-.7.7-1.6Z" />
    </svg>
  );
}

export function ModerationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5 19 5v6c0 4.4-2.9 8.2-7 9.5C7.9 19.2 5 15.4 5 11V5l7-2.5Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

export function EconomyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.2c-.5-1-1.5-1.5-2.7-1.5-1.6 0-2.6.9-2.6 2 0 2.6 5.6 1.3 5.6 4.1 0 1.2-1.1 2.1-2.8 2.1-1.4 0-2.5-.6-3-1.6" />
      <path d="M12 6v1.7M12 16.3V18" />
    </svg>
  );
}

export function LevelingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 20h14" />
      <path d="M7 20v-5M12 20V8m5 12v-8" />
      <path d="m9.5 6 2.5-2.5L14.5 6" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18V6.2l10-2v11.3" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="15.5" r="2.5" />
    </svg>
  );
}

export function WebSearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7.5" />
      <path d="M3.6 11h14.8M11 3.5c2 2.1 3 4.7 3 7.5s-1 5.4-3 7.5c-2-2.1-3-4.7-3-7.5s1-5.4 3-7.5Z" />
      <path d="m16.8 16.8 4 4" />
    </svg>
  );
}

export function ImageGenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="m4 17 4.5-4.5 3 3 3.5-3.5 4 4" />
      <path d="M15.5 8.2l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5.5-1.2Z" />
    </svg>
  );
}

export const featureIcons: Record<FeatureKey, (props: IconProps) => JSX.Element> = {
  "ai-chat": AiChatIcon,
  moderation: ModerationIcon,
  economy: EconomyIcon,
  leveling: LevelingIcon,
  music: MusicIcon,
  "web-search": WebSearchIcon,
  "image-gen": ImageGenIcon,
};

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.27 5.33A16.6 16.6 0 0 0 15.1 4l-.2.38a15.4 15.4 0 0 1 3.66 1.18 12.9 12.9 0 0 0-11.13 0A15.4 15.4 0 0 1 11.1 4.4L10.9 4a16.6 16.6 0 0 0-4.17 1.33C3.6 9.95 2.75 14.45 3.17 18.9a16.7 16.7 0 0 0 5.1 2.57l.4-.55a11 11 0 0 1-1.9-.9l.45-.34a11.6 11.6 0 0 0 9.95 0l.45.34c-.6.36-1.24.66-1.9.9l.4.56a16.7 16.7 0 0 0 5.1-2.58c.5-5.16-.86-9.62-3.95-13.57ZM9.4 16.16c-.98 0-1.79-.9-1.79-2s.79-2 1.8-2c1 0 1.8.9 1.78 2 0 1.1-.79 2-1.79 2Zm5.2 0c-.98 0-1.79-.9-1.79-2s.79-2 1.8-2c1.01 0 1.8.9 1.78 2 0 1.1-.78 2-1.79 2Z" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
