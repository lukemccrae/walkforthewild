import type { Metadata } from "next";
import { Container } from "@/components/container";
import { DonateButton } from "@/components/donate-button";
import { PageHeader } from "@/components/page-header";
import { ProgressBar } from "@/components/progress-bar";
import { expedition } from "@/content/expedition";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "The Expedition",
  description:
    "Walk for the Wild: the first walk from the easternmost to the westernmost point of the contiguous United States, raising money for public lands.",
};

export default function ExpeditionPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Expedition"
        title={expedition.name}
        description={expedition.goal}
      />

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          <dl className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6">
              <dt className="text-sm text-stone-500">Distance</dt>
              <dd className="mt-1 text-2xl font-bold tracking-tight text-ink">
                {expedition.distanceMiles.toLocaleString()} miles
              </dd>
              <dd className="text-sm text-stone-500">
                {expedition.distanceKm.toLocaleString()} km
              </dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-sm text-stone-500">Duration</dt>
              <dd className="mt-1 text-2xl font-bold tracking-tight text-ink">
                ~{expedition.durationDays} days
              </dd>
              <dd className="text-sm text-stone-500">
                {expedition.startDate} → {expedition.projectedFinish}
              </dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-sm text-stone-500">States crossed</dt>
              <dd className="mt-1 text-2xl font-bold tracking-tight text-ink">
                {expedition.states.length}
              </dd>
              <dd className="text-sm text-stone-500">Maine to Washington</dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-sm text-stone-500">Off-trail miles</dt>
              <dd className="mt-1 text-2xl font-bold tracking-tight text-ink">
                ~1,000
              </dd>
              <dd className="text-sm text-stone-500">of unmarked country</dd>
            </div>
          </dl>

          <div className="mt-10">
            <ProgressBar
              completed={expedition.progress.milesCompleted}
              total={expedition.distanceMiles}
              asOf={expedition.progress.asOf}
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            The route
          </h2>
          <div className="mt-6 flex flex-col gap-4 rounded-lg border border-stone-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                {expedition.start.label}
              </p>
              <p className="mt-1 font-semibold text-ink">
                {expedition.start.place}
              </p>
            </div>
            <span aria-hidden="true" className="text-stone-300 sm:px-2">
              →
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                {expedition.finish.label}
              </p>
              <p className="mt-1 font-semibold text-ink">
                {expedition.finish.place}
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {expedition.sections.map((section) => (
              <li
                key={section.name}
                className="rounded-lg border border-stone-200 bg-paper p-6"
              >
                <p className="font-semibold text-ink">{section.name}</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {section.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            The cause
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            {expedition.cause.headline} {expedition.cause.body}
          </p>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            What stands in the way
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {expedition.challenges.map((challenge) => (
              <li
                key={challenge.title}
                className="rounded-lg border border-stone-200 p-6"
              >
                <p className="font-semibold text-ink">{challenge.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {challenge.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-pine-800">
        <Container className="py-14 text-center sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Walk with him in spirit
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-pine-100">
            Follow {site.hiker}&apos;s progress on the trail tracker and support
            the cause.
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