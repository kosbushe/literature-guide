type AuthorPortraitProps = {
  alt: string;
  caption: string;
  credit: string;
  label: string;
  src?: string;
};

export function AuthorPortrait({ alt, caption, credit, label, src }: AuthorPortraitProps) {
  return (
    <figure className="season-author-portrait">
      <div className="season-portrait-image-wrap">
        {src ? (
          <img alt={alt} src={src} />
        ) : (
          <div className="season-portrait-symbol" aria-label={alt} role="img">
            <span>ЛГ</span>
            <strong>{label}</strong>
          </div>
        )}
        <span className="season-portrait-mark">архив</span>
      </div>
      <figcaption>
        <strong>{caption}</strong>
        <small>{credit}</small>
      </figcaption>
    </figure>
  );
}
