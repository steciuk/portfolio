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
<svelte:document on:click={selectedEntry.clear} />
