export type Stat = {
  value: string;
  label: string;
};

export type Hike = {
  name: string;
  note?: string;
};

export type PodcastAppearance = {
  show: string;
  title: string;
  href: string;
  date: string;
  platform?: string;
  format?: "audio" | "written";
};

export type PressItem = {
  outlet: string;
  title: string;
  href?: string;
  date?: string;
};

export const wesley = {
  fullName: "Wesley Tils",
  trailName: "Megaman",
  hometown: "Blue Springs, Missouri, USA",
  age: 33,
  profession: "Archaeologist & long-distance backpacker",
  intro:
    "Wesley \u201cMegaman\u201d Tils is one of the most experienced thru-hikers in the United States. In a decade of long-distance hiking he has completed 20 thru-hikes totalling roughly 15,000 miles, traversed every major physiographic region of the lower 48, and earned the Triple Crown.",

  bio: [
    "Wesley grew up in the Mormon church in Missouri. He left to become a pro boxer, returned for a trial of faith as a missionary in Northern California, and ultimately left the mission to live wild on the Pacific Crest Trail in 2014 \u2014 an episode that earned him the nickname \u201cThe Runaway Missionary.\u201d His path into thru-hiking and out of the church is chronicled in his e-book and podcast appearances.",
    "Off the trail, Wesley works as an archaeologist, helping preserve wilderness areas while living a nomadic lifestyle between hikes. He is the creator and first thru-hiker of the Fourth Crown Route, a self-made ~2,900-mile Mexico-to-Canada route combining the Arizona Trail and the Idaho Centennial Trail.",
  ],

  quote:
    "The wild is our home, and we have been removed from it and tricked into destroying it. We have to do our part in restoring our connection with nature. This hike is to bring all people together. It is my way of doing what I can to make an impact.",

  stats: [
    { value: "20", label: "Thru-hikes completed" },
    { value: "15,000", label: "Miles hiked (approx.)" },
    { value: "Triple Crown", label: "AT \u00b7 PCT \u00b7 CDT" },
    { value: "8,000", label: "Miles on this expedition" },
  ] satisfies Stat[],

  notableHikes: [
    { name: "Triple Crown", note: "Appalachian Trail, Pacific Crest Trail, Continental Divide Trail" },
    { name: "Fourth Crown Route", note: "Creator and first thru-hiker \u2014 Arizona Trail + Idaho Centennial Trail (~2,900 mi)" },
    { name: "Hayduke Trail" },
    { name: "Maah Daah Hey Trail" },
    { name: "River to River Trail" },
    { name: "Ozark Trail", note: "Fall 2020" },
  ] satisfies Hike[],

  funFacts: [
    "Survived a grizzly bear attack on the CDT (2018), hiking without bear spray",
    "Former professional boxer",
    "One of 10 siblings",
    "No-cook minimalist \u2014 historically fuelled by chocolate and Slim Jims and unfiltered trail water",
    "Filming a documentary during Walk for the Wild",
  ],

  podcasts: [
    {
      show: "Backpacker Radio",
      title: "Fighting a Grizzly Bear and Leaving the Mormon Church",
      href: "https://thetrek.co/fighting-a-grizzly-bear-and-leaving-the-mormon-church-with-wesley-megaman-tils-bpr-324",
      date: "Sep 22, 2025",
      platform: "The Trek",
    },
    {
      show: "Backpacker Radio #324",
      title: "Fighting a Grizzly Bear and Leaving the Mormon Church",
      href: "https://open.spotify.com/episode/5Ddn7f4J179Z1l15awzZV4",
      date: "Sep 22, 2025",
      platform: "Spotify",
    },
    {
      show: "Backpacker Radio #324",
      title: "Fighting a Grizzly Bear and Leaving the Mormon Church",
      href: "https://www.youtube.com/watch?v=Bjw6wAg56Wo",
      date: "Sep 22, 2025",
      platform: "YouTube",
    },
    {
      show: "Hiker Trash Radio",
      title: "The Runaway Missionary",
      href: "https://hikertrashradio.com/episodes/classic-doc-the-runaway-missionary-wesley-megaman-tils",
      date: "Dec 2, 2024",
    },
    {
      show: "Hiker Trash Radio",
      title: "The Runaway Missionary (written)",
      href: "https://hikertrashradio.com/blog/the-runaway-missionary-wesley-megaman-tils",
      date: "Apr 18, 2024",
      format: "written",
    },
    {
      show: "Hiker Trash Radio",
      title: "Feeling Bold, Part I",
      href: "https://hikertrashradio.com/episodes/feeling-bold-wesley-megaman-tils-part-i",
      date: "Aug 16, 2025",
    },
    {
      show: "Hiker Trash Radio",
      title: "Feeling Bold, Part II",
      href: "https://hikertrashradio.com/episodes/feeling-bold-wesley-megaman-tils-part-ii",
      date: "Aug 16, 2025",
    },
    {
      show: "Hiker Trash Radio",
      title: "A Heroic Dose of Wilderness Experience",
      href: "https://hikertrashradio.com/episodes/a-heroic-dose-of-wilderness-experience-wesley-megaman-tils",
      date: "Oct 14, 2023",
    },
    {
      show: "Hiker Trash Radio",
      title: "The Last 10",
      href: "https://hikertrashradio.com/episodes/the-last-10-wesley-megaman-tils",
      date: "Aug 6, 2025",
    },
    {
      show: "Hiker Trash Radio",
      title: "The Route Makers, Ep. 2 — \u201cThe Proving Ground\u201d",
      href: "https://hikertrashradio.com/episodes/the-route-makers-episode-2-the-proving-ground",
      date: "Aug 28, 2026",
      platform: "with Andrew Skurka, Kevin Koski, Rue McKenrick",
    },
    {
      show: "Hiker Trash Radio",
      title: "The Full Traverse \u2014 Hike or Die",
      href: "https://bleav.com/shows/hiker-trash-radio/episodes/the-full-traverse-hike-or-die-with-wesley-megaman-tils/",
      date: "Jul 6, 2026",
    },
    {
      show: "Yeti Walks Into Basecamp",
      title: "E93 \u2014 The Trek Begins",
      href: "https://www.iheart.com/podcast/269-yeti-walks-into-basecamp-t-148017635/episode/e93-the-trek-begins--334728972/",
      date: "May 25, 2026",
    },
    {
      show: "Yeti Walks Into Basecamp",
      title: "E107 \u2014 Walk for the Wild: ME to NY, 1,300 Miles Hiked (Part 1)",
      href: "https://www.iheart.com/podcast/269-yeti-walks-into-basecamp-t-148017635/episode/e107-walk-for-the-wild-me-to-ny-1300-miles-hiked-part-1-w-wesley-megaman-tils-342748752",
      date: "Aug 31, 2026",
    },
    {
      show: "Yeti Walks Into Basecamp",
      title: "E108 \u2014 Walk for the Wild: ME to NY, 1,300 Miles Hiked (Part 2)",
      href: "https://www.iheart.com/podcast/269-yeti-walks-into-basecamp-t-148017635/episode/e108-walk-for-the-wild-me-to-ny-1300-miles-hiked-part-2-w-wesley-megaman-tils-343339092",
      date: "Sep 7, 2026",
    },
  ] satisfies PodcastAppearance[],

  press: [
    {
      outlet: "Explorersweb",
      title: "Walking 12,800Km Across America",
      href: "https://explorersweb.com/walking-12800km-across-america/",
      date: "Jun 2026",
    },
    {
      outlet: "Explorersweb",
      title: "Long-Distance Hiking Roundup",
      href: "https://explorersweb.com/long-distance-hiking-roundup-3",
      date: "Aug 2026",
    },
    {
      outlet: "The Trek",
      title: "Backpacker Radio #324 write-up",
      href: "https://thetrek.co/fighting-a-grizzly-bear-and-leaving-the-mormon-church-with-wesley-megaman-tils-bpr-324",
      date: "Sep 2025",
    },
    {
      outlet: "Terrain Magazine",
      title: "Ozark Trail thru-hiker profile",
      date: "2021",
    },
    {
      outlet: "Koktejl.cz",
      title: "International feature",
      date: "Jun 2026",
    },
    {
      outlet: "Amazon Kindle",
      title: "How I Became The King of Hiker Trash (e-book)",
    },
  ] satisfies PressItem[],
} as const;
