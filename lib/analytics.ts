export type GuideEvent =
  | "guide_opened"
  | "tolstoy_card_started"
  | "before_reading_completed"
  | "full_text_opened"
  | "reading_started_confirmed"
  | "reading_finished"
  | "reflection_completed"
  | "share_card_opened";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: GuideEvent, details: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  const record = { event, details, at: new Date().toISOString() };
  const previous = JSON.parse(localStorage.getItem("literature-guide-events") ?? "[]") as unknown[];
  localStorage.setItem("literature-guide-events", JSON.stringify([...previous.slice(-99), record]));
  window.gtag?.("event", event, details);
}
