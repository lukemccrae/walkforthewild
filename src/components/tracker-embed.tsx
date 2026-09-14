"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";

function trackerDocument(html: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html,
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`;
}

export function TrackerEmbed({ html }: { html: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resizeToContent = () => {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;
      const height = Math.max(
        doc.body.scrollHeight,
        doc.body.offsetHeight,
        doc.documentElement.scrollHeight,
        doc.documentElement.offsetHeight,
      );
      if (height > 0) iframe.style.height = `${height}px`;
    };

    const onLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;
      const observer = new ResizeObserver(resizeToContent);
      observer.observe(doc.body);
      resizeToContent();
      return () => observer.disconnect();
    };

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
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

  return (
    <iframe
      ref={iframeRef}
      title="Live trail tracker"
      srcDoc={trackerDocument(html)}
      loading="lazy"
      className="w-full overflow-hidden rounded-lg border border-stone-200 bg-white"
      style={{ height: "70vh", minHeight: 480 }}
    />
  );
}