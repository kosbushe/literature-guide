"use client";

import { useState } from "react";

const choices = [
  {
    label: "Я бы отвернулся: это не моё дело",
    answer: "Понятная реакция: иногда безопаснее сделать вид, что ты ничего не видел. Проверь, может ли герой Толстого жить с таким решением."
  },
  {
    label: "Я бы рассказал всем",
    answer: "Это рискованный выбор: у героя нет соцсетей, а у полковника есть чин и власть. Проверь, что он выбирает вместо громкого поступка."
  },
  {
    label: "Я бы больше не смог с ним общаться",
    answer: "Это ближе всего к вопросу рассказа. Но сначала выясни: герой осуждает одного человека или порядок, которому тот подчиняется?"
  }
];

export function BeforeReadingChoice() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="before-choice" aria-label="Выбери свою первую реакцию">
      <p>Ты увидел взрослого, которого уважал, в момент, когда он оказался частью жестокости.</p>
      <h2>Что бы ты сделал?</h2>
      <div className="before-choice-options">
        {choices.map((choice, index) => (
          <button key={choice.label} className={selected === index ? "is-active" : ""} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}>
            {choice.label}
          </button>
        ))}
      </div>
      {selected !== null ? <p className="before-choice-answer" aria-live="polite">{choices[selected].answer}</p> : <p className="before-choice-hint">Правильного ответа нет. Это твоя первая версия до чтения.</p>}
    </div>
  );
}
