import Link from "next/link";
import { Container } from "@/components/container";
import { DonateButton } from "@/components/donate-button";
import { ProgressBar } from "@/components/progress-bar";
import { expedition } from "@/content/expedition";
import { site } from "@/content/site";
import { updates } from "@/content/updates";
import { wesley } from "@/content/wesley";

export default function Home() {
  const latestUpdates = updates.slice(0, 3);

  return (
    <>
      <section className="border-b border-stone-200">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-pine-700">
            Easternmost to westernmost · 13 states · on foot
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Walking {expedition.distanceMiles.toLocaleString()} miles across
            America for public lands.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {site.hiker} — known on the trail as &ldquo;
            {site.trailName}&rdquo; — is attempting the first walk from West
            Quoddy Head, Maine to Cape Alava, Washington. Every mile raises
            money for the protection of US public lands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DonateButton size="lg" />
            <Link
              href="/expedition"
              className="inline-flex items-center rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-stone-100"
            >
              The Expedition
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-500">
            Started May 25, 2026 · projected finish {expedition.projectedFinish}
          </p>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <Container className="grid gap-8 py-12 sm:grid-cols-2 sm:py-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-pine-700">
              Progress
            </h2>
            <div className="mt-4">
              <ProgressBar
                completed={expedition.progress.milesCompleted}
                total={expedition.distanceMiles}
                asOf={expedition.progress.asOf}
              />
            </div>
          </div>
          <div className="flex items-center gap-8 sm:justify-end">
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                Start
              </p>
              <p className="mt-1 font-semibold text-ink">
                {expedition.start.place}
              </p>
            </div>
            <span aria-hidden="true" className="text-stone-300">
              →
            </span>
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                Finish
              </p>
              <p className="mt-1 font-semibold text-ink">
                {expedition.finish.place}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200">
        <Container className="py-14 sm:py-20">
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {expedition.cause.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            {expedition.cause.body}
          </p>
          <blockquote className="mt-10 border-l-4 border-pine-700 pl-5">
            <p className="max-w-3xl text-xl font-medium leading-9 text-ink sm:text-2xl">
              &ldquo;{wesley.quote}&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold text-stone-500">
              — {site.hiker}, &ldquo;{site.trailName}&rdquo;
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <Container className="py-14 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            The hiker
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            {wesley.intro}
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {wesley.stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6">
                <dt className="order-2 mt-1 text-sm text-stone-500">
                  {stat.label}
                </dt>
                <dd className="order-1 text-2xl font-bold tracking-tight text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6">
            <Link
              href="/about"
              className="text-sm font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-800"
            >
              Read Wesley&apos;s story →
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-stone-200">
        <Container className="py-14 sm:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Trail updates
            </h2>
            <Link
              href="/updates"
              className="text-sm font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-800"
            >
              All updates →
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
            {latestUpdates.map((update) => (
              <li key={update.title} className="py-6">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                  {update.date}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">
                  {update.href ? (
                    <a
                      href={update.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {update.title}
                    </a>
                  ) : (
                    update.title
                  )}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
                  {update.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-pine-800">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Help keep America&apos;s wild places wild.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-pine-100">
            Support the walk and the conservation organizations it funds. Your
            gift goes directly to protecting the land under Wesley&apos;s feet.
          </p>
          <div className="mt-8">
            <DonateButton
              size="lg"
              className="bg-white text-pine-800 hover:bg-pine-100"
            />
          </div>
        </Container>
      </section>
    </>
  );
}