<script lang="ts">
  import type { EntryMeasurements } from "@components/Timeline/types";
  import type { CollectionEntry } from "astro:content";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let entry: CollectionEntry<"education" | "jobs" | "projects"> &
    EntryMeasurements;

  let bgColorClass = "bg-primary";
  switch (entry.collection) {
    case "education":
      bgColorClass = "bg-primary";
      break;
    case "jobs":
      bgColorClass = "bg-secondary";
      break;
    case "projects":
      bgColorClass = "bg-accent";
      break;
  }

  let modalOpen = false;
  let element: Element | undefined;
  let boundingRect: DOMRect | undefined;

  function closeModal() {
    modalOpen = false;
    document.removeEventListener("keydown", handlEscapeKey);
    document.removeEventListener("scroll", updateOnScroll);
  }

  function handlEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
    }
  }

  function updateOnScroll() {
    boundingRect = element?.getBoundingClientRect();
    console.log(boundingRect);
  }

  function handleOpenClick() {
    modalOpen = true;
    boundingRect = element?.getBoundingClientRect();
    console.log(boundingRect);

    document.addEventListener("keydown", handlEscapeKey);
    document.addEventListener("scroll", updateOnScroll);
    // TODO: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
  }
</script>

<button
  on:click={handleOpenClick}
  class="entry absolute w-full rounded-sm {bgColorClass}"
  style="height: {entry.heightPx}px; bottom: {entry.startHeightPx}px"
  bind:this={element}
/>
{#if modalOpen}
  <button
    class="fixed inset-0 bg-primary/20 z-10 flex justify-center items-end"
    on:click={closeModal}
    transition:fade={{ duration: 200 }}
  >
    <svg class="h-full w-full bg-[#ff000041]">
      {#if boundingRect}
        <circle
          cx="{boundingRect.x}px"
          cy="{boundingRect.y}px"
          r="10px"
          fill="red"
        />
      {/if}
    </svg>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="absolute mb-4 rounded-sm {bgColorClass} w-11/12 cursor-auto"
      on:click|stopPropagation
    >
      <slot />
    </div>
  </button>
{/if}
