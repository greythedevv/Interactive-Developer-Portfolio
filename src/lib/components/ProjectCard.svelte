<script>
  export let project;
</script>

<article class="card">
  <div class="img-wrap">
    <img src={project.image} alt={project.title} loading="lazy" />
  </div>
  <div class="body">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div class="tags">
      {#each project.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
    <div class="links">
      <a href={project.demo} target="_blank" rel="noreferrer">Live ↗</a>
      <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </div>
</article>

<style>
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    transition: transform var(--transition), border-color var(--transition);
  }
  .card:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
  }
  .img-wrap { aspect-ratio: 16/9; overflow: hidden; }
  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
  .card:hover img { transform: scale(1.05); }
  .body { padding: 1.5rem; }
  h3 { font-family: var(--font-display); font-size: 1.2rem; margin-bottom: 0.5rem; }
  p { color: var(--muted); font-size: 0.85rem; margin-bottom: 1rem; }
  .tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
  .tag {
    background: rgba(123,97,255,0.15);
    color: var(--accent2);
    border: 1px solid rgba(123,97,255,0.3);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    font-size: 0.72rem;
  }
  .links { display: flex; gap: 1rem; }
  .links a { color: var(--accent); font-size: 0.82rem; text-decoration: none; }
  .links a:hover { text-decoration: underline; }
</style>