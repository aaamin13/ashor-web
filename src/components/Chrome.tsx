"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lang, ui, SOCIAL } from "@/lib/content";

const links = ["", "seasons", "artists", "videos", "about"] as const;
const keys = ["home", "seasons", "artists", "videos", "about"] as const;

export function Header({ lang }: { lang: Lang }) {
  const path = usePathname();
  const other: Lang = lang === "en" ? "bn" : "en";
  const swapped = path.replace(/^\/(en|bn)/, `/${other}`);
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
        <Link href={`/${lang}`} aria-label="Ashor home" className="shrink-0">
          <Image
            src="/images/ashor-logo.png"
            alt="আসর Ashor"
            width={1920}
            height={1080}
            className="h-12 w-auto"
          />
        </Link>
        <Link
          href={swapped}
          className="rounded-full border border-accent/50 px-3 py-1 text-sm text-accent hover:bg-accent/10 sm:order-3"
        >
          {ui.switchTo[lang]}
        </Link>
        <nav className="flex w-full gap-4 overflow-x-auto text-sm sm:order-2 sm:w-auto">
          {links.map((l, i) => {
            const href = `/${lang}${l ? `/${l}` : ""}`;
            const active = l ? path.startsWith(href) : path === href;
            return (
              <Link
                key={l}
                href={href}
                className={`whitespace-nowrap py-1 ${active ? "text-accent" : "text-muted hover:text-forest"}`}
              >
                {ui.nav[keys[i]][lang]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-16 border-t border-line py-8 text-center text-sm text-muted">
      <a
        href={SOCIAL.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent hover:underline"
      >
        {ui.follow[lang]} →
      </a>
      <p className="mt-2">© {ui.rights[lang]}</p>
    </footer>
  );
}
