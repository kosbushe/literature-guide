import { GradeNavigator } from "@/components/GradeNavigator";
import { curriculum } from "@/lib/curriculum";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Авторский навигатор по литературе · 5–11 классы</p>
          <p className="hero-kicker">Не «прочитай и перескажи». Сначала пойми людей, время и правила мира.</p>
          <h1>Литература<br /><em>становится</em><br />твоей.</h1>
          <p className="lead">Выбираешь класс и произведение. Получаешь короткий вход в автора, эпоху и текст.</p>
        </div>
        <div className="home-manifesto" aria-label="Как устроен гид">
          <span>01</span><strong>Найди свой класс</strong>
          <span>02</span><strong>Выбери, что проходишь</strong>
          <span>03</span><strong>Открой свой маршрут</strong>
        </div>
      </section>

      <GradeNavigator />

      <section className="catalog-section">
        <p className="eyebrow">Карта всей программы</p>
        <h2>Авторы не лежат<br />в одной <em>куче.</em></h2>
          <p className="catalog-lead">Базовая карта русской литературы для 5–11 классов. Порядок тем может отличаться в вашей школе; маршруты будут появляться один за другим.</p>
        <div className="curriculum-catalog">
          {curriculum.map((item) => (
            <details key={item.grade}>
              <summary><span>{item.grade}</span><strong>{item.phase}</strong><small>{item.authors.length} авторов</small></summary>
              <div>{item.authors.map((author) => <span key={author}>{author}</span>)}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
