<script>
  let name = '', email = '', message = '';
  let status = '';
  let statusType = ''; // 'success' | 'error'
  let loading = false;

  // Sanitize input — strip HTML tags
  function sanitize(str) {
    return str.replace(/<[^>]*>/g, '').trim();
  }

  async function submit() {
    status = '';
    if (!name || !email || !message) {
      status = 'Please fill in all fields.';
      statusType = 'error';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status = 'Please enter a valid email address.';
      statusType = 'error';
      return;
    }

    loading = true;

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: sanitize(name),
          email: sanitize(email),
          message: sanitize(message),
        }),
      });

      if (res.ok) {
        status = `Message sent! I'll get back to you soon.`;
        statusType = 'success';
        name = email = message = '';
      } else {
        status = 'Something went wrong. Please try again.';
        statusType = 'error';
      }
    } catch {
      status = 'Network error. Please check your connection.';
      statusType = 'error';
    } finally {
      loading = false;
    }
  }
</script>

<section id="contact">
  <h2>Contact<span class="accent">.</span></h2>
  <p class="sub">Got a project in mind? Let's talk.</p>

  <div class="form">
    <div class="field">
      <label for="contact-name">Name</label>
      <input
        id="contact-name"
        bind:value={name}
        placeholder="Your name"
        autocomplete="name"
        disabled={loading}
      />
    </div>

    <div class="field">
      <label for="contact-email">Email</label>
      <input
        id="contact-email"
        bind:value={email}
        type="email"
        placeholder="your@email.com"
        autocomplete="email"
        disabled={loading}
      />
    </div>

    <div class="field">
      <label for="contact-message">Message</label>
      <textarea
        id="contact-message"
        bind:value={message}
        rows="5"
        placeholder="Tell me about your project..."
        disabled={loading}
      ></textarea>
    </div>

    <!-- aria-live announces status to screen readers -->
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      class="status {statusType}"
    >
      {status}
    </div>

    <button on:click={submit} disabled={loading} aria-busy={loading}>
      {#if loading}
        <span class="spinner" aria-hidden="true"></span> Sending...
      {:else}
        Send Message →
      {/if}
    </button>
  </div>
</section>

<style>
  section { padding: 6rem 2.5rem; max-width: 640px;  padding: 6rem 1.25rem;
  box-sizing: border-box;
  overflow-x: hidden; }
  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 0.5rem; }
  .accent { color: var(--accent); }
  .sub { color: var(--muted); margin-bottom: 2.5rem; font-size: 0.95rem; }

  .form { display: flex; flex-direction: column; gap: 1.25rem; }

  .field { display: flex; flex-direction: column; gap: 0.4rem; }
  label { font-size: 0.78rem; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }

  input, textarea {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.9rem 1.2rem;
    border-radius: var(--radius);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    transition: border-color var(--transition);
    width: 100%;
  }
  input:focus, textarea:focus { outline: none; border-color: var(--accent); }
  input:disabled, textarea:disabled { opacity: 0.6; cursor: not-allowed; }
  textarea { resize: vertical; }

  .status {
    font-size: 0.85rem;
    min-height: 1.2em;
    transition: color var(--transition);
  }
  .status.success { color: var(--accent); }
  .status.error { color: #ff6b6b; }

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
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity var(--transition);
  }
  button:hover:not(:disabled) { opacity: 0.85; }
  button:disabled { opacity: 0.6; cursor: not-allowed; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid var(--bg);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  @media (max-width: 768px) {
    section { padding: 4rem 1.5rem; }
  }
</style>