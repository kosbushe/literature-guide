type OpenBookBackdropProps = {
  author: string;
  title: string;
  intro: string;
  year: string;
};

export function OpenBookBackdrop({ author, title, intro, year }: OpenBookBackdropProps) {
  return (
    <div className="open-book-backdrop" aria-hidden="true">
      <div className="open-book-page open-book-page--left">
        <span>ЛИТЕРАТУРА.ГАЙД</span>
        <p className="open-book-author">{author}</p>
        <p className="open-book-title">{title}</p>
        <small>{year} · вход в текст</small>
      </div>
      <div className="open-book-page open-book-page--right">
        <span>ПЕРВЫЕ СТРАНИЦЫ</span>
        <p className="open-book-intro">{intro}</p>
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
