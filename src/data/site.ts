export type Project = {
  title: string;
  niche: string;
  description: string;
  features: string[];
  href: string;
};

export const contacts = {
  telegram: {
    label: "Telegram",
    value: "@galiullin_digital",
    href: "https://t.me/galiullin_digital",
  },
  whatsapp: {
    label: "WhatsApp",
    value: "+7 (999) 000-00-00",
    href: "https://wa.me/79990000000",
  },
  email: {
    label: "Email",
    value: "hello@galiullin.digital",
    href: "mailto:hello@galiullin.digital",
  },
};

export const services = [
  {
    title: "Сайты для бизнеса",
    description: "Лендинги и небольшие сайты, которые быстро объясняют услугу, показывают доверие и ведут к заявке.",
  },
  {
    title: "Telegram-боты для заявок",
    description: "Сценарии, кнопки и уведомления, чтобы клиенту было проще оставить запрос, а бизнесу не потерять его.",
  },
  {
    title: "AI-ассистенты",
    description: "Помощники для первичных ответов, подбора услуг и аккуратной маршрутизации обращений.",
  },
  {
    title: "Автоматизация заявок",
    description: "Передача обращений в Telegram, таблицы или CRM без ручного копирования данных.",
  },
  {
    title: "Подключение форм к Telegram",
    description: "Формы сайта сразу отправляют контакт, услугу и комментарий в чат.",
  },
  {
    title: "Простые CRM-таблицы",
    description: "Понятные таблицы для заявок, статусов, клиентов, источников и первых продаж.",
  },
];

export const projects: Project[] = [
  {
    title: "FamilyFit Coach",
    niche: "Фитнес-тренер",
    description: "Лендинг для фитнес-тренера с программами, отзывами, FAQ и формой записи на тренировку.",
    features: ["Программы тренировок", "Форма заявки", "Отзывы и FAQ", "Мобильная версия"],
    href: "/cases/fitness",
  },
  {
    title: "BeautyLine Studio",
    niche: "Салон красоты",
    description: "Светлый сайт салона с услугами, мастерами, ценами, работами и онлайн-записью.",
    features: ["Каталог услуг", "Мастера и прайс", "Форма записи", "Галерея работ"],
    href: "/cases/beauty",
  },
  {
    title: "AutoPro Service",
    niche: "Автосервис",
    description: "Технологичный сайт автосервиса с услугами, расчетом стоимости и заявкой на обслуживание.",
    features: ["Услуги сервиса", "Калькулятор цены", "Форма заявки", "Telegram-уведомления"],
    href: "/cases/autoservice",
  },
];

export const workflow = [
  {
    title: "Разбираю задачу",
    description: "Смотрим нишу, клиентов, услуги и то, какую заявку нужно получить.",
  },
  {
    title: "Делаю демо",
    description: "Показываю первый рабочий вариант, чтобы быстро сверить направление.",
  },
  {
    title: "Подключаю заявки",
    description: "Настраиваю формы, Telegram-уведомления и простую логику обработки.",
  },
  {
    title: "Помогаю запустить",
    description: "Готовлю сайт к публикации и проверяю основные сценарии с телефона.",
  },
  {
    title: "Улучшаю после запуска",
    description: "Смотрю, что можно упростить, усилить или автоматизировать следующим шагом.",
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
