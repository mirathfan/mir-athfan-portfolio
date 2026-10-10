"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Screenshot } from "../../lib/portfolio-data";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<Screenshot>(screenshots[0]);
  function close() { dialog.current?.close(); }
  return <>
    <p className="mb-4 text-sm text-slate-400">Select a screen to enlarge it.</p>
    <div className="aura-rail">
      {screenshots.map(screen => <figure key={screen.src} className="phone-shot">
        <button type="button" className="screenshot-button" aria-label={`Enlarge ${screen.title}`} onClick={event => { opener.current = event.currentTarget; setSelected(screen); dialog.current?.showModal(); document.body.style.overflow = "hidden"; }}>
          <span className="relative block aspect-[1320/2868] overflow-hidden rounded-md bg-black"><Image src={screen.src} alt={screen.alt} fill sizes="(min-width: 1024px) 180px, 42vw" className="object-cover object-top" /></span>
        </button>
        <figcaption className="px-1.5 py-2 text-xs text-slate-300">{screen.title}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} className="screenshot-dialog" aria-labelledby="screenshot-title" onKeyDown={event => { if (event.key === "Tab") { event.preventDefault(); event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus(); } }} onClick={event => { if (event.target === event.currentTarget) close(); }} onClose={() => { document.body.style.overflow = ""; opener.current?.focus(); }}>
      <div className="dialog-content">
        <div className="flex items-center justify-between gap-4"><h2 id="screenshot-title" className="font-semibold">{selected.title}</h2><button autoFocus type="button" className="button-secondary" onClick={close}>Close</button></div>
        {/* Full-resolution source lets visitors inspect the entire app screen. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={selected.src} alt={selected.alt} className="enlarged-screenshot" />
      </div>
    </dialog>
  </>;
}
