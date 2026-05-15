<script>
  let input = '';
  let history = [
    { type: 'system', text: 'Welcome to yourname.dev — type "help" for commands.' }
  ];
  let inputEl;

  const commands = {
    help: () => 'Commands: about, skills, contact, projects, clear',
    about: () => 'YOUR NAME — Frontend Engineer. I love building fast, beautiful UIs.',
    skills: () => 'Svelte, React, TypeScript, Node.js, TailwindCSS, PostgreSQL, Docker...',
    contact: () => 'Email: greatness@gmail.com | GitHub: github.com/greythedevv',
    projects: () => 'Check out the Projects section above ↑',
    clear: () => { history = []; return null; },
  };

  function run() {
    const cmd = input.trim().toLowerCase();
    history = [...history, { type: 'input', text: `> ${input}` }];
    const result = commands[cmd]?.() ?? `Command not found: "${cmd}". Try "help".`;
    if (result !== null) history = [...history, { type: 'output', text: result }];
    input = '';
  }
</script>

<section id="terminal">
  <h2>Terminal<span class="accent">.</span></h2>
  <div class="terminal" on:click={() => inputEl.focus()}>
    <div class="bar">
      <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
      <span class="title">greatness@portfolio ~ </span>
    </div>
    <div class="output">
      {#each history as line}
        <p class={line.type}>{line.text}</p>
      {/each}
    </div>
    <div class="input-row">
      <span class="prompt">→</span>
      <input
        bind:this={inputEl}
        bind:value={input}
        on:keydown={(e) => e.key === 'Enter' && run()}
        placeholder="type a command..."
        autocomplete="off"
        spellcheck="false"
      />
    </div>
  </div>
</section>

<style>
  section { padding: 4rem 2.5rem; }
  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 2rem; }
  .accent { color: var(--accent); }
  .terminal {
    background: #0d0d12;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    max-width: 680px;
    font-family: var(--font-mono);
    cursor: text;
  }
  .bar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
  }
  .dot { width: 12px; height: 12px; border-radius: 50%; }
  .r { background: #ff5f57; }
  .y { background: #febc2e; }
  .g { background: #28c840; }
  .title { margin-left: auto; color: var(--muted); font-size: 0.75rem; }
  .output { padding: 1rem; min-height: 120px; max-height: 300px; overflow-y: auto; }
  .output p { margin-bottom: 0.4rem; font-size: 0.85rem; }
  .system { color: var(--muted); }
  .input { color: var(--text); }
  .output { color: var(--accent); }
  .input-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--border);
  }
  .prompt { color: var(--accent); }
  input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    width: 100%;
  }
</style>