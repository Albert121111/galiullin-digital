import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AutoServiceDemoSite } from "@/components/AutoServiceDemoSite";

export const metadata: Metadata = {
  title: "AutoPro Service - демо-кейс",
  description:
    "Демо-кейс сайта автосервиса с услугами, калькулятором стоимости и формой заявки.",
};

const businessProblems = [
  "Клиентам неудобно звонить, особенно когда нужно быстро узнать цену и свободное время.",
  "Нет понятного списка услуг, поэтому человек не понимает, можно ли решить его задачу.",
  "Цены не структурированы и часто объясняются вручную в каждом отдельном диалоге.",
  "Заявки приходят хаотично из звонков, мессенджеров и личных сообщений.",
  "Владелец теряет обращения, когда администратор занят или клиент не дозвонился.",
];

const deliveredItems = [
  "Сайт автосервиса",
  "Блок услуг",
  "Таблица популярных работ",
  "Калькулятор примерной стоимости",
  "Отзывы",
  "Форма заявки",
  "Подготовка отправки заявок в Telegram",
];

const siteFunctions = [
  "Выбор услуги",
  "Выбор типа автомобиля",
  "Примерный расчет стоимости",
  "Форма заявки",
  "Кнопки Telegram/WhatsApp",
  "FAQ",
  "Мобильная версия",
];

const businessResults = [
  "Клиент быстрее выбирает услугу и понимает примерный бюджет до обращения.",
  "Меньше лишних звонков с базовыми вопросами по услугам и стоимости.",
  "Заявки приходят структурированно: авто, услуга, время и комментарий в одном сообщении.",
  "Выше доверие к сервису за счет понятной упаковки, этапов работ и отзывов.",
  "Можно запускать рекламу на страницу и вести клиента сразу к расчету или форме.",
];

export default function AutoserviceCasePage() {
  return (
    <main className="overflow-hidden bg-[#08090b] text-white">
      <section className="relative isolate px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/autopro-service.png"
          alt="Демо-интерфейс сайта AutoPro Service"
          width={1400}
          height={920}
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.52]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08090b] via-[#08090b]/90 to-[#08090b]/60" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#08090b] to-transparent" />

        <div className="mx-auto grid min-h-[570px] max-w-6xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-orange-300/30 bg-black/45 px-3 py-2 text-sm font-semibold uppercase text-orange-200">
              Автосервис / шиномонтаж / детейлинг / диагностика
            </p>
            <h1 className="text-5xl font-bold leading-[1.04] text-white sm:text-7xl">
              AutoPro Service
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
              Сайт для автосервиса с записью и расчётом стоимости
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#auto-lead-form"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-400 px-6 py-3 text-sm font-black text-neutral-950 shadow-[0_18px_40px_rgba(251,146,60,0.25)] transition hover:bg-sky-300"
              >
                Записаться на сервис
              </a>
              <a
                href="#auto-cost-calculator"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:border-orange-200/70 hover:bg-white/15"
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/60 p-5 shadow-2xl shadow-black/35 backdrop-blur">
            <p className="text-sm font-semibold uppercase text-sky-200">
              Цель проекта
            </p>
            <p className="mt-4 text-2xl font-bold leading-tight text-white">
              Показать, как сайт помогает автосервису получать заявки на ремонт
              и обслуживание.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-3">
                Ниша: ремонт, шины, детейлинг, диагностика
              </span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-3">
                Формат: лендинг с расчетом и заявкой
              </span>
            </div>
          </div>
        </div>
      </section>

      <AutoCaseSection
        eyebrow="Задача бизнеса"
        title="Снизить хаос в обращениях и дать клиенту быстрый первый расчет"
        description="Автосервису нужна страница, где клиент видит услуги, популярные работы, примерную стоимость и может оставить заявку без звонка."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessProblems.map((problem) => (
            <article
              key={problem}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="leading-7 text-slate-200">{problem}</p>
            </article>
          ))}
        </div>
      </AutoCaseSection>

      <AutoCaseSection
        eyebrow="Что было сделано"
        title="Собран сайт, который объясняет услуги и ведет к заявке"
        description="Страница показывает направления сервиса, популярные работы, примерный расчет, отзывы и форму заявки, которую дальше можно подключить к Telegram."
        className="bg-white/[0.025]"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deliveredItems.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-orange-300/20 bg-[#0d1117] px-4 py-4 font-semibold text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </AutoCaseSection>

      <AutoCaseSection
        eyebrow="Функции сайта"
        title="Путь клиента: выбрать услугу, оценить стоимость, оставить заявку"
        description="Клиенту не нужно сразу звонить: он может понять примерный порядок цены и отправить структурированное обращение."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteFunctions.map((feature) => (
            <article
              key={feature}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-300/50"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-orange-400" />
              <h3 className="text-lg font-bold text-white">{feature}</h3>
            </article>
          ))}
        </div>
      </AutoCaseSection>

      <AutoServiceDemoSite />

      <AutoCaseSection
        eyebrow="Результат для бизнеса"
        title="Больше понятных заявок и меньше ручных уточнений"
        description="Демо показывает, как автосервис может принимать обращения через сайт, не теряя клиентов между звонками и мессенджерами."
        className="bg-white/[0.025]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessResults.map((result) => (
            <article
              key={result}
              className="rounded-lg border border-white/10 bg-[#0d1117] p-5"
            >
              <p className="leading-7 text-slate-200">{result}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#auto-lead-form"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-400 px-6 py-3 text-sm font-black text-neutral-950 shadow-[0_18px_40px_rgba(251,146,60,0.22)] transition hover:bg-sky-300"
          >
            Оставить заявку
          </a>
          <a
            href="#auto-cost-calculator"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:border-sky-200/70"
          >
            Рассчитать стоимость
          </a>
        </div>
      </AutoCaseSection>
    </main>
  );
}

type AutoCaseSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

function AutoCaseSection({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: AutoCaseSectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-orange-300">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
