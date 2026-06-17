"use client";

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
  },
  {
    title: "Брови",
    text: "Архитектура, окрашивание и долговременная укладка с мягким результатом.",
  },
  {
    title: "Стрижки",
    text: "Женские стрижки, укладки и уходовые процедуры для волос.",
  },
  {
    title: "Окрашивание",
    text: "Тонирование, сложные техники и подбор оттенка под образ клиента.",
  },
];

const masters = [
  { name: "Алина", role: "nail-мастер", note: "чистый маникюр и минимализм" },
  { name: "Диана", role: "brow-мастер", note: "мягкая форма и натуральные оттенки" },
  { name: "Мария", role: "стилист", note: "стрижки, уход и окрашивание" },
];

const prices = [
  ["Маникюр с покрытием", "2 200 ₽"],
  ["Коррекция и окрашивание бровей", "1 500 ₽"],
  ["Женская стрижка", "2 800 ₽"],
  ["Сложное окрашивание", "от 7 500 ₽"],
];

const works = [
  "Молочный френч",
  "Пудровые брови",
  "Глянцевая укладка",
  "Мягкий блонд",
];

const advantages = [
  "Запись за 1 минуту",
  "Понятные цены",
  "Проверенные мастера",
  "Напоминание перед визитом",
];

const reviews = [
  {
    name: "Екатерина",
    text: "Очень удобно записаться: выбрала услугу, мастера и время без долгой переписки.",
  },
  {
    name: "Лилия",
    text: "Сайт сразу выглядит красиво и понятно. Цены, мастера и работы в одном месте.",
  },
];

const faq = [
  {
    question: "Можно ли выбрать конкретного мастера?",
    answer: "Да, в форме записи клиент выбирает мастера и удобное время визита.",
  },
  {
    question: "Что делать, если не знаю точную услугу?",
    answer: "Можно выбрать ближайшую услугу и написать комментарий. Администратор уточнит детали.",
  },
  {
    question: "Куда приходит запись?",
    answer: "В реальном проекте заявка может уходить в Telegram, CRM или таблицу администратора.",
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
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-[#a65f72]">
            Встроенный демо-сайт салона
          </p>
          <h2 className="text-3xl font-bold text-[#2b2928] sm:text-4xl">
            Как может выглядеть онлайн-запись BeautyLine Studio
          </h2>
          <p className="mt-4 text-base leading-7 text-[#635b56] sm:text-lg">
            Это демо-лендинг на странице кейса: с главным экраном, услугами,
            мастерами, ценами, работами, отзывами, FAQ и формой записи.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-[#2b2928]/10 bg-[#fbf4ef] shadow-[0_28px_90px_rgba(72,50,43,0.14)]">
        <DemoHero />
        <DemoServices />
        <DemoMasters />
        <DemoPrices />
        <DemoWorks />
        <DemoAdvantages />
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
    <section className="grid gap-8 border-b border-[#2b2928]/10 bg-white px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:px-10 lg:py-16">
      <div>
        <p className="mb-4 inline-flex rounded-md bg-[#f7dbe2] px-3 py-2 text-sm font-bold text-[#8e5160]">
          BeautyLine Studio
        </p>
        <h3 className="text-3xl font-bold leading-tight text-[#2b2928] sm:text-5xl">
          Красивый образ начинается с удобной записи
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#635b56] sm:text-lg">
          Маникюр, брови, стрижки и окрашивание в одном салоне. Выберите услугу,
          мастера и удобное время без лишних сообщений.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="#beauty-booking-form"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#c8798b] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(200,121,139,0.25)] transition hover:bg-[#ad6275]"
          >
            Записаться онлайн
          </a>
          <a
            href="#beauty-prices"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#2b2928]/10 bg-white px-5 py-3 text-sm font-bold text-[#2b2928] transition hover:border-[#c8798b]/50"
          >
            Смотреть цены
          </a>
        </div>
      </div>
      <div className="grid gap-4 rounded-lg bg-[#f7f1eb] p-5">
        <div className="grid grid-cols-2 gap-3">
          <BeautyStat value="4" label="направления услуг" />
          <BeautyStat value="3" label="мастера в демо" />
          <BeautyStat value="1 мин" label="до заявки" />
          <BeautyStat value="CRM" label="готово к интеграции" />
        </div>
        <div className="rounded-lg bg-[#2b2928] p-5 text-white">
          <p className="text-sm font-bold uppercase text-[#f1c7d0]">Фокус</p>
          <p className="mt-2 text-2xl font-black">
            Запись вместо ручных уточнений
          </p>
        </div>
      </div>
    </section>
  );
}

function BeautyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <p className="text-2xl font-black text-[#2b2928]">{value}</p>
      <p className="mt-1 text-sm leading-5 text-[#766c66]">{label}</p>
    </div>
  );
}

