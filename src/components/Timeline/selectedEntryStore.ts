import type { CollectionEntry, CollectionKey } from "astro:content";
import { atom } from "nanostores";

function createSelectedEntryStore() {
  const selectedEntry = atom<SelectedEntry>(null);

  return {
    ...selectedEntry,
    clear: () => selectedEntry.set(null),
  };
}

export const selectedEntry = createSelectedEntryStore();
export type SelectedEntry = CollectionEntry<CollectionKey> | null
