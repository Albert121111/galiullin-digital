"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

type AutoLead = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  service: string;
  time: string;
  comment: string;
};

type CalculatorState = {
  service: string;
  carType: "Легковой" | "Кроссовер" | "Внедорожник";
  urgency: "Обычная" | "Сегодня" | "Срочно";
};

const initialLead: AutoLead = {
  name: "",
  phone: "",
  brand: "",
  model: "",
  service: "",
  time: "",
  comment: "",
};

const servicePrices: Record<string, number> = {
  "Диагностика ходовой": 1800,
  "Замена масла": 2300,
  "Шиномонтаж": 3200,
  "Комплексный детейлинг": 6500,
};

const carTypeMultipliers: Record<CalculatorState["carType"], number> = {
  Легковой: 1,
  Кроссовер: 1.18,
  Внедорожник: 1.35,
};

const urgencyMultipliers: Record<CalculatorState["urgency"], number> = {
  Обычная: 1,
  Сегодня: 1.15,
  Срочно: 1.35,
};

const services = [
  {
    title: "Диагностика",
    text: "Проверка ходовой, тормозов, электроники и ошибок перед ремонтом.",
  },
  {
    title: "Ремонт и ТО",
    text: "Плановое обслуживание, масла, фильтры, колодки и базовый ремонт.",
  },
  {
    title: "Шиномонтаж",
    text: "Сезонная смена шин, балансировка, ремонт проколов и хранение колес.",
  },
  {
    title: "Детейлинг",
    text: "Полировка, химчистка, защитные составы и подготовка авто к продаже.",
  },
];

const popularWorks = [
  ["Диагностика ходовой", "от 1 800 ₽"],
  ["Замена масла и фильтра", "от 2 300 ₽"],
  ["Шиномонтаж R16", "от 3 200 ₽"],
  ["Комплексная химчистка", "от 6 500 ₽"],
];

const advantages = [
  "Прозрачная запись",
  "Предварительный расчет",
  "Фотоотчет по работам",
  "Напоминание о визите",
];

const steps = [
  "Клиент выбирает услугу",
  "Получает примерную цену",
  "Оставляет заявку",
  "Администратор подтверждает время",
];

const reviews = [
  {
    name: "Дмитрий, Kia Sportage",
    text: "Удобно, что можно заранее выбрать услугу и понять примерный порядок цены.",
  },
  {
    name: "Олег, Toyota Camry",
    text: "Записался без звонка, администратор уже знал машину, услугу и удобное время.",
  },
];

const faq = [
  {
    question: "Цена в калькуляторе окончательная?",
    answer: "Нет, это примерная оценка. Точная стоимость зависит от состояния авто, деталей и объема работ.",
  },
  {
    question: "Можно ли записаться на сегодня?",
    answer: "Да, в калькуляторе есть срочность. Администратор подтвердит ближайшее доступное время.",
  },
  {
    question: "Куда приходит заявка?",
    answer: "В реальном проекте заявка может уходить в Telegram, CRM или таблицу администратора.",
  },
];

export async function sendLeadToTelegram(lead: AutoLead) {
  void lead;
  await new Promise((resolve) => setTimeout(resolve, 350));
  return { ok: true };
}

