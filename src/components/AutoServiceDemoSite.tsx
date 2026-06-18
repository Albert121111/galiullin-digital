"use client";

import Image from "next/image";
import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { publicAsset } from "@/lib/assets";

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
    image: "/auto-diagnostics.jpg",
    alt: "Диагностика автомобиля в сервисе",
    tag: "точная причина",
  },
  {
    title: "Ремонт и ТО",
    text: "Плановое обслуживание, масла, фильтры, колодки и базовый ремонт.",
    image: "/auto-engine-repair.jpg",
    alt: "Механик ремонтирует автомобиль под капотом",
    tag: "ремонт без хаоса",
  },
  {
    title: "Шиномонтаж",
    text: "Сезонная смена шин, балансировка, ремонт проколов и хранение колес.",
    image: "/auto-tire-service.jpg",
    alt: "Шиномонтаж и работа с колесом",
    tag: "сезонная запись",
  },
  {
    title: "Детейлинг",
    text: "Полировка, химчистка, защитные составы и подготовка авто к продаже.",
    image: "/auto-detailing.jpg",
    alt: "Полировка кузова автомобиля",
    tag: "видимый результат",
  },
];

const popularWorks = [
  {
    work: "Диагностика ходовой",
    price: "от 1 800 ₽",
    time: "40-60 мин",
    warranty: "акт осмотра",
    description: "Проверка подвески, люфтов, тормозов и базовых узлов.",
  },
  {
    work: "Замена масла и фильтра",
    price: "от 2 300 ₽",
    time: "30-45 мин",
    warranty: "гарантия 14 дней",
    description: "Подбор масла, замена фильтра и контроль уровня.",
  },
  {
    work: "Шиномонтаж R16",
    price: "от 3 200 ₽",
    time: "45-70 мин",
    warranty: "балансировка",
    description: "Снятие, установка, балансировка и проверка давления.",
  },
  {
    work: "Комплексная химчистка",
    price: "от 6 500 ₽",
    time: "от 4 часов",
    warranty: "фотоотчет",
    description: "Салон, пластик, ткань, ковры и финальная сушка.",
  },
];

const advantages = [
  {
    title: "Прозрачная запись",
    text: "Клиент сразу оставляет авто, услугу и удобное время.",
  },
  {
    title: "Предварительный расчет",
    text: "Калькулятор показывает порядок бюджета до звонка.",
  },
  {
    title: "Фото процесса",
    text: "Визуальные блоки показывают сервис, оборудование и подход.",
  },
  {
    title: "Структурированные заявки",
    text: "В реальном проекте обращения уходят администратору.",
  },
];

const steps = [
  "Клиент выбирает услугу",
  "Получает примерную цену",
  "Оставляет заявку",
  "Администратор подтверждает время",
];

const processPhotos = [
  {
    title: "Диагностика",
    image: "/auto-diagnostics.jpg",
    alt: "Механик диагностирует автомобиль",
  },
  {
    title: "Ремонт",
    image: "/auto-engine-repair.jpg",
    alt: "Ремонт автомобиля в сервисе",
  },
  {
    title: "Шиномонтаж",
    image: "/auto-tire-service.jpg",
    alt: "Работа с колесом на шиномонтаже",
  },
  {
    title: "Детейлинг",
    image: "/auto-detailing.jpg",
    alt: "Детейлинг и полировка автомобиля",
  },
];

const reviews = [
  {
    name: "Дмитрий",
    car: "Kia Sportage",
    service: "диагностика ходовой",
    text: "Удобно, что можно заранее выбрать услугу и понять примерный порядок цены. Приехал уже с понятной записью.",
    image: "/auto-diagnostics.jpg",
    alt: "Диагностика автомобиля для отзыва",
  },
  {
    name: "Олег",
    car: "Toyota Camry",
    service: "замена масла",
    text: "Записался без звонка. Администратор уже знал машину, услугу и удобное время, поэтому все прошло быстро.",
    image: "/auto-engine-repair.jpg",
    alt: "Ремонт автомобиля для отзыва",
  },
  {
    name: "Алексей",
    car: "BMW X5",
    service: "детейлинг",
    text: "Сайт сразу показывает уровень сервиса. Фото процесса и нормальный прайс сильно добавляют доверия.",
    image: "/auto-detailing.jpg",
    alt: "Детейлинг автомобиля для отзыва",
  },
];

