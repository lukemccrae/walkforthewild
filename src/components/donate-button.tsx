import { site } from "@/content/site";

type DonateButtonProps = {
  size?: "md" | "lg";
  variant?: "solid" | "inverse";
  className?: string;
};

export function DonateButton({
  size = "md",
  variant = "solid",
  className = "",
}: DonateButtonProps) {
  const padding =
    size === "lg"
      ? "px-6 py-3 text-base"
      : "px-4 py-2 text-sm";

  const colors =
    variant === "inverse"
      ? "bg-white text-pine-800 hover:bg-pine-100"
      : "bg-pine-700 text-white hover:bg-pine-800";

  return (
    <a
      href="#donate"
      className={`inline-flex items-center justify-center rounded-md font-semibold transition-colors ${colors} ${padding} ${className}`}
    >
      {site.donateLabel}
    </a>
  );
}