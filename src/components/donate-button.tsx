import { site } from "@/content/site";

type DonateButtonProps = {
  size?: "md" | "lg";
  className?: string;
};

export function DonateButton({ size = "md", className = "" }: DonateButtonProps) {
  const padding =
    size === "lg"
      ? "px-6 py-3 text-base"
      : "px-4 py-2 text-sm";

  return (
    <a
      href={site.donateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md bg-pine-700 font-semibold text-white transition-colors hover:bg-pine-800 ${padding} ${className}`}
    >
      {site.donateLabel}
    </a>
  );
}