const faq = [
  {
    question: "Цена в калькуляторе окончательная?",
    answer:
      "Нет, это примерная оценка. Точная стоимость зависит от состояния авто, деталей и объема работ.",
  },
  {
    question: "Можно ли записаться на сегодня?",
    answer:
      "Да, в калькуляторе есть срочность. Администратор подтвердит ближайшее доступное время.",
  },
  {
    question: "Куда приходит заявка?",
    answer:
      "В реальном проекте заявка может уходить в CRM или таблицу администратора.",
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
    setCalculator(
      (current) =>
        ({
          ...current,
          [field]: value,
        }) as CalculatorState,
    );
  }

  return (
    <section className="bg-[#07090d] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Встроенный демо-сайт автосервиса
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Как может выглядеть сайт AutoPro Service
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Ниже расположен полноценный демо-лендинг: услуги, популярные
            работы, калькулятор, фото процесса, этапы, отзывы, форма заявки и
            FAQ.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1117] shadow-[0_34px_110px_rgba(0,0,0,0.42)]">
        <DemoHero />
        <DemoServices />
        <DemoPopularWorks />
        <CostCalculator
          calculator={calculator}
          estimatedPrice={estimatedPrice}
          onUpdate={updateCalculator}
        />
        <DemoAdvantages />
        <DemoProcessPhotos />
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
    <section className="grid gap-8 border-b border-white/10 bg-[#0a0d12] px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.88fr] lg:px-10 lg:py-16">
      <div className="flex flex-col justify-center">
        <p className="mb-4 inline-flex w-fit rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-sm font-bold text-orange-200">
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
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-black text-neutral-950 shadow-[0_16px_34px_rgba(251,146,60,0.22)] transition hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-orange-300/35"
          >
            Записаться на сервис
          </a>
          <a
            href="#auto-cost-calculator"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-sky-200/70 focus:outline-none focus:ring-4 focus:ring-sky-300/20"
          >
            Рассчитать стоимость
          </a>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <AutoStat value="4" label="направления услуг" />
          <AutoStat value="TG" label="готово к отправке" />
        </div>
      </div>
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10151d] shadow-[0_22px_65px_rgba(0,0,0,0.32)]">
        <Image
          src={publicAsset("/auto-service-bay.jpg")}
          alt="Современный автосервис с автомобилем на подъемнике"
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/12 bg-black/68 p-5 backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
            Быстрая заявка
          </p>
          <p className="mt-2 text-lg font-bold text-white">
            Авто, услуга и удобное время в одном сообщении.
          </p>
        </div>
      </div>
    </section>
  );
}

function AutoStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
      <p className="text-3xl font-black text-white">{value}</p>
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
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] shadow-[0_16px_48px_rgba(0,0,0,0.24)]"
          >
            <div className="relative h-44">
              <Image
                src={publicAsset(service.image)}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="mb-3 inline-flex rounded-full bg-orange-400/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-200">
                {service.tag}
              </p>
              <h4 className="text-xl font-bold text-white">{service.title}</h4>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </div>
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
      text="Прайс похож на реальную таблицу сервиса: есть цена, время, гарантия и короткое описание."
      tone="dark"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {popularWorks.map((work) => (
          <article
            key={work.work}
            className="rounded-[1.35rem] border border-white/10 bg-[#090b10] p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-xl font-bold text-white">{work.work}</h4>
                <p className="mt-2 leading-6 text-slate-300">
                  {work.description}
                </p>
              </div>
              <p className="shrink-0 rounded-full bg-orange-400 px-4 py-2 text-sm font-black text-neutral-950">
                {work.price}
              </p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <span className="rounded-2xl bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-200">
                Время: {work.time}
              </span>
              <span className="rounded-2xl bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-200">
                {work.warranty}
              </span>
            </div>
          </article>
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
      className="scroll-mt-28 border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_34%),#10151d] px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-200">
            Калькулятор стоимости
          </p>
          <h3 className="text-3xl font-bold text-white">
            Примерная цена до заявки
          </h3>
          <p className="mt-4 leading-7 text-slate-300">
            Клиент выбирает тип работы, автомобиль и срочность. Это помогает
            быстро понять порядок бюджета и оставить более точную заявку.
          </p>
          <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-white/10">
            <Image
              src={publicAsset("/auto-brake-parts.jpg")}
              alt="Автомобильные детали и инструмент"
              width={760}
              height={500}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="h-56 w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.6rem] border border-sky-300/18 bg-black/38 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.30)]">
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

          <div className="rounded-[1.35rem] bg-orange-400 p-6 text-neutral-950">
            <p className="text-sm font-black uppercase tracking-[0.14em]">
              Примерная стоимость
            </p>
            <p
              data-testid="auto-estimated-price"
              className="mt-2 text-4xl font-black sm:text-5xl"
            >
              от {estimatedPrice.toLocaleString("ru-RU")} ₽
            </p>
          </div>
          <p className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-6 text-slate-300">
            Это предварительная оценка, точная стоимость зависит от состояния
            авто.
          </p>
        </div>
      </div>
    </section>
  );
}

function DemoAdvantages() {
  return (
    <AutoDemoSection
      title="Преимущества"
      text="Короткие аргументы показывают, почему сервису можно доверять еще до визита."
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="rounded-[1.35rem] border border-orange-300/18 bg-white/[0.045] p-5"
            >
              <div className="mb-5 h-2 w-12 rounded-full bg-orange-400" />
              <h4 className="text-lg font-bold text-white">
                {advantage.title}
              </h4>
              <p className="mt-2 leading-6 text-slate-300">{advantage.text}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { image: "/auto-service-bay.jpg", alt: "Интерьер автосервиса" },
            { image: "/auto-detailing.jpg", alt: "Детейлинг автомобиля" },
          ].map((item) => (
            <div
              key={item.image}
              className="relative min-h-48 overflow-hidden rounded-[1.35rem] border border-white/10"
            >
              <Image
                src={publicAsset(item.image)}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </AutoDemoSection>
  );
}

function DemoProcessPhotos() {
  return (
    <AutoDemoSection
      title="Фото процесса"
      text="Секция показывает, что сервис не выглядит абстрактно: клиент видит реальные сценарии работ."
      tone="dark"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processPhotos.map((photo) => (
          <article
            key={photo.title}
            className="group relative min-h-64 overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <Image
              src={publicAsset(photo.image)}
              alt={photo.alt}
              fill
              loading="eager"
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
    </AutoDemoSection>
  );
}

function DemoSteps() {
  return (
    <AutoDemoSection
      title="Этапы работы"
      text="Клиент видит понятный процесс от выбора услуги до подтверждения визита."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step}
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-300 text-sm font-black text-neutral-950">
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
      text="Карточки выглядят реалистичнее, когда рядом есть машина, услуга и визуальная метка."
      tone="dark"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-[1.5rem] border border-white/10 bg-[#090b10] p-5"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={publicAsset(review.image)}
                  alt={review.alt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-orange-300">{review.car}</p>
              </div>
            </div>
            <p className="mb-4 inline-flex rounded-full bg-white/[0.055] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
              {review.service}
            </p>
            <p className="text-base leading-7 text-slate-200">
              “{review.text}”
            </p>
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

function LeadForm({
  lead,
  isSent,
  isSending,
  onSubmit,
  onUpdate,
}: LeadFormProps) {
  return (
    <section
      id="auto-lead-form"
      className="scroll-mt-28 border-b border-white/10 bg-[#0a0d12] px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
            Форма заявки
          </p>
          <h3 className="text-3xl font-bold text-white">
            Записаться на сервис без звонка
          </h3>
          <p className="mt-4 leading-7 text-slate-300">
            Оставьте данные об автомобиле, услуге и удобном времени.
            Администратор получит структурированную заявку и подтвердит запись.
          </p>
          <div className="mt-6 grid gap-3">
            {["Марка и модель авто", "Услуга и удобное время", "Комментарий по проблеме"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/24 px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  {item}
                </div>
              ),
            )}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://t.me/galiullin_digital"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-sky-200/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-sky-300/20"
            >
              Связаться
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-orange-200/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-orange-300/20"
            >
              Обсудить проект
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-4 rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 sm:p-6"
        >
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
            className="min-h-12 rounded-full bg-orange-400 px-5 py-3 text-sm font-black text-neutral-950 transition hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-orange-300/35 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Отправка..." : "Отправить заявку"}
          </button>
          {isSent ? (
            <p
              role="status"
              aria-live="polite"
              className="rounded-2xl border border-orange-300/45 bg-orange-400/10 px-4 py-3 font-semibold text-orange-100"
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
            className="rounded-[1.25rem] border border-white/10 bg-[#090b10] p-5"
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
