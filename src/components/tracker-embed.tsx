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
        height: 100%;
      }
      #corsa-embed {
        height: 100%;
      }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`;
}

export function TrackerEmbed({ html }: { html: string }) {
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
      title="Live trail tracker"
      srcDoc={trackerDocument(html)}
      loading="lazy"
      className="h-[70vh] w-full overflow-hidden rounded-lg border border-stone-200 bg-white"
    />
  );
}
