import type { Metadata } from "next";
import { Container } from "@/components/container";
import { DonateButton } from "@/components/donate-button";
import { PageHeader } from "@/components/page-header";
import { expedition } from "@/content/expedition";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Wesley Tils' 8,000-mile Walk for the Wild, raising money for the protection of US public lands.",
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Give to the wild"
        description="The walk raises money for the protection of US public lands, and 100% of documentary profits are donated to conservation organizations."
      />

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Where your money goes
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine-100 text-sm font-bold text-pine-800"
                  >
                    1
                  </span>
                  <p className="text-base leading-7 text-stone-700">
                    <span className="font-semibold text-ink">
                      Protecting public lands.
                    </span>{" "}
                    Funds raised during the walk support organizations that
                    conserve and defend America&apos;s public lands.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine-100 text-sm font-bold text-pine-800"
                  >
                    2
                  </span>
                  <p className="text-base leading-7 text-stone-700">
                    <span className="font-semibold text-ink">
                      100% of documentary profits donated.
                    </span>{" "}
                    Wesley is filming the walk; every dollar it earns goes to
                    conservation organizations.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine-100 text-sm font-bold text-pine-800"
                  >
                    3
                  </span>
                  <p className="text-base leading-7 text-stone-700">
                    <span className="font-semibold text-ink">
                      Awareness for wild places.
                    </span>{" "}
                    The first ever walk between the easternmost and westernmost
                    points of the lower 48 brings attention to the land this
                    route crosses.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center rounded-lg border border-stone-200 bg-white p-8">
              <h2 className="text-lg font-bold tracking-tight text-ink">
                Make a donation
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Your gift goes toward {expedition.distanceMiles.toLocaleString()}{" "}
                miles of walking for America&apos;s wild places.
              </p>
              <div className="mt-6">
                <DonateButton size="lg" className="w-full" />
              </div>
              <p className="mt-4 text-xs leading-5 text-stone-500">
                Donations are collected through Wesley&apos;s campaign page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Can&apos;t give? Share the walk.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
            Sharing an update, a story, or a milestone reaches the people who
            can help. Follow along and pass it on.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-stone-100"
                >
                  {s.label} <span className="ml-1 text-stone-400">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}