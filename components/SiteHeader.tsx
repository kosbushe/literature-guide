import Link from "next/link";

export function SiteHeader() {
  const grades = [5, 6, 7, 8, 9, 10, 11];

  return (
    <header className="site-header">
      <Link className="wordmark" href="/">ЛИТЕРАТУРА.ГАЙД</Link>
      <nav aria-label="Основная навигация">
        {grades.map((grade) => <Link href={`/?class=${grade}#program`} key={grade}>{grade}</Link>)}
      </nav>
    </header>
  );
}
