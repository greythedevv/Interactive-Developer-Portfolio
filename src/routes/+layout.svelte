<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main id="main-content">
  <slot />
</main>
<Footer />

<style>
  main {
    min-height: 100vh;
    /* No transition here — was causing lag on every route change */
  }
</style>