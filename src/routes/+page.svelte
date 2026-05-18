<script>
  import Hero from '$lib/components/Hero.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import { onMount } from 'svelte';

  let Terminal;
  onMount(async () => {
    const mod = await import('$lib/components/Terminal.svelte');
    Terminal = mod.default;
  });
</script>

<svelte:head>
  <title>Grey — Frontend Developer</title>
  <meta name="description" content="Grey — Frontend Engineer building fast, beautiful web experiences." />
</svelte:head>

<Hero />
<Projects />
<Skills />
{#if Terminal}
  <svelte:component this={Terminal} />
{/if}
<Contact />