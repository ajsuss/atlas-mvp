export type EventType = "war" | "science" | "politics" | "culture" | "economy";
export type TrustState = "verified" | "contested" | "emerging";

export type MapPoint = { x: number; y: number; region: string };

export type TimelineItem = { year: number; label: string };

export type Event = {
  id: string;
  slug: string;
  title: string;
  date: string;
  type: EventType;
  trust: TrustState;
  map: MapPoint;
  summary: string;
  hero: string;
  overview: string;
  causes: string[];
  consequences: string[];
  keywords: string[];
  relatedEventIds: string[];
  timeline: TimelineItem[];
  sources: string[];
  aiContext: string;
};

export type Country = {
  slug: string;
  name: string;
  profile: string;
  keyEvents: string[];
};

export type Person = {
  slug: string;
  name: string;
  profile: string;
  relatedEvents: string[];
};
