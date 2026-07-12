type TermReferenceProps = {
  term: string;
};

export function TermReference({ term }: TermReferenceProps) {
  const page = term.replace(/\s+/g, "_");

  return (
    <a className="term-reference" href={`https://ruwiki.ru/wiki/${encodeURIComponent(page)}`} target="_blank" rel="noreferrer">
      Справка
    </a>
  );
}
