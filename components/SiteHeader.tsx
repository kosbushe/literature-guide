import Link from "next/link";

export function SiteHeader() {
  const grades = [5, 6, 7, 8, 9, 10];

  return (
    <header className="site-header">
      <Link className="wordmark" href="/"><span>ЛИТЕРАТУРА.ГИД</span><small>ШКОЛЬНИКА</small></Link>
      <nav aria-label="Основная навигация">
        <span className="grade-label">КЛАСС:</span>
        {grades.map((grade) => <Link href={`/?class=${grade}#program`} key={grade}>{grade}</Link>)}
      </nav>
    </header>
  );
}
