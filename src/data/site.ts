export type Project = {
  title: string;
  niche: string;
  description: string;
  features: string[];
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
};

export const contacts = {
  telegram: {
    label: "Telegram",
    value: "@galiullin_digital",
    href: "https://t.me/galiullin_digital",
  },
};

export const contactChannels = Object.values(contacts);

export const services = [
  {
    title: "Сайты для бизнеса",
    description:
      "Лендинги и небольшие сайты, которые быстро объясняют услугу, показывают доверие и ведут клиента к заявке.",
  },
  {
    title: "Telegram-боты для заявок",
    description:
      "Сценарии, кнопки и уведомления, чтобы клиенту было проще оставить запрос, а бизнесу не потерять его.",
  },
  {
    title: "AI-ассистенты",
    description:
      "Помощники для первичных ответов, подбора услуг и аккуратной маршрутизации обращений.",
  },
  {
    title: "Автоматизация заявок",
    description:
      "Передача обращений в Telegram, таблицы или CRM без ручного копирования данных.",
  },
  {
    title: "Подключение форм к Telegram",
    description:
      "Формы сайта сразу отправляют контакт, услугу и комментарий в нужный чат.",
  },
  {
    title: "Простые CRM-таблицы",
    description:
      "Понятные таблицы для заявок, статусов, клиентов, источников и первых продаж.",
  },
];

export const projects: Project[] = [
  {
    title: "FamilyFit Coach",
    niche: "Фитнес-тренер",
    description:
      "Лендинг для тренера с программами, ценами, отзывами, FAQ и формой записи на тренировку.",
    features: [
      "Программы тренировок",
      "Форма заявки",
      "Отзывы и FAQ",
      "Мобильная версия",
    ],
    tags: ["Лендинг", "Онлайн-запись", "Форма заявки", "Telegram"],
    href: "/cases/fitness",
    image: "/fitness-personal-training.jpg",
    imageAlt:
      "Фитнес-тренер помогает клиенту выполнить упражнение в современном зале",
  },
  {
    title: "BeautyLine Studio",
    niche: "Салон красоты",
    description:
      "Светлый сайт салона с услугами, мастерами, ценами, работами и онлайн-записью.",
    features: [
      "Каталог услуг",
      "Мастера и прайс",
      "Форма записи",
      "Галерея работ",
    ],
    tags: ["Онлайн-запись", "Лендинг", "Форма заявки", "Прайс"],
    href: "/cases/beauty",
    image: "/beauty-salon-interior.jpg",
    imageAlt: "Светлый интерьер салона красоты BeautyLine Studio",
  },
  {
    title: "AutoPro Service",
    niche: "Автосервис",
    description:
      "Технологичный сайт автосервиса с услугами, расчетом стоимости и заявкой на обслуживание.",
    features: [
      "Услуги сервиса",
      "Калькулятор цены",
      "Форма заявки",
      "Telegram-уведомления",
    ],
    tags: ["Калькулятор", "Лендинг", "Форма заявки", "Онлайн-запись"],
    href: "/cases/autoservice",
    image: "/auto-service-bay.jpg",
    imageAlt: "Современный автосервис с автомобилем на подъемнике",
  },
];

export const workflow = [
  {
    title: "Разбираю задачу",
    description:
      "Смотрим нишу, клиентов, услуги и то, какую заявку нужно получать.",
  },
  {
    title: "Делаю демо",
    description:
      "Показываю первый рабочий вариант, чтобы быстро сверить направление.",
  },
  {
    title: "Подключаю заявки",
    description:
      "Настраиваю формы, Telegram-уведомления и простую логику обработки.",
  },
  {
    title: "Помогаю запустить",
    description:
      "Готовлю сайт к публикации и проверяю основные сценарии с телефона.",
  },
  {
    title: "Улучшаю после запуска",
    description:
      "Смотрю, что можно упростить, усилить или автоматизировать следующим шагом.",
  },
];

export const benefits = [
  "Быстро",
  "Понятно",
  "Без лишней сложности",
  "Адаптация под телефон",
  "Упор на заявки",
  "Можно начать с демо",
];
