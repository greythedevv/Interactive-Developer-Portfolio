<script>
  export let project;

  function openDemo(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(project.demo, '_blank', 'noreferrer');
  }

  function openGithub(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(project.github, '_blank', 'noreferrer');
  }
</script>

<a href="/projects/{project.slug}" class="card-link">
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
        <span class="view">View Project →</span>
        <button on:click={openDemo}>Live ↗</button>
        <button on:click={openGithub}>GitHub</button>
      </div>
    </div>
  </article>
</a>

<style>
  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    transition: transform var(--transition), border-color var(--transition);
    height: 100%;
    cursor: pointer;
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
  .links { display: flex; gap: 1rem; align-items: center; }
  .view { color: var(--accent); font-size: 0.82rem; font-weight: 700; flex: 1; }
  button {
    background: none;
    border: 1px solid var(--border);
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    cursor: pointer;
    transition: color var(--transition), border-color var(--transition);
  }
  button:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
</style>