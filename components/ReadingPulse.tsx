"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const options = [
  ["reading", "Да, читаю"],
  ["later", "Открыл, начну позже"],
  ["broken", "Текст не открылся"],
  ["declined", "Передумал читать"]
] as const;

export function ReadingPulse() {
  const [answer, setAnswer] = useState<string | null>(null);

  function choose(value: string) {
    setAnswer(value);
    if (value === "reading") track("reading_started_confirmed", { source: "reading_pulse" });
  }

  return (
    <section className="pulse" aria-labelledby="pulse-title">
      <p className="eyebrow">Главная проверка MVP</p>
      <h2 id="pulse-title">Ты успел начать рассказ?</h2>
      <div className="choice-grid">
        {options.map(([value, label]) => (
          <button
            aria-pressed={answer === value}
            className="choice"
            key={value}
            onClick={() => choose(value)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      {answer === "reading" && <p className="response">Отлично. Больше не отвлекаем.</p>}
      {answer === "later" && <p className="response">Хорошо. Рассказ будет ждать здесь.</p>}
      {answer === "broken" && <p className="response">Ссылку проверим. Пока открой текст из учебника.</p>}
      {answer === "declined" && <p className="response">Это тоже честный ответ. Нам важно понять — почему.</p>}
    </section>
  );
}
