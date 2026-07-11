"use client";

import Link from "next/link";
import { useState } from "react";
import { curriculum } from "@/lib/curriculum";

export function GradeNavigator() {
  const [grade, setGrade] = useState(8);
  const current = curriculum.find((item) => item.grade === grade) ?? curriculum[3];

  return (
    <section className="grade-navigator" id="program" aria-labelledby="choose-grade">
      <div className="navigator-heading">
        <div>
          <p className="eyebrow">Твой маршрут · шаг 01 из 03</p>
          <h2 id="choose-grade">В каком ты<br /><em>классе?</em></h2>
        </div>
        <p>Не надо искать по всему интернету. Сначала выбери свой уровень.</p>
      </div>

      <div className="grade-switcher" role="tablist" aria-label="Выбор класса">
        {curriculum.map((item) => (
          <button aria-selected={item.grade === grade} key={item.grade} onClick={() => setGrade(item.grade)} role="tab" type="button">
            <span>{item.grade}</span><small>класс</small>
          </button>
        ))}
      </div>

      <div className="grade-route" role="tabpanel">
        <div className="grade-route-intro">
          <p className="eyebrow">{current.grade} класс · {current.phase}</p>
          <h3>{current.prompt}</h3>
          <p className="micro">Школы идут в разном порядке. Здесь – твоя карта, а не чужое расписание.</p>
        </div>
        <div>
          <p className="work-picker-label">Шаг 02 из 03 · Что проходишь сейчас?</p>
          <div className="work-picker">
            {current.works.map((work) => work.ready && work.href ? (
              <Link className="work-tile ready" href={work.href} key={`${work.author}-${work.title}`}>
                <span>Маршрут готов</span><strong>{work.title}</strong><small>{work.author}</small>
              </Link>
            ) : (
              <article className="work-tile" key={`${work.author}-${work.title}`}>
                <span>В пути</span><strong>{work.title}</strong><small>{work.author}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
