<script>
  import ScrollReveal from './ScrollReveal.svelte';

  const skills = [
    { category: 'Frontend', items: ['Svelte / SvelteKit', 'React', 'TypeScript', 'HTML5', 'CSS3 / SCSS'] },
    { category: 'Styling', items: ['TailwindCSS', 'Framer Motion', 'GSAP', 'CSS Animations'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git / GitHub', 'Docker', 'Vite', 'Figma', 'VS Code'] },
  ];
</script>

<section id="skills">
  <ScrollReveal>
    <h2>Skills<span class="accent">.</span></h2>
    <p class="sub">Technologies I work with.</p>
  </ScrollReveal>

  <div class="grid">
    {#each skills as group, i}
      <ScrollReveal delay={i * 100}>
        <div class="card">
          <h3>{group.category}</h3>
          <ul>
            {#each group.items as skill}
              <li>{skill}</li>
            {/each}
          </ul>
        </div>
      </ScrollReveal>
    {/each}
  </div>
</section>

<style>
  section {
    padding: 6rem 1.25rem;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 0.5rem;
  }
  .accent { color: var(--accent); }
  .sub { color: var(--muted); margin-bottom: 3rem; font-size: 0.95rem; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
    transition: border-color var(--transition), transform var(--transition);
    width: 100%;
    box-sizing: border-box;
    min-width: 0;
  }
  .card:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
  }

  h3 {
    font-family: var(--font-display);
    font-size: 0.8rem;
    color: var(--accent);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0;
    margin: 0;
  }

  li {
    color: var(--muted);
    font-size: 0.88rem;
    padding-left: 1rem;
    position: relative;
    transition: color var(--transition);
    word-break: break-word;
  }
  li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 0.7rem;
  }
  .card:hover li { color: var(--text); }

  @media (max-width: 480px) {
    section { padding: 4rem 1rem; }
    .grid { grid-template-columns: 1fr; gap: 0.875rem; }
    .card { padding: 1rem; }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    section { padding: 4rem 1.25rem; }
    .grid { grid-template-columns: 1fr 1fr; }
  }
</style>