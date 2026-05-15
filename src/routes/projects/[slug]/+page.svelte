<script>
  import { page } from '$app/stores';
  import { projects } from '$lib/data/projects.js';
  import { goto } from '$app/navigation';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  $: slug = $page.params.slug;
  $: project = projects.find(p => p.slug === slug);
  $: if (!project) goto('/');
</script>

<svelte:head>
  <title>{project?.title ?? 'Project'} — Your Name</title>
  <meta name="description" content={project?.description ?? ''} />
</svelte:head>

{#if project}
  <main id="main-content">
    <div class="hero">
      <ScrollReveal>
        <a href="/" class="back">← Back to portfolio</a>
        <h1>{project.title}<span class="accent">.</span></h1>
        <p class="desc">{project.description}</p>

        <div class="tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>

        <div class="links">
          <a href={project.demo} target="_blank" rel="noreferrer" class="btn-primary">
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" class="btn-ghost">
            GitHub
          </a>
        </div>
      </ScrollReveal>
    </div>

    <ScrollReveal delay={200}>
      <div class="img-wrap">
        <img src={project.image} alt="Screenshot of {project.title}" />
      </div>
    </ScrollReveal>
  </main>
{/if}

<style>
  main { padding: 8rem 2.5rem 6rem; max-width: 900px; margin: 0 auto; }
  .back {
    display: inline-block;
    color: var(--muted);
    text-decoration: none;
    font-size: 0.85rem;
    margin-bottom: 2rem;
    transition: color var(--transition);
  }
  .back:hover { color: var(--accent); }
  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.05;
    margin-bottom: 1rem;
  }
  .accent { color: var(--accent); }
  .desc { color: var(--muted); font-size: 1.1rem; max-width: 600px; margin-bottom: 1.5rem; }
  .tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
  .tag {
    background: rgba(123,97,255,0.15);
    color: var(--accent2);
    border: 1px solid rgba(123,97,255,0.3);
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.78rem;
  }
  .links { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .btn-primary {
    background: var(--accent);
    color: var(--bg);
    padding: 0.8rem 2rem;
    border-radius: var(--radius);
    font-weight: 700;
    text-decoration: none;
    font-size: 0.9rem;
  }
  .btn-ghost {
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.8rem 2rem;
    border-radius: var(--radius);
    text-decoration: none;
    font-size: 0.9rem;
    transition: border-color var(--transition);
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
  .img-wrap {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
  }
  img { width: 100%; display: block; }

  @media (max-width: 768px) {
    main { padding: 6rem 1.5rem 4rem; }
  }
</style>