import { EventLink } from "@/components/EventLink";
import { ContextCodeCard } from "@/components/ContextCodeCard";
import { ReadingPulse } from "@/components/ReadingPulse";
import { ShareQuestion } from "@/components/ShareQuestion";
import { BookCover } from "@/components/BookCover";
import { TimeContext } from "@/components/TimeContext";
import { workCore, workRu } from "@/lib/content";
import Link from "next/link";

export const metadata = { title: "После бала – маршрут чтения" };

export default function AfterTheBallPage() {
  return (
    <main>
      <section className="work-hero work-hero-with-cover">
        <div className="work-hero-copy">
          <p className="eyebrow">Лев Толстой · маршрут чтения</p>
          <p className="hero-kicker">Сначала вопрос. Потом – текст.</p>
          <h1>После<br /><em>бала</em></h1>
          <p className="lead">{workRu.teaser}</p>
          <p className="route-line">{workRu.routeLine}</p>
          <div className="hero-actions">
            <EventLink event="full_text_opened" external href={workCore.fullTextUrl}>Открыть рассказ</EventLink>
            <Link className="button button-ghost" href="/authors/leo-tolstoy">Про Толстого</Link>
            <a className="button button-ghost" href="#before">Дай мне контекст</a>
          </div>
          <p className="micro">Откроется в новой вкладке · никаких регистраций</p>
        </div>
        <BookCover author="Лев Толстой" title="После бала" grade="8" />
      </section>

      <section className="reading-section before" id="before">
        <p className="eyebrow">Перед чтением</p>
        <h2>Сначала пойми,<br />куда ты попал.</h2>
        <TimeContext year="1840-е" era="Россия, бал, чин и правила сословий" />
        <ContextCodeCard card={workRu.before.contextCard} />
        <h3 className="section-label">Люди в этой сцене</h3>
        <div className="character-grid">
          {workRu.before.characters.map((character) => (
            <article key={character.name}><h3>{character.name}</h3><p>{character.description}</p></article>
          ))}
        </div>
        <h3 className="section-label">Четыре слова, без которых текст будет чужим</h3>
        <dl className="terms">
          {workRu.before.terms.map((item) => (
            <div key={item.term}><dt>{item.term}</dt><dd>{item.description}</dd></div>
          ))}
        </dl>
        <blockquote>{workRu.before.question}</blockquote>
        <EventLink event="full_text_opened" external href={workCore.fullTextUrl}>Открыть полный текст</EventLink>
        <p className="micro">Текст откроется в новой вкладке. Мы не будем мешать.</p>
      </section>

      <ReadingPulse />

      <section className="reading-section during">
        <p className="eyebrow">Во время чтения · по желанию</p>
        <h2>Не тест. Три остановки, чтобы увидеть конструкцию.</h2>
        <div className="stops">
          {workRu.during.map((item, index) => (
            <details key={item.stop}>
              <summary><span>0{index + 1}</span>{item.stop}</summary>
              <h3>{item.question}</h3>
              <p>{item.hint}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="reading-section after">
        <p className="eyebrow">После чтения</p>
        <h2>{workRu.after.title}</h2>
        <ol className="question-list">
          {workRu.after.questions.map((question) => <li key={question}>{question}</li>)}
        </ol>
        <p className="note">Одной точной детали из текста достаточно. Пересказывать весь сюжет человечество уже научилось.</p>
        <ShareQuestion text={workRu.after.shareText} />
      </section>
    </main>
  );
}
