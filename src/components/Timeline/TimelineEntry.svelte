<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { TimelinableEntry } from "@components/Timeline/types";
  import { getEntryBgColorClass } from "@components/Timeline/utils";
  import { scale } from "svelte/transition";

  export let entry: TimelinableEntry;

  const bgColorClass = getEntryBgColorClass(entry);

  function handleOpenClick() {
    selectedEntry.set(entry);
  }

  $: isCurrentEntry =
    $selectedEntry && getEntryId($selectedEntry) === getEntryId(entry);
</script>

<button
  on:click|stopPropagation={handleOpenClick}
  class="h-full w-full rounded-sm shadow-sm transition-all {bgColorClass}"
  class:scale-x-[140%]={isCurrentEntry}
  class:shadow-xl={isCurrentEntry}
>
</button>
