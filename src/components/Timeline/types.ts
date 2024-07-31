import type { CollectionEntry } from "astro:content";

export type EntryMeasurements = {
  startHeightPx: number;
  heightPx: number;
};

export type TimelinableEntry = CollectionEntry<
  "education" | "jobs" | "projects"
>;
