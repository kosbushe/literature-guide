import { GradeNavigator } from "@/components/GradeNavigator";
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
              <div>{item.authors.map((author) => <span key={author}>{author}</span>)}</div>
            </details>
          ))}
        </div>
        </details>
      </section>
    </main>
  );
}
