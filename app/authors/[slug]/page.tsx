import Link from "next/link";
import { notFound } from "next/navigation";
import { fifthGradeAuthors, fifthGradeRoutes } from "@/lib/fifth-grade";

export function generateStaticParams() {
  return fifthGradeRoutes.map((route) => ({ slug: route.authorSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = fifthGradeAuthors[slug];
  return route ? { title: route.author } : {};
}

export default async function FifthGradeAuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = fifthGradeAuthors[slug];
  if (!route) notFound();

  return (
    <main>
      <section className="author-hero season-author-hero">
        <p className="eyebrow">{route.category}</p>
        <h1>{route.author}</h1>
        <p className="lead">{route.authorIntro}</p>
        <Link className="button" href={`/works/${route.slug}`}>К произведению</Link>
      </section>

      <section className="season-guide-section season-author-facts">
        <p className="eyebrow">Человек за именем</p>
        <h2>Три точки,<br /><em>чтобы понять.</em></h2>
        <div className="season-fact-grid">
          {route.authorFacts.map((fact, index) => <article key={fact.label}><span>0{index + 1}</span><h3>{fact.label}</h3><p>{fact.text}</p></article>)}
        </div>
        <div className="season-author-next">
          <span>Сейчас читаем</span>
          <strong>{route.work}</strong>
          <Link href={`/works/${route.slug}`}>Открыть маршрут →</Link>
        </div>
      </section>
    </main>
  );
}
