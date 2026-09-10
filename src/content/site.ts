export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const site = {
  name: "Walk for the Wild",
  hiker: "Wesley Tils",
  trailName: "Megaman",
  tagline:
    "One hiker. 8,000 miles. The first walk from the easternmost to the westernmost point of the contiguous United States.",
  description:
    "Wesley \u201cMegaman\u201d Tils is walking 8,000 miles across America \u2014 from West Quoddy Head, Maine to Cape Alava, Washington \u2014 to raise money for public lands and conservation.",

  // Used for absolute URLs in metadata, sitemap, and robots.
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://walkforthewild.org",

  // Primary donation destination. Replace when the final donation link is ready.
  donateUrl: "https://www.gofundme.com/f/jc4wu-walk-for-the-wild",
  donateLabel: "Donate",

  // TODO: replace with the embedded tracker snippet Wesley supplies.
  // See src/content/tracker.ts

  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/vagrant_viking93/",
      handle: "@vagrant_viking93",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@vagrant_viking",
      handle: "@vagrant_viking",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/c/WildWes",
      handle: "WildWes",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/fuffin.noonoo",
      handle: "Wesley Tils",
    },
  ] satisfies SocialLink[],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "The Expedition", href: "/expedition" },
    { label: "Updates", href: "/updates" },
    { label: "Media", href: "/media" },
    { label: "Donate", href: "/donate" },
  ] satisfies NavItem[],
} as const;

export type Site = typeof site;
