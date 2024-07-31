import type { CollectionEntry, CollectionKey } from "astro:content";
import { atom } from "nanostores";

function createSelectedEntryStore() {
  const selectedEntry = atom<CollectionEntry<CollectionKey> | null>(null);

  return {
    ...selectedEntry,
    clear: () => selectedEntry.set(null),
  };
}

export const selectedEntry = createSelectedEntryStore();
