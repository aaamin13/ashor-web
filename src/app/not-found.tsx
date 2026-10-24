import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ padding: 40, fontFamily: "sans-serif" }}>
        404 — <Link href="/en">Ashor</Link>
      </body>
    </html>
  );
}
