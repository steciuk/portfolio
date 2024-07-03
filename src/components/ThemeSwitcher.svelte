<script lang="ts">
  import { Sun } from "lucide-svelte";
  import { Moon } from "lucide-svelte";
  import { Button } from "@components/ui/button";

  let isDark = document.documentElement.classList.contains("dark");

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
</script>

<Button on:click={toggleTheme} size="icon">
  {#if isDark}
    <Sun />
  {:else}
    <Moon />
  {/if}
</Button>
