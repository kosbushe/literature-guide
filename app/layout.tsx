import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: { default: "Литература гайд", template: "%s · Литература гайд" },
  description: "Сначала пойми, куда ты попал. Потом читай.",
  openGraph: {
    title: "Литература гайд",
    description: "Вход в классику через человека, эпоху и личный вопрос подростка.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        {children}
        <footer>
          <div className="footer-main">
            <span>ЛИТЕРАТУРА.ГАЙД</span>
            <p>Сначала контекст. Потом текст. Вывод – твой.</p>
          </div>
          <div className="footer-legal">
            <p>Авторский образовательный проект Константина Буше – учителя литературы, филолога и отца четверых детей.</p>
            <p>Материалы носят информационно-образовательный характер и не являются публичной офертой.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
