"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";

export function TrackerEmbed({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !html.trim()) return;

    el.innerHTML = html;

    // innerHTML does not execute <script> tags. Re-create each one so
    // third-party tracker scripts load and run.
    const scripts = Array.from(el.querySelectorAll("script"));
    for (const original of scripts) {
      const script = document.createElement("script");
      for (const attr of Array.from(original.attributes)) {
        script.setAttribute(attr.name, attr.value);
      }
      script.text = original.textContent ?? "";
      original.replaceWith(script);
    }

    return () => {
      el.innerHTML = "";
    };
  }, [html]);

  if (!html.trim()) {
    return (
      <div className="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-6 text-center">
        <p className="text-sm font-medium text-ink">Live map coming soon</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-stone-600">
          Wesley&apos;s live position will show up here. In the meantime, daily
          updates are posted on social media.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {site.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pine-700 underline underline-offset-4 hover:text-pine-800"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return <div ref={ref} className="overflow-hidden rounded-lg border border-stone-200" />;
}
