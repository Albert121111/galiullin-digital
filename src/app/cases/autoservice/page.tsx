import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AutoServiceDemoSite } from "@/components/AutoServiceDemoSite";
import { CaseGrowthBlocks } from "@/components/CaseGrowthBlocks";
import { publicAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "AutoPro Service - демо-кейс сайта автосервиса",
  description:
    "Демо-кейс сайта для автосервиса AutoPro Service: услуги, прайс, калькулятор стоимости, фото процесса, отзывы и форма заявки.",
  openGraph: {
    title: "AutoPro Service - демо-кейс сайта автосервиса",
    description:
      "Технологичный сайт автосервиса с записью без звонка, расчетом стоимости и структурированными заявками.",
    images: [publicAsset("/auto-service-bay.jpg")],
  },
};

const businessProblems = [
  "Клиентам неудобно звонить, особенно когда нужно быстро понять цену и свободное время.",
  "Нет понятного списка услуг, поэтому человек не понимает, можно ли решить его задачу.",
  "Цены не структурированы и часто объясняются вручную в каждом отдельном диалоге.",
  "Заявки приходят хаотично из звонков, мессенджеров и личных сообщений.",
  "Владелец теряет обращения, когда администратор занят или клиент не дозвонился.",
];

const deliveredItems = [
  {
    title: "Услуги сервиса",
    text: "Диагностика, ремонт, шиномонтаж и детейлинг показаны в визуальных карточках.",
    image: "/auto-diagnostics.jpg",
    alt: "Механик проводит диагностику автомобиля",
  },
  {
    title: "Прайс популярных работ",
    text: "Цена, время, гарантия и описание помогают клиенту быстрее сориентироваться.",
    image: "/auto-brake-parts.jpg",
    alt: "Автомобильные детали и тормозной диск на верстаке",
  },
  {
    title: "Калькулятор стоимости",
    text: "Клиент получает предварительную оценку до отправки заявки.",
    image: "/auto-service-bay.jpg",
    alt: "Современный автосервис с автомобилем на подъемнике",
  },
  {
    title: "Форма заявки",
    text: "Форма собирает автомобиль, услугу, удобное время и комментарий без звонка.",
    image: "/auto-engine-repair.jpg",
    alt: "Механик работает под капотом автомобиля",
  },
];

const siteFunctions = [
  "Выбор услуги",
  "Выбор типа автомобиля",
  "Примерный расчет стоимости",
  "Форма заявки",
  "Кнопки связи",
  "FAQ",
  "Мобильная версия",
  "Подготовка CRM",
];

const clientBenefits = [
  "Технологичная страница, которая сразу показывает услуги, оборудование и уровень сервиса.",
  "Калькулятор предварительной стоимости, чтобы клиент понимал порядок бюджета до заявки.",
  "Структурированное обращение с автомобилем, услугой, временем и комментарием без лишнего звонка.",
  "Основа для рекламы, таблицы заявок и дальнейшей CRM-обработки обращений.",
];

const processPhotos = [
  {
    title: "Диагностика",
    image: "/auto-diagnostics.jpg",
    alt: "Диагностика автомобиля через планшет",
  },
  {
    title: "Шиномонтаж",
    image: "/auto-tire-service.jpg",
    alt: "Шиномонтаж и работа с колесом",
  },
  {
    title: "Детейлинг",
    image: "/auto-detailing.jpg",
    alt: "Полировка кузова автомобиля",
  },
  {
    title: "Ремонт",
    image: "/auto-engine-repair.jpg",
    alt: "Ремонт двигателя автомобиля",
  },
];

const businessResults = [
  "Клиент быстрее выбирает услугу и понимает примерный бюджет до обращения.",
  "Меньше лишних звонков с базовыми вопросами по услугам и стоимости.",
  "Заявки приходят структурированно: авто, услуга, время и комментарий в одном сообщении.",
  "Выше доверие к сервису за счет понятной упаковки, этапов работ, фото процесса и отзывов.",
  "Можно запускать рекламу на страницу и вести клиента сразу к расчету или форме.",
];

