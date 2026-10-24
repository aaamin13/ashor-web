import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, ui, seasons } from "@/lib/content";

export const instant = false;

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const next = seasons.find((s) => s.status === "upcoming");
  return (
    <>
      <section className="pt-10">
        <h1 className="text-5xl font-bold tracking-tight text-forest sm:text-7xl">আসর</h1>
        <p className="mt-2 text-xl text-accent">{ui.tagline[lang]}</p>
        <Image src="/images/ashor.jpg" alt="Ashor" width={1923} height={1120} priority className="mt-8 w-full rounded-md" />
      </section>

      <p className="mt-8 max-w-3xl text-lg text-ink">{ui.mission[lang]}</p>

      <h2 className="mt-12 text-2xl font-semibold text-forest">{ui.whatWeDo[lang]}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {ui.pillars.map((p) => (
          <div key={p.t.en} className="rounded-md border border-line bg-white p-5">
            <h3 className="font-semibold">{p.t[lang]}</h3>
            <p className="mt-2 text-sm text-muted">{p.d[lang]}</p>
          </div>
        ))}
      </div>

      {next && (
        <Link href={`/${lang}/seasons/${next.slug}`} className="group mt-12 block overflow-hidden rounded-md border border-line">
          <Image src={next.img} alt={next.title[lang]} width={1923} height={1120} className="w-full transition group-hover:scale-[1.02]" />
          <div className="bg-white p-5">
            <span className="text-sm uppercase tracking-wider text-accent">{ui.upcoming[lang]}</span>
            <h2 className="text-2xl font-semibold">{next.title[lang]}</h2>
            {next.subtitle && <p className="text-muted">({next.subtitle[lang]})</p>}
          </div>
        </Link>
      )}
    </>
  );
}
