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
  let dotPos: { x: number; y: number } | undefined;
  let windowHeight: number | undefined;

  function updateDotPos(domRect: DOMRect) {
    dotPos = {
      x: domRect.x + domRect.width / 2,
      y: domRect.y + domRect.height / 2,
    };
  }

  function updateWindowHeight() {
    windowHeight = window.innerHeight;
  }

  function closeModal() {
    modalOpen = false;
    document.removeEventListener("keydown", handlEscapeKey);
    document.removeEventListener("scroll", updateOnScroll);
    document.removeEventListener("resize", updateWindowHeight);
  }

  function handlEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
    }
  }

  let scrollTicking = false;
  function updateOnScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const boundingRect = element?.getBoundingClientRect();
        if (boundingRect) {
          updateDotPos(boundingRect);
        }
        scrollTicking = false;
      });

      scrollTicking = true;
    }
  }

  function handleOpenClick() {
    modalOpen = true;
    const boundingRect = element?.getBoundingClientRect();
    if (boundingRect) {
      updateDotPos(boundingRect);
    }
    updateWindowHeight();

    document.addEventListener("keydown", handlEscapeKey);
    document.addEventListener("scroll", updateOnScroll);
    document.addEventListener("resize", updateWindowHeight);
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
      {#if dotPos && windowHeight}
        {#if dotPos.y < 0}
          <polygon
            points="{dotPos.x - 10},15 {dotPos.x},0 {dotPos.x + 10},15"
            fill="red"
          />
        {:else if dotPos.y > window.innerHeight}
          <polygon
            points="{dotPos.x - 10},{windowHeight -
              15} {dotPos.x},{windowHeight} {dotPos.x + 10},{windowHeight - 15}"
            fill="red"
          />
        {:else}
          <circle cx={dotPos.x} cy={dotPos.y} r="10" fill="red" />
        {/if}
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
