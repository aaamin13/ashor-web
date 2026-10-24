import { notFound } from "next/navigation";
import { isLang, ui, officialVideos } from "@/lib/content";

export const metadata = { title: "Videos | ভিডিও" };

export const instant = false;

export default async function Videos({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-forest">{ui.videosTitle[lang]}</h1>
      <p className="mt-2 text-muted">{ui.videosIntro[lang]}</p>
      {officialVideos.length === 0 ? (
        <p className="mt-8 rounded-md border border-dashed border-line p-6 text-muted">{ui.comingSoon[lang]}</p>
      ) : (
        <ul className="mt-8 space-y-3">
          {officialVideos.map((v) => (
            <li key={v.url}>
              <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {v.title[lang]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
