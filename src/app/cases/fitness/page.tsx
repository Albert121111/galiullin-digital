import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { FitnessDemoLanding } from "@/components/FitnessDemoLanding";

export const metadata: Metadata = {
  title: "FamilyFit Coach - демо-кейс",
  description:
    "Демо-кейс лендинга для фитнес-тренера с услугами, ценами, отзывами, FAQ и формой заявки.",
};

const businessProblems = [
  "У тренера нет удобной страницы, куда можно отправлять клиентов из рекламы и мессенджеров.",
  "Клиенты пишут в личные сообщения и задают одни и те же вопросы про формат, цены и расписание.",
  "Нет понятного списка услуг и цен, поэтому человеку сложнее быстро принять решение.",
  "Заявки легко теряются среди переписок, голосовых сообщений и повторных уточнений.",
];

const deliveredItems = [
  "Адаптивный лендинг",
  "Блок услуг",
  "Блок цен",
  "Отзывы",
  "FAQ",
  "Форма заявки",
  "Подготовка к отправке заявок в Telegram",
];

const siteFunctions = [
  "Запись на тренировку",
  "Выбор цели тренировок",
  "Удобное время",
  "Кнопки Telegram/WhatsApp",
  "Адаптация под телефон",
  "Структура под рекламу",
];

const businessResults = [
  "Клиент быстрее понимает услуги и выбирает подходящий формат тренировки.",
  "Тренер получает структурированные заявки с именем, телефоном, целью и удобным временем.",
  "Меньше ручных ответов на одинаковые вопросы перед первой консультацией.",
  "Выше доверие к специалисту за счет аккуратной упаковки, отзывов и понятного сценария записи.",
];

export default function FitnessCasePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/familyfit-coach.png"
          alt="Демо-интерфейс лендинга FamilyFit Coach"
          width={1400}
          height={920}
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-46"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/42" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-neutral-950 to-transparent" />

        <div className="mx-auto grid min-h-[570px] max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-emerald-200/30 bg-neutral-950/60 px-3 py-2 text-sm font-semibold uppercase text-emerald-100">
              Фитнес-тренер / семейные тренировки
            </p>
            <h1 className="text-5xl font-bold leading-[1.04] text-white sm:text-7xl">
              FamilyFit Coach
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-200">
              Лендинг для фитнес-тренера с формой записи
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#fitness-lead-form">
                Посмотреть форму заявки
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Обсудить похожий проект
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-neutral-950/72 p-5 shadow-2xl shadow-emerald-950/40 backdrop-blur">
            <p className="text-sm font-semibold uppercase text-cyan-200">
              Цель проекта
            </p>
            <p className="mt-4 text-2xl font-bold leading-tight text-white">
              Показать, как сайт помогает фитнес-тренеру получать заявки на
              тренировки.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-neutral-300 sm:grid-cols-2">
              <span className="rounded-md border border-white/10 px-3 py-3">
                Ниша: фитнес и подростковые тренировки
              </span>
              <span className="rounded-md border border-white/10 px-3 py-3">
                Формат: демо-лендинг под рекламу
              </span>
            </div>
          </div>
        </div>
      </section>

      <CaseSection
        eyebrow="Задача бизнеса"
        title="Навести порядок в коммуникации до первой тренировки"
        description="До сайта клиентам приходилось писать тренеру напрямую, уточнять базовые условия и ждать ответа. Лендинг берет на себя первичное объяснение и собирает заявку в понятном виде."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessProblems.map((problem) => (
            <article
              key={problem}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="leading-7 text-neutral-200">{problem}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Что было сделано"
        title="Собран лендинг, который объясняет услугу и ведет к заявке"
        description="Страница показывает форматы тренировок, цены, отзывы, ответы на вопросы и форму записи, которую дальше можно подключить к Telegram."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deliveredItems.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-emerald-200/20 bg-neutral-950/75 px-4 py-4 font-semibold text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Функции сайта"
        title="Все важное для заявки собрано на одной странице"
        description="Посетитель видит формат работы, выбирает цель, оставляет контакт и может перейти в удобный мессенджер."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteFunctions.map((feature) => (
            <article
              key={feature}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/50"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-emerald-300" />
              <h3 className="text-xl font-bold text-white">{feature}</h3>
            </article>
          ))}
        </div>
      </CaseSection>

      <FitnessDemoLanding />

      <CaseSection
        eyebrow="Результат для бизнеса"
        title="Тренер получает больше порядка до первого контакта"
        description="Даже демо-версия показывает, как простой лендинг снижает хаос в переписках и помогает клиенту быстрее решиться на пробную тренировку."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessResults.map((result) => (
            <article
              key={result}
              className="rounded-lg border border-white/10 bg-neutral-950/80 p-5"
            >
              <p className="leading-7 text-neutral-200">{result}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#fitness-lead-form">Оставить демо-заявку</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Обсудить похожий проект
          </ButtonLink>
        </div>
      </CaseSection>
    </main>
  );
}

type CaseSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

function CaseSection({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: CaseSectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-200">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
