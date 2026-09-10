import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { wesley } from "@/content/wesley";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Podcast appearances, press features, and publications from Wesley Tils' Walk for the Wild.",
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-pine-700 underline underline-offset-4 hover:text-pine-800"
    >
      {children}
    </a>
  );
}

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Podcasts, press & publications"
        description="Wesley has told his story \u2014 from a grizzly attack on the CDT to leaving the Mormon church \u2014 on trail podcasts and in the outdoor press."
      />

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Podcasts &amp; interviews
          </h2>
          <ul className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
            {wesley.podcasts.map((item) => (
              <li key={`${item.show}-${item.title}-${item.platform ?? ""}`} className="py-5">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                  {item.show}
                </p>
                <p className="mt-1 text-base font-semibold text-ink">
                  <ExternalLink href={item.href}>{item.title}</ExternalLink>
                </p>
                {item.platform && (
                  <p className="mt-0.5 text-sm text-stone-500">
                    {item.platform}
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
            Press &amp; publications
          </h2>
          <ul className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
            {wesley.press.map((item) => (
              <li key={`${item.outlet}-${item.title}`} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-base font-semibold text-ink">
                    {item.href ? (
                      <ExternalLink href={item.href}>{item.title}</ExternalLink>
                    ) : (
                      item.title
                    )}
                  </p>
                  {item.date && (
                    <p className="text-sm text-stone-500">{item.date}</p>
                  )}
                </div>
                <p className="mt-1 text-sm text-stone-500">{item.outlet}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}