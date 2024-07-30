import type { EntryId } from "@components/Timeline/types";
import type { CollectionEntry, ContentCollectionKey } from "astro:content";

export function getEntryId(
  entry: CollectionEntry<ContentCollectionKey>,
): EntryId {
  return `${entry.collection}_${entry.id}`;
}
