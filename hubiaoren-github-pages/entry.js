/* A fresh visit starts with the brand introduction; in-page links remain native. */
(() => {
  'use strict';
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation?.type === 'back_forward') return;

  // Run in <head>, before the browser can resolve an incoming section anchor.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(history.state, '', location.pathname + location.search);

  let interacted = false;
  const inputs = ['pointerdown', 'touchstart', 'wheel', 'keydown'];
  const markInteraction = () => { interacted = true; };
  inputs.forEach(type => addEventListener(type, markInteraction, { passive: true, capture: true }));
  const startAtTop = () => {
    if (!interacted) scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };
  startAtTop();
  document.addEventListener('DOMContentLoaded', startAtTop, { once: true });
  addEventListener('pageshow', event => {
    if (!event.persisted) startAtTop();
    inputs.forEach(type => removeEventListener(type, markInteraction, true));
  }, { once: true });
  // Preserve the reader's position when they leave and later use Back.
  addEventListener('pagehide', () => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
  }, { once: true });
})();
