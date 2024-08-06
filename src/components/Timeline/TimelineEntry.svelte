<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { TimelinableEntry } from "@components/Timeline/types";
  import { getEntryBgColorClass } from "@components/Timeline/utils";

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
  class="h-full w-full rounded-sm border-2 shadow-md {bgColorClass} {isCurrentEntry
    ? 'border-ring'
    : 'border-ring/0'}"
  style="transition: border-color 0.2s;"
>
</button>
