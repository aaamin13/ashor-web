import { notFound } from "next/navigation";
import { isLang, ui, organizers, CONTACT_EMAIL, SOCIAL } from "@/lib/content";

export const metadata = { title: "About | আমাদের কথা" };

export const instant = false;

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-forest">{ui.aboutTitle[lang]}</h1>
      <p className="mt-4 max-w-3xl text-ink">{ui.mission[lang]}</p>
      <h2 className="mt-10 text-2xl font-semibold text-forest">{ui.organizers[lang]}</h2>
      <ul className="mt-3 space-y-1">
        {organizers.map((o) => (
          <li key={o.name.en}>
            {o.name[lang]} — <span className="text-muted">{o.role[lang]}</span>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 text-2xl font-semibold text-forest">{ui.contact[lang]}</h2>
      <p className="mt-3">
        <a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        <a className="text-accent hover:underline" href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
      </p>
    </div>
  );
}
