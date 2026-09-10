import type { Metadata } from "next";
import { Container } from "@/components/container";
import { DonateButton } from "@/components/donate-button";
import { PageHeader } from "@/components/page-header";
import { site } from "@/content/site";
import { wesley } from "@/content/wesley";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.hiker}, the thru-hiker, archaeologist, and public lands advocate known on the trail as ${site.trailName}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`${wesley.fullName}, trail name "${wesley.trailName}"`}
        description={`${wesley.intro} ${wesley.hometown} \u00b7 ${wesley.profession} \u00b7 ${wesley.age} years old.`}
      />

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            The story
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-stone-700">
            {wesley.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            At a glance
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
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
          <dl className="mt-8 grid gap-x-12 gap-y-4 text-sm sm:grid-cols-2">
            <div className="flex justify-between gap-6 border-b border-stone-200 pb-3">
              <dt className="text-stone-500">Hometown</dt>
              <dd className="font-medium text-ink">{wesley.hometown}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-stone-200 pb-3">
              <dt className="text-stone-500">Profession</dt>
              <dd className="font-medium text-ink">{wesley.profession}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-stone-200 pb-3">
              <dt className="text-stone-500">Age</dt>
              <dd className="font-medium text-ink">{wesley.age} (as of 2026)</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-stone-200 pb-3">
              <dt className="text-stone-500">Current expedition</dt>
              <dd className="font-medium text-ink">{site.name}</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Notable thru-hikes
          </h2>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {wesley.notableHikes.map((hike) => (
              <li key={hike.name} className="bg-white p-6">
                <p className="font-semibold text-ink">{hike.name}</p>
                {hike.note && (
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {hike.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Fun facts
          </h2>
          <ul className="mt-6 max-w-3xl space-y-3">
            {wesley.funFacts.map((fact) => (
              <li
                key={fact}
                className="flex gap-3 rounded-lg border border-stone-200 bg-paper p-4 text-sm leading-6 text-stone-700"
              >
                <span aria-hidden="true" className="mt-0.5 text-pine-700">
                  ✓
                </span>
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-lg bg-pine-800 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Support the 8,000-mile walk
              </h3>
              <p className="mt-1 max-w-md text-sm leading-6 text-pine-100">
                Every dollar raised goes to protecting the public lands this
                route crosses.
              </p>
            </div>
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