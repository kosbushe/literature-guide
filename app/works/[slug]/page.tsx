import Link from "next/link";
import { notFound } from "next/navigation";
import { ContextCodeCard } from "@/components/ContextCodeCard";
import { EventLink } from "@/components/EventLink";
import { ShareQuestion } from "@/components/ShareQuestion";
import { OpenBookBackdrop } from "@/components/OpenBookBackdrop";
import { TermReference } from "@/components/TermReference";
import { TimeContext } from "@/components/TimeContext";
import { fifthGradeAuthorProfiles, fifthGradeBySlug, fifthGradeRoutes } from "@/lib/fifth-grade";
import { sixthGradeAuthorProfiles, sixthGradeBySlug, sixthGradeRoutes } from "@/lib/sixth-grade";
import { seventhGradeRoutes } from "@/lib/seventh-grade";
import { eighthGradeRoutes } from "@/lib/eighth-grade";
import { ninthGradeRoutes } from "@/lib/ninth-grade";
import { upperGradeAuthorProfiles } from "@/lib/upper-grade-authors";
import { tenthGradeRoutes } from "@/lib/tenth-grade";
import { eleventhGradeRoutes } from "@/lib/eleventh-grade";
import { seniorAuthorProfiles } from "@/lib/senior-authors";

const guideRoutes = [...fifthGradeRoutes, ...sixthGradeRoutes, ...seventhGradeRoutes, ...eighthGradeRoutes, ...ninthGradeRoutes, ...tenthGradeRoutes, ...eleventhGradeRoutes];
const guideBySlug = { ...fifthGradeBySlug, ...sixthGradeBySlug, ...Object.fromEntries([...seventhGradeRoutes, ...eighthGradeRoutes, ...ninthGradeRoutes, ...tenthGradeRoutes, ...eleventhGradeRoutes].map((route) => [route.slug, route])) };
const profiles = { ...fifthGradeAuthorProfiles, ...sixthGradeAuthorProfiles, ...upperGradeAuthorProfiles, ...seniorAuthorProfiles };

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
  const visualIndex = guideRoutes.findIndex((item) => item.slug === route.slug);
  const folkTaleAssets: Record<string, { excerpt: string; src: string; alt: string }> = {
    "russian-folk-tale": { excerpt: "В некотором царстве, в некотором государстве жил-был царь, и было у него три сына.", src: "/literature-guide/context/frog-kingdom.jpg", alt: "Сказочное царство, лес, пруд и дорога" },
    "sivka-burka": { excerpt: "Было у старика трое сыновей: двое умных, а третий Иванушка-дурачок.", src: "/literature-guide/context/sivka-burka.webp", alt: "Деревня на рассвете, Иванушка и волшебный конь Сивка-бурка" },
    "ivan-tsarevich-and-grey-wolf": { excerpt: "Жил-был царь Берендей, у него было три сына, младшего звали Иваном.", src: "/literature-guide/context/ivan-tsarevich-wolf.webp", alt: "Иван-царевич и Серый Волк на лесной дороге" }
  };
  const folkTale = folkTaleAssets[route.slug];
  const textUrl = route.primaryTextUrl ?? route.fullTextUrl;
  const contextImage = folkTale?.src ?? profile?.portrait.src;
  const contextImageAlt = folkTale?.alt ?? profile?.portrait.alt;

  return (
    <main>
      <section className="work-hero work-hero-with-book">
        <OpenBookBackdrop author={route.author} title={route.work} intro={route.hook} year={route.year} excerpt={folkTale?.excerpt} />
        <div className="work-hero-copy">
          <p className="eyebrow">{route.category} · {route.authorShort}</p>
          <p className="hero-kicker">Сначала вопрос. Потом – текст.</p>
          <h1>{route.workShort ?? route.work}</h1>
          <p className="lead">{route.hook}</p>
          <p className="route-line">{route.year} · {route.era}</p>
          <div className="hero-actions">
            <EventLink event="full_text_opened" external href={textUrl}>Открыть текст</EventLink>
            <Link className="button button-ghost" href={`/authors/${route.authorSlug}`}>Про автора</Link>
            <a className="button button-ghost" href="#before">Дай мне контекст</a>
          </div>
          <p className="micro">Откроется в новой вкладке · никаких регистраций</p>
        </div>
      </section>

      <section className="reading-section before" id="before">
        <p className="eyebrow">Перед чтением</p>
        <h2>Сначала пойми,<br />куда ты попал.</h2>
        <TimeContext year={route.year} era={route.era} work={route.work} visualIndex={visualIndex} visualSrc={folkTale?.src} />
        <ContextCodeCard imageAlt={contextImageAlt} imageSrc={contextImage} card={{ code: "КОД ТЕКСТА · 01", title: route.contextTitle, thesis: route.contextText, points: route.signals }} />
        <h3 className="section-label">Люди в этой истории</h3>
        <div className="character-grid">
          {characters.map((character) => <article key={character.name}><h3>{character.name}</h3><p>{character.description}</p></article>)}
        </div>
        <h3 className="section-label">Четыре слова, без которых текст будет чужим</h3>
        <dl className="terms">{terms.slice(0, 4).map((item) => <div key={item.term}><dt>{item.term}<TermReference term={item.term} /></dt><dd>{item.text}</dd></div>)}</dl>
        <blockquote>{route.question}</blockquote>
        <EventLink event="full_text_opened" external href={textUrl}>Открыть полный текст</EventLink>
        {route.backupTextUrl ? <p className="micro">Не открылось? <a href={route.backupTextUrl} target="_blank" rel="noreferrer">Запасная ссылка</a>.</p> : <p className="micro">Текст откроется в новой вкладке. Мы не будем мешать.</p>}
      </section>

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