export function AutoServiceDemoSite() {
  const [lead, setLead] = useState<AutoLead>(initialLead);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [calculator, setCalculator] = useState<CalculatorState>({
    service: "Диагностика ходовой",
    carType: "Легковой",
    urgency: "Обычная",
  });

  const estimatedPrice = useMemo(() => {
    const base = servicePrices[calculator.service] ?? 0;
    const total =
      base *
      carTypeMultipliers[calculator.carType] *
      urgencyMultipliers[calculator.urgency];

    return Math.round(total / 100) * 100;
  }, [calculator]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    await sendLeadToTelegram(lead);
    setLead(initialLead);
    setIsSent(true);
    setIsSending(false);
  }

  function updateLead(field: keyof AutoLead, value: string) {
    setLead((currentLead) => ({ ...currentLead, [field]: value }));
    if (isSent) {
      setIsSent(false);
    }
  }

  function updateCalculator(field: keyof CalculatorState, value: string) {
    setCalculator((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <section className="bg-[#08090b] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-orange-300">
            Встроенный демо-сайт автосервиса
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Как может выглядеть сайт AutoPro Service
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Ниже расположен полноценный демо-лендинг: услуги, популярные работы,
            калькулятор, этапы, отзывы, форма заявки и FAQ.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/35">
        <DemoHero />
        <DemoServices />
        <DemoPopularWorks />
        <CostCalculator
          calculator={calculator}
          estimatedPrice={estimatedPrice}
          onUpdate={updateCalculator}
        />
        <DemoAdvantages />
        <DemoSteps />
        <DemoReviews />
        <LeadForm
          lead={lead}
          isSent={isSent}
          isSending={isSending}
          onSubmit={handleSubmit}
          onUpdate={updateLead}
        />
        <DemoFaq />
      </div>
    </section>
  );
}

function DemoHero() {
  return (
    <section className="grid gap-8 border-b border-white/10 bg-[#0a0d12] px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:px-10 lg:py-16">
      <div>
        <p className="mb-4 inline-flex rounded-md border border-orange-300/30 bg-orange-400/10 px-3 py-2 text-sm font-bold text-orange-200">
          Ремонт, ТО, шины и детейлинг
        </p>
        <h3 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
          Запишитесь на сервис без звонка и долгих уточнений
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Выберите услугу, тип автомобиля и срочность, получите примерный расчет
          и оставьте заявку администратору.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="#auto-lead-form"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-400 px-6 py-3 text-sm font-black text-neutral-950 transition hover:bg-sky-300"
          >
            Записаться на сервис
          </a>
          <a
            href="#auto-cost-calculator"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-sky-200/70"
          >
            Рассчитать стоимость
          </a>
        </div>
      </div>
      <div className="grid gap-4 rounded-lg border border-white/10 bg-black/35 p-5">
        <div className="grid grid-cols-2 gap-3">
          <AutoStat value="4" label="направления услуг" />
          <AutoStat value="15 мин" label="до подтверждения" />
          <AutoStat value="24/7" label="форма заявки" />
          <AutoStat value="TG" label="готово к отправке" />
        </div>
        <div className="rounded-lg bg-orange-400 p-5 text-neutral-950">
          <p className="text-sm font-black uppercase">Фокус</p>
          <p className="mt-2 text-2xl font-black">Расчет и заявка в одном сценарии</p>
        </div>
      </div>
    </section>
  );
}

function AutoStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm leading-5 text-slate-400">{label}</p>
    </div>
  );
}

function DemoServices() {
  return (
    <AutoDemoSection
      title="Услуги"
      text="Клиент сразу видит, чем занимается сервис, и не уходит искать ответы в мессенджер."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="rounded-lg bg-white/[0.04] p-5">
            <h4 className="text-xl font-bold text-white">{service.title}</h4>
            <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
          </article>
        ))}
      </div>
    </AutoDemoSection>
  );
}

function DemoPopularWorks() {
  return (
    <AutoDemoSection
      title="Популярные работы"
      text="Таблица дает быстрый ориентир по частым услугам и снижает количество уточняющих звонков."
      tone="dark"
    >
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#090b10]">
        {popularWorks.map(([work, price]) => (
          <div
            key={work}
            className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <p className="font-semibold text-white">{work}</p>
            <p className="font-black text-orange-300">{price}</p>
          </div>
        ))}
      </div>
    </AutoDemoSection>
  );
}

type CostCalculatorProps = {
  calculator: CalculatorState;
  estimatedPrice: number;
  onUpdate: (field: keyof CalculatorState, value: string) => void;
};

