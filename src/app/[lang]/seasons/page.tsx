import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, ui, seasons } from "@/lib/content";

export const metadata = { title: "Seasons | সিজন" };

export const instant = false;

export default async function Seasons({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-forest">{ui.nav.seasons[lang]}</h1>
      <p className="mt-2 text-muted">{ui.seasonsIntro[lang]}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {[...seasons].reverse().map((s) => (
          <Link key={s.slug} href={`/${lang}/seasons/${s.slug}`} className="group overflow-hidden rounded-md border border-line bg-white">
            <Image src={s.img} alt={s.title[lang]} width={1923} height={1120} className="w-full transition group-hover:scale-[1.02]" />
            <div className="p-4">
              <span className="text-xs uppercase tracking-wider text-accent">
                {lang === "en" ? `Season ${s.n}` : `সিজন ${s.n}`} · {s.status === "upcoming" ? ui.upcoming[lang] : ui.past[lang]}
              </span>
              <h2 className="text-xl font-semibold">{s.title[lang]}</h2>
              {s.subtitle && <p className="text-sm text-muted">{s.subtitle[lang]}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
