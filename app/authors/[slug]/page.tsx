import Link from "next/link";
import { notFound } from "next/navigation";
import { AgeMirror } from "@/components/AgeMirror";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { fifthGradeAuthorProfiles, fifthGradeRoutes } from "@/lib/fifth-grade";
import { sixthGradeAuthorProfiles, sixthGradeRoutes } from "@/lib/sixth-grade";
import { seventhGradeRoutes } from "@/lib/seventh-grade";
import { eighthGradeRoutes } from "@/lib/eighth-grade";
import { ninthGradeRoutes } from "@/lib/ninth-grade";
import { upperGradeAuthorProfiles } from "@/lib/upper-grade-authors";

const guideRoutes = [...fifthGradeRoutes, ...sixthGradeRoutes, ...seventhGradeRoutes, ...eighthGradeRoutes, ...ninthGradeRoutes];
const authorRoutes = (slug: string) => guideRoutes.filter((route) => route.authorSlug === slug);
const authorProfiles = { ...fifthGradeAuthorProfiles, ...sixthGradeAuthorProfiles, ...upperGradeAuthorProfiles };

export function generateStaticParams() {
  return [...new Set(guideRoutes.map((route) => route.authorSlug))].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = authorRoutes(slug)[0];
  return route ? { title: route.author } : {};
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const routes = authorRoutes(slug);
  const route = routes[0];
  const profile = authorProfiles[slug];
  if (!route || !profile) notFound();
  const passport = [
    ...profile.passport.slice(0, 5),
    { title: "Мир вокруг", text: route.era },
    { title: route.contextTitle, text: route.contextText },
    { title: route.signals[0].title, text: route.signals[0].text },
    { title: route.signals[1].title, text: route.signals[1].text },
    { title: "После чтения", text: route.question }
  ];

  return (
    <main>
      <section className="author-hero author-profile-hero">
        <div>
          <p className="eyebrow">{profile.eyebrow}</p>
          <p className="hero-kicker">{profile.kicker}</p>
          <h1>{profile.firstName}.<br /><em>{profile.age ? `${profile.age} лет.` : "без одного автора."}</em></h1>
          <p className="lead">{profile.ageLead}</p>
          <div className="quick-facts" aria-label={`Три факта о ${route.author}`}>
            {profile.quickFacts.map((fact) => <span key={fact.top}>{fact.top}<br /><b>{fact.bottom}</b></span>)}
          </div>
          <AgeMirror compact profile={profile.ageMirror} />
          <Link className="button" href="#cards">Листать историю</Link>
        </div>
        <AuthorPortrait {...profile.portrait} ageMark={profile.age ? String(profile.age) : "∞"} />
      </section>

      <section className="passport-intro" id="cards">
        <p className="eyebrow">Короткая биография</p>
        <h2>Сначала – человек.<br />Потом – книга.</h2>
        <p>{route.authorIntro}</p>
      </section>

      <div className="passport-card-grid">
        {passport.map((card, index) => (
          <article className="passport-card" key={card.title}>
            <p className="card-index">{String(index + 1).padStart(2, "0")} / 10</p>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <section className="next-step">
        <p className="eyebrow">Теперь – книга</p>
        <h2>{routes.length > 1 ? <>Выбери<br /><em>произведение.</em></> : <>Готов к<br />«{route.work}»?</>}</h2>
        <div className="hero-actions">
          {routes.map((item) => <Link className="button button-light" href={`/works/${item.slug}`} key={item.slug}>{routes.length > 1 ? item.work : "Открыть маршрут чтения"}</Link>)}
        </div>
      </section>
    </main>
  );
}
