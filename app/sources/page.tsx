import { sources } from "@/lib/content";

export const metadata = { title: "Источники" };

export default function SourcesPage() {
  return (
    <main>
      <section className="simple-hero">
        <p className="eyebrow">Редакционный стандарт</p>
        <h1>Факты –<br /><em>с адресом.</em></h1>
        <p className="lead">Мы отделяем документированный факт от версии и красивой семейной легенды. Если точность возраста или детали спорна, так и пишем.</p>
      </section>
      <section className="source-list">
        {sources.map((source) => (
          <article key={source.id}>
            <div><span>{source.kind}</span><strong>{source.status}</strong></div>
            <h2>{source.title}</h2>
            <a href={source.url} rel="noreferrer" target="_blank">Открыть источник ↗</a>
          </article>
        ))}
      </section>
    </main>
  );
}
