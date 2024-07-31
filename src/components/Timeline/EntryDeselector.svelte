<script lang="ts">
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";

  function handleKeyDown(event: KeyboardEvent) {
    if ($selectedEntry !== null && event.key === "Escape") {
      event.preventDefault();
      selectedEntry.clear();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<button
  class="fixed inset-0 cursor-auto"
  on:click|stopPropagation={selectedEntry.clear}
  aria-label="Deselect timeline entry"
/>
