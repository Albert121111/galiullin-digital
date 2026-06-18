"use client";

import Image from "next/image";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type BeautyLead = {
  name: string;
  phone: string;
  service: string;
  master: string;
  date: string;
  time: string;
  comment: string;
};

const initialLead: BeautyLead = {
  name: "",
  phone: "",
  service: "",
  master: "",
  date: "",
  time: "",
  comment: "",
};

const services = [
  {
    title: "Маникюр",
    text: "Комбинированный маникюр, укрепление, покрытие и аккуратный дизайн.",
    image: "/beauty-manicure.jpg",
    alt: "Нюдовый маникюр крупным планом",
    badge: "от 2 200 ₽",
  },
  {
    title: "Брови",
    text: "Архитектура, окрашивание и долговременная укладка с мягким результатом.",
    image: "/beauty-brows.jpg",
    alt: "Процедура оформления бровей",
    badge: "от 1 500 ₽",
  },
  {
    title: "Укладки",
    text: "Легкие волны, гладкие укладки и образ для события без перегруза.",
    image: "/beauty-hair-styling.jpg",
    alt: "Укладка волос в светлом салоне",
    badge: "от 2 800 ₽",
  },
  {
    title: "Окрашивание",
    text: "Тонирование, сложные техники и подбор оттенка под образ клиента.",
    image: "/beauty-coloring.jpg",
    alt: "Окрашивание волос в салоне",
    badge: "от 7 500 ₽",
  },
];

const masters = [
  {
    name: "Алина",
    role: "nail-мастер",
    description:
      "Работает с чистым маникюром, укреплением и спокойными дизайнами в молочной палитре.",
    strength: "5 лет опыта",
    rating: "4.9",
    image: "/beauty-master-alina.jpg",
    alt: "Алина, nail-мастер BeautyLine Studio",
  },
  {
    name: "Диана",
    role: "brow-мастер",
    description:
      "Подбирает форму и оттенок без резкой графики, делает акцент на естественность.",
    strength: "натуральный результат",
    rating: "5.0",
    image: "/beauty-master-diana.jpg",
    alt: "Диана, brow-мастер BeautyLine Studio",
  },
  {
    name: "Мария",
    role: "стилист-колорист",
    description:
      "Занимается стрижками, уходом и мягкими окрашиваниями с учетом образа клиента.",
    strength: "сложные техники",
    rating: "4.9",
    image: "/beauty-master-maria.jpg",
    alt: "Мария, стилист-колорист BeautyLine Studio",
  },
];

const priceGroups = [
  {
    category: "Ногтевой сервис",
    rows: [
      ["Маникюр без покрытия", "1 600 ₽", "60 мин"],
      ["Маникюр с покрытием", "2 200 ₽", "90 мин"],
      ["Укрепление и дизайн", "от 2 800 ₽", "120 мин"],
    ],
  },
  {
    category: "Брови",
    rows: [
      ["Коррекция формы", "900 ₽", "30 мин"],
      ["Коррекция и окрашивание", "1 500 ₽", "45 мин"],
      ["Долговременная укладка", "2 200 ₽", "60 мин"],
    ],
  },
  {
    category: "Волосы",
    rows: [
      ["Женская стрижка", "2 800 ₽", "60 мин"],
      ["Укладка", "от 2 200 ₽", "45 мин"],
      ["Сложное окрашивание", "от 7 500 ₽", "180 мин"],
    ],
  },
];

const works = [
  {
    title: "Молочный маникюр",
    text: "Чистый нюд и аккуратная форма без перегруза.",
    image: "/beauty-manicure.jpg",
    alt: "Молочный маникюр на ухоженных ногтях",
  },
  {
    title: "Мягкие брови",
    text: "Натуральная форма и деликатное окрашивание.",
    image: "/beauty-brows.jpg",
    alt: "Оформление бровей крупным планом",
  },
  {
    title: "Глянцевая укладка",
    text: "Легкие волны для повседневного или вечернего образа.",
    image: "/beauty-hair-styling.jpg",
    alt: "Уложенные волосы после процедуры",
  },
  {
    title: "Теплый блонд",
    text: "Окрашивание с мягким переходом и уходом после процедуры.",
    image: "/beauty-coloring.jpg",
    alt: "Процесс окрашивания волос",
  },
];

