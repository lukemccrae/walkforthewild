"use client";

import { useEffect, useRef, useState } from "react";
import { trackerEmbedHtml } from "@/content/tracker";
import { TrackerEmbed } from "./tracker-embed";

export function TrackerDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };

    dialog.addEventListener("click", handleClick);
    return () => dialog.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          ref.current?.showModal();
        }}
        className="inline-flex items-center gap-2 rounded-md bg-pine-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-pine-800"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine-200 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-pine-200" />
        </span>
        Trail Tracker
      </button>

      <dialog
        ref={ref}
        onClose={() => setOpen(false)}
        aria-label="Live trail tracker"
        className="m-auto w-[min(56rem,calc(100%-1.5rem))] rounded-xl border border-stone-200 bg-white p-0 shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3">
          <h2 className="text-sm font-semibold tracking-tight text-ink">
            Live trail tracker
          </h2>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="rounded-md px-2 py-1 text-sm font-medium text-stone-500 hover:bg-stone-100 hover:text-ink"
            aria-label="Close tracker"
          >
            Close
          </button>
        </div>
        <div className="p-4 sm:p-5">
          <TrackerEmbed html={trackerEmbedHtml} />
        </div>
      </dialog>
    </>
  );
}
