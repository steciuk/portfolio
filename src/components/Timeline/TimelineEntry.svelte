<script lang="ts">
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { EntryMeasurements } from "@components/Timeline/types";
  import { getEntryId } from "@components/Timeline/utils";
  import type { CollectionEntry } from "astro:content";
  import { fade } from "svelte/transition";

  export let entry: CollectionEntry<"education" | "jobs" | "projects"> &
    EntryMeasurements;

  let bgColorClass = "bg-primary";
  switch (entry.collection) {
    case "education":
      bgColorClass = "bg-primary";
      break;
    case "jobs":
      bgColorClass = "bg-secondary";
      break;
    case "projects":
      bgColorClass = "bg-accent";
      break;
  }

  function handleOpenClick() {
    selectedEntry.set(entry);
  }

  $: isCurrentEntry =
    $selectedEntry && getEntryId($selectedEntry) === getEntryId(entry);
</script>

<button
  on:click|stopPropagation={handleOpenClick}
  class="entry absolute w-full rounded-sm border-2 shadow-md transition-transform {bgColorClass} {isCurrentEntry
    ? 'border-primary'
    : 'border-primary/0'}"
  style="height: {entry.heightPx}px; bottom: {entry.startHeightPx}px; transition: border-color 0.2s"
/>
{#if isCurrentEntry}
  <div
    class="fixed bottom-4 z-10 rounded-sm {bgColorClass} left-1/2 w-11/12 -translate-x-1/2 cursor-auto"
    transition:fade={{ duration: 100 }}
  >
    <slot />
  </div>
{/if}