const atmosphere = [
  {
    image: "/beauty-salon-interior.jpg",
    alt: "Светлая зона салона красоты с зеркалами",
    caption: "Светлый интерьер",
  },
  {
    image: "/beauty-treatment.jpg",
    alt: "Косметологическая зона с уходовыми средствами",
    caption: "Уходовая зона",
  },
  {
    image: "/beauty-master-diana.jpg",
    alt: "Brow-мастер BeautyLine Studio",
    caption: "Мастера рядом",
  },
  {
    image: "/beauty-master-maria.jpg",
    alt: "Стилист BeautyLine Studio",
    caption: "Волосы и окрашивание",
  },
];

const advantages = [
  {
    title: "Запись за 1 минуту",
    text: "Клиент выбирает услугу, мастера и время без длинной переписки.",
  },
  {
    title: "Понятные цены",
    text: "Прайс сгруппирован по услугам и легко читается с телефона.",
  },
  {
    title: "Больше доверия",
    text: "Мастера, фото работ и отзывы делают салон ближе еще до визита.",
  },
  {
    title: "Готово к CRM",
    text: "Форму можно подключить к Telegram, таблице или CRM администратора.",
  },
];

const reviews = [
  {
    name: "Екатерина",
    service: "маникюр + дизайн",
    text: "Очень удобно записаться: выбрала услугу, мастера и время без долгой переписки. Сайт выглядит спокойно и дорого.",
    image: "/beauty-manicure.jpg",
    alt: "Фото маникюра для отзыва Екатерины",
  },
  {
    name: "Лилия",
    service: "окрашивание",
    text: "Сразу видно цены, работы и мастеров. Не пришлось искать актуальный прайс в постах и спрашивать все заново.",
    image: "/beauty-coloring.jpg",
    alt: "Фото окрашивания для отзыва Лилии",
  },
  {
    name: "Анастасия",
    service: "брови",
    text: "Форма записи короткая, но в ней есть все важное. Администратор быстро подтвердил визит и дал рекомендации.",
    image: "/beauty-brows.jpg",
    alt: "Фото оформления бровей для отзыва Анастасии",
  },
];

const faq = [
  {
    question: "Можно ли выбрать конкретного мастера?",
    answer:
      "Да, в форме записи клиент выбирает мастера, дату и удобное время визита.",
  },
  {
    question: "Что делать, если клиент не знает точную услугу?",
    answer:
      "Можно выбрать ближайшую услугу и оставить комментарий. Администратор уточнит детали перед подтверждением записи.",
  },
  {
    question: "Куда приходит запись?",
    answer:
      "В реальном проекте заявка может уходить в Telegram, CRM или таблицу администратора.",
  },
];

export async function sendLeadToTelegram(lead: BeautyLead) {
  void lead;
  await new Promise((resolve) => setTimeout(resolve, 350));
  return { ok: true };
}

export function BeautyDemoSite() {
  const [lead, setLead] = useState<BeautyLead>(initialLead);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    await sendLeadToTelegram(lead);
    setLead(initialLead);
    setIsSent(true);
    setIsSending(false);
  }

  function updateField(field: keyof BeautyLead, value: string) {
    setLead((currentLead) => ({ ...currentLead, [field]: value }));
    if (isSent) {
      setIsSent(false);
    }
  }

  return (
    <section className="bg-[#fffaf7] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a65f72]">
              Встроенный демо-сайт салона
            </p>
            <h2 className="text-3xl font-bold text-[#2b2928] sm:text-4xl">
              Как может выглядеть онлайн-запись BeautyLine Studio
            </h2>
          </div>
          <p className="text-base leading-7 text-[#635b56] sm:text-lg">
            Это демо-лендинг внутри кейса: с главным экраном, услугами,
            мастерами, ценами, работами, атмосферой, отзывами, FAQ и формой
            записи.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#2b2928]/10 bg-[#fbf4ef] shadow-[0_34px_110px_rgba(72,50,43,0.15)]">
        <DemoHero />
        <DemoServices />
        <DemoMasters />
        <DemoPrices />
        <DemoWorks />
        <DemoAdvantages />
        <DemoAtmosphere />
        <DemoReviews />
        <DemoBookingForm
          lead={lead}
          isSent={isSent}
          isSending={isSending}
          onSubmit={handleSubmit}
          onUpdate={updateField}
        />
        <DemoFaq />
      </div>
    </section>
  );
}

