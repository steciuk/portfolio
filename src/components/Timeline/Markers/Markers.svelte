<script lang="ts">
  import Marker from "@components/Timeline/Markers/Marker.svelte";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { MonthDate } from "@content/config";
  import type { CollectionEntry, CollectionKey } from "astro:content";

  export let totalMonths: number;
  export let latestEnd: MonthDate;
  export let earliestStart: MonthDate;

  const monthDates = Array.from({ length: totalMonths }).map((_, i) => {
    const month = (totalMonths - i - 1 + earliestStart.month) % 12 || 12;
    const year = latestEnd.year - Math.floor((i + 12 - latestEnd.month) / 12);

    return { month, year };
  });

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

  const markerContainerClass =
    "col-start-1 relative translate-y-1/2 self-end justify-self-end";
</script>

<div
  class="col-start-1 grid grid-cols-1 grid-rows-subgrid gap-y-0"
  style="grid-row: 1 / -1;"
>
  <div class="row-start-1 {markerContainerClass}">
    <Marker
      monthDate="now"
      anySelected={!!$selectedEntry}
      selected={!!$selectedEntry && $selectedEntry.data.end === undefined}
    />
  </div>
  <div class="row-start-2 {markerContainerClass}">...</div>
  {#each monthDates as { month, year }, i}
    <!-- {#if month === 1}
    <div class="relative">
      <Marker
        monthDate={{ month, year }}
        anySelected={!!$selectedEntry}
        selected={isSelected($selectedEntry, month, year)}
      />
      <div
        class="pointer-events-none absolute bottom-0 right-4 flex min-h-max origin-center translate-y-1/2 rotate-180 select-none gap-2 text-7xl font-bold text-foreground/10 md:right-6"
        style="writing-mode: vertical-lr; text-orientation: sideways;"
      >
        <span>{`${year - 1}`.slice(2)}</span>
        <span class="font-thin">|</span>
        <span>{`${year}`.slice(2)}</span>
      </div>
    </div>
  {:else} -->
    <div class={markerContainerClass} style="grid-row-start: {i + 3};">
      <Marker
        monthDate={{ month, year }}
        anySelected={!!$selectedEntry}
        selected={isSelected($selectedEntry, month, year)}
      />
    </div>
    <!-- {/if} -->
  {/each}
</div>
