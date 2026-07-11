import Link from "next/link";
import { AgeMirror } from "@/components/AgeMirror";
import { authorRu } from "@/lib/content";

export const metadata = { title: "Лев Толстой" };

export default function TolstoyPage() {
  return (
    <main>
      <section className="author-hero">
        <p className="eyebrow">Литературный паспорт · 01</p>
        <h1>Лев<br /><em>Толстой</em></h1>
        <p className="lead">{authorRu.deck}</p>
        <Link className="button" href="#peer-age">Найти вашего ровесника</Link>
      </section>

      <div className="passport">
        {authorRu.passport.map((block, index) => (
          <section className="passport-block" id={block.id === "peer_age" ? "peer-age" : block.id} key={block.id}>
            <p className="eyebrow">{block.eyebrow}</p>
            <h2>{block.title}</h2>
            {block.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {block.question && <blockquote>{block.question}</blockquote>}
            {block.id === "peer_age" && <AgeMirror />}
            {index === 6 && (
              <Link className="button" href="/works/after-the-ball">Теперь открыть маршрут</Link>
            )}
          </section>
        ))}
      </div>

      <section className="next-step">
        <p className="eyebrow">Контекста достаточно</p>
        <h2>Не нужно запоминать биографию. Пора читать.</h2>
        <Link className="button button-light" href="/works/after-the-ball">Перейти к «После бала»</Link>
      </section>
    </main>
  );
}
