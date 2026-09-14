import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center">
        <Link
          href="/"
          className="flex min-w-0 items-baseline gap-2 text-ink"
          aria-label={`${site.name} home`}
        >
          <span className="truncate text-lg font-bold tracking-tight">
            {site.name}
          </span>
        </Link>
      </Container>
    </header>
  );
}