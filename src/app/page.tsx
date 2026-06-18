import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { benefits, contacts, projects, services, workflow } from "@/data/site";
import { publicAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Galiullin Digital - сайты и автоматизация заявок",
  description:
    "Galiullin Digital помогает малому бизнесу получать заявки через современные сайты, формы, онлайн-запись и простую автоматизацию.",
  openGraph: {
    title: "Galiullin Digital - портфолио digital-студии",
    description:
      "Демо-кейсы сайтов, форм заявок, онлайн-записи и автоматизации для малого бизнеса.",
    images: [publicAsset("/og-image.png")],
  },
};

const heroStats = [
  { value: "3", label: "демо-кейса для разных ниш" },
  { value: "24/7", label: "формы принимают заявки" },
  { value: "1", label: "понятный первый шаг к запуску" },
];

const serviceMarks = ["Сайт", "Форма", "Запись", "CRM", "Заявки", "Демо"];

const comfortCards = [
  {
    title: "Быстрое демо",
    text: "Можно начать с короткой версии сайта и сразу увидеть, как будет выглядеть решение.",
  },
  {
    title: "Понятный результат",
    text: "Фокус на том, что увидит клиент и какую заявку получит бизнес.",
  },
  {
    title: "Адаптация под телефон",
    text: "Основные сценарии проектируются для мобильного просмотра и быстрых действий.",
  },
  {
    title: "Формы и заявки",
    text: "Контакты, услуга, время и комментарий собираются в структурированном виде.",
  },
  {
    title: "Аккуратный дизайн",
    text: "Без перегруза и случайных эффектов: интерфейс выглядит современно и спокойно.",
  },
  {
    title: "Без лишней сложности",
    text: "Решение можно развивать постепенно: сайт, формы, таблицы и CRM.",
  },
];

