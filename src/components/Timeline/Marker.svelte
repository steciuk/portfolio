<script lang="ts">
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { MonthDate } from "@content/config";
  import { scale } from "svelte/transition";

  export let heightPx: number;
  export let monthDate: MonthDate | "now";

  let isSelected = false;
  $: (() => {
    if (!$selectedEntry) {
      isSelected = false;
      return;
    }

    if (monthDate === "now") {
      isSelected = $selectedEntry.data.end === undefined;
      return;
    }

    if (
      $selectedEntry.data.start.month === monthDate.month &&
      $selectedEntry.data.start.year === monthDate.year
    ) {
      isSelected = true;
      return;
    }

    if (
      $selectedEntry.data.end?.month === monthDate.month &&
      $selectedEntry.data.end?.year === monthDate.year
    ) {
      isSelected = true;
      return;
    }

    isSelected = false;
  })();

  const text =
    monthDate === "now"
      ? "Now"
      : new Date(monthDate.year, monthDate.month - 1).toLocaleString("en-us", {
          month: "long",
        });
</script>

<div class={"flex items-center gap-2"} style="height: {heightPx}px;">
  <div
    class="origin-right text-right transition-transform {$selectedEntry
      ? isSelected
        ? 'scale-110'
        : 'scale-75'
      : ''}"
    class:font-bold={isSelected}
  >
    {text}
  </div>
  <div class="inline-block h-0.5 w-4 bg-foreground"></div>
</div>
