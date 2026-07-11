import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">ЛИТЕРАТУРА.ГАЙД</Link>
      <nav aria-label="Основная навигация">
        <Link href="/authors/leo-tolstoy">Толстой</Link>
        <Link href="/sources">Источники</Link>
      </nav>
    </header>
  );
}
