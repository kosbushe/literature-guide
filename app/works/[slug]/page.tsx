import Link from "next/link";
import { notFound } from "next/navigation";
import { fifthGradeBySlug, fifthGradeRoutes } from "@/lib/fifth-grade";
import { sixthGradeBySlug, sixthGradeRoutes } from "@/lib/sixth-grade";

const guideRoutes = [...fifthGradeRoutes, ...sixthGradeRoutes];
const guideBySlug = { ...fifthGradeBySlug, ...sixthGradeBySlug };

export function generateStaticParams() {
  return guideRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = guideBySlug[slug];
  return route ? { title: `${route.work} – маршрут чтения` } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = guideBySlug[slug];
  if (!route) notFound();

  return (
    <main>
      <section className="work-hero season-work-hero">
        <p className="eyebrow">{route.category} · {route.authorShort}</p>
        <h1>{route.workShort ?? route.work}</h1>
        <p className="lead">{route.hook}</p>
        <div className="hero-actions">
          <a className="button" href={route.fullTextUrl} rel="noreferrer" target="_blank">Открыть текст</a>
          <Link className="button button-ghost" href={`/authors/${route.authorSlug}`}>Про автора</Link>
        </div>
      </section>

      <section className="season-guide-section">
        <p className="eyebrow">Перед чтением</p>
        <h2>Сначала –<br /><em>контекст.</em></h2>
        <div className="season-context">
          <div><span>Время</span><strong>{route.year}</strong></div>
          <div><span>Мир текста</span><strong>{route.era}</strong></div>
        </div>
        <div className="season-context-copy">
          <h3>{route.contextTitle}</h3>
          <p>{route.contextText}</p>
        </div>
        <div className="season-signal-grid">
          {route.signals.map((signal, index) => <article key={signal.title}><span>0{index + 1}</span><h3>{signal.title}</h3><p>{signal.text}</p></article>)}
        </div>
      </section>

      <section className="season-guide-section season-words">
        <p className="eyebrow">Чтобы текст не был чужим</p>
        <h2>Три слова –<br /><em>и читаем.</em></h2>
        <dl className="season-terms">
          {route.terms.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.text}</dd></div>)}
        </dl>
        <div className="season-question"><span>Возьми с собой в текст</span><p>{route.question}</p></div>
        <a className="button" href={route.fullTextUrl} rel="noreferrer" target="_blank">Открыть текст</a>
        {route.moreToRead && <p className="micro">{route.moreToRead}</p>}
      </section>
    </main>
  );
}
