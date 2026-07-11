"use client";

import { useMemo, useState } from "react";
import { track } from "@/lib/analytics";

const prompts: Record<number, string> = {
  13: "Какое правило взрослых ты впервые начал замечать?",
  14: "Что в мире взрослых кажется тебе нелогичным?",
  15: "С каким правилом взрослых ты уже готов спорить?"
};

const tolstoyAtAge: Record<number, string> = {
  13: "переехал из Ясной Поляны к тётке в Казань",
  14: "жил в Казани и готовился к университету с частными учителями",
  15: "не сдал с первого раза историю и статистику – а потом пересдал"
};

export function AgeMirror({ compact = false }: { compact?: boolean }) {
  const [age, setAge] = useState(15);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const shareText = useMemo(
    () => `Мне ${age}. Толстой в ${age} ещё не был Толстым из учебника. ${answer || prompts[age]}`,
    [age, answer]
  );

  async function share() {
    track("share_card_opened", { age, hasAnswer: Boolean(answer) });
    if (navigator.share) {
      await navigator.share({ title: `Толстой в ${age} / я в ${age}`, text: shareText });
      return;
    }
    await navigator.clipboard.writeText(shareText);
    setMessage("Текст скопирован");
  }

  return (
    <div className={compact ? "age-mirror compact" : "age-mirror"}>
      <label className="age-slider-label" htmlFor={compact ? "hero-age" : "age"}>
        <span>Мне {age} лет</span>
        <small>Передвинь ползунок</small>
      </label>
      <input
        id={compact ? "hero-age" : "age"}
        max="15"
        min="13"
        onChange={(event) => setAge(Number(event.target.value))}
        type="range"
        value={age}
      />
      <div className="age-ticks" aria-hidden="true"><span>13</span><span>14</span><span>15</span></div>
      {compact ? (
        <div className="age-result"><span>Толстой в {age}</span><strong>{tolstoyAtAge[age]}</strong><p>{prompts[age]}</p></div>
      ) : (
        <>
      <div className="split-card">
        <div><span>Толстой в {age}</span><strong>{tolstoyAtAge[age]}</strong></div>
        <div><span>Я в {age}</span><strong>{prompts[age]}</strong></div>
      </div>
      <label className="field-label" htmlFor="age-answer">Одна фраза. Можно только для себя.</label>
      <textarea
        id="age-answer"
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="Взрослые почему-то считают, что…"
        rows={3}
        value={answer}
      />
      <button className="button button-ghost" onClick={share} type="button">Поделиться сравнением</button>
      {message && <small aria-live="polite">{message}</small>}
        </>
      )}
    </div>
  );
}
