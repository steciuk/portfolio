import type { Location, MonthDate } from "@content/config";
import {
  getCollection,
  type CollectionEntry,
  type ContentEntryMap,
} from "astro:content";

export function formatDate(date: MonthDate): string {
  const month = date.month < 10 ? `0${date.month}` : date.month;
  return `${month}/${date.year}`;
}

export function formatPeriod(
  start: MonthDate,
  end?: MonthDate | undefined,
): string {
  return `${formatDate(start)} - ${end ? formatDate(end) : "Now"}`;
}

export function sortByDate(a: MonthDate, b: MonthDate): number {
  return a.year === b.year ? a.month - b.month : a.year - b.year;
}

export function formatLocation(location: Location): string {
  return `${location.city}, ${location.country}`;
}