export default function AutoserviceCasePage() {
  return (
    <main className="overflow-hidden bg-[#07090d] text-white">
      <section className="relative isolate px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[#07090d]" />
        <Image
          src={publicAsset("/auto-service-bay.jpg")}
          alt="Современный автосервис AutoPro Service"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-[0.45]"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_24%,rgba(56,189,248,0.24),transparent_30%),linear-gradient(90deg,#07090d_0%,rgba(7,9,13,0.94)_44%,rgba(7,9,13,0.64)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#07090d] to-transparent" />

        <div className="mx-auto grid min-h-[640px] max-w-6xl items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-orange-300/30 bg-black/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-200 shadow-lg shadow-black/30">
              Автосервис / шиномонтаж / детейлинг / диагностика
            </p>
            <h1 className="text-5xl font-bold leading-[1.02] text-white sm:text-7xl">
              AutoPro Service
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
              Сайт для автосервиса с записью, расчетом стоимости и понятной
              подачей работ.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#auto-lead-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-black text-neutral-950 shadow-[0_18px_42px_rgba(251,146,60,0.28)] transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-orange-300/35"
              >
                Записаться на сервис
              </a>
              <a
                href="#auto-cost-calculator"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200/70 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-sky-300/20"
              >
                Рассчитать стоимость
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <HeroStat value="4" label="направления работ" />
              <HeroStat value="15 мин" label="до подтверждения" />
              <HeroStat value="24/7" label="форма заявки" />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-3 shadow-[0_34px_110px_rgba(0,0,0,0.42)] backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#10151d] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={publicAsset("/auto-diagnostics.jpg")}
                  alt="Диагностика автомобиля в AutoPro Service"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/12 bg-black/70 p-5 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                    Цель проекта
                  </p>
                  <p className="mt-2 text-lg font-bold leading-snug text-white">
                    Показать, как сайт помогает автосервису получать заявки на
                    ремонт и обслуживание.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-8 hidden rounded-3xl border border-white/10 bg-[#0d1117]/92 p-4 shadow-2xl backdrop-blur md:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                Расчет
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Диагностика ходовой
              </p>
              <p className="text-sm text-slate-300">от 1 800 ₽</p>
            </div>

            <div className="absolute -right-3 bottom-10 hidden w-60 rounded-3xl border border-sky-300/20 bg-[#0d1117]/92 p-5 text-white shadow-2xl backdrop-blur md:block">
              <p className="text-sm font-bold text-sky-200">Заявка без звонка</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Авто, услуга и удобное время уже в сообщении администратора.
              </p>
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
          {businessProblems.map((problem, index) => (
            <article
              key={problem}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
            >
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-sm font-black text-neutral-950">
                {index + 1}
              </span>
              <p className="leading-7 text-slate-200">{problem}</p>
            </article>
          ))}
        </div>
      </AutoCaseSection>

      <AutoCaseSection
        eyebrow="Что было сделано"
        title="Собран сайт, который объясняет услуги и ведет к заявке"
        description="Страница показывает направления сервиса, популярные работы, примерный расчет, отзывы и форму заявки, которую дальше можно подключить к CRM или таблице."
        className="bg-white/[0.025]"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {deliveredItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0d1117] shadow-[0_18px_60px_rgba(0,0,0,0.30)]"
            >
              <div className="relative h-56">
                <Image
                  src={publicAsset(item.image)}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            </article>
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
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-orange-300/55 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-2 w-12 rounded-full bg-orange-400" />
              <h3 className="text-lg font-bold text-white">{feature}</h3>
            </article>
          ))}
        </div>
      </AutoCaseSection>

      <CaseGrowthBlocks
        variant="auto"
        benefits={clientBenefits}
        demoHref="#auto-cost-calculator"
        title="Сервис получает понятный вход для заявок и предварительных расчетов"
        description="Такой демо-сайт показывает, как снизить количество хаотичных звонков и собрать больше полезных данных до визита клиента."
        adaptationText="Структуру можно адаптировать под автосервис, детейлинг, шиномонтаж, диагностику, кузовной ремонт или выездное обслуживание."
      />

      <AutoCaseSection
        eyebrow="Фото процесса"
        title="Реальные визуальные сценарии повышают доверие к сервису"
        description="Для автосервиса важно показать не только список услуг, но и сам процесс: диагностику, ремонт, шиномонтаж и детейлинг."
        className="bg-white/[0.025]"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processPhotos.map((photo) => (
            <article
              key={photo.title}
              className="group relative min-h-72 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#0d1117] shadow-[0_18px_60px_rgba(0,0,0,0.30)]"
            >
              <Image
                src={publicAsset(photo.image)}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/65 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                {photo.title}
              </p>
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
              className="rounded-3xl border border-white/10 bg-[#0d1117] p-6"
            >
              <p className="leading-7 text-slate-200">{result}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-orange-300/18 bg-[#0d1117] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                CTA
              </p>
              <h3 className="mt-3 text-3xl font-bold">
                Хотите похожий сайт для автосервиса?
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Можно адаптировать услуги, прайс, калькулятор, CRM и
                сценарий записи под ваш сервис.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#auto-lead-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-black text-neutral-950 transition hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-orange-300/35"
              >
                Оставить заявку
              </a>
              <a
                href="#auto-cost-calculator"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:border-sky-200/70 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-sky-300/20"
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </AutoCaseSection>
    </main>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-lg shadow-black/20 backdrop-blur">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm leading-5 text-slate-300">{label}</p>
    </div>
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
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
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
