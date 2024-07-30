<script lang="ts">
  import { Sun } from "lucide-svelte";
  import { Moon } from "lucide-svelte";
  import { Button } from "@components/ui/button";
  import { onMount } from "svelte";

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

<Button on:click={toggleTheme} size="icon">
  {#if isDark === true}
    <Sun />
  {:else if isDark === false}
    <Moon />
  {/if}
</Button>
