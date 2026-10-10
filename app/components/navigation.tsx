"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "../../lib/portfolio-data";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 768px)");
    const resize = () => { if (media.matches) setOpen(false); };
    window.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => { window.removeEventListener("keydown", close); media.removeEventListener("change", resize); };
  }, [open]);
  return <>
    <button ref={button} type="button" className="button-secondary md:hidden" aria-expanded={open} aria-controls="section-navigation" onClick={() => setOpen(!open)}>{open ? "Close menu" : "Menu"}</button>
    <nav id="section-navigation" aria-label="Main navigation" className={`section-navigation ${open ? "is-open" : ""}`}>
      {navItems.map(item => <a key={item.href} href={item.href} onClick={() => { setOpen(false); if (item.href.startsWith("#")) requestAnimationFrame(() => document.querySelector<HTMLElement>(item.href)?.focus({ preventScroll: true })); }}>{item.label}</a>)}
    </nav>
  </>;
}
