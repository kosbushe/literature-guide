"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

type Props = { text: string };

export function ShareQuestion({ text }: Props) {
  const [done, setDone] = useState(false);

  async function share() {
    track("share_card_opened", { placement: "after_reading" });
    if (navigator.share) {
      await navigator.share({ title: "Лев Толстой. После бала", text });
    } else {
      await navigator.clipboard.writeText(text);
      setDone(true);
    }
  }

  return (
    <div className="share-question">
      <p>{text}</p>
      <span>Лев Толстой · «После бала»</span>
      <button className="button button-light" onClick={share} type="button">Поделиться вопросом</button>
      {done && <small aria-live="polite">Скопировано</small>}
    </div>
  );
}
