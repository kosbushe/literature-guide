import Link from "next/link";
import { notFound } from "next/navigation";
import { AgeMirror } from "@/components/AgeMirror";
import { AuthorPortrait } from "@/components/AuthorPortrait";
import { fifthGradeAuthorProfiles, fifthGradeAuthors, fifthGradeRoutes } from "@/lib/fifth-grade";

export function generateStaticParams() {
  return fifthGradeRoutes.map((route) => ({ slug: route.authorSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = fifthGradeAuthors[slug];
  return route ? { title: route.author } : {};
}

export default async function FifthGradeAuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = fifthGradeAuthors[slug];
  if (!route) notFound();
  const profile = fifthGradeAuthorProfiles[slug];

  return (
    <main>
      <section className="author-hero author-profile-hero season-author-profile-hero">
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
        <AuthorPortrait {...profile.portrait} />
      </section>

      <section className="passport-intro" id="cards">
        <p className="eyebrow">Короткая биография</p>
        <h2>Сначала – человек.<br />Потом – книга.</h2>
        <p>{route.authorIntro}</p>
      </section>

      <div className="passport-card-grid season-passport-grid">
        {profile.passport.map((card, index) => (
          <article className="passport-card" key={card.title}>
            <p className="card-index">{String(index + 1).padStart(2, "0")} / {String(profile.passport.length).padStart(2, "0")}</p>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <section className="season-guide-section season-author-facts">
        <p className="eyebrow">Связь с текстом</p>
        <h2>Зачем это<br /><em>знать перед чтением.</em></h2>
        <div className="season-fact-grid">
          {route.authorFacts.map((fact, index) => <article key={fact.label}><span>0{index + 1}</span><h3>{fact.label}</h3><p>{fact.text}</p></article>)}
        </div>
        <div className="season-author-next"><span>Сейчас читаем</span><strong>{route.work}</strong><Link href={`/works/${route.slug}`}>Открыть маршрут →</Link></div>
      </section>
    </main>
  );
}
