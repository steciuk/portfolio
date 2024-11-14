<script lang="ts">
  import { navOpen } from "@components/Nav/navOpenStore";
  import { selectedEntry } from "@components/Timeline/selectedEntryStore";

  function handleKeyDown(event: KeyboardEvent) {
    if (
      $selectedEntry !== null &&
      event.key === "Escape" &&
      (!navOpen.get() || window.innerWidth > 1024) // TODO: Change the width if main breakpoint changes
    ) {
      selectedEntry.clear();
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />
<button
  class="fixed inset-0 z-20 cursor-auto"
  class:hidden={$selectedEntry === null}
  on:click|stopPropagation={selectedEntry.clear}
  aria-label="Deselect timeline entry"
/>
