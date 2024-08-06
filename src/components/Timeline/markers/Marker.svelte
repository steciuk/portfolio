<script lang="ts">
  import type { MonthDate } from "@content/config";
  import { scale } from "svelte/transition";

  export let monthDate: MonthDate | "now";
  export let selected: boolean;
  export let anySelected: boolean;
  export let rowNum: number;

  const text =
    monthDate === "now"
      ? "Now"
      : new Date(monthDate.year, monthDate.month - 1).toLocaleString("en-us", {
          month: "short",
        });
</script>

<div
  class="relative flex min-w-[80px] translate-y-1/2 items-center justify-end gap-2 self-end justify-self-end md:gap-4"
  style="grid-row-start: {rowNum};"
>
  <div
    class="relative origin-right text-right text-lg transition-transform"
    class:font-thin={!selected}
    class:scale-75={anySelected && !selected}
    class:scale-125={selected}
    class:font-bold={selected}
  >
    {text}
    {#if selected && monthDate !== "now"}
      <div
        class="absolute right-0 top-3/4 text-xs text-accent"
        transition:scale={{ duration: 100 }}
      >
        {monthDate.year}
      </div>
    {/if}
  </div>
  <div class="inline-block h-0.5 w-4 bg-foreground"></div>
</div>
