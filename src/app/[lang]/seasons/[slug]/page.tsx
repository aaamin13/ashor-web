import Image from "next/image";
import { notFound } from "next/navigation";
import { LANGS, isLang, ui, seasons, artists } from "@/lib/content";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => seasons.map((s) => ({ lang, slug: s.slug })));
}

export const instant = false;

export default async function SeasonPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const s = seasons.find((x) => x.slug === slug);
  if (!isLang(lang) || !s) notFound();
  const cast = artists.filter((a) => a.seasons.includes(s.n));
  const sections = [ui.gallery, ui.articles, ui.feedback];
  return (
    <div className="py-10">
      <Image src={s.img} alt={s.title[lang]} width={1923} height={1120} priority className="w-full rounded-md" />
      <p className="mt-6 text-sm uppercase tracking-wider text-accent">
        {lang === "en" ? `Season ${s.n}` : `সিজন ${s.n}`} · {s.status === "upcoming" ? ui.upcoming[lang] : ui.past[lang]}
      </p>
      <h1 className="text-4xl font-bold">{s.title[lang]}</h1>
      {s.subtitle && <p className="text-xl text-muted">{s.subtitle[lang]}</p>}
      <p className="mt-4 max-w-3xl text-ink">{s.blurb[lang]}</p>
      {sections.map((t) => (
        <section key={t.en} className="mt-10">
          <h2 className="text-2xl font-semibold text-forest">{t[lang]}</h2>
          <p className="mt-2 rounded-md border border-dashed border-line p-6 text-muted">{ui.comingSoon[lang]}</p>
        </section>
      ))}
      {cast.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-forest">{ui.nav.artists[lang]}</h2>
          <p className="mt-2 text-muted">{cast.map((a) => a.name[lang]).join(" · ")}</p>
        </section>
      )}
    </div>
  );
}
