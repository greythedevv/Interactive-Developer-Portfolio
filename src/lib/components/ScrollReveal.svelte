<script>
  import { onMount } from 'svelte';

  export let delay = 0;      // ms delay for stagger
  export let direction = 'up'; // 'up' | 'left' | 'right' | 'none'

  let el;
  let visible = false;

  onMount(() => {
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { visible = true; return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { visible = true; }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={el}
  class="reveal {direction}"
  class:visible
  style="--delay: {delay}ms"
>
  <slot />
</div>

<style>
  .reveal {
    opacity: 0;
    transition:
      opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0ms),
      transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0ms);
  }
  .reveal.up    { transform: translateY(40px); }
  .reveal.left  { transform: translateX(-40px); }
  .reveal.right { transform: translateX(40px); }
  .reveal.none  { transform: none; }

  .reveal.visible {
    opacity: 1;
    transform: translate(0);
  }
</style>