<script>
  import ScrollReveal from './ScrollReveal.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '$lib/data/projects.js';

  let filter = 'All';
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  $: filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));
</script>

<section id="projects">
<ScrollReveal>
  <h2>Projects<span class="accent">.</span></h2>
    </ScrollReveal>

    
<ScrollReveal delay={100}>
    <div class="filters">
      {#each allTags as tag}
        <button class:active={filter === tag} on:click={() => filter = tag}>{tag}</button>
      {/each}
    </div>
  </ScrollReveal>
  

  <div class="grid">
    {#each filtered as project (project.slug)}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

  

<style>
  section {  padding: 6rem 1.25rem;
  box-sizing: border-box;
  overflow-x: hidden;
} 
  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 2rem; }
  .accent { color: var(--accent); }
  .filters { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .filters button {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--muted);
    padding: 0.4rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    transition: all var(--transition);
  }
  .filters button.active,
  .filters button:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(0,255,136,0.07);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }
</style>