<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  // Page transition state
  let transitioning = false;
  $: $page, (transitioning = true), setTimeout(() => (transitioning = false), 400);
</script>

<Navbar />

<main class:transitioning>
  <slot />
</main>

<style>
  main {
    min-height: 100vh;
    transition: opacity 0.3s ease;
  }
  main.transitioning {
    opacity: 0;
  }
</style>