function DemoHero() {
  return (
    <section className="grid gap-8 border-b border-[#2b2928]/10 bg-white px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.88fr] lg:px-10 lg:py-16">
      <div className="flex flex-col justify-center">
        <p className="mb-4 inline-flex w-fit rounded-full bg-[#f7dbe2] px-4 py-2 text-sm font-bold text-[#8e5160]">
          BeautyLine Studio
        </p>
        <h3 className="text-3xl font-bold leading-tight text-[#2b2928] sm:text-5xl">
          Красивый образ начинается с удобной записи
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#635b56] sm:text-lg">
          Маникюр, брови, укладки и окрашивание в одном салоне. Клиент выбирает
          услугу, мастера и удобное время без лишних сообщений.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="#beauty-booking-form"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c8798b] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(200,121,139,0.25)] transition hover:-translate-y-0.5 hover:bg-[#ad6275] focus:outline-none focus:ring-4 focus:ring-[#f1c7d0]/60"
          >
            Записаться онлайн
          </a>
          <a
            href="#beauty-prices"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#2b2928]/10 bg-white px-6 py-3 text-sm font-bold text-[#2b2928] transition hover:-translate-y-0.5 hover:border-[#c8798b]/50 focus:outline-none focus:ring-4 focus:ring-[#f1c7d0]/50"
          >
            Смотреть цены
          </a>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <BeautyStat value="4" label="направления услуг" />
          <BeautyStat value="1 мин" label="до отправки записи" />
        </div>
      </div>

      <div className="relative">
        <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] bg-[#eadbd2] shadow-[0_22px_65px_rgba(72,50,43,0.16)]">
          <Image
            src="/beauty-treatment.jpg"
            alt="Уходовая зона BeautyLine Studio"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b2928]/55 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/45 bg-white/88 p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a65f72]">
              Онлайн-запись
            </p>
            <p className="mt-2 text-lg font-bold text-[#2b2928]">
              Услуга, мастер, дата и время в одной форме.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeautyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-[#2b2928]/10 bg-[#fffaf7] p-5 shadow-sm">
      <p className="text-3xl font-black text-[#2b2928]">{value}</p>
      <p className="mt-1 text-sm leading-5 text-[#766c66]">{label}</p>
    </div>
  );
}

