import Link from "next/link";
import { EventLink } from "@/components/EventLink";
import { TolstoyPortrait } from "@/components/TolstoyPortrait";
import { workRu } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">8 класс · 13–15 лет</p>
          <p className="hero-kicker">Классика – это не пыль. Это люди, которым было примерно столько же, сколько тебе.</p>
          <h1>Толстой<br />в <em>15</em></h1>
          <p className="lead">Не сдал экзамен с первого раза. Жил без родителей. Уже спорил с миром – и с собой.</p>
          <div className="hero-actions">
            <EventLink event="guide_opened" href="/authors/leo-tolstoy">Посмотреть его карточку</EventLink>
            <EventLink className="button button-ghost" event="guide_opened" href="/works/after-the-ball">Сразу к рассказу</EventLink>
          </div>
          <p className="micro">Первая история: «После бала» · 4 минуты до текста</p>
        </div>
        <TolstoyPortrait />
      </section>

      <section className="route-section">
        <p className="eyebrow">Первый маршрут · 04 минуты</p>
        <div className="route-grid">
          <div>
            <h2>Один вечер.<br />Один рассвет.<br /><em>Один вопрос.</em></h2>
            <p>{workRu.teaser}</p>
          </div>
          <div className="route-facts">
            <span>Формат</span><strong>Карточки</strong>
            <span>Спойлеры</span><strong>0</strong>
            <span>Твоя задача</span><strong>Нажать «читать»</strong>
          </div>
        </div>
        <div className="button-row">
          <Link className="button" href="/works/after-the-ball">Войти в рассказ</Link>
          <Link className="text-link" href="/authors/leo-tolstoy">Сначала познакомиться с Толстым</Link>
        </div>
      </section>

      <section className="how-section">
        <p className="eyebrow">Без школьной туманы</p>
        <ol className="how-grid">
          <li><span>01</span><h3>Зацепиться</h3><p>Сначала – живой человек и факт, который удивляет.</p></li>
          <li><span>02</span><h3>Понять код</h3><p>Только слова, без которых в тексте будет темно.</p></li>
          <li><span>03</span><h3>Открыть</h3><p>Дальше – рассказ. Без теста и пересказа.</p></li>
        </ol>
      </section>
    </main>
  );
}
