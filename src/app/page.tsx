import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { DonateButton } from "@/components/donate-button";
import { GoFundMeEmbed } from "@/components/gofundme-embed";
import { TrackerButton } from "@/components/tracker-button";
import { TrackerEmbed } from "@/components/tracker-embed";
import { conservation } from "@/content/conservation";
import { expedition } from "@/content/expedition";
import { site } from "@/content/site";
import { trackerEmbedHtml } from "@/content/tracker";
import { wesley } from "@/content/wesley";

export default function Home() {
  const podcastGroups = Object.values(
    wesley.podcasts.reduce<
      Record<
        string,
        {
          title: string;
          show: string;
          date: string;
          links: { label: string; href: string }[];
        }
      >
    >((groups, item) => {
      const group = (groups[item.title] ??= {
        title: item.title,
        show: item.show,
        date: item.date,
        links: [],
      });
      group.links.push({
        label: item.platform ?? (item.format === "written" ? "Read" : "Listen"),
        href: item.href,
      });
      return groups;
    }, {}),
  ).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <>
      <section className="border-b border-stone-200">
        <Container className="flex flex-col items-center gap-8 py-10 text-center sm:py-16 lg:py-24">
          <div className="w-full max-w-sm">
            <Image
              src="/megaman.jpg"
              alt={`${site.hiker}, known on the trail as ${site.trailName}`}
              width={659}
              height={659}
              priority
              className="h-auto w-full rounded-2xl border border-stone-200 shadow-sm"
            />
          </div>

          <div>
            <p className="hidden text-xs font-semibold uppercase tracking-widest text-pine-700 sm:block">
              Easternmost to westernmost · 13 states · on foot
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
              Walking {expedition.distanceMiles.toLocaleString()} miles across
              America for public lands.
            </h1>
            <p className="mt-5 hidden text-lg leading-8 text-stone-600 sm:block">
              {site.hiker} — known on the trail as &ldquo;
              {site.trailName}&rdquo; — is attempting the first walk from West
              Quoddy Head, Maine to Cape Alava, Washington. Every mile raises
              money for the protection of US public lands.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
              <DonateButton size="lg" />
              <TrackerButton className="inline-flex rounded-md border border-stone-300 bg-white px-6 py-3 text-base text-ink hover:bg-stone-100">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine-600 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pine-600" />
                </span>
                Trail Tracker
              </TrackerButton>
              <a
                href="#media"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-stone-100"
              >
                Media
              </a>
            </div>
            <p className="mt-4 hidden text-sm text-stone-500 sm:block">
              Started May 25, 2026 · projected finish{" "}
              {expedition.projectedFinish}
            </p>
          </div>
        </Container>
      </section>

      <section
        id="tracker"
        className="scroll-mt-16 border-b border-stone-200 bg-white"
      >
        <Container className="py-14 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Live trail tracker
          </h2>
          <div className="mt-8">
            <TrackerEmbed html={trackerEmbedHtml} />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <Container className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-sm">
            <Image
              src="/wesley.jpg"
              alt={`${site.hiker}, known on the trail as ${site.trailName}`}
              width={1170}
              height={1170}
              className="h-auto w-full rounded-2xl border border-stone-200 shadow-sm"
            />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-8 text-stone-600">
            {wesley.intro}
          </p>
          <p className="mt-12 text-center text-sm leading-6 text-stone-600">
            Supported by{" "}
            {site.sponsors.map((sponsor, i) => (
              <span key={sponsor.href}>
                {i > 0 &&
                  (i === site.sponsors.length - 1 ? ", and " : ", ")}
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline underline-offset-4 hover:text-pine-700"
                >
                  {sponsor.name}
                </a>{" "}
                <span className="text-stone-500">({sponsor.note})</span>
              </span>
            ))}
          </p>
        </Container>
      </section>

      <section
        id="media"
        className="scroll-mt-16 border-b border-stone-200"
      >
        <Container className="py-14 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Media
          </h2>
          <ul className="mt-8 grid gap-4">
            {podcastGroups.map((group) => (
              <li
                key={group.title}
                className="rounded-lg border border-stone-200 bg-white p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                  {group.date}
                </p>
                <p className="mt-1 font-semibold tracking-tight text-ink">
                  {group.title}
                </p>
                <p className="mt-1 text-sm text-stone-500">{group.show}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-pine-700">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-pine-800"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="donate" className="scroll-mt-16 bg-pine-800">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Help keep America&apos;s wild places wild.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-pine-100">
            Support the walk and the conservation organizations it funds. Your
            gift goes directly to protecting the land under Wesley&apos;s feet.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <GoFundMeEmbed />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200">
        <Container className="py-14 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Conservation along the route
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            The walk crosses lands stewarded by these organizations, from Maine
            to the Pacific coast.
          </p>
          <p className="mt-4">
            <Link
              href="/events"
              className="text-sm font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-800"
            >
              Conservation events →
            </Link>
          </p>
          <div className="mt-8 grid gap-8">
            {conservation.map((region) => (
              <div key={region.region}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-pine-700">
                  {region.region}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">
                  {region.timing}
                </p>
                <ul className="mt-3 space-y-4">
                  {region.organizations.map((org) => (
                    <li key={org.link}>
                      <a
                        href={org.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ink underline underline-offset-4 hover:text-pine-700"
                      >
                        {org.name}
                      </a>
                      <p className="mt-1 text-sm leading-6 text-stone-600">
                        {org.details}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}