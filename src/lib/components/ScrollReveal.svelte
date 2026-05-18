<script>
  import { onMount } from 'svelte';

  export let delay = 0;
  export let direction = 'up';

  let el;
  let visible = false;

  onMount(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { visible = true; return; }

    // Use requestIdleCallback so reveals don't block main thread
    const observe = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => { visible = true; }, delay);
            } else {
              visible = true;
            }
            observer.unobserve(el);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      if (el) observer.observe(el);
      return () => observer.disconnect();
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(observe);
    } else {
      observe();
    }
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
    /* Use will-change to tell browser to prep GPU layer */
    will-change: transform, opacity;
    transition:
      opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0ms),
      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0ms);
  }
  .reveal.up    { transform: translateY(24px); }
  .reveal.left  { transform: translateX(-24px); }
  .reveal.right { transform: translateX(24px); }
  .reveal.none  { transform: none; }

  .reveal.visible {
    opacity: 1;
    transform: translate(0);
    /* Free GPU layer after animation completes */
    will-change: auto;
  }
</style>