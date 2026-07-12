"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { curriculum } from "@/lib/curriculum";

export function GradeNavigator() {
  const [grade, setGrade] = useState(8);

  useEffect(() => {
    const requested = Number(new URLSearchParams(window.location.search).get("class"));
    if (curriculum.some((item) => item.grade === requested)) setGrade(requested);
  }, []);

  const current = curriculum.find((item) => item.grade === grade) ?? curriculum[3];
  const works = [...current.works].sort((a, b) => Number(Boolean(b.ready)) - Number(Boolean(a.ready)));

  return (
    <section className="grade-navigator" id="program" aria-labelledby="choose-grade">
      <div className="navigator-heading">
        <div>
          <p className="eyebrow">Литература · 5–11 классы</p>
          <h1 id="choose-grade">Какой класс?</h1>
        </div>
        <p>Выбери класс. Потом – произведение.</p>
      </div>

      <div className="grade-switcher" role="tablist" aria-label="Выбор класса">
        {curriculum.map((item) => (
          <button aria-selected={item.grade === grade} key={item.grade} onClick={() => setGrade(item.grade)} role="tab" type="button">
            <span>{item.grade}</span><small>класс</small>
          </button>
        ))}
      </div>

      <div className="grade-route" role="tabpanel" aria-live="polite">
        <div className="grade-route-intro">
          <p className="eyebrow">{current.grade} класс</p>
          <h2>Что читаем<br />сейчас?</h2>
        </div>
        <div>
          <div className="work-picker">
            {works.map((work) => work.ready && work.href ? (
              <Link className="work-tile ready" href={work.href} key={`${work.author}-${work.title}`}>
                <span>Читать</span><strong>{work.title}</strong><small>{work.author}</small>
              </Link>
            ) : (
              <article className="work-tile" key={`${work.author}-${work.title}`}>
                <span>Скоро</span><strong>{work.title}</strong><small>{work.author}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
