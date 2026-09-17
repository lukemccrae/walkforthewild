export type ConservationEvent = {
  name: string;
  date: string;
  sort: string;
  type: "Event" | "Workday" | "Fundraiser";
  location: string;
  org: string;
  region: string;
  link: string;
};

const events: ConservationEvent[] = [
  { name: "Annual Celebration 2026", date: "Sep 15, 2026", sort: "2026-09-15", type: "Fundraiser", location: "Highland Lodge, Greensboro, VT", org: "Vermont Land Trust", region: "Vermont", link: "https://vlt.org/events/annual-celebration-2026/" },
  { name: "Chapter meetings (Great Falls, Bozeman, Kalispell)", date: "Sep 15, 2026", sort: "2026-09-15", type: "Event", location: "Great Falls / Bozeman / Kalispell, MT", org: "Wild Montana", region: "Montana", link: "https://wildmontana.org/events/" },
  { name: "Volunteer Workday: Rocky Lake Preserve", date: "Sep 16, 2026", sort: "2026-09-16", type: "Workday", location: "Whiting, ME", org: "Maine Coast Heritage Trust", region: "Maine", link: "https://www.mcht.org/events/" },
  { name: "Lower Cold Lake Hike (Missions)", date: "Sep 16, 2026", sort: "2026-09-16", type: "Event", location: "Seeley Lake area, MT", org: "Wild Montana", region: "Montana", link: "https://wildmontana.org/events/" },
  { name: "Film premiere: Shared Waters", date: "Sep 16, 2026", sort: "2026-09-16", type: "Event", location: "Roxy Theater, Missoula, MT", org: "Idaho Conservation League", region: "Idaho", link: "https://idahoconservation.org/events" },
  { name: "Valley Brook Restoration Project", date: "Sep 17, 2026", sort: "2026-09-17", type: "Workday", location: "Vermont", org: "Vermont Land Trust", region: "Vermont", link: "https://vlt.org/events/" },
  { name: "Blue Blaze Academy Volunteer Training", date: "Sep 17–20", sort: "2026-09-17", type: "Workday", location: "Solon Springs, WI", org: "North Country Trail Association", region: "Michigan", link: "https://northcountrytrail.org/events/" },
  { name: "Crooked River Chapter Work Party", date: "Sep 17–21", sort: "2026-09-17", type: "Workday", location: "West Branch State Park, OH", org: "Buckeye Trail Association", region: "Ohio", link: "https://www.buckeyetrail.org/events" },
  { name: "Equinox Gravel Weekend", date: "Sep 18–20", sort: "2026-09-18", type: "Event", location: "Medawisla Lodge, ME", org: "Appalachian Mountain Club", region: "New Hampshire", link: "https://www.outdoors.org/events/" },
  { name: "2026 Fall Outing", date: "Sep 18–20", sort: "2026-09-18", type: "Event", location: "Upper Saranac Lake, NY", org: "Adirondack Mountain Club", region: "New York", link: "https://adk.corsizio.com/event/6977a22036890519ab1cdac1" },
  { name: "Pawpaw Fruit Picking Hike", date: "Sep 19, 2026", sort: "2026-09-19", type: "Event", location: "Harpers Ferry, WV", org: "Appalachian Trail Conservancy", region: "Maine", link: "https://appalachiantrail.org/event/pawpaw-picking-hike/" },
  { name: "Long Trail Day (hike-a-thon)", date: "Sep 19, 2026", sort: "2026-09-19", type: "Fundraiser", location: "Statewide, VT", org: "Green Mountain Club", region: "Vermont", link: "https://secure.qgiv.com/event/longtrailday2026/" },
  { name: "AMC 150 Finale", date: "Sep 19, 2026", sort: "2026-09-19", type: "Event", location: "Little Lyford Lodge, ME", org: "Appalachian Mountain Club", region: "New Hampshire", link: "https://www.outdoors.org/events/" },
  { name: "Trail Maintenance Work Bee – Susan Creek", date: "Sep 19, 2026", sort: "2026-09-19", type: "Workday", location: "Susan Creek, MI", org: "Little Traverse Conservancy", region: "Michigan", link: "https://landtrust.org/events/" },
  { name: "Boise Pride Festival", date: "Sep 19–20", sort: "2026-09-19", type: "Event", location: "Ann Morrison Park, Boise, ID", org: "Idaho Conservation League", region: "Idaho", link: "https://idahoconservation.org/events" },
  { name: "Michigan Trails Week Work Session", date: "Sep 19–25", sort: "2026-09-19", type: "Workday", location: "Michigan", org: "North Country Trail Association", region: "Michigan", link: "https://northcountrytrail.org/events/" },
  { name: "Sawtooth NRA End-of-Season Cleanup", date: "Sep 19–27", sort: "2026-09-19", type: "Workday", location: "Sawtooth NRA, ID (Smiley Creek)", org: "Idaho Conservation League", region: "Idaho", link: "https://idahoconservation.org/volunteer" },
  { name: "Volunteer Appreciation Party", date: "Sep 20, 2026", sort: "2026-09-20", type: "Event", location: "Sacred Waters Brewing, Kalispell, MT", org: "Bob Marshall Wilderness Foundation", region: "Montana", link: "https://www.bmwf.org/events" },
  { name: "Fall Equinox Sunrise", date: "Sep 22, 2026", sort: "2026-09-22", type: "Event", location: "Michigan", org: "Little Traverse Conservancy", region: "Michigan", link: "https://landtrust.org/events/" },
  { name: "Community and Conservation", date: "Sep 22, 2026", sort: "2026-09-22", type: "Event", location: "Priest River Library, ID", org: "Idaho Conservation League", region: "Idaho", link: "https://idahoconservation.org/events" },
  { name: "Raise a Pint to Conservation!", date: "Sep 24, 2026", sort: "2026-09-24", type: "Fundraiser", location: "Honeoye, NY", org: "Finger Lakes Land Trust", region: "New York", link: "https://www.fllt.org/events/raise-a-pint-to-conservation-5/" },
  { name: "A Tale of Two Land Trusts", date: "Sep 24, 2026", sort: "2026-09-24", type: "Event", location: "Skaneateles, NY", org: "Finger Lakes Land Trust", region: "New York", link: "https://www.fllt.org/events/a-tale-of-two-land-trusts/" },
  { name: "Garden Clean-Up and Mum Planting", date: "Sep 24, 2026", sort: "2026-09-24", type: "Workday", location: "Pittsburgh, PA", org: "Western Pennsylvania Conservancy", region: "Pennsylvania", link: "https://waterlandlife.org/events-volunteer-opportunities/" },
  { name: "Celebrate Public Lands Day", date: "Sep 25, 2026", sort: "2026-09-25", type: "Event", location: "Damascus Trail Center, VA", org: "Appalachian Trail Conservancy", region: "Maine", link: "https://appalachiantrail.org/event/celebrate-public-lands-day/" },
  { name: "Mushroom Walk", date: "Sep 25, 2026", sort: "2026-09-25", type: "Event", location: "Erickson Fields Preserve, Rockport, ME", org: "Maine Coast Heritage Trust", region: "Maine", link: "https://www.mcht.org/events/" },
  { name: "Tip of the Mitt Full Moon Walk", date: "Sep 25, 2026", sort: "2026-09-25", type: "Event", location: "The Headlands, MI", org: "Little Traverse Conservancy", region: "Michigan", link: "https://landtrust.org/events/" },
  { name: "Fall Stewardship Weekend", date: "Sep 25–27", sort: "2026-09-25", type: "Workday", location: "North Cascades, WA", org: "North Cascades Institute", region: "Washington", link: "https://ncascades.org/signup/programs/fall-stewardship-weekend" },
  { name: "Leave No Trace on the Appalachian Trail", date: "Sep 26, 2026", sort: "2026-09-26", type: "Event", location: "Harpers Ferry, WV", org: "Appalachian Trail Conservancy", region: "Maine", link: "https://appalachiantrail.org/event/leave-no-trace-on-the-appalachian-trail/" },
  { name: "125th Annual Meeting", date: "Sep 26, 2026", sort: "2026-09-26", type: "Event", location: "The Rocks, Bethlehem, NH", org: "Forest Society of New Hampshire", region: "New Hampshire", link: "https://www.forestsociety.org/annualmeeting" },
  { name: "Blue Blaze Festival (National Public Lands Day)", date: "Sep 26, 2026", sort: "2026-09-26", type: "Event", location: "Shawnee, OH", org: "Buckeye Trail Association", region: "Ohio", link: "https://www.buckeyetrail.org/events" },
  { name: "National Public Lands Day with PNTA + REI", date: "Sep 26, 2026", sort: "2026-09-26", type: "Event", location: "REI Seattle Flagship, Seattle, WA", org: "Pacific Northwest Trail Association", region: "Montana", link: "https://www.pnt.org/celebrate-national-public-lands-day-with-pnta-and-rei/" },
  { name: "Hike Harrisburg (advocacy day)", date: "Sep 28, 2026", sort: "2026-09-28", type: "Event", location: "PA State Capitol, Harrisburg, PA", org: "Keystone Trails Association", region: "Pennsylvania", link: "https://www.kta-hike.org/events.html" },
  { name: "Volunteer Workday: Biddeford Forest", date: "Sep 29, 2026", sort: "2026-09-29", type: "Workday", location: "Biddeford, ME", org: "Maine Coast Heritage Trust", region: "Maine", link: "https://www.mcht.org/events/" },
  { name: "The Great Kula Dance Experiment", date: "Sep 30, 2026", sort: "2026-09-30", type: "Fundraiser", location: "Online", org: "Washington Trails Association", region: "Washington", link: "https://www.wta.org/get-involved/events" },
  { name: "Mammoth Hike Challenge", date: "Oct 1, 2026", sort: "2026-10-01", type: "Event", location: "Statewide, WI", org: "Ice Age Trail Alliance", region: "Wisconsin", link: "https://www.iceagetrail.org/mammoth-hike-challenge/" },
  { name: "Talks & Treks: Nature Photography", date: "Oct 2, 2026", sort: "2026-10-02", type: "Event", location: "Roy H. Park Preserve, Dryden, NY", org: "Finger Lakes Land Trust", region: "New York", link: "https://www.fllt.org/events/" },
  { name: "Foliage Gravel Weekend", date: "Oct 2–4", sort: "2026-10-02", type: "Event", location: "Gorman Chairback Lodge, ME", org: "Appalachian Mountain Club", region: "New Hampshire", link: "https://www.outdoors.org/events/" },
  { name: "Pinchot Trail Slackpack", date: "Oct 2–4", sort: "2026-10-02", type: "Event", location: "Pinchot State Forest, PA", org: "Keystone Trails Association", region: "Pennsylvania", link: "https://www.kta-hike.org/events.html" },
  { name: "Chris Morgan: A Life in the Wild", date: "Oct 3, 2026", sort: "2026-10-03", type: "Event", location: "North Cascades, WA", org: "North Cascades Institute", region: "Washington", link: "https://ncascades.org/signup/calendar" },
  { name: "See the Dark Festival (5th annual)", date: "Oct 4–11", sort: "2026-10-04", type: "Event", location: "Medawisla Lodge, ME", org: "Appalachian Mountain Club", region: "New Hampshire", link: "https://www.outdoors.org/events/" },
  { name: "Glacier Conversation (Zoom)", date: "Oct 7, 2026", sort: "2026-10-07", type: "Event", location: "Online", org: "Glacier National Park Conservancy", region: "Montana", link: "https://glacier.org/events/" },
  { name: "Garden Shed & Pollinator Garden Workday", date: "Oct 7, 2026", sort: "2026-10-07", type: "Workday", location: "Concord, NH", org: "Forest Society of New Hampshire", region: "New Hampshire", link: "https://forestsociety.org/events" },
  { name: "Emerging Leaders Trivia Night", date: "Oct 8, 2026", sort: "2026-10-08", type: "Event", location: "Pennsylvania", org: "Western Pennsylvania Conservancy", region: "Pennsylvania", link: "https://waterlandlife.org/events-volunteer-opportunities/" },
  { name: "DAF Day", date: "Oct 8, 2026", sort: "2026-10-08", type: "Fundraiser", location: "Online", org: "Buckeye Trail Association", region: "Ohio", link: "https://www.buckeyetrail.org/give" },
  { name: "Glacier Photo Contest closes", date: "Oct 8, 2026", sort: "2026-10-08", type: "Event", location: "Online", org: "Glacier National Park Conservancy", region: "Montana", link: "https://glacier.org/photo-contest/" },
  { name: "Fall Gathering (40th anniversary)", date: "Oct 10–11", sort: "2026-10-10", type: "Event", location: "Environmental Learning Center, WA", org: "North Cascades Institute", region: "Washington", link: "https://ncascades.org/discover/north-cascades-institute/40th-anniversary/" },
  { name: "Brewster Ramble 5K", date: "Oct 11, 2026", sort: "2026-10-11", type: "Event", location: "Vermont", org: "Vermont Land Trust", region: "Vermont", link: "https://vlt.org/events/" },
  { name: "R.U.N. In Unity Convening 2026", date: "Oct 13–15", sort: "2026-10-13", type: "Event", location: "Spokane, WA", org: "Idaho Conservation League", region: "Idaho", link: "https://idahoconservation.org/events" },
  { name: "Hiker Happy Hour", date: "Oct 14, 2026", sort: "2026-10-14", type: "Event", location: "Tacoma, WA", org: "Washington Trails Association", region: "Washington", link: "https://www.wta.org/get-involved/events" },
  { name: "The BobFest 2026", date: "Oct 16, 2026", sort: "2026-10-16", type: "Fundraiser", location: "Flathead County Fairgrounds, Kalispell, MT", org: "Bob Marshall Wilderness Foundation", region: "Montana", link: "https://www.bmwf.org/bobfest" },
  { name: "Talks & Treks: Fall Foliage Hike", date: "Oct 16, 2026", sort: "2026-10-16", type: "Event", location: "Lindsay-Parsons Preserve, NY", org: "Finger Lakes Land Trust", region: "New York", link: "https://www.fllt.org/events/" },
  { name: "Land Stewardship at Wattsburg Fen", date: "Oct 17, 2026", sort: "2026-10-17", type: "Workday", location: "Erie County, PA", org: "Western Pennsylvania Conservancy", region: "Pennsylvania", link: "https://waterlandlife.org/events-volunteer-opportunities/" },
  { name: "Keystone Hiking & Outdoor Weekend", date: "Oct 22–25", sort: "2026-10-22", type: "Event", location: "Susquehanna Riverlands, PA", org: "Keystone Trails Association", region: "Pennsylvania", link: "https://www.kta-hike.org/events.html" },
  { name: "Fall Recognition Dinner & Silent Auction", date: "Oct 23, 2026", sort: "2026-10-23", type: "Fundraiser", location: "Michigan", org: "Michigan Nature Association", region: "Michigan", link: "https://www.eventbrite.com/e/2026-fall-recognition-dinner-silent-auction-tickets-1999539453331" },
  { name: "Book Signing (Steven C. Wright)", date: "Oct 24, 2026", sort: "2026-10-24", type: "Event", location: "Harpers Ferry, WV", org: "Appalachian Trail Conservancy", region: "Maine", link: "https://appalachiantrail.org/event/book-signing-steven-c-wright/" },
  { name: "Five Hikes Challenge ends", date: "Oct 31, 2026", sort: "2026-10-31", type: "Event", location: "Statewide, NH", org: "Forest Society of New Hampshire", region: "New Hampshire", link: "https://forestsociety.org/events" },
  { name: "PA Hiking Awards and Volunteer Celebration", date: "Nov 21, 2026", sort: "2026-11-21", type: "Event", location: "Millersburg, PA", org: "Keystone Trails Association", region: "Pennsylvania", link: "https://www.kta-hike.org/events.html" },
  { name: "Giving Tuesday", date: "Dec 1, 2026", sort: "2026-12-01", type: "Fundraiser", location: "Online", org: "North Country Trail Association", region: "Michigan", link: "https://northcountrytrail.org/giving-membership/ways-to-give/" },
  { name: "Beltie Holiday", date: "Dec 5, 2026", sort: "2026-12-05", type: "Event", location: "Aldermere Farm, Rockport, ME", org: "Maine Coast Heritage Trust", region: "Maine", link: "https://www.mcht.org/events/" },
  { name: "North Cascades Night at the Seattle Kraken", date: "Dec 6, 2026", sort: "2026-12-06", type: "Event", location: "Seattle, WA", org: "Washington Trails Association", region: "Washington", link: "https://www.wta.org/get-involved/events" },
];

const todayParts = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Chicago",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
  .formatToParts(new Date())
  .reduce<Record<string, string>>((acc, part) => {
    if (part.type !== "literal") acc[part.type] = part.value;
    return acc;
  }, {});
const todaySort = `${todayParts.year}-${todayParts.month}-${todayParts.day}`;

export const conservationEvents = [...events]
  .filter((event) => event.sort >= todaySort)
  .sort((a, b) => a.sort.localeCompare(b.sort));
