"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type FitnessLead = {
  name: string;
  phone: string;
  goal: string;
  time: string;
  comment: string;
};

const initialLead: FitnessLead = {
  name: "",
  phone: "",
  goal: "",
  time: "",
  comment: "",
};

const services = [
  {
    title: "Семейные тренировки",
    text: "Занятия для родителей и детей с безопасной нагрузкой и понятным планом.",
  },
  {
    title: "Подростковая подготовка",
    text: "Развитие силы, координации и дисциплины без перегруза и сложных программ.",
  },
  {
    title: "Персональный старт",
    text: "Оценка текущей формы, постановка цели и первые тренировки с тренером.",
  },
];

const prices = [
  { title: "Пробная", price: "1 500 ₽", text: "45 минут, знакомство и план действий" },
  { title: "4 тренировки", price: "6 900 ₽", text: "Подходит для мягкого старта" },
  { title: "8 тренировок", price: "12 900 ₽", text: "Регулярная работа с прогрессом" },
];

const advantages = [
  "Безопасная техника",
  "План под цель семьи",
  "Понятная нагрузка",
  "Поддержка между занятиями",
];

const reviews = [
  {
    name: "Анна, мама подростка",
    text: "Сын стал увереннее на тренировках и наконец понял, зачем нужна разминка и режим.",
  },
  {
    name: "Илья и Марина",
    text: "Нам понравилось, что тренировки подходят всей семье, без давления и сложных терминов.",
  },
];

const faq = [
  {
    question: "Можно ли прийти без подготовки?",
    answer: "Да, первая тренировка нужна как раз для оценки уровня и выбора безопасной нагрузки.",
  },
  {
    question: "Подойдет ли подростку 12-16 лет?",
    answer: "Да, программа строится с учетом возраста, цели, режима и текущей физической формы.",
  },
  {
    question: "Как записаться?",
    answer: "Оставьте заявку в форме, после этого тренер связывается и уточняет удобное время.",
  },
];

export async function sendLeadToTelegram(lead: FitnessLead) {
  void lead;
  await new Promise((resolve) => setTimeout(resolve, 350));
  return { ok: true };
}

export function FitnessDemoLanding() {
  const [lead, setLead] = useState<FitnessLead>(initialLead);
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

  function updateField(field: keyof FitnessLead, value: string) {
    setLead((currentLead) => ({ ...currentLead, [field]: value }));
    if (isSent) {
      setIsSent(false);
    }
  }

  return (
    <section className="bg-neutral-950 px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-cyan-200">
            Встроенный демо-лендинг
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Как мог бы выглядеть сайт фитнес-тренера
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
            Ниже находится рабочий фрагмент лендинга: с услугами, ценами,
            отзывами, FAQ и демо-формой заявки.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#07100d] shadow-2xl shadow-emerald-950/40">
          <DemoHero />
          <DemoServices />
          <DemoPrices />
          <DemoAdvantages />
          <DemoReviews />
          <DemoFaq />
          <DemoLeadForm
            lead={lead}
            isSent={isSent}
            isSending={isSending}
            onSubmit={handleSubmit}
            onUpdate={updateField}
          />
        </div>
      </div>
    </section>
  );
}

function DemoHero() {
  return (
    <section className="grid gap-8 border-b border-white/10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:px-10 lg:py-16">
      <div>
        <p className="mb-4 inline-flex rounded-md border border-emerald-200/30 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-100">
          Тренировки для семьи и подростков
        </p>
        <h3 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
          Начните тренироваться спокойно, понятно и без перегруза
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
          Персональный тренер помогает выбрать цель, адаптировать нагрузку и
          поддерживать регулярность. Записаться можно за одну минуту.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="#fitness-lead-form"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-emerald-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-cyan-300"
          >
            Записаться на тренировку
          </a>
          <a
            href="https://t.me/galiullin_digital"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-200/70"
          >
            Telegram
          </a>
        </div>
      </div>
      <div className="grid content-between gap-4 rounded-lg border border-white/10 bg-neutral-950/70 p-5">
        <div className="grid grid-cols-2 gap-3">
          <Stat value="30+" label="семейных стартов" />
          <Stat value="4.9" label="оценка клиентов" />
          <Stat value="45 мин" label="пробная тренировка" />
          <Stat value="1 день" label="до первой записи" />
        </div>
        <div className="rounded-lg bg-emerald-300 p-5 text-neutral-950">
          <p className="text-sm font-bold uppercase">Фокус</p>
          <p className="mt-2 text-2xl font-black">Заявка вместо долгой переписки</p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm leading-5 text-neutral-400">{label}</p>
    </div>
  );
}