function CostCalculator({
  calculator,
  estimatedPrice,
  onUpdate,
}: CostCalculatorProps) {
  return (
    <section
      id="auto-cost-calculator"
      className="scroll-mt-28 border-b border-white/10 bg-[#10151d] px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-sky-200">
            Калькулятор стоимости
          </p>
          <h3 className="text-3xl font-bold text-white">
            Примерная цена до заявки
          </h3>
          <p className="mt-4 leading-7 text-slate-300">
            Клиент выбирает тип работы, автомобиль и срочность. Это не заменяет
            диагностику, но помогает быстро понять порядок бюджета.
          </p>
        </div>

        <div className="grid gap-4 rounded-lg border border-white/10 bg-black/28 p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <AutoField label="Тип услуги">
              <select
                data-testid="auto-calc-service"
                value={calculator.service}
                onChange={(event) => onUpdate("service", event.target.value)}
                className="auto-field-input"
              >
                {Object.keys(servicePrices).map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </AutoField>
            <AutoField label="Тип авто">
              <select
                data-testid="auto-calc-car-type"
                value={calculator.carType}
                onChange={(event) => onUpdate("carType", event.target.value)}
                className="auto-field-input"
              >
                <option>Легковой</option>
                <option>Кроссовер</option>
                <option>Внедорожник</option>
              </select>
            </AutoField>
            <AutoField label="Срочность">
              <select
                data-testid="auto-calc-urgency"
                value={calculator.urgency}
                onChange={(event) => onUpdate("urgency", event.target.value)}
                className="auto-field-input"
              >
                <option>Обычная</option>
                <option>Сегодня</option>
                <option>Срочно</option>
              </select>
            </AutoField>
          </div>

          <div className="rounded-lg bg-orange-400 p-5 text-neutral-950">
            <p className="text-sm font-black uppercase">Примерная стоимость</p>
            <p data-testid="auto-estimated-price" className="mt-2 text-4xl font-black">
              от {estimatedPrice.toLocaleString("ru-RU")} ₽
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoAdvantages() {
  return (
    <AutoDemoSection
      title="Преимущества"
      text="Короткие аргументы показывают, почему сервису можно доверять."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage) => (
          <div
            key={advantage}
            className="rounded-md border border-orange-300/20 bg-white/[0.04] px-4 py-4 font-bold text-white"
          >
            {advantage}
          </div>
        ))}
      </div>
    </AutoDemoSection>
  );
}

function DemoSteps() {
  return (
    <AutoDemoSection
      title="Этапы работы"
      text="Клиент видит понятный процесс от выбора услуги до подтверждения визита."
      tone="dark"
    >
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step}
            className="rounded-lg border border-white/10 bg-[#090b10] p-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-300 text-sm font-black text-neutral-950">
              {index + 1}
            </span>
            <p className="mt-5 font-bold text-white">{step}</p>
          </article>
        ))}
      </div>
    </AutoDemoSection>
  );
}

function DemoReviews() {
  return (
    <AutoDemoSection
      title="Отзывы"
      text="Отзывы закрывают часть сомнений перед первой записью."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-lg bg-white/[0.04] p-5">
            <p className="text-lg leading-8 text-slate-100">“{review.text}”</p>
            <p className="mt-4 text-sm font-bold text-orange-300">{review.name}</p>
          </article>
        ))}
      </div>
    </AutoDemoSection>
  );
}

type LeadFormProps = {
  lead: AutoLead;
  isSent: boolean;
  isSending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onUpdate: (field: keyof AutoLead, value: string) => void;
};

