export type CurriculumWork = {
  author: string;
  title: string;
  ready?: boolean;
  href?: string;
};

export type GradeCurriculum = {
  grade: number;
  phase: string;
  prompt: string;
  works: CurriculumWork[];
  authors: string[];
};

export const curriculum: GradeCurriculum[] = [
  {
    grade: 5,
    phase: "Первый вход в классику",
    prompt: "Сказки, приключения, первая большая проза.",
    works: [
      { author: "Народная традиция", title: "Царевна-лягушка", ready: true, href: "/works/russian-folk-tale" },
      { author: "Народная традиция", title: "Илья Муромец и Соловей-разбойник", ready: true, href: "/works/bylina-ilya-muromets" },
      { author: "И. А. Крылов", title: "Волк и Ягнёнок", ready: true, href: "/works/krylov-wolf-and-lamb" },
      { author: "А. С. Пушкин", title: "Сказка о мёртвой царевне", ready: true, href: "/works/pushkin-dead-princess" },
      { author: "М. Ю. Лермонтов", title: "Бородино", ready: true, href: "/works/lermontov-borodino" },
      { author: "Н. В. Гоголь", title: "Ночь перед Рождеством", ready: true, href: "/works/gogol-night-before-christmas" },
      { author: "И. С. Тургенев", title: "Муму", ready: true, href: "/works/turgenev-mumu" },
      { author: "Л. Н. Толстой", title: "Кавказский пленник", ready: true, href: "/works/tolstoy-caucasian-prisoner" },
      { author: "А. П. Чехов", title: "Каштанка", ready: true, href: "/works/chekhov-kashtanka" }
    ],
    authors: ["Русская народная сказка", "Русская былина", "И. А. Крылов", "А. С. Пушкин", "М. Ю. Лермонтов", "Н. В. Гоголь", "И. С. Тургенев", "Л. Н. Толстой", "А. П. Чехов"]
  },
  {
    grade: 6,
    phase: "Герой, выбор, справедливость",
    prompt: "Начинаются характеры, конфликты и настоящая цена поступка.",
    works: [
      { author: "А. С. Пушкин", title: "Дубровский", ready: true, href: "/works/pushkin-dubrovsky" },
      { author: "М. Ю. Лермонтов", title: "«Тучи», «Листок», «Утёс»", ready: true, href: "/works/lermontov-lyrics" },
      { author: "Н. В. Гоголь", title: "«Вечера на хуторе близ Диканьки»", ready: true, href: "/works/gogol-evenings" },
      { author: "И. С. Тургенев", title: "Бежин луг", ready: true, href: "/works/turgenev-bezhin-meadow" },
      { author: "Н. А. Некрасов", title: "Железная дорога", ready: true, href: "/works/nekrasov-railway" },
      { author: "Н. С. Лесков", title: "Левша", ready: true, href: "/works/leskov-lefty" },
      { author: "Л. Н. Толстой", title: "Детство", ready: true, href: "/works/tolstoy-childhood" },
      { author: "А. П. Чехов", title: "Толстый и тонкий", ready: true, href: "/works/chekhov-thick-and-thin" },
      { author: "А. С. Грин", title: "Алые паруса", ready: true, href: "/works/green-scarlet-sails" },
      { author: "В. П. Астафьев", title: "Конь с розовой гривой", ready: true, href: "/works/astafyev-horse-with-pink-mane" },
      { author: "В. Г. Распутин", title: "Уроки французского", ready: true, href: "/works/rasputin-french-lessons" },
      { author: "Ф. А. Искандер", title: "Тринадцатый подвиг Геракла", ready: true, href: "/works/iskander-thirteenth-labor" }
    ],
    authors: ["А. С. Пушкин", "М. Ю. Лермонтов", "Н. В. Гоголь", "И. С. Тургенев", "Н. А. Некрасов", "Н. С. Лесков", "Л. Н. Толстой", "А. П. Чехов", "А. С. Грин", "В. П. Астафьев", "В. Г. Распутин", "Ф. А. Искандер"]
  },
  {
    grade: 7,
    phase: "Человек внутри истории",
    prompt: "Война, власть, свобода, ответственность и голос героя.",
    works: [
      { author: "А. С. Пушкин", title: "Станционный смотритель", ready: true, href: "/works/pushkin-stationmaster" },
      { author: "М. Ю. Лермонтов", title: "Песня про купца Калашникова", ready: true, href: "/works/lermontov-kalashnikov" },
      { author: "Н. В. Гоголь", title: "Тарас Бульба", ready: true, href: "/works/gogol-taras-bulba" },
      { author: "М. Е. Салтыков-Щедрин", title: "Сказки", ready: true, href: "/works/saltykov-fairy-tales" },
      { author: "А. П. Чехов", title: "Хамелеон", ready: true, href: "/works/chekhov-chameleon" },
      { author: "А. Т. Твардовский", title: "Василий Тёркин", ready: true, href: "/works/tvardovsky-terkin" }
    ],
    authors: ["А. С. Пушкин", "М. Ю. Лермонтов", "Н. В. Гоголь", "И. С. Тургенев", "Н. А. Некрасов", "М. Е. Салтыков-Щедрин", "Л. Н. Толстой", "А. П. Чехов", "М. Горький", "А. П. Платонов", "А. Т. Твардовский", "В. М. Шукшин"]
  },
  {
    grade: 8,
    phase: "Эпоха, маска, выбор",
    prompt: "Литература начинает показывать: личная история всегда живёт внутри устройства мира.",
    works: [
      { author: "Д. И. Фонвизин", title: "Недоросль", ready: true, href: "/works/fonvizin-minor" },
      { author: "Н. М. Карамзин", title: "Бедная Лиза", ready: true, href: "/works/karamzin-poor-liza" },
      { author: "А. С. Пушкин", title: "Капитанская дочка", ready: true, href: "/works/pushkin-captains-daughter" },
      { author: "М. Ю. Лермонтов", title: "Мцыри", ready: true, href: "/works/lermontov-mtsyri" },
      { author: "Н. В. Гоголь", title: "Ревизор", ready: true, href: "/works/gogol-inspector" },
      { author: "Л. Н. Толстой", title: "После бала", ready: true, href: "/works/after-the-ball" }
    ],
    authors: ["Д. И. Фонвизин", "Н. М. Карамзин", "В. А. Жуковский", "А. С. Пушкин", "М. Ю. Лермонтов", "Н. В. Гоголь", "И. С. Тургенев", "М. Е. Салтыков-Щедрин", "Л. Н. Толстой", "Ф. М. Достоевский", "А. П. Чехов"]
  },
  {
    grade: 9,
    phase: "Большой разговор с классикой",
    prompt: "Романы, поэмы и пьесы, которые собирают XIX и XX век в одну картину.",
    works: [
      { author: "А. С. Грибоедов", title: "Горе от ума", ready: true, href: "/works/griboyedov-woe-from-wit" },
      { author: "А. С. Пушкин", title: "Евгений Онегин", ready: true, href: "/works/pushkin-eugene-onegin" },
      { author: "М. Ю. Лермонтов", title: "Герой нашего времени", ready: true, href: "/works/lermontov-hero-of-our-time" },
      { author: "Н. В. Гоголь", title: "Мёртвые души", ready: true, href: "/works/gogol-dead-souls" },
      { author: "Ф. М. Достоевский", title: "Бедные люди", ready: true, href: "/works/dostoevsky-poor-folk" },
      { author: "М. А. Булгаков", title: "Собачье сердце", ready: true, href: "/works/bulgakov-dogs-heart" }
    ],
    authors: ["А. С. Грибоедов", "А. С. Пушкин", "М. Ю. Лермонтов", "Н. В. Гоголь", "И. С. Тургенев", "И. А. Гончаров", "А. Н. Островский", "Н. А. Некрасов", "Ф. И. Тютчев", "А. А. Фет", "М. Е. Салтыков-Щедрин", "Ф. М. Достоевский", "Л. Н. Толстой", "А. П. Чехов", "И. А. Бунин", "М. Горький", "А. А. Блок", "С. А. Есенин", "В. В. Маяковский", "М. А. Булгаков", "М. А. Шолохов", "А. И. Солженицын"]
  },
  {
    grade: 10,
    phase: "XIX век крупным планом",
    prompt: "Как возникли вопросы свободы, любви, денег, веры и власти, которые всё ещё не закрыты.",
    works: [
      { author: "А. Н. Островский", title: "Гроза", ready: true, href: "/works/ostrovsky-storm" },
      { author: "И. А. Гончаров", title: "Обломов", ready: true, href: "/works/goncharov-oblomov" },
      { author: "И. С. Тургенев", title: "Отцы и дети", ready: true, href: "/works/turgenev-fathers-and-sons" },
      { author: "Ф. М. Достоевский", title: "Преступление и наказание", ready: true, href: "/works/dostoevsky-crime-and-punishment" },
      { author: "Л. Н. Толстой", title: "Война и мир", ready: true, href: "/works/tolstoy-war-and-peace" },
      { author: "А. П. Чехов", title: "Вишнёвый сад", ready: true, href: "/works/chekhov-cherry-orchard" }
    ],
    authors: ["Протопоп Аввакум", "М. В. Ломоносов", "Г. Р. Державин", "Д. И. Фонвизин", "А. Н. Радищев", "В. А. Жуковский", "А. С. Грибоедов", "А. С. Пушкин", "М. Ю. Лермонтов", "Н. В. Гоголь", "А. Н. Островский", "И. А. Гончаров", "И. С. Тургенев", "Н. А. Некрасов", "Ф. И. Тютчев", "А. А. Фет", "Н. С. Лесков", "М. Е. Салтыков-Щедрин", "Ф. М. Достоевский", "Л. Н. Толстой", "А. П. Чехов"]
  },
  {
    grade: 11,
    phase: "XX век и сегодняшний разговор",
    prompt: "Поэзия, революция, война, несвобода, частная жизнь и право человека на свой голос.",
    works: [
      { author: "М. А. Булгаков", title: "Мастер и Маргарита", ready: true, href: "/works/bulgakov-master-and-margarita" },
      { author: "М. А. Шолохов", title: "Тихий Дон", ready: true, href: "/works/sholokhov-quiet-don" },
      { author: "А. И. Солженицын", title: "Один день Ивана Денисовича", ready: true, href: "/works/solzhenitsyn-one-day" },
      { author: "А. А. Ахматова", title: "Реквием", ready: true, href: "/works/akhmatova-requiem" },
      { author: "Б. Л. Пастернак", title: "Доктор Живаго", ready: true, href: "/works/pasternak-doctor-zhivago" },
      { author: "В. Г. Распутин", title: "Прощание с Матёрой", ready: true, href: "/works/rasputin-farewell-matyora" }
    ],
    authors: ["И. А. Бунин", "А. И. Куприн", "М. Горький", "А. А. Блок", "В. В. Маяковский", "С. А. Есенин", "А. А. Ахматова", "М. И. Цветаева", "О. Э. Мандельштам", "Б. Л. Пастернак", "М. А. Булгаков", "А. П. Платонов", "М. А. Шолохов", "А. Т. Твардовский", "А. И. Солженицын", "В. Т. Шаламов", "В. М. Шукшин", "В. Г. Распутин", "В. П. Астафьев", "А. В. Вампилов", "И. А. Бродский"]
  }
];
