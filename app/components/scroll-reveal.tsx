"use client";

import { useEffect } from "react";

/** Animate on entry without ever hiding content while waiting for JavaScript. */
export function ScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map<Element, Animation>();
    const cards = document.querySelectorAll<HTMLElement>("[data-motion-reveal]");
    const seen = new Set<Element>();
    let observer: IntersectionObserver | undefined;

    function stop() {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }

    function observe() {
      stop();
      if (media.matches || !("IntersectionObserver" in window)) return;
      try {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting || seen.has(entry.target)) return;
            seen.add(entry.target);
            observer?.unobserve(entry.target);
            if (!entry.target.contains(document.activeElement)) {
              try {
                const animation = entry.target.animate(
                  [{ opacity: 0.8, translate: "0 8px" }, { opacity: 1, translate: "0 0" }],
                  { duration: 420, easing: "cubic-bezier(0.2, 0.7, 0.3, 1)" },
                );
                animations.set(entry.target, animation);
                animation.onfinish = () => animations.delete(entry.target);
              } catch { /* Unsupported animation APIs leave the card fully visible. */ }
            }
          });
        }, { threshold: 0.08 });
        cards.forEach(card => { if (!seen.has(card)) observer?.observe(card); });
      } catch { stop(); }
    }

    function focus(event: FocusEvent) {
      animations.forEach((animation, card) => {
        if (event.target instanceof Node && card.contains(event.target)) {
          animation.cancel();
          animations.delete(card);
        }
      });
    }

    observe();
    media.addEventListener("change", observe);
    document.addEventListener("focusin", focus);
    return () => {
      stop();
      media.removeEventListener("change", observe);
      document.removeEventListener("focusin", focus);
    };
  }, []);

  return null;
}
