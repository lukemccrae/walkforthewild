export type Update = {
  date: string;
  title: string;
  body: string;
  href?: string;
  source?: string;
};

// Trail updates / journal. Add new entries to the top.
// These are seeded from verified milestones \u2014 replace and extend as the walk goes on.
export const updates: Update[] = [
  {
    date: "May 25, 2026",
    title: "Day 1 \u2014 the trek begins",
    body: "Wesley stepped off from West Quoddy Head State Park in Maine, the easternmost point of the contiguous United States, beginning the first walk to the westernmost point.",
    href: "https://www.iheart.com/podcast/269-yeti-walks-into-basecamp-t-148017635/episode/e93-the-trek-begins--334728972/",
    source: "Yeti Walks Into Basecamp, E93",
  },
  {
    date: "2026",
    title: "1,300 miles \u2014 Maine to New York",
    body: "The first major check-in: 1,300 miles down, moving through New England and into New York, with the North Country Trail ahead.",
    href: "https://www.iheart.com/podcast/269-yeti-walks-into-basecamp-t-148017635/episode/e107-walk-for-the-wild-me-to-ny-1300-miles-hiked-part-1-w-wesley-megaman-tils-342748752",
    source: "Yeti Walks Into Basecamp, E107 & E108",
  },
  {
    date: "Aug 2026",
    title: "Featured on The Route Makers",
    body: "Wesley appears in \u201cThe Proving Ground,\u201d episode 2 of the Hiker Trash Radio documentary series, alongside Andrew Skurka, Kevin Koski, and Rue McKenrick.",
    href: "https://hikertrashradio.com/episodes/the-route-makers-episode-2-the-proving-ground",
    source: "Hiker Trash Radio",
  },
];
