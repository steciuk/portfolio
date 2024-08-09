<script lang="ts">
  import Marker from "@components/Timeline/markers/Marker.svelte";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { MonthDate } from "@content/config";
  import type { CollectionEntry, CollectionKey } from "astro:content";

  export let monthDates: MonthDate[];

  function isSelected(
    selectedEntry: CollectionEntry<CollectionKey> | null,
    month: number,
    year: number,
  ): boolean {
    if (!selectedEntry) return false;
    if (
      selectedEntry.data.end?.month === month &&
      selectedEntry.data.end?.year === year
    )
      return true;
    if (
      selectedEntry.data.start.month === month &&
      selectedEntry.data.start.year === year
    )
      return true;
    return false;
  }
</script>

<div
  class="col-start-1 grid grid-cols-1 grid-rows-subgrid gap-y-0"
  style="grid-row: 1 / -1;"
>
  <Marker
    monthDate="now"
    anySelected={!!$selectedEntry}
    selected={!!$selectedEntry && $selectedEntry.data.end === undefined}
    rowNum={1}
  />
  <div class="relative row-start-2 translate-y-1/2 self-end justify-self-end">
    ...
  </div>
  {#each monthDates as { month, year }, i}
    <Marker
      monthDate={{ month, year }}
      anySelected={!!$selectedEntry}
      selected={isSelected($selectedEntry, month, year)}
      rowNum={i + 3}
    />
  {/each}
</div>
