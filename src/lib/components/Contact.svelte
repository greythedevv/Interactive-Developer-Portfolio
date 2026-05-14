<script>
  let name = '', email = '', message = '';
  let status = '';

  async function submit() {
    if (!name || !email || !message) { status = 'Please fill all fields.'; return; }
    // Replace with your form endpoint (Formspree, etc.)
   status = `Message sent! I'll get back to you soon.`;
    name = email = message = '';
  }
</script>

<section id="contact">
  <h2>Contact<span class="accent">.</span></h2>
  <p class="sub">Got a project? Let's talk.</p>

  <div class="form">
    <input bind:value={name} placeholder="Your name" />
    <input bind:value={email} type="email" placeholder="Your email" />
    <textarea bind:value={message} rows="5" placeholder="Your message..."></textarea>
    {#if status}<p class="status">{status}</p>{/if}
    <button on:click={submit}>Send Message →</button>
  </div>
</section>

<style>
  section { padding: 6rem 2.5rem; }
  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 0.5rem; }
  .accent { color: var(--accent); }
  .sub { color: var(--muted); margin-bottom: 2.5rem; }
  .form { display: flex; flex-direction: column; gap: 1rem; max-width: 560px; }
  input, textarea {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.9rem 1.2rem;
    border-radius: var(--radius);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    transition: border-color var(--transition);
  }
  input:focus, textarea:focus { outline: none; border-color: var(--accent); }
  textarea { resize: vertical; }
  button {
    background: var(--accent);
    color: var(--bg);
    border: none;
    padding: 0.9rem 2rem;
    border-radius: var(--radius);
    font-weight: 700;
    font-family: var(--font-mono);
    cursor: pointer;
    font-size: 0.9rem;
    align-self: flex-start;
    transition: opacity var(--transition);
  }
  button:hover { opacity: 0.85; }
  .status { color: var(--accent); font-size: 0.85rem; }
</style>