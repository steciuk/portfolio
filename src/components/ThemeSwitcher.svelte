<script lang="ts">
  import { Sun } from "lucide-svelte";
  import { Moon } from "lucide-svelte";
  import { Button } from "@components/ui/button";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let isDark: boolean | undefined = undefined;

  onMount(() => {
    isDark = document.documentElement.classList.contains("dark");
  });

  function toggleTheme(e: MouseEvent) {
    e.stopPropagation();
    document.documentElement.classList.toggle("dark");
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
</script>

<Button
  on:click={toggleTheme}
  size="icon"
  class="grid"
  variant="outline"
  aria-label="Toggle theme"
>
  {#if isDark === true}
    <div class="col-start-1 row-start-1" transition:fade={{ duration: 100 }}>
      <Sun />
    </div>
  {:else if isDark === false}
    <div class="col-start-1 row-start-1" transition:fade={{ duration: 100 }}>
      <Moon />
    </div>
  {/if}
</Button>
