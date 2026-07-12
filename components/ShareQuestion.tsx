"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

type Props = { text: string; author?: string; work?: string };

export function ShareQuestion({ text, author = "Лев Толстой", work = "После бала" }: Props) {
  const [done, setDone] = useState(false);
  const [shared, setShared] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);
  const shareText = `${author}. «${work}»\n${text}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  const vkUrl = `https://vk.com/share.php?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(`${author}. «${work}»`)}&comment=${encodeURIComponent(text)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${pageUrl}`)}`;

  async function share() {
    track("share_card_opened", { placement: "after_reading" });
    if (navigator.share) {
      try {
        await navigator.share({ title: `${author}. ${work}`, text: shareText, url: pageUrl });
        setShared(true);
      } catch {
        // Закрытие системного окна «Поделиться» — не ошибка для читателя.
      }
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${pageUrl}`);
      setDone(true);
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(`${shareText}\n${pageUrl}`);
    setDone(true);
  }

  return (
    <div className="share-question">
      <p>{text}</p>
      <span>{author} · «{work}»</span>
      <div className="share-actions">
        <button className="button button-light" onClick={share} type="button">Поделиться</button>
        <a href={telegramUrl} target="_blank" rel="noreferrer">Telegram</a>
        <a href={vkUrl} target="_blank" rel="noreferrer">VK</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        <button className="share-copy" onClick={copy} type="button">Скопировать ссылку</button>
      </div>
      {(done || shared) && <small aria-live="polite">{done ? "Ссылка скопирована" : "Готово"}</small>}
    </div>
  );
}
