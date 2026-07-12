import Link from "next/link";
import { BeforeReadingChoice } from "@/components/BeforeReadingChoice";
import { EventLink } from "@/components/EventLink";
import { ShareQuestion } from "@/components/ShareQuestion";
import { TermReference } from "@/components/TermReference";
import { TimeContext } from "@/components/TimeContext";
import { workCore, workRu } from "@/lib/content";

export const metadata = { title: "После бала – маршрут чтения" };

const backupTextUrl = workCore.backupTextUrl;

export default function AfterTheBallPage() {
  return (
    <main className="after-ball-page">
      <section className="after-ball-hero">
        <div className="after-ball-hero-copy">
          <p className="eyebrow">8 КЛАСС · РАССКАЗ · ЛЕВ ТОЛСТОЙ</p>
          <p className="after-ball-kicker">Сначала увидь конфликт. Потом открывай текст.</p>
          <h1>После<br /><em>бала</em></h1>
          <p className="after-ball-lead">Ты влюбился. Отец девушки кажется идеальным взрослым. Через несколько часов ты видишь его так, что больше не можешь смотреть на него прежними глазами.</p>
          <p className="after-ball-question">Поверить глазам или объяснить себе: «так принято»?</p>
          <div className="hero-actions">
            <a className="button" href="#choice">С чего начать? <span>↓</span></a>
            <EventLink event="full_text_opened" external href={workCore.fullTextUrl}>Открыть рассказ</EventLink>
            <a className="button button-ghost" href="#tolstoy">Толстой в 15</a>
          </div>
          <p className="micro">Короткий рассказ · два мира · одна ночь и одно утро</p>
        </div>
        <figure className="after-ball-hero-art">
          <img src="/literature-guide/context/after-ball-ball.webp" alt="Варенька танцует мазурку с отцом-полковником на балу" />
          <figcaption><span>КАДР 01</span> Вечером форма означает уважение, музыку и красоту.</figcaption>
        </figure>
      </section>

      <section className="after-ball-choice-section" id="choice">
        <p className="eyebrow">ПЕРЕД ЧТЕНИЕМ · 10 СЕКУНД</p>
        <BeforeReadingChoice />
      </section>

      <section className="after-ball-reveal" aria-label="Два мира рассказа">
        <article>
          <img src="/literature-guide/context/after-ball-ball.webp" alt="Бал в России 1840-х годов" loading="lazy" />
          <div><span>ВЕЧЕР</span><h2>Тот же полковник.<br />Белые перчатки. Мазурка.</h2><p>Герой уверен: перед ним идеальный человек и идеальная семья.</p></div>
        </article>
        <article>
          <img src="/literature-guide/context/after-ball-dawn.webp" alt="Утро после бала: строй солдат и полковник на холодном плацу" loading="lazy" />
          <div><span>УТРО</span><h2>Та же форма.<br />Тот же человек.</h2><p>Теперь герой видит то, чего вечером не замечал.</p></div>
        </article>
      </section>

      <section className="reading-section after-ball-context" id="before">
        <p className="eyebrow">СНАЧАЛА ПОЙМИ, КУДА ТЫ ПОПАЛ</p>
        <h2>Россия 1840-х:<br />бал, чин и телесное наказание.</h2>
        <p className="section-lead">Это не рассказ «про старину». Это история о мире, где красота, статус и насилие могут принадлежать одному порядку.</p>
        <TimeContext year="1840-е" era="Россия: бал, военный чин и телесное наказание" work="После бала" visualIndex={51} visualSrc="/literature-guide/context/after-ball-dawn.webp" />
      </section>

      <section className="after-ball-code">
        <div>
          <p className="eyebrow">КОД ТЕКСТА · 01</p>
          <h2>Красота и жестокость могут быть частью одного мира.</h2>
        </div>
        <div className="after-ball-code-grid">
          <article><span>БАЛ</span><p>Не просто вечеринка, а публичный ритуал: здесь все видят, кого пригласили, с кем танцуют и кому оказывают внимание.</p></article>
          <article><span>ПОЛКОВНИК</span><p>Не только отец Вареньки. Его чин означает власть и обязанность подчиняться военному порядку.</p></article>
          <article><span>ШПИЦРУТЕНЫ</span><p>Наказание, в котором множество солдат вынуждены участвовать в боли одного человека.</p></article>
        </div>
      </section>

      <section className="after-ball-author" id="tolstoy">
        <div className="after-ball-author-age"><span>15</span><small>ЛЕТ<br />ТОЛСТОМУ</small></div>
        <div>
          <p className="eyebrow">КТО НАПИСАЛ ЭТОТ ТЕКСТ</p>
          <h2>Лев Толстой<br />в 15 лет.</h2>
          <p>Он ещё не великий писатель и не Толстой из учебника. Он живёт в Казани с тёткой, готовится к университету, сомневается в себе и пытается понять, каким человеком хочет стать.</p>
          <p>До «После бала» ещё почти шестьдесят лет. Пока он не знает, что напишет великие книги. Но уже нащупывает свой вопрос: как не привыкнуть к несправедливости и отвечать за свои поступки.</p>
          <div className="after-ball-author-facts"><span>1843 · Казань</span><span>Готовится к университету</span><span>До славы — ещё далеко</span></div>
        </div>
      </section>

      <section className="reading-section after-ball-words">
        <p className="eyebrow">СЛОВА, БЕЗ КОТОРЫХ ТЕКСТ СТАНЕТ ЧУЖИМ</p>
        <h2>Не учи.<br />Открывай, если слово<br />мешает увидеть сцену.</h2>
        <p className="section-lead">Четыре слова помогут войти в рассказ. Остальные не надо запоминать заранее: они откроются, когда понадобятся.</p>
        <dl className="terms">
          {workRu.before.terms.map((item) => (
            <div key={item.term}><dt>{item.term}<TermReference term={item.term} /></dt><dd>{item.description}</dd></div>
          ))}
        </dl>
        <div className="microglossary" aria-labelledby="glossary-title">
          <div className="microglossary-intro">
            <p className="eyebrow">ПО ХОДУ ЧТЕНИЯ</p>
            <h3 id="glossary-title">Встретил незнакомое? Нажми.</h3>
            <p>Здесь не надо ничего учить. Это короткие подсказки к миру рассказа.</p>
          </div>
          <div className="microglossary-grid">
            {workRu.before.glossary.map((item) => (
              <details key={item.term}>
                <summary>{item.term}<span>+</span></summary>
                <div>
                  <p>{item.description}</p>
                  <p><b>Зачем это здесь:</b> {item.why}</p>
                  <TermReference term={item.term} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="after-ball-read" id="read">
        <p className="eyebrow">ТЕПЕРЬ — ТЕКСТ</p>
        <h2>Открой рассказ<br />и найди точку,<br />после которой герой<br />не может остаться прежним.</h2>
        <p>Ты уже знаешь, почему важны бал, мазурка, полковник и утро. Дальше Толстой должен работать сам.</p>
        <div className="after-ball-read-actions">
          <EventLink event="full_text_opened" external href={workCore.fullTextUrl}>Открыть полный текст</EventLink>
          <a href={backupTextUrl} target="_blank" rel="noreferrer">Не открылось? Запасная ссылка ↗</a>
        </div>
      </section>

      <section className="reading-section after-ball-after">
        <p className="eyebrow">КОГДА ДОЧИТАЕШЬ</p>
        <h2>Не контрольная.<br />Один честный вывод.</h2>
        <blockquote>Полковник изменился — или изменилось то, что Иван Васильевич смог в нём увидеть?</blockquote>
        <p className="note">Одной точной детали из текста достаточно. Пересказывать весь сюжет человечество уже научилось.</p>
        <ShareQuestion text={workRu.after.shareText} />
        <p className="after-ball-back"><Link href="/">← Вернуться к маршрутам по классам</Link></p>
      </section>
    </main>
  );
}
