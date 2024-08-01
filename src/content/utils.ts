import type { Location, MonthDate } from "@content/config";
import { type CollectionEntry, type CollectionKey } from "astro:content";

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

export function sortByDate(
  a: MonthDate | undefined,
  b: MonthDate | undefined,
): number {
  if (!a || !b) {
    return a ? -1 : b ? 1 : 0;
  }

  return a.year === b.year ? a.month - b.month : a.year - b.year;
}

export function formatLocation(location: Location): string {
  return `${location.city}, ${location.country}`;
}

export function groupEntriesByDataField<T extends CollectionKey>(
  entries: CollectionEntry<T>[],
  field: keyof CollectionEntry<T>["data"],
): Map<string | number, CollectionEntry<T>[]> {
  const groups = new Map<string | number, CollectionEntry<T>[]>();
  for (const entry of entries) {
    let valueKey: string | number = "";
    // TODO: Why is this cast necessary?
    const value: unknown = entry.data[field as keyof typeof entry.data];
    if (typeof value === "string" || typeof value === "number") {
      valueKey = value;
    }
    const group = groups.get(valueKey);
    if (group) {
      group.push(entry);
    } else {
      groups.set(valueKey, [entry]);
    }
  }
  return groups;
}
