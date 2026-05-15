<script>
  const year = new Date().getFullYear();

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const socials = [
    { href: 'https://github.com/greythedevv', label: 'GitHub', icon: 'GH' },
    { href: 'https://linkedin.com/in/greatnessoluwole', label: 'LinkedIn', icon: 'LI' },
    { href: 'https://twitter.com/greythedev', label: 'Twitter', icon: 'TW' },
  ];
</script>

<footer>
  <div class="inner">

    <div class="brand">
      <a href="/" class="logo">GREY<span class="dot">.</span></a>
      <p class="tagline">Building fast, beautiful, interactive web experiences.</p>
    </div>

    <nav class="nav-links" aria-label="Footer navigation">
      <h4>Navigation</h4>
      <ul>
        {#each links as link}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>
    </nav>

    <div class="social-col">
      <h4>Find me online</h4>
      <ul class="socials">
        {#each socials as s}
          <li>
            <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <span class="icon">{s.icon}</span>
              {s.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

  </div>

  <div class="bottom">
    <p>© {year} greatness. Built with SvelteKit.</p>
    <p class="made">Designed & developed by <span>greatness</span></p>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--border);
    background: var(--surface);
    padding: 4rem 2.5rem 2rem;
    margin-top: 4rem;
  }

  .inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto 3rem;
  }

  .logo {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    display: inline-block;
    margin-bottom: 0.75rem;
  }
  .dot { color: var(--accent); }
  .tagline { color: var(--muted); font-size: 0.88rem; max-width: 260px; line-height: 1.6; }

  h4 {
    font-family: var(--font-display);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1.25rem;
  }

  ul { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }

  .nav-links a {
    color: var(--text);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color var(--transition);
  }
  .nav-links a:hover { color: var(--accent); }

  .socials a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--text);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color var(--transition);
  }
  .socials a:hover { color: var(--accent); }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--muted);
    transition: border-color var(--transition), color var(--transition);
  }
  .socials a:hover .icon {
    border-color: var(--accent);
    color: var(--accent);
  }

  .bottom {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .bottom p { color: var(--muted); font-size: 0.8rem; }
  .made span { color: var(--accent); }

  @media (max-width: 768px) {
    footer { padding: 3rem 1.5rem 1.5rem; }
    .inner {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .bottom { flex-direction: column; align-items: flex-start; }
  }
</style>