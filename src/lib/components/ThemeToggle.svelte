<script>
  import { theme } from '$lib/stores/theme';
  function toggle() { theme.update(t => t === 'dark' ? 'light' : 'dark'); }
</script>

<button on:click={toggle} aria-label="Toggle theme">
  {$theme === 'dark' ? '☀️' : '🌙'}
</button>

<style>
  button {
    background: none;
    border: 1px solid var(--border);
    color: var(--text);
    width: 36px; height: 36px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    display: grid; place-items: center;
    transition: border-color var(--transition);
  }
  button:hover { border-color: var(--accent); }
</style>