import { GradeNavigator } from "@/components/GradeNavigator";
import Link from "next/link";
import { authorLink } from "@/lib/author-links";
import { curriculum } from "@/lib/curriculum";

export default function Home() {
  return (
    <main>
      <GradeNavigator />

      <section className="catalog-section" aria-labelledby="catalog-heading">
        <details>
          <summary id="catalog-heading">Все авторы и поэты · 5–11 классы</summary>
          <p className="catalog-lead">Базовая карта: порядок тем может отличаться в вашей школе.</p>
        <div className="curriculum-catalog">
          {curriculum.map((item) => (
            <details key={item.grade}>
              <summary><span>{item.grade}</span><strong>{item.phase}</strong><small>{item.authors.length} авторов</small></summary>
              <div>
                {item.authors.map((author) => {
                  const href = authorLink(author);
                  return href ? <Link className="author-chip" href={href} key={author}>{author}</Link> : <span aria-label={`${author}: карточка готовится`} className="author-chip author-chip-soon" key={author}>{author}<small>скоро</small></span>;
                })}
              </div>
            </details>
          ))}
        </div>
        </details>
      </section>
    </main>
  );
}
