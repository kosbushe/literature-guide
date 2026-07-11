import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">ЛИТЕРАТУРА.ГАЙД</Link>
      <nav aria-label="Основная навигация">
        <Link href="/#program">Программа</Link>
        <Link href="/works/after-the-ball">Первый маршрут</Link>
        <Link href="/sources">Источники</Link>
      </nav>
    </header>
  );
}
