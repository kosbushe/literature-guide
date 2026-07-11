import Link from "next/link";
import { notFound } from "next/navigation";
import { ContextCodeCard } from "@/components/ContextCodeCard";
import { EventLink } from "@/components/EventLink";
import { ReadingPulse } from "@/components/ReadingPulse";
import { ShareQuestion } from "@/components/ShareQuestion";
import { fifthGradeAuthorProfiles, fifthGradeBySlug, fifthGradeRoutes } from "@/lib/fifth-grade";
import { sixthGradeAuthorProfiles, sixthGradeBySlug, sixthGradeRoutes } from "@/lib/sixth-grade";
import { seventhGradeRoutes } from "@/lib/seventh-grade";
import { eighthGradeRoutes } from "@/lib/eighth-grade";
import { ninthGradeRoutes } from "@/lib/ninth-grade";
import { upperGradeAuthorProfiles } from "@/lib/upper-grade-authors";

const guideRoutes = [...fifthGradeRoutes, ...sixthGradeRoutes, ...seventhGradeRoutes, ...eighthGradeRoutes, ...ninthGradeRoutes];
const guideBySlug = { ...fifthGradeBySlug, ...sixthGradeBySlug, ...Object.fromEntries([...seventhGradeRoutes, ...eighthGradeRoutes, ...ninthGradeRoutes].map((route) => [route.slug, route])) };
const profiles = { ...fifthGradeAuthorProfiles, ...sixthGradeAuthorProfiles, ...upperGradeAuthorProfiles };

export function generateStaticParams() {
  return guideRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = guideBySlug[slug];
  return route ? { title: `${route.work} – маршрут чтения` } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = guideBySlug[slug];
  if (!route) notFound();
  const profile = profiles[route.authorSlug];
  const terms = route.terms.length >= 4 ? route.terms : [...route.terms, { term: "Деталь", text: "Небольшая подробность, которая помогает увидеть главный выбор героя." }];
  const characters = route.characters ?? [{ name: route.author, description: route.authorIntro }, { name: "Главный конфликт", description: route.contextTitle }, { name: "Твой вопрос", description: route.question }];
  const stops = route.signals.slice(0, 3).map((signal, index) => ({ stop: ["На старте", "В середине", "После финала"][index], question: signal.title, hint: signal.text }));
  const epoch = [{ label: "ВРЕМЯ", title: route.year }, { label: "МИР", title: route.era }, ...route.signals.slice(0, 2).map((signal) => ({ label: "СМОТРИ", title: signal.title }))];

  return (
    <main>
      <section className="work-hero">
        <p className="eyebrow">{route.category} · {route.authorShort}</p>
        <p className="hero-kicker">Сначала вопрос. Потом – текст.</p>
        <h1>{route.workShort ?? route.work}</h1>
        <p className="lead">{route.hook}</p>
        <p className="route-line">{route.year} · {route.era}</p>
        <div className="hero-actions">
          <EventLink event="full_text_opened" external href={route.fullTextUrl}>Открыть текст</EventLink>
          <Link className="button button-ghost" href={`/authors/${route.authorSlug}`}>Про автора</Link>
          <a className="button button-ghost" href="#before">Дай мне контекст</a>
        </div>
        <p className="micro">Откроется в новой вкладке · никаких регистраций</p>
      </section>

      <section className="reading-section before" id="before">
        <p className="eyebrow">Перед чтением</p>
        <h2>Сначала пойми,<br />куда ты попал.</h2>
        <section className="epoch-context" aria-label={`Эпоха произведения «${route.work}»`}>
          <div className="epoch-title"><span>{route.year} · контекст</span><strong>У тебя экран и поиск.<br />У героев – свой мир и свои правила.</strong></div>
          <div className="epoch-grid">
            {epoch.map((item) => <article key={`${item.label}-${item.title}`}><span>{item.label}</span><h3>{item.title}</h3></article>)}
          </div>
        </section>
        <ContextCodeCard imageAlt={profile?.portrait.alt} imageSrc={profile?.portrait.src} card={{ code: "КОД ТЕКСТА · 01", title: route.contextTitle, thesis: route.contextText, points: route.signals }} />
        <h3 className="section-label">Люди в этой истории</h3>
        <div className="character-grid">
          {characters.map((character) => <article key={character.name}><h3>{character.name}</h3><p>{character.description}</p></article>)}
        </div>
        <h3 className="section-label">Четыре слова, без которых текст будет чужим</h3>
        <dl className="terms">{terms.slice(0, 4).map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.text}</dd></div>)}</dl>
        <blockquote>{route.question}</blockquote>
        <EventLink event="full_text_opened" external href={route.fullTextUrl}>Открыть полный текст</EventLink>
        <p className="micro">Текст откроется в новой вкладке. Мы не будем мешать.</p>
      </section>

      <ReadingPulse />

      <section className="reading-section during">
        <p className="eyebrow">Во время чтения · по желанию</p>
        <h2>Не тест. Три остановки, чтобы увидеть конструкцию.</h2>
        <div className="stops">{stops.map((item, index) => <details key={item.stop}><summary><span>0{index + 1}</span>{item.stop}</summary><h3>{item.question}</h3><p>{item.hint}</p></details>)}</div>
      </section>

      <section className="reading-section after">
        <p className="eyebrow">После чтения</p>
        <h2>Не контрольная. Один честный вывод.</h2>
        <ol className="question-list"><li>{route.question}</li>{route.signals.slice(0, 2).map((item) => <li key={item.title}>Как {item.title.toLowerCase()} меняет твой взгляд на выбор героя?</li>)}</ol>
        <p className="note">Одной точной детали из текста достаточно. Пересказывать весь сюжет человечество уже научилось.</p>
        <ShareQuestion author={route.author} text={route.question} work={route.work} />
      </section>
    </main>
  );
}
