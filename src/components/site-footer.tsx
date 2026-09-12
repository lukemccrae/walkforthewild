import { site } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-bold tracking-tight text-ink">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-stone-600">
              Wesley &ldquo;{site.trailName}&rdquo; {site.hiker}&apos;s 8,000-mile
              walk across America for public lands.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Follow the walk</p>
            <ul className="mt-3 space-y-2 text-sm">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-pine-700"
                  >
                    {s.label} <span className="text-stone-400">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-stone-200 pt-6 text-xs leading-5 text-stone-500">
          &copy; {year} {site.name}. A walk for the protection of US public
          lands. This site is not affiliated with the National Park Service or
          any land management agency.
        </p>
      </Container>
    </footer>
  );
}