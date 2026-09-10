import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-pine-700">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        This trail junction doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-stone-600">
        The page you&apos;re looking for isn&apos;t on the map. Let&apos;s get
        you back on route.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-pine-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine-800"
      >
        Back to the trailhead
      </Link>
    </Container>
  );
}