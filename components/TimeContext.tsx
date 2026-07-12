type TimeContextProps = {
  year: string;
  era: string;
  work: string;
  visualIndex: number;
  visualSrc?: string;
};

type TimeBridge = {
  today: { title: string; text: string };
  then: { title: string; text: string };
  difference: { title: string; text: string };
};

function bridgeFor(year: string, era: string): TimeBridge {
  const period = `${year} ${era}`.toLowerCase();

  if (/(сказк|былин|древн|летопис|богатыр)/.test(period)) {
    return {
      today: { title: "Ответ можно найти сразу", text: "У тебя есть книга, поиск, карта и объяснение в телефоне." },
      then: { title: "Истории живут в памяти", text: "Ровесник узнаёт мир от семьи и старших: рассказ передают вслух, а не по ссылке." },
      difference: { title: "Общий голос сильнее", text: "Правила и герои кажутся не личным мнением, а опытом целого народа." },
    };
  }

  if (/(xviii|пугач|петр|екатерин|17\d{2}|180[0-9])/.test(period)) {
    return {
      today: { title: "Связь и знания — за секунды", text: "У тебя есть интернет, ИИ, карта мира и возможность быстро сверить любую версию событий." },
      then: { title: "Письмо и дорога", text: "Весть идёт с человеком, лошадью или почтой. Ошибку и опасность нельзя быстро исправить." },
      difference: { title: "Статус решает многое", text: "Сословие, семья и чин сильнее определяют судьбу, чем твой личный план." },
    };
  }

  if (/(крепост|ревизск|помещик)/.test(period)) {
    return {
      today: { title: "У тебя — ИИ и право на своё имя", text: "В 2026 году ты можешь учиться, менять маршрут и искать ответы сам. Технологии расширяют выбор, а закон признаёт тебя отдельным человеком." },
      then: { title: "Человек — строка в списке", text: "Твой ровесник мог родиться крепостным: его труд, переезд и судьба зависели от помещика. Бумага учитывала людей почти как имущество." },
      difference: { title: "Абсурд становится возможным", text: "Когда человека можно посчитать как вещь, афера Чичикова выглядит не фантазией, а следствием самого порядка." },
    };
  }

  if (/(xix|18\d{2}|19[0-9]?|крепост|помещик|царск|николаев)/.test(period)) {
    return {
      today: { title: "Можно строить свою траекторию", text: "У тебя есть связь, навигация, цифровые инструменты и доступ к знаниям далеко за пределами родного города." },
      then: { title: "Мир начинается за воротами", text: "Ровесник зависит от семьи, денег, дороги и правил своего сословия. Письмо может идти неделями." },
      difference: { title: "Выбор дороже", text: "Уйти, учиться, любить не того человека или спорить со старшими — риск с реальными последствиями." },
    };
  }

  if (/(революц|191\d|192\d|193\d|194\d|великая отечественная|война)/.test(period)) {
    return {
      today: { title: "Мир связан сетями и энергией", text: "Новости, связь, транспорт и целые города держатся на технологиях, которые кажутся тебе обычными." },
      then: { title: "Ждут письма и сводки", text: "Ровесник слышит радио, читает газету, ждёт вестей. Большая история входит в каждый дом." },
      difference: { title: "Безопасность не дана", text: "Война и власть могут решать за семью, где жить, учиться и можно ли просто быть ребёнком." },
    };
  }

  if (/(195\d|196\d|197\d|198\d|совет|перестройк)/.test(period)) {
    return {
      today: { title: "Ты сам собираешь свою картину мира", text: "Можно слышать миллионы голосов, проверять факты и находить людей далеко за пределами своего города." },
      then: { title: "Телевизор и домашний телефон", text: "Информация приходит медленнее и через немногие источники. Личный мир заметно меньше." },
      difference: { title: "Личное — не совсем личное", text: "Школа, работа родителей и правила государства сильнее влияют на обычную жизнь." },
    };
  }

  return {
    today: { title: "У тебя больше инструментов выбора", text: "Связь, ИИ, знания и инфраструктура работают в фоне — и дают больше способов влиять на свою жизнь." },
    then: { title: "Мир без мгновенного ответа", text: "Ровесник героя живёт в темпе своего города, семьи и времени — без постоянного экрана." },
    difference: { title: "Поступок нельзя отменить", text: "Новость, дорога, репутация и решение взрослых меняют жизнь медленнее, но заметнее." },
  };
}

function introFor(work: string, visualIndex: number) {
  const intros = [
    `Посмотри на мир «${work}»: у ровесника героя другие границы, скорость жизни и цена выбора.`,
    `Перед чтением «${work}» представь, что тебе столько же лет, но вокруг нет привычного тебе мира.`,
    `Узнай место и время «${work}» — тогда поступки героев перестают казаться далёкими и странными.`,
    `В «${work}» привычные тебе вещи устроены иначе: сначала почувствуй эту разницу, потом открывай текст.`,
    `Это не фон для сюжета: мир «${work}» объясняет, почему герои выбирают именно так.`,
  ];
  return intros[visualIndex % intros.length];
}

export function TimeContext({ year, era, work, visualIndex, visualSrc }: TimeContextProps) {
  const bridge = bridgeFor(year, era);
  const panel = visualIndex % 9;
  const sheet = Math.floor(visualIndex / 9) + 1;
  const x = (panel % 3) * 50;
  const y = Math.floor(panel / 3) * 50;

  const style = {
    "--scene-image": `url(${visualSrc ?? `/literature-guide/context/time-scenes-${String(sheet).padStart(2, "0")}.jpg`})`,
    "--scene-position": visualSrc ? "center" : `${x}% ${y}%`,
    "--scene-size": visualSrc ? "cover" : "300% 300%",
  } as CSSProperties;

  return (
    <section className="epoch-context" style={style} aria-label={`Временной контекст: ${year}, ${era}`}>
      <div className="epoch-content">
        <span className="epoch-scene-label">МЕСТО И ВРЕМЯ</span>
        <div>
          <div className="epoch-title">
            <span>ВРЕМЯ ТЕКСТА · {year}</span>
            <strong>{era}</strong>
          </div>
          <p className="epoch-intro">{introFor(work, visualIndex)}</p>
        </div>
        <div className="epoch-grid">
          <article><span>ТЫ СЕЙЧАС</span><h3>{bridge.today.title}</h3><p>{bridge.today.text}</p></article>
          <article><span>ТВОЙ РОВЕСНИК ТОГДА</span><h3>{bridge.then.title}</h3><p>{bridge.then.text}</p></article>
          <article><span>ЧТО ЭТО МЕНЯЕТ</span><h3>{bridge.difference.title}</h3><p>{bridge.difference.text}</p></article>
        </div>
      </div>
    </section>
  );
}
import type { CSSProperties } from "react";