function DemoServices() {
  return (
    <BeautyDemoSection
      title="Услуги"
      text="Салон показывает основные направления без поиска по постам и сторис."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden rounded-[1.5rem] border border-[#2b2928]/10 bg-white shadow-[0_14px_36px_rgba(72,50,43,0.08)]"
          >
            <div className="relative h-44">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h4 className="text-xl font-bold text-[#2b2928]">
                  {service.title}
                </h4>
                <span className="shrink-0 rounded-full bg-[#f7dbe2] px-3 py-1 text-xs font-bold text-[#8e5160]">
                  {service.badge}
                </span>
              </div>
              <p className="leading-7 text-[#635b56]">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoMasters() {
  return (
    <BeautyDemoSection
      title="Мастера"
      text="Карточки помогают выбрать специалиста до отправки формы и повышают доверие к салону."
      tone="white"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {masters.map((master) => (
          <article
            key={master.name}
            className="overflow-hidden rounded-[1.6rem] border border-[#2b2928]/10 bg-[#fffaf7] shadow-[0_16px_42px_rgba(72,50,43,0.08)]"
          >
            <div className="relative h-72">
              <Image
                src={master.image}
                alt={master.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#2b2928]">
                    {master.name}
                  </h4>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-[#a65f72]">
                    {master.role}
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm">
                  <p className="text-sm font-black text-[#2b2928]">
                    {master.rating}
                  </p>
                  <p className="text-[11px] uppercase text-[#8f837c]">
                    рейтинг
                  </p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-[#635b56]">
                {master.description}
              </p>
              <p className="mt-4 rounded-full bg-[#f7dbe2] px-4 py-2 text-sm font-bold text-[#8e5160]">
                {master.strength}
              </p>
            </div>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoPrices() {
  return (
    <BeautyDemoSection
      id="beauty-prices"
      title="Цены"
      text="Прайс выглядит спокойно и понятно: категории, стоимость и ориентир по времени в одном месте."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {priceGroups.map((group) => (
          <article
            key={group.category}
            className="overflow-hidden rounded-[1.5rem] border border-[#2b2928]/10 bg-white shadow-sm"
          >
            <div className="bg-[#2b2928] px-5 py-4">
              <h4 className="text-lg font-bold text-white">{group.category}</h4>
            </div>
            <div>
              {group.rows.map(([service, price, time]) => (
                <div
                  key={service}
                  className="grid gap-2 border-b border-[#2b2928]/10 px-5 py-4 last:border-b-0"
                >
                  <p className="font-semibold text-[#2b2928]">{service}</p>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-bold text-[#a65f72]">{price}</span>
                    <span className="text-[#756b65]">{time}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoWorks() {
  return (
    <BeautyDemoSection
      title="Работы"
      text="Галерея показывает стиль салона: чистые детали, мягкая палитра и аккуратный результат."
      tone="white"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {works.map((work) => (
          <article
            key={work.title}
            className="group overflow-hidden rounded-[1.5rem] border border-[#2b2928]/10 bg-[#fffaf7] shadow-sm"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={work.image}
                alt={work.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="text-xl font-bold text-[#2b2928]">
                {work.title}
              </h4>
              <p className="mt-2 leading-6 text-[#635b56]">{work.text}</p>
            </div>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoAdvantages() {
  return (
    <BeautyDemoSection
      title="Преимущества"
      text="Короткие аргументы рядом с записью помогают быстрее принять решение."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <article
            key={advantage.title}
            className="rounded-[1.35rem] border border-[#c8798b]/20 bg-white p-5 shadow-sm"
          >
            <div className="mb-5 h-2 w-12 rounded-full bg-[#d99baa]" />
            <h4 className="text-lg font-bold text-[#2b2928]">
              {advantage.title}
            </h4>
            <p className="mt-2 leading-6 text-[#635b56]">{advantage.text}</p>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoAtmosphere() {
  return (
    <BeautyDemoSection
      title="Атмосфера салона"
      text="Интерьер, процедуры и мастера делают демо-сайт похожим на реальную коммерческую страницу."
      tone="white"
    >
      <div className="grid gap-4 md:grid-cols-4">
        {atmosphere.map((item, index) => (
          <article
            key={item.caption}
            className={`group relative min-h-64 overflow-hidden rounded-[1.5rem] shadow-sm ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              loading="eager"
              sizes={
                index === 0
                  ? "(min-width: 768px) 50vw, 100vw"
                  : "(min-width: 768px) 25vw, 100vw"
              }
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2928]/55 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 rounded-full bg-white/86 px-4 py-2 text-sm font-bold text-[#2b2928] backdrop-blur">
              {item.caption}
            </p>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoReviews() {
  return (
    <BeautyDemoSection
      title="Отзывы"
      text="Социальное доказательство рядом с формой онлайн-записи делает страницу спокойнее и убедительнее."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-[1.5rem] border border-[#2b2928]/10 bg-white p-5 shadow-[0_14px_36px_rgba(72,50,43,0.08)]"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[#2b2928]">{review.name}</p>
                <p className="text-sm text-[#a65f72]">{review.service}</p>
              </div>
            </div>
            <p className="text-base leading-7 text-[#3a3431]">
              “{review.text}”
            </p>
          </article>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

type DemoBookingFormProps = {
  lead: BeautyLead;
  isSent: boolean;
  isSending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onUpdate: (field: keyof BeautyLead, value: string) => void;
};

function DemoBookingForm({
  lead,
  isSent,
  isSending,
  onSubmit,
  onUpdate,
}: DemoBookingFormProps) {
  return (
    <section
      id="beauty-booking-form"
      className="scroll-mt-28 border-b border-[#2b2928]/10 bg-[#2b2928] px-5 py-12 text-white sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
        <div className="rounded-[1.7rem] bg-white/[0.06] p-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#f1c7d0]">
            Форма записи
          </p>
          <h3 className="text-3xl font-bold">Записаться в салон</h3>
          <p className="mt-4 leading-7 text-[#e8ded8]">
            Оставьте запись, и администратор свяжется с вами для подтверждения.
          </p>
          <div className="mt-6 grid gap-3">
            {["Выбор услуги", "Мастер и удобное время", "Комментарий для администратора"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-[#f8ece8]"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-4 rounded-[1.7rem] bg-white/[0.06] p-5 sm:p-6"
        >
          <BeautyField label="Имя">
            <input
              name="name"
              data-testid="beauty-name"
              value={lead.name}
              onChange={(event) => onUpdate("name", event.target.value)}
              required
              className="beauty-field-input"
              placeholder="Анна"
            />
          </BeautyField>
          <BeautyField label="Телефон">
            <input
              name="phone"
              data-testid="beauty-phone"
              value={lead.phone}
              onChange={(event) => onUpdate("phone", event.target.value)}
              required
              type="tel"
              className="beauty-field-input"
              placeholder="+7 999 000-00-00"
            />
          </BeautyField>
          <div className="grid gap-4 sm:grid-cols-2">
            <BeautyField label="Услуга">
              <select
                name="service"
                data-testid="beauty-service"
                value={lead.service}
                onChange={(event) => onUpdate("service", event.target.value)}
                required
                className="beauty-field-input"
              >
                <option value="">Выберите услугу</option>
                <option>Маникюр</option>
                <option>Брови</option>
                <option>Укладка</option>
                <option>Окрашивание</option>
              </select>
            </BeautyField>
            <BeautyField label="Мастер">
              <select
                name="master"
                data-testid="beauty-master"
                value={lead.master}
                onChange={(event) => onUpdate("master", event.target.value)}
                required
                className="beauty-field-input"
              >
                <option value="">Выберите мастера</option>
                <option>Алина</option>
                <option>Диана</option>
                <option>Мария</option>
              </select>
            </BeautyField>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <BeautyField label="Дата">
              <input
                name="date"
                data-testid="beauty-date"
                value={lead.date}
                onChange={(event) => onUpdate("date", event.target.value)}
                required
                type="date"
                className="beauty-field-input"
              />
            </BeautyField>
            <BeautyField label="Время">
              <input
                name="time"
                data-testid="beauty-time"
                value={lead.time}
                onChange={(event) => onUpdate("time", event.target.value)}
                required
                type="time"
                className="beauty-field-input"
              />
            </BeautyField>
          </div>
          <BeautyField label="Комментарий">
            <textarea
              name="comment"
              data-testid="beauty-comment"
              value={lead.comment}
              onChange={(event) => onUpdate("comment", event.target.value)}
              className="beauty-field-input min-h-28 resize-y"
              placeholder="Например: нужен дизайн ногтей или консультация по окрашиванию"
            />
          </BeautyField>
          <button
            type="submit"
            disabled={isSending}
            className="min-h-12 rounded-full bg-[#f1c7d0] px-5 py-3 text-sm font-black text-[#2b2928] transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/25 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Отправка..." : "Отправить запись"}
          </button>
          {isSent ? (
            <p
              role="status"
              aria-live="polite"
              className="rounded-2xl border border-[#f1c7d0]/50 bg-[#f1c7d0]/15 px-4 py-3 font-semibold text-[#ffe7ed]"
            >
              Запись отправлена
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function DemoFaq() {
  return (
    <BeautyDemoSection
      title="FAQ"
      text="Ответы закрывают вопросы до переписки с администратором."
      tone="white"
    >
      <div className="grid gap-3">
        {faq.map((item) => (
          <details
            key={item.question}
            className="rounded-[1.25rem] border border-[#2b2928]/10 bg-[#fffaf7] p-5 shadow-sm"
          >
            <summary className="cursor-pointer text-lg font-bold text-[#2b2928]">
              {item.question}
            </summary>
            <p className="mt-3 leading-7 text-[#635b56]">{item.answer}</p>
          </details>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function BeautyField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#f8ece8]">
      {label}
      {children}
    </label>
  );
}

function BeautyDemoSection({
  id,
  title,
  text,
  children,
  tone = "milk",
}: {
  id?: string;
  title: string;
  text: string;
  children: ReactNode;
  tone?: "milk" | "white";
}) {
  return (
    <section
      id={id}
      className={`border-b border-[#2b2928]/10 px-5 py-12 sm:px-8 lg:px-10 ${
        tone === "white" ? "bg-white" : "bg-[#fbf4ef]"
      }`}
    >
      <div className="mb-7 max-w-2xl">
        <h3 className="text-2xl font-bold text-[#2b2928] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 leading-7 text-[#635b56]">{text}</p>
      </div>
      {children}
    </section>
  );
}
