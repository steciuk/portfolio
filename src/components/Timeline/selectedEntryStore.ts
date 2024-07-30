import type { CollectionEntry, ContentCollectionKey } from "astro:content";
import { writable } from "svelte/store";

function createSelectedEntryStore() {
  const { subscribe, set } =
    writable<null | CollectionEntry<ContentCollectionKey>>(null);
  return {
    subscribe,
    set,
    clear: () => set(null),
  };
}

export const selectedEntry = createSelectedEntryStore();
