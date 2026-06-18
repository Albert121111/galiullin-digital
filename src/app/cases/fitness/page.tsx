import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { CaseGrowthBlocks } from "@/components/CaseGrowthBlocks";
import { FitnessDemoLanding } from "@/components/FitnessDemoLanding";
import { publicAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "FamilyFit Coach - демо-кейс",
  description:
    "Демо-кейс лендинга для фитнес-тренера с услугами, ценами, отзывами, FAQ, фото и формой заявки.",
};

const businessProblems = [
  "У тренера нет удобной страницы, куда можно отправлять клиентов из рекламы и личных сообщений.",
  "Клиенты задают одни и те же вопросы про формат, цены, возраст, расписание и первую тренировку.",
  "Нет понятного списка услуг и цен, поэтому человеку сложнее быстро принять решение.",
  "Заявки легко теряются среди переписок, голосовых сообщений и повторных уточнений.",
];

const deliveredItems = [
  {
    title: "Адаптивный лендинг",
    text: "Страница аккуратно выглядит на телефоне и ведет к записи без лишних переходов.",
    image: "/fitness-personal-training.jpg",
  },
  {
    title: "Блок услуг и цен",
    text: "Клиент сразу понимает форматы тренировок, стоимость и с чего можно начать.",
    image: "/fitness-family-training.jpg",
  },
  {
    title: "Отзывы, FAQ и доверие",
    text: "Снимаем типовые сомнения до переписки с тренером.",
    image: "/fitness-teen-training.jpg",
  },
  {
    title: "Форма заявки",
    text: "Имя, телефон, цель, время и комментарий собираются в структурированном виде.",
    image: "/fitness-gym-atmosphere.jpg",
  },
];

const siteFunctions = [
  "Запись на тренировку",
  "Выбор цели тренировок",
  "Удобное время",
  "Кнопки связи",
  "Адаптация под телефон",
  "Структура под рекламу",
];

const clientBenefits = [
  "Понятная страница, которую можно отправить из рекламы или личных сообщений.",
  "Структурированная заявка с целью тренировок, временем и комментарием клиента.",
  "Меньше повторяющихся вопросов про формат, цены, возраст и первую тренировку.",
  "Основа для дальнейшего подключения таблицы заявок и простого учета клиентов.",
];

const resultStats = [
  { value: "1 мин", label: "чтобы оставить заявку" },
  { value: "4 шага", label: "от интереса до контакта" },
  { value: "5 полей", label: "для структурированной заявки" },
  { value: "-30%", label: "меньше ручных уточнений" },
];

const atmospherePhotos = [
  {
    src: "/fitness-personal-training.jpg",
    alt: "Персональный тренер помогает клиенту выполнять упражнение",
    title: "Персональное сопровождение",
  },
  {
    src: "/fitness-family-training.jpg",
    alt: "Семья тренируется вместе с фитнес-тренером",
    title: "Семейные тренировки",
  },
  {
    src: "/fitness-teen-training.jpg",
    alt: "Подростковая тренировка под контролем тренера",
    title: "Подростковая подготовка",
  },
  {
    src: "/fitness-gym-atmosphere.jpg",
    alt: "Современный зал для функциональных тренировок",
    title: "Атмосфера зала",
  },
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
      <section className="relative isolate px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(52,211,153,0.2),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(180deg,#04100d_0%,#050706_100%)]" />
        <div className="mx-auto grid min-h-[610px] max-w-6xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-emerald-200/30 bg-white/[0.06] px-3 py-2 text-sm font-semibold uppercase text-emerald-100">
              Фитнес-тренер / семейные тренировки
            </p>
            <h1 className="text-5xl font-bold leading-[1.04] text-white sm:text-7xl">
              FamilyFit Coach
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-200">
              Лендинг для фитнес-тренера с формой записи
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-neutral-300">
              Демо показывает, как тренер может объяснить услуги, показать
              атмосферу тренировок и получать заявки без длинной переписки.
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

          <div className="relative">
            <div className="absolute -right-4 -top-5 z-20 hidden rounded-lg bg-emerald-300 px-4 py-3 text-sm font-black text-neutral-950 shadow-2xl shadow-emerald-950/50 sm:block">
              заявка за 1 минуту
            </div>
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-neutral-950/70 p-3 shadow-[0_30px_110px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={publicAsset("/fitness-personal-training.jpg")}
                  alt="Фитнес-тренер показывает упражнение клиенту в современном зале"
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-neutral-950/76 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-emerald-200">
                      Ниша
                    </p>
                    <p className="mt-1 font-bold text-white">
                      фитнес, семья, подростки
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-neutral-950/76 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-cyan-200">
                      Цель
                    </p>
                    <p className="mt-1 font-bold text-white">
                      больше понятных заявок
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseSection
        eyebrow="Задача бизнеса"
        title="Навести порядок в коммуникации до первой тренировки"
        description="До сайта клиентам приходилось писать тренеру напрямую, уточнять базовые условия и ждать ответ. Лендинг берет на себя первичное объяснение и собирает заявку в понятном виде."
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
        description="Страница показывает форматы тренировок, цены, отзывы, ответы на вопросы и форму записи, которую дальше можно подключить к таблице заявок."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {deliveredItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950/76"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={publicAsset(item.image)}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {item.text}
                </p>
              </div>
            </article>
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
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-200/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-300 text-sm font-black text-neutral-950">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white">{feature}</h3>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseGrowthBlocks
        benefits={clientBenefits}
        demoHref="#fitness-lead-form"
        title="Тренер получает аккуратную витрину и понятный поток заявок"
        description="Такой демо-лендинг показывает, как можно упаковать услуги тренера без перегруза и собрать первую заявку прямо со страницы."
        adaptationText="Структуру можно адаптировать под персонального тренера, студию растяжки, детские секции, онлайн-марафон или семейные тренировки."
      />

      <CaseSection
        eyebrow="Результат в цифрах"
        title="Лендинг сокращает путь от интереса до записи"
        description="Цифры условные для демо, но они показывают логику проекта: меньше хаоса в переписках и больше структурированных обращений."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-lg border border-emerald-200/20 bg-gradient-to-b from-emerald-300/14 to-white/[0.03] p-5"
            >
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-3 leading-6 text-neutral-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="Галерея атмосферы тренировок"
        title="Фото помогают странице выглядеть живой, а не просто текстовой"
        description="Для тренера важно показать атмосферу: безопасность, поддержку, формат занятий и пространство, где проходит работа."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {atmospherePhotos.map((photo, index) => (
            <article
              key={photo.src}
              className={`overflow-hidden rounded-lg border border-white/10 bg-neutral-950/70 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[4/3] md:h-full" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={publicAsset(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-bold text-white">
                  {photo.title}
                </p>
              </div>
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
