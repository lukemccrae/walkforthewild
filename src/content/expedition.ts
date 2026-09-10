export type ExpeditionSection = {
  name: string;
  detail: string;
};

export type Challenge = {
  title: string;
  detail: string;
};

export const expedition = {
  name: "Walk for the Wild",
  goal:
    "Become the first person to walk between the easternmost and westernmost points of the contiguous United States.",
  start: {
    label: "Easternmost point",
    place: "West Quoddy Head State Park, Maine",
  },
  finish: {
    label: "Westernmost point",
    place: "Cape Alava, Washington",
  },
  distanceMiles: 8000,
  distanceKm: 12800,
  durationDays: 500,
  startDate: "May 25, 2026",
  projectedFinish: "November 2027",

  // Manual progress. Update until the live tracker embed is wired up.
  // See src/content/tracker.ts
  progress: {
    milesCompleted: 1300,
    asOf: "Last verified check-in",
  },

  states: [
    "Maine",
    "New Hampshire",
    "Vermont",
    "New York",
    "Pennsylvania",
    "Ohio",
    "Michigan",
    "Wisconsin",
    "Minnesota",
    "North Dakota",
    "Montana",
    "Idaho",
    "Washington",
  ],

  sections: [
    {
      name: "Appalachian Trail",
      detail: "Katahdin to the Long Trail junction",
    },
    {
      name: "North Country Trail",
      detail: "The full route \u2014 roughly 4,800 mi / 7,700 km",
    },
    {
      name: "Pacific Northwest Trail",
      detail: "Roughly 1,200 mi / 1,900 km",
    },
    {
      name: "Off-trail",
      detail: "Roughly 1,000 mi / 1,600 km of unmarked country",
    },
  ] satisfies ExpeditionSection[],

  cause: {
    headline: "Every mile is for public land.",
    body: "The walk raises money for the protection of US public lands, and 100% of documentary profits are donated to conservation organizations.",
  },

  challenges: [
    {
      title: "Winter on the Upper Great Lakes",
      detail:
        "A winter traverse across Michigan, Wisconsin, and Minnesota \u2014 deep snow, lake-effect weather, and long resupply gaps.",
    },
    {
      title: "1,000 miles of grizzly country",
      detail:
        "Roughly 1,600 km of grizzly habitat. Wesley survived a grizzly attack on the Continental Divide Trail in 2018 \u2014 hiking without bear spray.",
    },
    {
      title: "13 states, one continuous line",
      detail:
        "From the Atlantic edge of Maine to the Pacific coast of Washington, on a route that has never been walked end to end.",
    },
  ] satisfies Challenge[],
} as const;
