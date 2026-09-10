import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { updates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Trail updates and milestones from Wesley Tils' Walk for the Wild across America.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Trail updates"
        description="Milestones, check-ins, and journal entries from the road. The latest is at the top."
      />

      <section className="border-t border-stone-200">
        <Container className="py-12 sm:py-16">
          {updates.length === 0 ? (
            <p className="text-stone-500">
              Updates coming soon — follow the socials to keep up with
              Wesley in the meantime.
            </p>
          ) : (
            <ul className="divide-y divide-stone-200 border-y border-stone-200">
              {updates.map((update) => (
                <li key={update.title} className="py-8">
                  <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                    {update.date}
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-ink sm:text-2xl">
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
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
                    {update.body}
                  </p>
                  {update.source && (
                    <p className="mt-2 text-sm text-stone-500">
                      Source: {update.source}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}