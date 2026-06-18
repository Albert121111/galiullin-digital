import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BeautyDemoSite } from "@/components/BeautyDemoSite";
import { CaseGrowthBlocks } from "@/components/CaseGrowthBlocks";

export const metadata: Metadata = {
  title: "BeautyLine Studio - демо-кейс сайта салона красоты",
  description:
    "Демо-кейс сайта для салона красоты BeautyLine Studio: услуги, мастера, цены, галерея работ, отзывы и онлайн-запись.",
  openGraph: {
    title: "BeautyLine Studio - демо-кейс сайта салона красоты",
    description:
      "Эстетичный сайт для салона красоты с онлайн-записью, мастерами, прайсом и галереей работ.",
    images: ["/beauty-salon-interior.jpg"],
  },
};

const businessProblems = [
  "Клиенты не видят полный список услуг и не понимают, что можно сделать в салоне.",
  "Цены разбросаны по постам, сторис и перепискам, поэтому их сложно быстро найти.",
  "Запись происходит вручную в сообщениях, администратору приходится уточнять детали по кругу.",
  "Владелец теряет заявки, когда клиент написал не в тот чат или сообщение ушло вниз.",
  "Нет красивой страницы, которую можно отправить клиенту, партнеру или запустить в рекламу.",
];

const deliveredItems = [
  {
    title: "Услуги салона",
    text: "Маникюр, брови, стрижки и окрашивание собраны в понятные карточки.",
    image: "/beauty-manicure.jpg",
    alt: "Аккуратный нюдовый маникюр",
  },
  {
    title: "Карточки мастеров",
    text: "Клиент видит специализацию, опыт и стиль работы каждого специалиста.",
    image: "/beauty-master-diana.jpg",
    alt: "Brow-мастер в салоне красоты",
  },
  {
    title: "Прайс без путаницы",
    text: "Цены сгруппированы по категориям, чтобы не искать их по постам.",
    image: "/beauty-treatment.jpg",
    alt: "Косметический кабинет с уходовыми средствами",
  },
  {
    title: "Онлайн-запись",
    text: "Форма собирает услугу, мастера, дату, время и комментарий клиента.",
    image: "/beauty-salon-interior.jpg",
    alt: "Светлый интерьер салона красоты",
  },
];

const siteFunctions = [
  "Выбор услуги",
  "Выбор мастера",
  "Выбор даты и времени",
  "Карточки мастеров",
  "Отзывы клиентов",
  "FAQ",
  "Мобильная версия",
  "Подготовка Telegram/CRM",
];

const clientBenefits = [
  "Красивая страница, которую можно отправить клиенту вместо набора постов и прайс-скринов.",
  "Онлайн-запись с услугой, мастером, датой, временем и комментарием в одном формате.",
  "Больше доверия за счет фото мастеров, атмосферы салона, работ и отзывов.",
  "Основа для подключения Telegram, CRM или таблицы администратора без ручного копирования заявок.",
];

