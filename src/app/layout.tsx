import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataUrl = new URL(site.url);

export const metadata: Metadata = {
  metadataBase: metadataUrl,
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: `${site.hiker} (${site.trailName})` }],
  keywords: [
    "walk for the wild",
    "wesley tils",
    "megaman",
    "thru-hiking",
    "public lands",
    "conservation",
    "walk across america",
    "appalachian trail",
    "north country trail",
    "pacific northwest trail",
  ],
  creator: site.hiker,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: metadataUrl,
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <style
          dangerouslySetInnerHTML={{
            __html: `body{margin:0;background-color:#faf9f7;color:#1c1a17;font-family:system-ui,sans-serif}h1,h2,h3{font-size:1.25rem;line-height:1.2}img{max-width:100%;height:auto}`,
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}