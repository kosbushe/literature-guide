type AuthorPortraitProps = {
  ageMark: string;
  alt: string;
  caption: string;
  credit: string;
  label: string;
  src?: string;
  showAge?: boolean;
};

export function AuthorPortrait({ ageMark, alt, caption, credit, label, src, showAge = true }: AuthorPortraitProps) {
  return (
    <figure className="tolstoy-portrait">
      <div className="portrait-image-wrap">
        {src ? (
          <img alt={alt} src={src} />
        ) : (
          <div className="portrait-symbol" aria-label={alt} role="img">
            <span>ЛГ</span>
            <strong>{label}</strong>
          </div>
        )}
        {showAge && <span className="portrait-age">{ageMark}</span>}
      </div>
      <figcaption>
        <strong>{caption}</strong>
        <span>{label} · архивный портрет</span>
        <small>{credit}</small>
      </figcaption>
    </figure>
  );
}
