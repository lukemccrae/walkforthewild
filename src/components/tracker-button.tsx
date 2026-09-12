import Link from "next/link";
import type { ReactNode } from "react";

export function TrackerButton({
  className = "",
  children = "Trail Tracker",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href="/#tracker"
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
