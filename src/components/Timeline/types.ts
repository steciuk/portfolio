import type { CollectionEntry } from "astro:content";

export type TimelinableEntry = CollectionEntry<
  "education" | "jobs" | "projects"
>;
