/* Progressive enhancement: content stays readable if animations are unavailable. */
(() => {
  'use strict';
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width: 650px)');
  const hero = document.querySelector('.brand-hero');
  const active = new Map();
  const seen = new WeakSet();
  const delays = new Map();
  const targets = new Set();
  let observer;
  let frame = 0;

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);

  function add(selector, stagger = false) {
    document.querySelectorAll(selector).forEach((element) => {
      targets.add(element);
      if (stagger) {
        const siblings = [...element.parentElement.children];
        delays.set(element, Math.min(siblings.indexOf(element) * 65, 240));
      }
    });
  }
  add('.hero-copy > *, .case-directory > *, .fact-ribbon > *, .rule-strip > *, .brief-grid > *, .filing-options > *, .process-steps > *, .approach-grid > *, .action-brief > ol > li', true);
  add('.hero-art, .intro-band, .section-heading, .case-masthead, .case-opening > *, .case-text, .relationship-sheet, .subsection-heading, .comparison-scroll, .search-chips, .maintenance-intro, .maintenance-table, .action-brief > div, .source-intro, .source-links, .closing > *');

  function finish(element) {
    active.get(element)?.cancel();
    active.delete(element);
    seen.add(element);
    observer?.unobserve(element);
  }

  function reveal(element) {
    observer.unobserve(element);
    if (seen.has(element)) return;
    seen.add(element);
    if (reducedMotion.matches || document.body.classList.contains('recording') || element.contains(document.activeElement)) return;
    // Individual translate preserves existing rotated/scaled artwork transforms.
    const animation = element.animate([
      { opacity: .18, translate: compact.matches ? '0 12px' : '0 24px' },
      { opacity: 1, translate: '0 0' }
    ], {
      duration: compact.matches ? 480 : 680,
      delay: compact.matches ? Math.min(delays.get(element) || 0, 120) : delays.get(element) || 0,
      easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'backwards'
    });
    active.set(element, animation);
    animation.onfinish = () => { active.delete(element); animation.cancel(); };
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => { if (isIntersecting) reveal(target); });
  }, { threshold: .04 });

  function showDestination(hash) {
    if (!hash || hash === '#' || hash === '#home') return;
    let destination;
    try { destination = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return; }
    if (!destination) return;
    const heading = destination.querySelector('.section-heading, .case-masthead, h2, h3');
    targets.forEach((element) => {
      if (element === destination || element.contains(destination) || (heading && element.contains(heading))) finish(element);
    });
  }

  function updateScroll() {
    frame = 0;
    const recording = document.body.classList.contains('recording');
    const distance = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    progress.style.transform = `scaleX(${Math.max(0, Math.min(1, scrollY / distance))})`;
    if (!hero) return;
    // Scroll-driven movement only; no perpetual motion or scroll interception.
    if (reducedMotion.matches || compact.matches || recording) {
      hero.style.removeProperty('--hero-drift');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > innerHeight) return;
    hero.style.setProperty('--hero-drift', `${Math.min(scrollY * .045, 18).toFixed(2)}px`);
  }
  function scheduleScroll() { if (!frame) frame = requestAnimationFrame(updateScroll); }

  function syncMotion() {
    if (reducedMotion.matches) {
      observer.disconnect();
      targets.forEach(finish);
    }
    if (document.body.classList.contains('recording')) {
      [...active.keys()].forEach(finish);
    }
    scheduleScroll();
  }

  if (!reducedMotion.matches) targets.forEach((element) => observer.observe(element));
  showDestination(location.hash);
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (link) showDestination(link.getAttribute('href'));
  });
  document.addEventListener('focusin', (event) => {
    targets.forEach((element) => { if (element.contains(event.target)) finish(element); });
  });
  addEventListener('hashchange', () => showDestination(location.hash));
  addEventListener('scroll', scheduleScroll, { passive: true });
  addEventListener('resize', scheduleScroll, { passive: true });
  addEventListener('load', scheduleScroll, { once: true });
  addEventListener('beforeprint', () => targets.forEach(finish));
  reducedMotion.addEventListener('change', syncMotion);
  compact.addEventListener('change', scheduleScroll);
  new MutationObserver(syncMotion).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScroll).observe(document.querySelector('main'));
  updateScroll();
})();