function DemoServices() {
  return (
    <section className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <DemoHeading
        title="Услуги"
        text="Клиент сразу видит, какие форматы есть и кому они подходят."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-lg bg-white/[0.05] p-5">
            <h4 className="text-xl font-bold text-white">{service.title}</h4>
            <p className="mt-3 leading-7 text-neutral-300">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoPrices() {
  return (
    <section className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <DemoHeading title="Цены" text="Три простых варианта без перегруза." />
      <div className="grid gap-4 md:grid-cols-3">
        {prices.map((price) => (
          <article
            key={price.title}
            className="rounded-lg border border-white/10 bg-neutral-950/70 p-5"
          >
            <p className="text-sm font-semibold uppercase text-cyan-200">
              {price.title}
            </p>
            <p className="mt-3 text-3xl font-black text-white">{price.price}</p>
            <p className="mt-3 leading-7 text-neutral-300">{price.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoAdvantages() {
  return (
    <section className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <DemoHeading
        title="Преимущества"
        text="Лендинг отвечает на сомнения до первого сообщения."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <div
            key={advantage}
            className="rounded-md border border-emerald-200/20 bg-emerald-300/10 px-4 py-4 font-bold text-white"
          >
            {advantage}
          </div>
        ))}
      </div>
    </section>
  );
}

function DemoReviews() {
  return (
    <section className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <DemoHeading title="Отзывы" text="Социальное доказательство рядом с записью." />
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-lg bg-white/[0.05] p-5">
            <p className="text-lg leading-8 text-neutral-100">“{review.text}”</p>
            <p className="mt-4 text-sm font-semibold text-emerald-200">
              {review.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoFaq() {
  return (
    <section className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-10">
      <DemoHeading title="FAQ" text="Ответы на вопросы, которые обычно уходят в личку." />
      <div className="grid gap-3">
        {faq.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-white/10 bg-neutral-950/70 p-5"
          >
            <summary className="cursor-pointer text-lg font-bold text-white">
              {item.question}
            </summary>
            <p className="mt-3 leading-7 text-neutral-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

type DemoLeadFormProps = {
  lead: FitnessLead;
  isSent: boolean;
  isSending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onUpdate: (field: keyof FitnessLead, value: string) => void;
};

function DemoLeadForm({
  lead,
  isSent,
  isSending,
  onSubmit,
  onUpdate,
}: DemoLeadFormProps) {
  return (
    <section
      id="fitness-lead-form"
      className="scroll-mt-28 px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-200">
            Форма заявки
          </p>
          <h3 className="text-3xl font-bold text-white">
            Записаться на тренировку
          </h3>
          <p className="mt-4 leading-7 text-neutral-300">
            Форма собирает данные в одном формате. В реальном проекте эта
            заявка отправляется тренеру в Telegram.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://t.me/galiullin_digital"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-cyan-200/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Telegram
            </a>
            <a
              href="https://wa.me/79990000000"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-200/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <Field label="Имя">
            <input
              name="name"
              data-testid="fitness-name"
              value={lead.name}
              onChange={(event) => onUpdate("name", event.target.value)}
              required
              className="field-input"
              placeholder="Алексей"
            />
          </Field>
          <Field label="Телефон">
            <input
              name="phone"
              data-testid="fitness-phone"
              value={lead.phone}
              onChange={(event) => onUpdate("phone", event.target.value)}
              required
              type="tel"
              className="field-input"
              placeholder="+7 999 000-00-00"
            />
          </Field>
          <Field label="Цель тренировок">
            <input
              name="goal"
              data-testid="fitness-goal"
              value={lead.goal}
              onChange={(event) => onUpdate("goal", event.target.value)}
              required
              className="field-input"
              placeholder="Семейная активность, сила, осанка"
            />
          </Field>
          <Field label="Удобное время">
            <input
              name="time"
              data-testid="fitness-time"
              value={lead.time}
              onChange={(event) => onUpdate("time", event.target.value)}
              required
              className="field-input"
              placeholder="Вечер будни или суббота"
            />
          </Field>
          <Field label="Комментарий">
            <textarea
              name="comment"
              data-testid="fitness-comment"
              value={lead.comment}
              onChange={(event) => onUpdate("comment", event.target.value)}
              className="field-input min-h-28 resize-y"
              placeholder="Возраст, опыт, вопросы по тренировкам"
            />
          </Field>
          <button
            type="submit"
            disabled={isSending}
            className="min-h-12 rounded-md bg-emerald-300 px-5 py-3 text-sm font-black text-neutral-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Отправка..." : "Отправить заявку"}
          </button>
          {isSent ? (
            <p
              role="status"
              className="rounded-md border border-emerald-200/40 bg-emerald-300/10 px-4 py-3 font-semibold text-emerald-100"
            >
              Заявка отправлена
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-neutral-200">
      {label}
      {children}
    </label>
  );
}

function DemoHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-7 max-w-2xl">
      <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
      <p className="mt-3 leading-7 text-neutral-300">{text}</p>
    </div>
  );
}
