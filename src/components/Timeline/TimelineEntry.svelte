<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { TimelineableEntry } from "@components/Timeline/types";
  import { getEntryAssociatedColor } from "@components/Timeline/utils";

  export let entry: TimelineableEntry;

  const bgColorClass = getEntryAssociatedColor(entry.collection).bgClass;
  getEntryAssociatedColor;
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
