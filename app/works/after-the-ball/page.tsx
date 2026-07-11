import { EventLink } from "@/components/EventLink";
import { ContextCodeCard } from "@/components/ContextCodeCard";
import { ReadingPulse } from "@/components/ReadingPulse";
import { ShareQuestion } from "@/components/ShareQuestion";
import { workCore, workRu } from "@/lib/content";

export const metadata = { title: "После бала — маршрут чтения" };

export default function AfterTheBallPage() {
  return (
    <main>
      <section className="work-hero">
        <p className="eyebrow">Лев Толстой · маршрут чтения</p>
        <p className="hero-kicker">Сначала вопрос. Потом — текст.</p>
        <h1>После<br /><em>бала</em></h1>
        <p className="lead">{workRu.teaser}</p>
        <p className="route-line">{workRu.routeLine}</p>
        <div className="hero-actions">
          <EventLink event="full_text_opened" external href={workCore.fullTextUrl}>Открыть рассказ</EventLink>
          <a className="button button-ghost" href="#before">Дай мне 60 секунд</a>
        </div>
        <p className="micro">Откроется в новой вкладке · никаких регистраций</p>
      </section>

      <section className="reading-section before" id="before">
        <p className="eyebrow">До чтения · 60 секунд</p>
        <h2>Сначала пойми,<br />куда ты попал.</h2>
        <section className="epoch-context" aria-label="Россия 1840-х годов">
          <div className="epoch-title"><span>Россия · 1840-е</span><strong>У тебя 4G.<br />У Ивана — лошадь, письмо и статус.</strong></div>
          <div className="epoch-grid">
            {workRu.before.epoch.map((item) => <article key={item.title}><span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </section>
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
