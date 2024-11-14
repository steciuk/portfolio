<script lang="ts">
  import { getEntryId } from "@components/Timeline/entryId";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";
  import type { TimelineableEntry } from "@components/Timeline/types";
  import { getEntryAssociatedColor } from "@components/Timeline/utils";

  export let entry: TimelineableEntry;

  const { bgClass, highlightCssVarName, selectedCssVarName } =
    getEntryAssociatedColor(entry.collection);
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
  class="timeline-entry h-full w-full rounded-sm transition-all {bgClass}"
  class:timeline-entry--current-entry={isCurrentEntry}
  class:scale-x-[140%]={isCurrentEntry}
  style="--highlight-color: hsl(var({highlightCssVarName})); --selected-color: hsl(var({selectedCssVarName}));"
  aria-label="Open details about {ariaLabel}"
>
</button>

<style>
  .timeline-entry {
    @apply shadow-sm;
  }

  .timeline-entry:hover:not(.timeline-entry--current-entry) {
    background-color: var(--highlight-color);
  }

  .timeline-entry--current-entry {
    @apply shadow-xl;
    background-color: var(--selected-color);
  }
</style>
