import { Country, Event, Person } from "@/types/models";

export const events: Event[] = [
  {
    id: "e1",
    slug: "apollo-11-moon-landing",
    title: "Apollo 11 Moon Landing",
    date: "1969-07-20",
    type: "science",
    trust: "verified",
    map: { x: 24, y: 43, region: "North America" },
    summary: "First crewed lunar landing by NASA.",
    hero: "A defining milestone in space exploration and modern geopolitical symbolism.",
    overview: "Apollo 11 marked the first successful human landing on the moon.",
    causes: ["Space race escalation", "Cold War innovation funding", "Advances in aerospace systems"],
    consequences: ["Massive STEM inspiration", "Satellite-era acceleration", "US scientific prestige"],
    keywords: ["NASA", "Neil Armstrong", "Cold War", "Space Race"],
    relatedEventIds: ["e2"],
    timeline: [
      { year: 1961, label: "Kennedy moon goal declared" },
      { year: 1969, label: "Lunar landing" },
      { year: 1972, label: "Final Apollo mission" },
    ],
    sources: ["NASA archives", "Smithsonian Air and Space collection"],
    aiContext: "AI context suggests this event strongly shifted global perception of computational engineering capability.",
  },
  {
    id: "e2",
    slug: "fall-of-berlin-wall",
    title: "Fall of the Berlin Wall",
    date: "1989-11-09",
    type: "politics",
    trust: "verified",
    map: { x: 52, y: 35, region: "Europe" },
    summary: "Symbolic collapse of East-West division in Germany.",
    hero: "A pivotal inflection point in the end stage of the Cold War.",
    overview: "The Berlin Wall opened after prolonged civic pressure and political change.",
    causes: ["Economic pressure in Eastern Bloc", "Pro-democracy movements", "Policy reforms"],
    consequences: ["German reunification", "Soviet influence decline", "European political realignment"],
    keywords: ["Germany", "Cold War", "Reunification", "Eastern Europe"],
    relatedEventIds: ["e1", "e3"],
    timeline: [
      { year: 1961, label: "Wall construction" },
      { year: 1989, label: "Border crossings opened" },
      { year: 1990, label: "Formal reunification" },
    ],
    sources: ["Bundesarchiv", "UN historical records"],
    aiContext: "AI context classifies this as a system-level transition event with high downstream institutional effects.",
  },
  {
    id: "e3",
    slug: "global-financial-crisis-2008",
    title: "Global Financial Crisis",
    date: "2008-09-15",
    type: "economy",
    trust: "contested",
    map: { x: 20, y: 48, region: "Global" },
    summary: "Systemic financial instability triggered by credit market collapse.",
    hero: "A modern stress test for interconnected institutions and governance models.",
    overview: "The collapse of major financial institutions spread through global markets.",
    causes: ["Subprime exposure", "Derivatives opacity", "Regulatory blind spots"],
    consequences: ["Recession", "Policy reform", "Public trust erosion"],
    keywords: ["Lehman", "Credit", "Regulation", "Liquidity"],
    relatedEventIds: ["e2"],
    timeline: [
      { year: 2007, label: "Credit stress emerges" },
      { year: 2008, label: "Major failures" },
      { year: 2010, label: "Regulatory responses" },
    ],
    sources: ["IMF reports", "Bank of England studies"],
    aiContext: "AI context marks this event as a high-cascade-risk example in networked economies.",
  },
];

export const countries: Country[] = [
  {
    slug: "germany",
    name: "Germany",
    profile: "A central European state with a pivotal role in modern political and economic architecture.",
    keyEvents: ["fall-of-berlin-wall"],
  },
];

export const people: Person[] = [
  {
    slug: "neil-armstrong",
    name: "Neil Armstrong",
    profile: "American astronaut and first human to walk on the Moon.",
    relatedEvents: ["apollo-11-moon-landing"],
  },
];

export const resolutions = ["century", "decade", "year", "month", "day", "hour", "minute", "second"] as const;

// TODO: Replace static arrays with backend-powered paginated APIs.
// TODO: Add semantic search index integration for keyword/entity lookup.
// TODO: Connect AI context to model-backed retrieval + citation pipelines.
