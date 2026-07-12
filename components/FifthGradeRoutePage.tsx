import Link from "next/link";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { EventLink } from "@/components/EventLink";
import { ShareQuestion } from "@/components/ShareQuestion";
import { TermReference } from "@/components/TermReference";
import { TimeContext } from "@/components/TimeContext";
import type { AuthorProfile, GuideRoute } from "@/lib/fifth-grade";

type Props = {
  route: GuideRoute;
  profile?: AuthorProfile;
  visualIndex: number;
};

const folkVisuals: Record<string, { src: string; alt: string }> = {
  "russian-folk-tale": { src: "/literature-guide/context/frog-kingdom.jpg", alt: "Сказочное царство, лес, пруд и дорога" },
  "sivka-burka": { src: "/literature-guide/context/sivka-burka.webp", alt: "Иванушка и Сивка-бурка на рассвете" },
  "ivan-tsarevich-and-grey-wolf": { src: "/literature-guide/context/ivan-tsarevich-wolf.webp", alt: "Иван-царевич и Серый Волк на лесной дороге" }
};

export function FifthGradeRoutePage({ route, profile, visualIndex }: Props) {
  const folkVisual = folkVisuals[route.slug];
  const visual = folkVisual ?? (profile?.portrait.src ? { src: profile.portrait.src, alt: profile.portrait.alt } : undefined);
  const textUrl = route.primaryTextUrl ?? route.fullTextUrl;
  const terms = route.terms.length >= 4 ? route.terms : [...route.terms, { term: "Деталь", text: "Небольшая подробность, которая помогает заметить главный выбор героя." }];
  const glossary = route.glossary ?? [];
  const isTradition = route.authorSlug === "russian-folk-tale";
  const authorFacts = profile
    ? profile.quickFacts.map((fact) => `${fact.top} · ${fact.bottom}`)
    : (route.authorFacts ?? []).map((fact) => `${fact.label} · ${fact.text}`);

  return (
    <main className="fifth-work">
      <section className="fifth-work-hero">
        {visual && <figure className="fifth-work-hero-art"><img src={visual.src} alt={visual.alt} /><figcaption><span>ВХОД В ТЕКСТ</span>{route.era}</figcaption></figure>}
        <div className="fifth-work-hero-copy">
          <p className="eyebrow">{route.category} · {route.authorShort}</p>
          <p className="fifth-work-kicker">Сначала личный вопрос. Потом — текст.</p>
          <h1>{route.workShort ?? route.work}</h1>
          <p className="fifth-work-lead">{route.hook}</p>
          <div className="hero-actions">
            <a className="button" href="#choice">С чего начать? <span>↓</span></a>
            <EventLink event="full_text_opened" external href={textUrl}>Открыть текст</EventLink>
            <a className="button button-ghost" href="#author">{isTradition ? "Про традицию" : "Автор в твоём возрасте"}</a>
          </div>
          <p className="micro">5 класс · читаем без регистрации · текст откроется в новой вкладке</p>
        </div>
      </section>

      <section className="fifth-work-choice" id="choice">
        <p className="eyebrow">ПЕРЕД ЧТЕНИЕМ · 10 СЕКУНД</p>
        <p>{route.question}</p>
        <strong>Не отвечай сразу. Сначала проверь свою версию текстом.</strong>
      </section>

      <section className="fifth-work-signals" aria-label="Три входа в текст">
        {route.signals.slice(0, 3).map((signal, index) => (
          <article key={signal.title}><span>0{index + 1}</span><h2>{signal.title}</h2><p>{signal.text}</p></article>
        ))}
      </section>

      <section className="reading-section fifth-work-context" id="before">
        <p className="eyebrow">СНАЧАЛА ПОЙМИ, КУДА ТЫ ПОПАЛ</p>
        <h2>{route.contextTitle}</h2>
        <p className="section-lead">{route.contextText}</p>
        <TimeContext year={route.year} era={route.era} work={route.work} visualIndex={visualIndex} visualSrc={visual?.src} />
      </section>

      <section className="fifth-work-author" id="author">
        {isTradition ? (
          <div className="fifth-work-tradition"><span>ГОЛОС</span><strong>Не один автор.<br />Много рассказчиков.</strong></div>
        ) : profile ? (
          <AuthorPortrait ageMark={`${profile.age}`} alt={profile.portrait.alt} caption={profile.portrait.caption} credit={profile.portrait.credit} label={profile.portrait.label} src={profile.portrait.src} showAge={false} />
        ) : null}
        <div>
          <p className="eyebrow">{isTradition ? "КТО СОБРАЛ ЭТУ ИСТОРИЮ" : "КТО НАПИСАЛ ЭТОТ ТЕКСТ"}</p>
          <h2>{isTradition ? "Сказка без одного автора." : `${route.author} в ${profile?.age ?? 15} лет.`}</h2>
          <p>{profile?.ageLead ?? route.authorIntro}</p>
          <p>{profile?.kicker ?? route.authorIntro}</p>
          <div className="fifth-work-author-facts">
            {authorFacts.slice(0, 3).map((fact) => <span key={fact}>{fact}</span>)}
          </div>
        </div>
      </section>

      <section className="reading-section fifth-work-words">
        <p className="eyebrow">СЛОВА, БЕЗ КОТОРЫХ ТЕКСТ СТАНЕТ ЧУЖИМ</p>
        <h2>Не учи.<br />Открывай, если слово<br />мешает увидеть сцену.</h2>
        <p className="section-lead">Эти четыре слова помогут войти в текст. Остальное лучше увидеть самому.</p>
        <dl className="terms">
          {terms.slice(0, 4).map((item) => <div key={item.term}><dt>{item.term}<TermReference term={item.term} /></dt><dd>{item.text}</dd></div>)}
        </dl>
        {glossary.length > 0 && <div className="microglossary" aria-labelledby="glossary-title">
          <div className="microglossary-intro">
            <p className="eyebrow">ПО ХОДУ ЧТЕНИЯ</p>
            <h3 id="glossary-title">Встретил незнакомое? Нажми.</h3>
            <p>Здесь не надо ничего учить. Это короткие подсказки к миру произведения.</p>
          </div>
          <div className="microglossary-grid">
            {glossary.map((item) => <details key={item.term}>
              <summary>{item.term}<span>+</span></summary>
              <div>
                <p>{item.description}</p>
                <p><b>Зачем это здесь:</b> {item.why}</p>
                <TermReference term={item.term} />
              </div>
            </details>)}
          </div>
        </div>}
      </section>

      <section className="fifth-work-read" id="read">
        {visual && <figure className="fifth-work-read-art"><img src={visual.src} alt="" /></figure>}
        <div className="fifth-work-read-copy">
          <p className="eyebrow">ТЕПЕРЬ — ТЕКСТ</p>
          <h2>Открой произведение<br />и найди место,<br />после которого<br />твой взгляд меняется.</h2>
          <p>Контекст уже рядом. Теперь текст должен работать сам.</p>
          <div className="after-ball-read-actions">
            <EventLink event="full_text_opened" external href={textUrl}>Открыть полный текст</EventLink>
            {route.backupTextUrl && <a href={route.backupTextUrl} target="_blank" rel="noreferrer">Не открылось? Запасная ссылка ↗</a>}
          </div>
        </div>
      </section>

      <section className="reading-section fifth-work-after">
        <p className="eyebrow">КОГДА ДОЧИТАЕШЬ</p>
        <h2>Не контрольная.<br />Один честный вывод.</h2>
        <blockquote>{route.question}</blockquote>
        <p className="note">Одной точной детали из текста достаточно. Пересказывать весь сюжет человечество уже научилось.</p>
        <ShareQuestion author={route.author} text={route.question} work={route.work} />
        <p className="after-ball-back"><Link href="/?class=5#program">← Вернуться к 5 классу</Link></p>
      </section>
    </main>
  );
}
