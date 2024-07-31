<script lang="ts">
  import Marker from "@components/Timeline/Markers/Marker.svelte";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { MonthDate } from "@content/config";
  import type { CollectionEntry, CollectionKey } from "astro:content";

  export let totalMonths: number;
  export let monthHeightPx: number;
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
</script>

<div class="flex min-w-[110px] flex-col items-end">
  <Marker
    monthDate="now"
    heightPx={monthHeightPx}
    anySelected={!!$selectedEntry}
    selected={!!$selectedEntry && $selectedEntry.data.end === undefined}
  />
  <div class="flex items-center" style="height: {monthHeightPx}px;">...</div>
  {#each monthDates as { month, year }}
    {#if month === 1}
      <div class="relative">
        <Marker
          monthDate={{ month, year }}
          heightPx={monthHeightPx}
          anySelected={!!$selectedEntry}
          selected={isSelected($selectedEntry, month, year)}
        />
        <div
          class="pointer-events-none absolute bottom-0 right-2 flex min-h-max origin-center translate-y-1/2 rotate-180 select-none gap-2 text-7xl font-bold text-foreground/10"
          style="writing-mode: vertical-lr; text-orientation: sideways;"
        >
          <span>{year - 1}</span>
          <span class="font-thin">|</span>
          <span>{year}</span>
        </div>
      </div>
    {:else}
      <Marker
        monthDate={{ month, year }}
        heightPx={monthHeightPx}
        anySelected={!!$selectedEntry}
        selected={isSelected($selectedEntry, month, year)}
      />
    {/if}
  {/each}
</div>