function LeadForm({ lead, isSent, isSending, onSubmit, onUpdate }: LeadFormProps) {
  return (
    <section
      id="auto-lead-form"
      className="scroll-mt-28 border-b border-white/10 bg-[#0a0d12] px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-orange-300">
            Форма заявки
          </p>
          <h3 className="text-3xl font-bold text-white">Записаться на сервис</h3>
          <p className="mt-4 leading-7 text-slate-300">
            Форма собирает данные о машине, услуге и удобном времени. В рабочем
            проекте заявка отправляется в Telegram администратору.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://t.me/galiullin_digital"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-sky-200/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Telegram
            </a>
            <a
              href="https://wa.me/79990000000"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-orange-200/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <AutoField label="Имя">
            <input
              name="name"
              data-testid="auto-name"
              value={lead.name}
              onChange={(event) => onUpdate("name", event.target.value)}
              required
              className="auto-field-input"
              placeholder="Иван"
            />
          </AutoField>
          <AutoField label="Телефон">
            <input
              name="phone"
              data-testid="auto-phone"
              value={lead.phone}
              onChange={(event) => onUpdate("phone", event.target.value)}
              required
              type="tel"
              className="auto-field-input"
              placeholder="+7 999 000-00-00"
            />
          </AutoField>
          <div className="grid gap-4 sm:grid-cols-2">
            <AutoField label="Марка автомобиля">
              <input
                name="brand"
                data-testid="auto-brand"
                value={lead.brand}
                onChange={(event) => onUpdate("brand", event.target.value)}
                required
                className="auto-field-input"
                placeholder="Toyota"
              />
            </AutoField>
            <AutoField label="Модель автомобиля">
              <input
                name="model"
                data-testid="auto-model"
                value={lead.model}
                onChange={(event) => onUpdate("model", event.target.value)}
                required
                className="auto-field-input"
                placeholder="Camry"
              />
            </AutoField>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <AutoField label="Услуга">
              <select
                name="service"
                data-testid="auto-service"
                value={lead.service}
                onChange={(event) => onUpdate("service", event.target.value)}
                required
                className="auto-field-input"
              >
                <option value="">Выберите услугу</option>
                {Object.keys(servicePrices).map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </AutoField>
            <AutoField label="Удобное время">
              <input
                name="time"
                data-testid="auto-time"
                value={lead.time}
                onChange={(event) => onUpdate("time", event.target.value)}
                required
                className="auto-field-input"
                placeholder="Сегодня после 17:00"
              />
            </AutoField>
          </div>
          <AutoField label="Комментарий">
            <textarea
              name="comment"
              data-testid="auto-comment"
              value={lead.comment}
              onChange={(event) => onUpdate("comment", event.target.value)}
              className="auto-field-input min-h-28 resize-y"
              placeholder="Опишите проблему, пробег, срочность или вопросы"
            />
          </AutoField>
          <button
            type="submit"
            disabled={isSending}
            className="min-h-12 rounded-md bg-orange-400 px-5 py-3 text-sm font-black text-neutral-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Отправка..." : "Отправить заявку"}
          </button>
          {isSent ? (
            <p
              role="status"
              className="rounded-md border border-orange-300/45 bg-orange-400/10 px-4 py-3 font-semibold text-orange-100"
            >
              Заявка отправлена
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function DemoFaq() {
  return (
    <AutoDemoSection
      title="FAQ"
      text="Ответы закрывают вопросы до звонка администратору."
      tone="dark"
    >
      <div className="grid gap-3">
        {faq.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-white/10 bg-[#090b10] p-5"
          >
            <summary className="cursor-pointer text-lg font-bold text-white">
              {item.question}
            </summary>
            <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </AutoDemoSection>
  );
}

function AutoField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      {children}
    </label>
  );
}

function AutoDemoSection({
  id,
  title,
  text,
  children,
  tone = "base",
}: {
  id?: string;
  title: string;
  text: string;
  children: ReactNode;
  tone?: "base" | "dark";
}) {
  return (
    <section
      id={id}
      className={`border-b border-white/10 px-5 py-12 sm:px-8 lg:px-10 ${
        tone === "dark" ? "bg-[#0a0d12]" : "bg-[#0d1117]"
      }`}
    >
      <div className="mb-7 max-w-2xl">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{text}</p>
      </div>
      {children}
    </section>
  );
}
