import type { Metadata } from "next";
import { Container } from "@/components/container";
import { conservationEvents } from "@/content/events";

export const metadata: Metadata = {
  title: "Conservation events",
  description:
    "Upcoming events, volunteer workdays, and fundraisers from conservation organizations along the Walk for the Wild route.",
};

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

      <div className="mt-10 overflow-hidden rounded-lg border border-stone-200 bg-white">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-pine-100 text-xs uppercase tracking-wide text-pine-800">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Event</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Location</th>
              <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                Organization
              </th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">
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
                <td className="hidden px-4 py-3 text-stone-500 sm:table-cell">
                  {event.org}
                </td>
                <td className="hidden px-4 py-3 text-stone-500 lg:table-cell">
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
