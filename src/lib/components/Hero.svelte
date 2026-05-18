<script>
  import { onMount } from 'svelte';
  let visible = false;
  onMount(() => setTimeout(() => (visible = true), 100));
</script>

<section id="hero" class:visible>
  <div class="tag">Available for work</div>
  <h1 style="contain: none;">
    <span class="line">Hi, I'm</span>
    <span class="line name">GREATNESS <span class="accent">.</span></span>
  </h1>
  <p class="sub">Frontend Engineer · I build fast, beautiful, interactive web experiences.</p>

  <div class="cta">
    <a href="#projects" class="btn-primary">View Projects →</a>
    <a href="https://github.com/greythedevv" target="_blank" rel="noreferrer" class="btn-ghost">GitHub</a>
    <a href="https://linkedin.com/in/greatnessoluwole" target="_blank" rel="noreferrer" class="btn-ghost">LinkedIn</a>
  </div>

  <div class="bg-glow" aria-hidden="true"></div>
</section>

<style>
  section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 1.25rem 3rem;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
section.visible { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  section {
    min-height: auto;
    padding: 7rem 1.25rem 3rem;
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  section {
    padding: 6rem 1rem 2.5rem;
  }
}

 .tag {
  display: inline-block;
  background: rgba(0,255,136,0.1);
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  width: fit-content;
}

@media (max-width: 480px) {
  .cta {
    flex-direction: column;
    align-items: flex-start;
  }
  .btn-primary, .btn-ghost {
    width: 100%;
    text-align: center;
  }}
  
  h1 {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 1.05;
    margin-bottom: 1.5rem;
  }
  .line { display: block; }
  .name { color: var(--text); }
  .accent { color: var(--accent); }
.sub {
  color: var(--muted);
  font-size: clamp(0.85rem, 3vw, 1.2rem);
  max-width: 520px;
  margin-bottom: 2rem;
}
  .cta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
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

 .bg-glow {
  position: absolute;
  top: 20%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
  /* Static — no animation, no repaint */
  will-change: auto;
}

</style>