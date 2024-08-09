import type { CollectionEntry } from "astro:content";

export type TimelineableCollection = "education" | "jobs" | "projects";
export type TimelineableEntry = CollectionEntry<TimelineableCollection>;