const atmosphere = [
  {
    title: "Интерьер",
    text: "Светлая зона, которую хочется показать клиенту до визита.",
    image: "/beauty-salon-interior.jpg",
    alt: "Премиальный интерьер салона красоты в молочных оттенках",
  },
  {
    title: "Уход",
    text: "Фотографии процедур помогают снять ощущение неизвестности.",
    image: "/beauty-treatment.jpg",
    alt: "Уходовые средства и кушетка в beauty-кабинете",
  },
  {
    title: "Волосы",
    text: "Визуальный пример услуги делает страницу живой и продающей.",
    image: "/beauty-hair-styling.jpg",
    alt: "Укладка волос в салоне красоты",
  },
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
      <section className="relative isolate px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(241,199,208,0.62),transparent_34%),linear-gradient(135deg,#fffaf7_0%,#f7f1eb_46%,#eadbd2_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#f7f1eb] to-transparent" />

        <div className="mx-auto grid min-h-[640px] max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#d99baa]/45 bg-white/78 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#8e5160] shadow-sm">
              Салон красоты / онлайн-запись
            </p>
            <h1 className="text-5xl font-bold leading-[1.02] text-[#252221] sm:text-7xl">
              BeautyLine Studio
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5d5551]">
              Сайт для салона красоты с онлайн-записью, мастерами, прайсом и
              визуальной подачей услуг.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#beauty-booking-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c8798b] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(200,121,139,0.30)] transition hover:-translate-y-0.5 hover:bg-[#ad6275] focus:outline-none focus:ring-4 focus:ring-[#f1c7d0]/60"
              >
                Записаться онлайн
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#2b2928]/10 bg-white/82 px-6 py-3 text-sm font-bold text-[#2b2928] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c8798b]/50 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#f1c7d0]/50"
              >
                Обсудить похожий проект
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <HeroStat value="1 мин" label="до отправки записи" />
              <HeroStat value="4" label="направления услуг" />
              <HeroStat value="CRM" label="готово к интеграции" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden rounded-3xl bg-white/85 p-4 shadow-[0_18px_45px_rgba(72,50,43,0.16)] backdrop-blur md:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a65f72]">
                Новая запись
              </p>
              <p className="mt-2 text-sm font-semibold text-[#2b2928]">
                Маникюр + дизайн
              </p>
              <p className="text-sm text-[#736964]">Сегодня, 16:30</p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/85 bg-white/72 p-3 shadow-[0_30px_90px_rgba(72,50,43,0.18)] backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#eadbd2] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/beauty-salon-interior.jpg"
                  alt="Светлый интерьер салона красоты BeautyLine Studio"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2928]/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/86 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a65f72]">
                    Цель проекта
                  </p>
                  <p className="mt-2 text-lg font-bold leading-snug text-[#2b2928]">
                    Показать, как сайт помогает салону получать онлайн-записи.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-7 hidden w-56 rounded-3xl bg-[#2b2928] p-5 text-white shadow-[0_18px_45px_rgba(72,50,43,0.24)] md:block">
              <p className="text-sm font-bold text-[#f1c7d0]">Telegram/CRM</p>
              <p className="mt-2 text-sm leading-6 text-[#efe7e2]">
                Заявка приходит с услугой, мастером, датой и комментарием.
              </p>
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
          {businessProblems.map((problem, index) => (
            <article
              key={problem}
              className="rounded-3xl border border-[#2b2928]/10 bg-white/86 p-6 shadow-[0_18px_45px_rgba(72,50,43,0.08)]"
            >
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f1c7d0] text-sm font-black text-[#8e5160]">
                {index + 1}
              </span>
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
        <div className="grid gap-5 md:grid-cols-2">
          {deliveredItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.65rem] border border-[#2b2928]/10 bg-white shadow-[0_18px_50px_rgba(72,50,43,0.10)]"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2b2928]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#635b56]">{item.text}</p>
              </div>
            </article>
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
              className="rounded-3xl border border-[#2b2928]/10 bg-white/86 p-5 shadow-[0_14px_38px_rgba(72,50,43,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(72,50,43,0.12)]"
            >
              <div className="mb-5 h-2 w-12 rounded-full bg-[#d99baa]" />
              <h3 className="text-lg font-bold text-[#2b2928]">{feature}</h3>
            </article>
          ))}
        </div>
      </BeautyCaseSection>

      <CaseGrowthBlocks
        variant="light"
        benefits={clientBenefits}
        demoHref="#beauty-booking-form"
        title="Салон получает красивую витрину и более аккуратную запись"
        description="Такой демо-сайт показывает, как собрать услуги, мастеров, прайс, работы и форму записи в один понятный сценарий."
        adaptationText="Структуру можно адаптировать под салон красоты, студию маникюра, brow bar, парикмахерскую, косметолога или небольшой spa-проект."
      />

      <BeautyCaseSection
        eyebrow="Атмосфера салона"
        title="Фотографии добавляют доверие еще до первого визита"
        description="Для beauty-бизнеса визуал критичен: интерьер, процедуры и примеры работ помогают клиенту быстрее принять решение."
        className="bg-[#fffaf7]"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {atmosphere.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-[1.65rem] border border-[#2b2928]/10 bg-white shadow-[0_18px_50px_rgba(72,50,43,0.10)] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 66vw, 100vw"
                      : "(min-width: 1024px) 33vw, 100vw"
                  }
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2b2928]">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-[#635b56]">{item.text}</p>
              </div>
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
              className="rounded-3xl border border-[#2b2928]/10 bg-white p-6 shadow-[0_14px_38px_rgba(72,50,43,0.08)]"
            >
              <p className="leading-7 text-[#4f4844]">{result}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#2b2928] p-7 text-white shadow-[0_24px_70px_rgba(72,50,43,0.18)] sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c7d0]">
                CTA
              </p>
              <h3 className="mt-3 text-3xl font-bold">
                Хотите похожий сайт для своего салона?
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-[#eadfd9]">
                Можно адаптировать структуру под ваши услуги, мастеров,
                прайс, Telegram и реальные процессы записи.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#beauty-booking-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f1c7d0] px-6 py-3 text-sm font-bold text-[#2b2928] transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Открыть форму записи
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-[#f1c7d0] hover:bg-white/8 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Обсудить похожий проект
              </a>
            </div>
          </div>
        </div>
      </BeautyCaseSection>
    </main>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/72 p-4 shadow-sm backdrop-blur">
      <p className="text-2xl font-black text-[#2b2928]">{value}</p>
      <p className="mt-1 text-sm leading-5 text-[#6f645f]">{label}</p>
    </div>
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
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a65f72]">
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
