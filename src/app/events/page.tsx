import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SocialIcon } from "@/components/social-icon";
import { conservationEvents } from "@/content/events";
import { orgSocials } from "@/content/org-socials";

export const metadata: Metadata = {
  title: "Conservation events",
  description:
    "Upcoming events, volunteer workdays, and fundraisers from conservation organizations along the Walk for the Wild route.",
};

function OrgSocials({ org }: { org: string }) {
  const socials = orgSocials[org];
  if (!socials) return null;

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      {(Object.entries(socials) as [string, string][]).map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${org} on ${platform}`}
          title={platform}
          className="text-stone-500 transition-colors hover:text-pine-700"
        >
          <SocialIcon platform={platform} className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Conservation events
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
        Upcoming events, volunteer workdays, and fundraisers from organizations
        along the route.
      </p>

      <ul className="mt-10 space-y-4 md:hidden">
        {conservationEvents.map((event) => (
          <li
            key={`${event.sort}-${event.name}`}
            className="rounded-lg border border-stone-200 bg-white p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
              {event.date}
            </p>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-semibold text-ink underline underline-offset-4 hover:text-pine-700"
            >
              {event.name}
            </a>
            <p className="mt-1 text-sm text-stone-500">
              {event.type} · {event.location}
            </p>
            <p className="mt-2 text-sm text-stone-500">
              {event.org} · {event.region}
            </p>
            <OrgSocials org={event.org} />
          </li>
        ))}
      </ul>

      <div className="mt-10 hidden overflow-hidden rounded-lg border border-stone-200 bg-white md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-pine-100 text-xs uppercase tracking-wide text-pine-800">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Event</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Location</th>
              <th className="px-4 py-3 font-semibold">Organization</th>
              <th className="hidden px-4 py-3 font-semibold xl:table-cell">
                Region
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {conservationEvents.map((event) => (
              <tr key={`${event.sort}-${event.name}`} className="align-top">
                <td className="whitespace-nowrap px-4 py-3 font-medium text-ink">
                  {event.date}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline underline-offset-4 hover:text-pine-700"
                  >
                    {event.name}
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-stone-500">
                  {event.type}
                </td>
                <td className="px-4 py-3 text-stone-500">{event.location}</td>
                <td className="px-4 py-3 text-stone-500">
                  <div>{event.org}</div>
                  <OrgSocials org={event.org} />
                </td>
                <td className="hidden px-4 py-3 text-stone-500 xl:table-cell">
                  {event.region}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs leading-5 text-stone-500">
        Dates and details come from each organization&apos;s site and should be
        confirmed before publishing.
      </p>
    </Container>
  );
}
