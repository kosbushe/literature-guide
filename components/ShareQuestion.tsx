"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

type Props = { text: string; author?: string; work?: string };

export function ShareQuestion({ text, author = "Лев Толстой", work = "После бала" }: Props) {
  const [done, setDone] = useState(false);

  async function share() {
    track("share_card_opened", { placement: "after_reading" });
    if (navigator.share) {
      await navigator.share({ title: `${author}. ${work}`, text });
    } else {
      await navigator.clipboard.writeText(text);
      setDone(true);
    }
  }

  return (
    <div className="share-question">
      <p>{text}</p>
      <span>{author} · «{work}»</span>
      <button className="button button-light" onClick={share} type="button">Поделиться вопросом</button>
      {done && <small aria-live="polite">Скопировано</small>}
    </div>
  );
}
