<script lang="ts">
  import type { MonthDate } from "@content/config";
  import { scale } from "svelte/transition";

  export let heightPx: number;
  export let monthDate: MonthDate | "now";
  export let selected: boolean;
  export let anySelected: boolean;

  const text =
    monthDate === "now"
      ? "Now"
      : new Date(monthDate.year, monthDate.month - 1).toLocaleString("en-us", {
          month: "long",
        });
</script>

<div class={"flex items-center gap-2"} style="height: {heightPx}px;">
  <div
    class="relative origin-right text-right transition-transform"
    class:font-thin={!selected}
    class:scale-75={anySelected && !selected}
    class:scale-110={selected}
    class:font-bold={selected}
  >
    {text}
    {#if selected && monthDate !== "now"}
      <div
        class="absolute right-0 text-xs text-primary"
        transition:scale={{ duration: 100 }}
      >
        {monthDate.year}
      </div>
    {/if}
  </div>
  <div class="inline-block h-0.5 w-4 bg-foreground"></div>
</div>
