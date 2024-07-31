<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type {
    EntryMeasurements,
    TimelinableEntry,
  } from "@components/Timeline/types";
  import { getEntryBgColorClass } from "@components/Timeline/utils";

  export let entry: TimelinableEntry & EntryMeasurements;

  const bgColorClass = getEntryBgColorClass(entry);

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
