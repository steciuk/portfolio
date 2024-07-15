<script lang="ts">
  const SIGMOID_SQUISH = 2; // Higher values make the difference between slow and fast movement more pronounced
  const MOVEMENT_RATE = 0.05; // Higher values make the background move faster

  let bgPos = { x: 0, y: 0 };

  function sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x * SIGMOID_SQUISH)) - 0.5;
  }

  function updatePosition(e: MouseEvent) {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    bgPos = {
      x: -sigmoid(xRatio) * MOVEMENT_RATE * 100,
      y: -sigmoid(yRatio) * MOVEMENT_RATE * 100,
    };
  }
</script>

<svelte:body on:mousemove={updatePosition} />
<div
  class="background-grid fixed h-screen w-screen -z-10"
  style="background-position: {bgPos.x}% {bgPos.y}%;"
  role="presentation"
/>

<style>
  .background-grid {
    background-image: url("/logo-bg-dark.svg");
    background-size: 100px;
    opacity: 0.05;
  }

  :global(.dark) .background-grid {
    background-image: url("/logo-bg-light.svg");
  }
</style>
