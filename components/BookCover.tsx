type BookCoverProps = {
  author: string;
  title: string;
  grade?: string;
};

export function BookCover({ author, title, grade }: BookCoverProps) {
  return (
    <aside className="book-cover" aria-label={`Обложка серии «Литература.Гайд»: ${author}, ${title}`}>
      <p className="book-cover__series">ЛИТЕРАТУРА.ГАЙД</p>
      <div className="book-cover__title-block">
        <p className="book-cover__author">{author}</p>
        <p className="book-cover__title">{title}</p>
      </div>
      <p className="book-cover__edition">Школьная библиотека{grade ? ` · ${grade} класс` : ""}</p>
    </aside>
  );
}
