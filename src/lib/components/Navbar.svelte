<script>
  import ThemeToggle from './ThemeToggle.svelte';

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  let scrolled = false;
  let menuOpen = false;

  function toggleMenu() { menuOpen = !menuOpen; }
  function closeMenu() { menuOpen = false; }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      scrolled = window.scrollY > 50;
    });
  }
</script>

<a href="#main-content" class="skip-nav">Skip to main content</a>

<nav class:scrolled aria-label="Main navigation">
  <a href="/" class="logo" on:click={closeMenu}>GR<span class="dot">.</span></a>

  <ul class="desktop-links">
    {#each links as link}
      <li><a href={link.href}>{link.label}</a></li>
    {/each}
  </ul>

  <div class="actions">
    <ThemeToggle />
    <a href="/resume.pdf" class="btn" download>Resume ↓</a>
    <button
      class="hamburger"
      on:click={toggleMenu}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
    >
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>
  </div>
</nav>

<div id="mobile-menu" class="mobile-menu" class:open={menuOpen} aria-hidden={!menuOpen}>
  <ul>
    {#each links as link}
      <li>
        <a href={link.href} on:click={closeMenu} tabindex={menuOpen ? 0 : -1}>
          {link.label}
        </a>
      </li>
    {/each}
    <li>
      <a href="/resume.pdf" download on:click={closeMenu} tabindex={menuOpen ? 0 : -1}>
        Resume ↓
      </a>
    </li>
  </ul>
</div>

{#if menuOpen}
  <div class="backdrop" on:click={closeMenu} aria-hidden="true"></div>
{/if}

<style>
  .skip-nav {
    position: fixed;
    top: -100%;
    left: 1rem;
    z-index: 999;
    background: var(--accent);
    color: var(--bg);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    font-weight: 700;
    text-decoration: none;
    transition: top 0.2s;
  }
  .skip-nav:focus { top: 1rem; }

  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 2.5rem;
    transition: var(--transition);
    background: transparent;
  }
  nav.scrolled {
    background: rgba(10,10,15,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    z-index: 110;
  }
  .dot { color: var(--accent); }

  .desktop-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  .desktop-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    transition: color var(--transition);
  }
  .desktop-links a:hover { color: var(--accent); }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 110;
  }
  .btn {
    background: var(--accent);
    color: var(--bg);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius);
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
    transition: opacity var(--transition);
  }
  .btn:hover { opacity: 0.85; }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    width: 32px;
    height: 32px;
  }
  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }
  .hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger span.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .mobile-menu {
    position: fixed;
    top: 0; right: 0;
    width: min(80vw, 320px);
    height: 100vh;
    background: var(--surface);
    border-left: 1px solid var(--border);
    z-index: 105;
    padding: 6rem 2rem 2rem;
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mobile-menu.open { transform: translateX(0); }
  .mobile-menu ul { list-style: none; display: flex; flex-direction: column; gap: 1.5rem; }
  .mobile-menu a {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--text);
    text-decoration: none;
    transition: color var(--transition);
  }
  .mobile-menu a:hover { color: var(--accent); }

  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 104;
    backdrop-filter: blur(4px);
  }

  @media (max-width: 768px) {
    nav { padding: 1.25rem 1.5rem; }
    .desktop-links { display: none; }
    .btn { display: none; }
    .hamburger { display: flex; }
  }
</style>