function DemoServices() {
  return (
    <BeautyDemoSection
      title="Услуги"
      text="Салон показывает все основные направления без поиска по постам."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="rounded-lg bg-white p-5 shadow-sm">
            <h4 className="text-xl font-bold text-[#2b2928]">{service.title}</h4>
            <p className="mt-3 leading-7 text-[#635b56]">{service.text}</p>
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
      text="Карточки помогают выбрать специалиста до отправки формы."
      tone="white"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {masters.map((master) => (
          <article
            key={master.name}
            className="rounded-lg border border-[#2b2928]/10 bg-[#fffaf7] p-5 shadow-sm"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f1c7d0] text-xl font-black text-[#8e5160]">
              {master.name.slice(0, 1)}
            </div>
            <h4 className="text-xl font-bold text-[#2b2928]">{master.name}</h4>
            <p className="mt-1 text-sm font-semibold uppercase text-[#a65f72]">
              {master.role}
            </p>
            <p className="mt-3 leading-7 text-[#635b56]">{master.note}</p>
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
      text="Прайс выглядит спокойно и понятно, без ручного пересыла скриншотов."
    >
      <div className="overflow-hidden rounded-lg border border-[#2b2928]/10 bg-white shadow-sm">
        {prices.map(([service, price]) => (
          <div
            key={service}
            className="grid gap-2 border-b border-[#2b2928]/10 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <p className="font-semibold text-[#2b2928]">{service}</p>
            <p className="font-bold text-[#a65f72]">{price}</p>
          </div>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoWorks() {
  return (
    <BeautyDemoSection
      title="Работы"
      text="Небольшая галерея показывает настроение салона и повышает доверие."
      tone="white"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {works.map((work, index) => (
          <article
            key={work}
            className="min-h-44 rounded-lg bg-gradient-to-br from-[#f7dbe2] via-white to-[#e9ded7] p-5 shadow-sm"
          >
            <p className="text-sm font-bold uppercase text-[#a65f72]">
              Работа {index + 1}
            </p>
            <h4 className="mt-16 text-xl font-bold text-[#2b2928]">{work}</h4>
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
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <div
            key={advantage}
            className="rounded-md border border-[#c8798b]/20 bg-white px-4 py-4 font-bold text-[#2b2928] shadow-sm"
          >
            {advantage}
          </div>
        ))}
      </div>
    </BeautyDemoSection>
  );
}

function DemoReviews() {
  return (
    <BeautyDemoSection
      title="Отзывы"
      text="Социальное доказательство рядом с формой онлайн-записи."
      tone="white"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-lg border border-[#2b2928]/10 bg-[#fffaf7] p-5 shadow-sm"
          >
            <p className="text-lg leading-8 text-[#3a3431]">“{review.text}”</p>
            <p className="mt-4 text-sm font-bold text-[#a65f72]">
              {review.name}
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
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-[#f1c7d0]">
            Форма записи
          </p>
          <h3 className="text-3xl font-bold">Записаться в салон</h3>
          <p className="mt-4 leading-7 text-[#e8ded8]">
            Форма собирает услугу, мастера, дату и время. В реальном проекте
            запись отправляется администратору в Telegram или CRM.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
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
                <option>Стрижка</option>
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
            className="min-h-12 rounded-md bg-[#f1c7d0] px-5 py-3 text-sm font-black text-[#2b2928] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Отправка..." : "Отправить запись"}
          </button>
          {isSent ? (
            <p
              role="status"
              className="rounded-md border border-[#f1c7d0]/50 bg-[#f1c7d0]/15 px-4 py-3 font-semibold text-[#ffe7ed]"
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
            className="rounded-lg border border-[#2b2928]/10 bg-[#fffaf7] p-5 shadow-sm"
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
