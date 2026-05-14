export function scrollReveal(node: HTMLElement, { delay = 0, y = 30 } = {}) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
      node.style.opacity = '1';
      node.style.transform = 'translateY(0)';
      observer.unobserve(node);
    }
  }, { threshold: 0.1 });

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  observer.observe(node);

  return { destroy: () => observer.unobserve(node) };
}