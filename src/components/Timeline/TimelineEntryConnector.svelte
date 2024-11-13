<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { TimelineableCollection } from "@components/Timeline/types";
  import { getEntryAssociatedColor } from "@components/Timeline/utils";

  export let entryId: string;
  export let collection: TimelineableCollection;

  const { cssVarName } = getEntryAssociatedColor(collection);

  $: isCurrentEntry = $selectedEntry && getEntryId($selectedEntry) === entryId;
</script>

<div
  class="h-full border-0 border-l-2 border-dashed"
  class:scale-x-105={isCurrentEntry}
  style="border-color: hsl(var({cssVarName}))"
></div>