const demoTrustCards = [
  {
    title: "Это не просто красивые макеты",
    text: "Каждый кейс показывает путь клиента: от первого экрана до формы, расчета или записи.",
  },
  {
    title: "Понятно, что можно забрать себе",
    text: "Бизнес видит блоки, которые можно адаптировать: услуги, цены, отзывы, FAQ, заявки.",
  },
  {
    title: "Легче начать с малого",
    text: "Можно запустить демо-версию, проверить подачу и потом подключать таблицы или CRM.",
  },
  {
    title: "Фокус на реальных действиях",
    text: "Страницы ведут не к абстрактному впечатлению, а к заявке, записи или расчету стоимости.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(52,211,153,0.14),transparent_30%),linear-gradient(180deg,#050706_0%,#071111_52%,#050706_100%)]" />
        <div className="absolute left-1/2 top-10 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md border border-cyan-200/30 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              Galiullin Digital
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Сайты и автоматизация заявок для малого бизнеса
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
              Помогаю бизнесу получать больше заявок, быстрее отвечать клиентам и
              выглядеть современно в интернете. Начинаем с понятного демо, затем
              подключаем формы, онлайн-запись и простую автоматизацию.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects">Посмотреть проекты</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Связаться
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/[0.05] p-4"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm leading-5 text-neutral-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -right-8 -top-6 z-20 hidden rounded-lg border border-emerald-200/25 bg-emerald-300 px-4 py-3 text-sm font-bold text-neutral-950 shadow-2xl shadow-emerald-950/40 sm:block">
              +18 заявок за неделю
            </div>
            <div className="absolute -left-7 top-28 z-20 hidden rounded-lg border border-white/10 bg-neutral-950/92 p-4 text-sm text-white shadow-2xl shadow-black/35 sm:block">
              <p className="font-semibold text-cyan-200">Заявка</p>
              <p className="mt-2 text-neutral-300">Клиент выбрал услугу</p>
            </div>
            <div className="absolute -bottom-7 right-7 z-20 hidden rounded-lg border border-cyan-200/20 bg-neutral-950/92 p-4 text-sm text-white shadow-2xl shadow-black/35 md:block">
              <p className="font-semibold text-emerald-200">Автоматизация</p>
              <p className="mt-2 text-neutral-300">Данные готовы к обработке</p>
            </div>

            <div className="relative z-10 rounded-[1.25rem] border border-white/12 bg-white/[0.06] p-3 shadow-[0_30px_110px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="rounded-lg border border-white/10 bg-neutral-950 p-2">
                <div className="mb-2 flex items-center gap-2 px-2 py-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span className="ml-auto rounded-md bg-white/8 px-2 py-1 text-xs text-neutral-400">
                    lead-system.demo
                  </span>
                </div>
                <Image
                  src={publicAsset("/studio-dashboard.png")}
                  alt="Интерфейс digital-студии с заявками и автоматизацией"
                  width={1400}
                  height={1000}
                  priority
                  className="h-auto w-full rounded-md border border-white/10 object-cover"
                />
              </div>
            </div>

            <div className="mx-auto mt-4 h-3 w-3/4 rounded-full bg-gradient-to-r from-transparent via-cyan-200/28 to-transparent blur-sm" />
          </div>
        </div>
      </section>

      <Section
        id="services"
        eyebrow="Услуги"
        title="Помогаю превратить сайт в понятную систему заявок"
        description="Можно начать с компактного демо, а затем постепенно добавить формы, онлайн-запись, таблицы и понятную обработку обращений."
      >
        <div className="mb-7 flex flex-wrap gap-2">
          {serviceMarks.map((mark) => (
            <span
              key={mark}
              className="rounded-md border border-cyan-200/18 bg-cyan-200/8 px-3 py-2 text-sm font-semibold text-cyan-100"
            >
              {mark}
            </span>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/[0.07]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 text-sm font-bold text-emerald-200 ring-1 ring-white/10 transition group-hover:bg-emerald-300 group-hover:text-neutral-950">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Проекты"
        title="Демо-кейсы, которые можно адаптировать под реальный бизнес"
        description="Каждый пример показывает не просто красивый экран, а понятный сценарий: клиент видит услугу, выбирает действие и оставляет структурированную заявку."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-900/80 shadow-2xl shadow-black/15 transition hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-neutral-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-950">
                <Image
                  src={publicAsset(project.image)}
                  alt={project.imageAlt}
                  width={1120}
                  height={720}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/72 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/15 bg-neutral-950/72 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold text-emerald-200">
                  {project.niche}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-300">
                  {project.description}
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-neutral-200">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={project.href}
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  Открыть кейс
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Доверие"
        title="Почему такие демо полезны для бизнеса"
        description="Малому бизнесу часто сложно представить будущий сайт по описанию. Демо показывает структуру, визуальный уровень и путь клиента до заявки еще до полноценной разработки."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {demoTrustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-cyan-200/45 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-2 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              <h3 className="text-xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-300">{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Удобно работать"
        title="Почему со мной удобно работать"
        description="Я стараюсь держать процесс простым: меньше лишних созвонов, больше понятных экранов, быстрых проверок и конкретных следующих шагов."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comfortCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5 transition hover:border-emerald-200/45"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Процесс"
        title="Как я работаю"
        description="Держу процесс коротким и прозрачным: сначала разбираю задачу, затем показываю демо, подключаю заявки и помогаю довести страницу до запуска."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {workflow.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-white/10 bg-neutral-950/70 p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-300 text-sm font-bold text-neutral-950">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Преимущества"
        title="Без перегруза, с упором на заявки"
        description="Фокус на понятном запуске, хорошей мобильной версии и инструментах, которые помогают быстрее отвечать клиентам, а не просто красиво выглядеть."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-lg border border-white/10 bg-neutral-950/80 px-5 py-4 text-lg font-semibold text-white transition hover:border-cyan-200/45 hover:bg-white/[0.04]"
            >
              {benefit}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Обо мне"
        title="Делаю простые digital-решения для малого бизнеса"
        description="Я создаю сайты и простую автоматизацию для малого бизнеса: лендинги, формы заявок, онлайн-запись и понятные таблицы. Делаю упор на ясную структуру, заявки и решения, которые можно запустить без лишней сложности."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-lg border border-white/10 bg-neutral-950/72 p-6">
            <p className="text-lg leading-8 text-neutral-200">
              Обычно я начинаю с демо: показываю, как может выглядеть страница,
              где будет форма, как клиент оставит заявку и куда она придёт.
              После этого проще спокойно решить, что запускать первым.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Сайт", "Форма", "CRM"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-cyan-300/14 via-neutral-900 to-emerald-300/12 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-emerald-300 text-2xl font-black text-neutral-950">
                GD
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Galiullin Digital
                </h3>
                <p className="mt-2 leading-7 text-neutral-300">
                  Аккуратная начинающая digital-студия с фокусом на малый
                  бизнес, заявки и понятный запуск.
                </p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-md border border-white/10">
              <Image
                src={publicAsset("/studio-dashboard.png")}
                alt="Демо-экран Galiullin Digital с системой заявок"
                width={900}
                height={640}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-cyan-200/18 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-emerald-200">
                Первый шаг
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                Если хотите похожий сайт для своего бизнеса - напишите мне
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-300">
                Могу показать демо и предложить понятный первый шаг.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={contacts.telegram.href}>Telegram</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Обсудить проект
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Контакты"
        title="Давайте обсудим проект"
        description="Напишите нишу, услугу и то, какую заявку нужно получать. Я предложу первый шаг: демо, форму или простую автоматизацию."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {Object.values(contacts).map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            >
              <p className="text-sm font-semibold text-cyan-200">
                {contact.label}
              </p>
              <p className="mt-3 text-lg font-bold text-white">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/contact">Обсудить проект</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
