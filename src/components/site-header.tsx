import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";
import { SiteNav } from "./site-nav";
import { TrackerDialog } from "./tracker-dialog";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-paper/90 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="flex min-w-0 items-baseline gap-2 text-ink"
          aria-label={`${site.name} home`}
        >
          <span className="truncate text-lg font-bold tracking-tight">
            {site.name}
          </span>
          <span className="hidden truncate text-sm font-medium text-stone-500 sm:inline">
            {site.trailName} crosses America
          </span>
        </Link>
        <div className="flex items-center gap-1.5">
          <SiteNav />
          <TrackerDialog />
        </div>
      </Container>
    </header>
  );
}