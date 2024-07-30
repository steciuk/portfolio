import type { ContentCollectionKey } from "astro:content";

export type EntryMeasurements = {
  startHeightPx: number;
  heightPx: number;
};

export type EntryId = `${ContentCollectionKey}_${string}`;
