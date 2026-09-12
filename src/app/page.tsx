import Image from "next/image";
import { Container } from "@/components/container";
import { DonateButton } from "@/components/donate-button";
import { GoFundMeEmbed } from "@/components/gofundme-embed";
import { TrackerButton } from "@/components/tracker-button";
import { TrackerEmbed } from "@/components/tracker-embed";
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
      group.links.push({ label: item.platform ?? "Listen", href: item.href });
      return groups;
    }, {}),
  ).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <>
      <section className="border-b border-stone-200">
        <Container className="grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-[1fr_20rem] lg:gap-14 lg:py-24">
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            <Image
              src="/megaman.jpg"
              alt={`${site.hiker}, known on the trail as ${site.trailName}`}
              width={659}
              height={659}
              priority
              className="h-auto w-full rounded-2xl border border-stone-200 shadow-sm"
            />
          </div>

          <div className="order-2 text-center lg:order-1 lg:text-left">
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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
              <DonateButton size="lg" />
              <TrackerButton className="rounded-md border border-stone-300 bg-white px-6 py-3 text-base text-ink hover:bg-stone-100">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine-600 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pine-600" />
                </span>
                Trail Tracker
              </TrackerButton>
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
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            Follow {site.hiker}&apos;s position in real time as he walks across
            America.
          </p>
          <div className="mt-8">
            <TrackerEmbed html={trackerEmbedHtml} />
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200">
        <Container className="py-14 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Podcast appearances
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            Wesley has shared the walk and his story on long-distance hiking
            podcasts.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
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
    </>
  );
}