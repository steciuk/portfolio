<script lang="ts">
  import { isTouchDevice } from "@src/utils";
  import { onMount } from "svelte";

  const SIGMOID_SQUISH = 2; // Higher values make the difference between slow and fast movement more pronounced
  const MOVEMENT_RATE = 0.075; // Higher values make the background move faster

  let bgPos = { x: 0, y: 0 };

  function sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x * SIGMOID_SQUISH)) - 0.5;
  }

  let isTicking = false;
  function updatePosition(e: MouseEvent) {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
        const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

        bgPos = {
          x: -sigmoid(xRatio) * MOVEMENT_RATE * 100,
          y: -sigmoid(yRatio) * MOVEMENT_RATE * 100,
        };

        isTicking = false;
      });

      isTicking = true;
    }
  }

  const items: { x: number; y: number; depth: number }[] = [
    {
      x: 90,
      y: 20,
      depth: 0.8,
    },
    { x: 70, y: 70, depth: 1.5 },
    {
      x: 25,
      y: 70,
      depth: 2,
    },
    {
      x: 35,
      y: 10,
      depth: 1,
    },
    {
      x: 55,
      y: 40,
      depth: 1.8,
    },
    {
      x: 60,
      y: 15,
      depth: 4,
    },
  ];

  onMount(() => {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !isTouchDevice()
    ) {
      window.addEventListener("mousemove", updatePosition);
    }
    return () => window.removeEventListener("mousemove", updatePosition);
  });
</script>

<div class="fixed left-0 top-0 -z-10 h-screen w-screen">
  {#each items as item}
    <div
      class="absolute aspect-square"
      style="
        top: {item.y + bgPos.y / item.depth}%;
        left: {item.x + bgPos.x / item.depth}%;
        width: {80 / item.depth}px;
      "
    >
      <slot />
    </div>
  {/each}
</div>
