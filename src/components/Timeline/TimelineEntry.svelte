<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { TimelineableEntry } from "@components/Timeline/types";
  import { getEntryAssociatedColor } from "@components/Timeline/utils";

  export let entry: TimelineableEntry;

  const { bgClass, hoverClass } = getEntryAssociatedColor(entry.collection);
  getEntryAssociatedColor;
  function handleOpenClick() {
    selectedEntry.set(entry);
  }

  $: isCurrentEntry =
    $selectedEntry && getEntryId($selectedEntry) === getEntryId(entry);

  const { data, collection } = entry;
  const ariaLabel =
    collection === "education"
      ? `my ${data.degree} at ${data.school}`
      : collection === "jobs"
        ? `me being ${data.role.toLowerCase()} at ${data.company}`
        : `${data.name} project`;
</script>

<button
  on:click|stopPropagation={handleOpenClick}
  class="h-full w-full rounded-sm shadow-sm transition-all {bgClass} {hoverClass}"
  class:scale-x-[140%]={isCurrentEntry}
  class:shadow-xl={isCurrentEntry}
  aria-label="Open details about {ariaLabel}"
>
</button>
