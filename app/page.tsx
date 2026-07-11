import Link from "next/link";
import { EventLink } from "@/components/EventLink";
import { workRu } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">8 класс · 13–15 лет</p>
          <h1>Сначала пойми,<br />куда ты попал.<br /><em>Потом читай.</em></h1>
          <p className="lead">Старые книги часто кажутся чужими не потому, что они скучные. Просто никто не объяснил, кто эти люди, по каким правилам они жили и почему один танец или мундир значили больше, чем сейчас.</p>
          <EventLink event="guide_opened" href="/works/after-the-ball">Начать с «После бала»</EventLink>
          <p className="micro">Лев Толстой · {workRu.routeLine}</p>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span>ДО</span><i></i><span>ПОСЛЕ</span>
        </div>
      </section>

      <section className="route-section">
        <p className="eyebrow">Первый маршрут</p>
        <div className="route-grid">
          <div>
            <h2>Лев Толстой.<br />«После бала»</h2>
            <p>{workRu.teaser}</p>
          </div>
          <div className="route-facts">
            <span>Подготовка</span><strong>4 минуты</strong>
            <span>Спойлеры</span><strong>нет</strong>
            <span>Задача</span><strong>открыть текст</strong>
          </div>
        </div>
        <div className="button-row">
          <Link className="button" href="/works/after-the-ball">Войти в рассказ</Link>
          <Link className="text-link" href="/authors/leo-tolstoy">Сначала познакомиться с Толстым</Link>
        </div>
      </section>

      <section className="how-section">
        <p className="eyebrow">Как это работает</p>
        <ol className="how-grid">
          <li><span>01</span><h3>Человек</h3><p>Не памятник и борода, а живой автор с противоречиями.</p></li>
          <li><span>02</span><h3>Контекст</h3><p>Незнакомый мир — коротко, точно и без школьной туманности.</p></li>
          <li><span>03</span><h3>Текст</h3><p>Ты читаешь. Мы только помогаем заметить важное.</p></li>
        </ol>
      </section>
    </main>
  );
}
