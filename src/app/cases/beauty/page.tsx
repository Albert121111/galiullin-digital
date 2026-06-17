import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BeautyDemoSite } from "@/components/BeautyDemoSite";

export const metadata: Metadata = {
  title: "BeautyLine Studio - демо-кейс",
  description:
    "Демо-кейс сайта салона красоты с услугами, мастерами, ценами, отзывами и онлайн-записью.",
};

const businessProblems = [
  "Клиенты не видят полный список услуг и не понимают, что можно сделать в салоне.",
  "Цены разбросаны по постам, сторис и перепискам, поэтому их сложно быстро найти.",
  "Запись происходит вручную в сообщениях, администратору приходится уточнять детали по кругу.",
  "Владелец теряет заявки, когда клиент написал не в тот чат или сообщение ушло вниз.",
  "Нет красивой страницы, которую можно отправить клиенту, партнеру или запустить в рекламу.",
];

const deliveredItems = [
  "Сайт с услугами",
  "Блок мастеров",
  "Таблица цен",
  "Отзывы",
  "Форма онлайн-записи",
  "Подготовка отправки заявок в Telegram/CRM",
];

const siteFunctions = [
  "Выбор услуги",
  "Выбор мастера",
  "Выбор даты и времени",
  "Карточки мастеров",
  "Отзывы",
  "FAQ",
  "Мобильная версия",
];

const businessResults = [
  "Клиент может записаться без лишней переписки и долгих уточнений.",
  "Услуги и цены выглядят понятно, аккуратно и доступны в одном месте.",
  "Больше доверия к салону за счет мастеров, работ, отзывов и чистой визуальной подачи.",
  "Заявки не теряются, потому что форма собирает все данные в структурированном виде.",
];

export default function BeautyCasePage() {
  return (
    <main className="overflow-hidden bg-[#f7f1eb] text-[#2b2928]">
      <section className="relative isolate px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/beautyline-studio.png"
          alt="Демо-интерфейс сайта BeautyLine Studio"
          width={1400}
          height={920}
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.45]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fffaf7] via-[#fffaf7]/95 to-[#fffaf7]/70" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#f7f1eb] to-transparent" />

        <div className="mx-auto grid min-h-[570px] max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-[#d99baa]/40 bg-white/70 px-3 py-2 text-sm font-semibold uppercase text-[#8e5160] shadow-sm">
              Салон красоты / маникюр / брови / волосы
            </p>
            <h1 className="text-5xl font-bold leading-[1.04] text-[#252221] sm:text-7xl">
              BeautyLine Studio
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5d5551]">
              Сайт для салона красоты с онлайн-записью
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#beauty-booking-form"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#c8798b] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(200,121,139,0.28)] transition hover:bg-[#ad6275]"
              >
                Записаться онлайн
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#2b2928]/10 bg-white/70 px-5 py-3 text-sm font-bold text-[#2b2928] shadow-sm transition hover:border-[#c8798b]/50 hover:bg-white"
              >
                Обсудить похожий проект
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/80 bg-white/80 p-5 shadow-[0_24px_70px_rgba(72,50,43,0.16)] backdrop-blur">
            <p className="text-sm font-semibold uppercase text-[#a65f72]">
              Цель проекта
            </p>
            <p className="mt-4 text-2xl font-bold leading-tight text-[#2b2928]">
              Показать, как сайт помогает салону красоты получать онлайн-записи.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-[#655c57] sm:grid-cols-2">
              <span className="rounded-md border border-[#2b2928]/10 bg-[#fffaf7] px-3 py-3">
                Ниша: салон красоты и услуги мастеров
              </span>
              <span className="rounded-md border border-[#2b2928]/10 bg-[#fffaf7] px-3 py-3">
                Формат: демо-сайт с онлайн-записью
              </span>
            </div>
          </div>
        </div>
      </section>

      <BeautyCaseSection
        eyebrow="Задача бизнеса"
        title="Сделать запись понятной без длинной переписки"
        description="Салону нужна страница, где клиент видит услуги, цены, мастеров и сразу оставляет запись с нужными деталями."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessProblems.map((problem) => (
            <article
              key={problem}
              className="rounded-lg border border-[#2b2928]/10 bg-white p-5 shadow-[0_14px_38px_rgba(72,50,43,0.08)]"
            >
              <p className="leading-7 text-[#4f4844]">{problem}</p>
            </article>
          ))}
        </div>
      </BeautyCaseSection>

      <BeautyCaseSection
        eyebrow="Что было сделано"
        title="Собран сайт, который красиво показывает салон и ведет к записи"
        description="Страница объединяет услуги, мастеров, цены, отзывы и форму записи, которую затем можно подключить к Telegram или CRM."
        className="bg-[#fffaf7]"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {deliveredItems.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#c8798b]/20 bg-white px-4 py-4 font-semibold text-[#2b2928] shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </BeautyCaseSection>

      <BeautyCaseSection
        eyebrow="Функции сайта"
        title="Онлайн-запись, которую удобно пройти с телефона"
        description="Клиент выбирает услугу, мастера, дату, время и оставляет комментарий без лишних уточнений в сообщениях."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteFunctions.map((feature) => (
            <article
              key={feature}
              className="rounded-lg border border-[#2b2928]/10 bg-white p-5 shadow-[0_14px_38px_rgba(72,50,43,0.08)]"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-[#d99baa]" />
              <h3 className="text-lg font-bold text-[#2b2928]">{feature}</h3>
            </article>
          ))}
        </div>
      </BeautyCaseSection>

      <BeautyDemoSite />

      <BeautyCaseSection
        eyebrow="Результат для бизнеса"
        title="Салон выглядит дороже, а запись становится проще"
        description="Даже демо-версия показывает, как сайт снимает базовые вопросы и помогает администратору получать заявки в одном формате."
        className="bg-[#fffaf7]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessResults.map((result) => (
            <article
              key={result}
              className="rounded-lg border border-[#2b2928]/10 bg-white p-5 shadow-[0_14px_38px_rgba(72,50,43,0.08)]"
            >
              <p className="leading-7 text-[#4f4844]">{result}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#beauty-booking-form"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#c8798b] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(200,121,139,0.24)] transition hover:bg-[#ad6275]"
          >
            Открыть форму записи
          </a>
          <a
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#2b2928]/10 bg-white px-5 py-3 text-sm font-bold text-[#2b2928] shadow-sm transition hover:border-[#c8798b]/50"
          >
            Обсудить похожий проект
          </a>
        </div>
      </BeautyCaseSection>
    </main>
  );
}

type BeautyCaseSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

function BeautyCaseSection({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: BeautyCaseSectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-[#a65f72]">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[#2b2928] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#635b56] sm:text-lg">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
