"use client";

import { useEffect, useRef } from "react";

const widgetUrl =
  "https://www.gofundme.com/f/jc4wu-walk-for-the-wild/widget/medium?attribution_id=sl%3A58cee0f9-a44a-4e1d-a9aa-3e73f9be86a3";

export function GoFundMeEmbed({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const url = new URL(widgetUrl);
    url.searchParams.set("utm_content", window.location.hostname || "none");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_source", "widget");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("class", "gfm-embed-iframe");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "200");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("title", "GoFundMe campaign");
    iframe.setAttribute(
      "src",
      `${url.toString()}#:~:tcm-regime=GDPR&tcm-prompt=Hidden`,
    );
    el.appendChild(iframe);

    const handleResize = (event: MessageEvent) => {
      if (
        event.source === iframe.contentWindow &&
        event.data &&
        event.data.type === "gfm-embed-widget-resize" &&
        typeof event.data.offsetHeight !== "undefined"
      ) {
        iframe.setAttribute("height", String(event.data.offsetHeight));
      }
    };

    window.addEventListener("message", handleResize);
    return () => {
      window.removeEventListener("message", handleResize);
      el.replaceChildren();
    };
  }, []);

  return <div ref={ref} className={className} />;
}
