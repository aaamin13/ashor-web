import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_Bengali } from "next/font/google";
import "../globals.css";
import { Header, Footer } from "@/components/Chrome";
import { LANGS, isLang, ui } from "@/lib/content";

const bn = Noto_Sans_Bengali({ subsets: ["bengali", "latin"], variable: "--font-bn" });

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: { default: "Ashor | আসর", template: "%s | Ashor" },
    description: `${ui.tagline[lang]} ${ui.mission[lang]}`,
    metadataBase: new URL("https://ashoratx.com"),
    icons: {
      icon: "/images/ashor-favicon.png",
    },
  };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={bn.variable}>
      <body className="flex min-h-screen flex-col">
        <Header lang={lang} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
