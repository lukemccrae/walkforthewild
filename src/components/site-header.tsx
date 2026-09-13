import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";
import { TrackerButton } from "./tracker-button";

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
        </Link>
        <div className="flex items-center gap-1.5">
          <TrackerButton className="hidden rounded-md bg-pine-700 px-3 py-2 text-sm text-white hover:bg-pine-800 md:inline-flex">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine-200 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pine-200" />
            </span>
            Trail Tracker
          </TrackerButton>
        </div>
      </Container>
    </header>
  );
}