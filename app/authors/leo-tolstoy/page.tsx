import Link from "next/link";
import { AgeMirror } from "@/components/AgeMirror";
import { TolstoyPortrait } from "@/components/TolstoyPortrait";
import { authorRu } from "@/lib/content";

export const metadata = { title: "Лев Толстой" };

export default function TolstoyPage() {
  return (
    <main>
      <section className="author-hero author-profile-hero">
        <div>
          <p className="eyebrow">Твой ровесник · 1844 год</p>
          <p className="hero-kicker">Он ещё не написал ни одной великой книги.</p>
          <h1>Лев.<br /><em>15 лет.</em></h1>
          <p className="lead">Провалил экзамен. Готовится пересдавать. Думает, зачем вообще жить правильно, если мир устроен криво.</p>
          <div className="quick-facts" aria-label="Три факта о Толстом в 15 лет">
            <span>Не сдал историю<br /><b>с первого раза</b></span>
            <span>Жил в Казани<br /><b>у тётки</b></span>
            <span>До первого романа<br /><b>ещё 8 лет</b></span>
          </div>
          <Link className="button" href="#cards">Листать его историю</Link>
        </div>
        <TolstoyPortrait />
      </section>

      <section className="passport-intro" id="cards">
        <p className="eyebrow">10 коротких карточек</p>
        <h2>Сначала — человек.<br />Потом — книга.</h2>
        <p>Не надо учить биографию. Просто листай: каждая карточка даёт один ключ к «После бала».</p>
      </section>

      <div className="passport-card-grid">
        {authorRu.passport.map((block, index) => (
          <article className="passport-card" id={block.id === "peer_age" ? "peer-age" : block.id} key={block.id}>
            <p className="card-index">{String(index + 1).padStart(2, "0")} / 10</p>
            <h2>{block.title}</h2>
            <p>{block.body[0]}</p>
            {block.body.length > 1 && (
              <details>
                <summary>Ещё 20 секунд</summary>
                <p>{block.body.slice(1).join(" ")}</p>
              </details>
            )}
            {block.question && <blockquote>{block.question}</blockquote>}
            {block.id === "peer_age" && <AgeMirror />}
          </article>
        ))}
      </div>

      <section className="next-step">
        <p className="eyebrow">Карточек достаточно</p>
        <h2>Теперь ты уже не входишь в текст вслепую.</h2>
        <Link className="button button-light" href="/works/after-the-ball">Перейти к «После бала»</Link>
      </section>
    </main>
  );
}
