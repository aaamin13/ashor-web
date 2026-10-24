import { notFound } from "next/navigation";
import { isLang, ui, artists } from "@/lib/content";

export const metadata = { title: "Artists | শিল্পী" };

export const instant = false;

export default async function Artists({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-forest">{ui.artistsTitle[lang]}</h1>
      <p className="mt-2 text-muted">{ui.artistsIntro[lang]}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {artists.map((a) => (
          <article key={a.name.en} className="rounded-md border border-line bg-white p-5">
            <h2 className="text-xl font-semibold">{a.name[lang]}</h2>
            <p className="text-sm text-accent">{a.type[lang]}</p>
            <p className="mt-3 text-ink">{a.bio[lang]}</p>
            <p className="mt-3 italic text-muted">{a.blurb[lang]}</p>
            <p className="mt-3 text-xs text-muted">
              {ui.participated[lang]}: {a.seasons.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
