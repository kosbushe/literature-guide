import type { CSSProperties } from "react";

type BookCoverProps = {
  author: string;
  title: string;
  grade?: string;
};

function cleanCoverTitle(title: string) {
  return title
    .replace(/[«»“”„"'()[\]{}]/g, "")
    .replace(/\s*,\s*/g, " · ")
    .replace(/[.。]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function titleSize(title: string) {
  if (title.length > 76) return 11;
  if (title.length > 62) return 13;
  if (title.length > 48) return 15;
  if (title.length > 36) return 18;
  if (title.length > 26) return 22;
  return 29;
}

export function BookCover({ author, title, grade }: BookCoverProps) {
  const coverTitle = cleanCoverTitle(title);

  return (
    <aside className="book-cover" aria-label={`Обложка серии «Литература.Гайд»: ${author}, ${coverTitle}`}>
      <p className="book-cover__series">ЛИТЕРАТУРА.ГАЙД</p>
      <div className="book-cover__title-block">
        <p className="book-cover__author">{author}</p>
        <p className="book-cover__title" style={{ "--cover-title-size": `${titleSize(coverTitle)}px` } as CSSProperties}>{coverTitle}</p>
      </div>
      <p className="book-cover__edition">Школьная библиотека{grade ? ` · ${grade} класс` : ""}</p>
    </aside>
  );
}
