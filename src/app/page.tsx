import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { benefits, contacts, projects, services, workflow } from "@/data/site";

export const metadata: Metadata = {
  title: "Galiullin Digital - сайты, Telegram-боты и AI-автоматизация",
  description:
    "Galiullin Digital помогает малому бизнесу получать заявки через сайты, Telegram-ботов, AI-ассистентов и простую автоматизацию.",
};

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/studio-dashboard.png"
          alt="Рабочий экран digital-студии с заявками, ботом и AI-автоматизацией"
          width={1400}
          height={1000}
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/86 to-neutral-950/34" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-neutral-950 to-transparent" />

        <div className="mx-auto flex min-h-[620px] max-w-6xl items-center">
          <div className="max-w-3xl py-10">
            <p className="mb-5 inline-flex rounded-md border border-cyan-200/30 bg-neutral-950/55 px-3 py-2 text-sm font-semibold text-cyan-100">
              Galiullin Digital
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Сайты, Telegram-боты и AI-автоматизация для малого бизнеса
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
              Упаковываю услуги в понятные страницы, подключаю формы и
              мессенджеры, чтобы клиентам было проще оставить заявку, а бизнесу
              проще с ней работать
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects">Посмотреть проекты</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Связаться
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="services"
        eyebrow="Услуги"
        title="Помогаю превратить сайт и мессенджеры в систему заявок"
        description="Можно начать с компактного демо, а затем постепенно добавить формы, Telegram-уведомления, таблицы, AI-сценарии и понятную обработку обращений."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/50 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Проекты"
        title="Примеры кейсов для малого бизнеса"
        description="Демо-кейсы показывают, как один и тот же подход адаптируется под разные ниши: запись, расчет стоимости, заявки и доверие к услуге."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-lg border border-white/10 bg-neutral-900/70 p-5 transition hover:-translate-y-1 hover:border-emerald-200/50"
            >
              <p className="text-sm font-semibold text-emerald-200">{project.niche}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300">{project.description}</p>
              <ul className="mt-5 grid gap-2 text-sm text-neutral-200">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={project.href} variant="secondary" className="mt-6 w-full">
                Открыть кейс
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Процесс"
        title="Как я работаю"
        description="Держу процесс коротким и прозрачным: сначала разбираю задачу, затем показываю демо, подключаю заявки и помогаю довести страницу до запуска."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {workflow.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-300 text-sm font-bold text-neutral-950">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Преимущества"
        title="Без перегруза, с упором на заявки"
        description="Фокус на понятном запуске, хорошей мобильной версии и инструментах, которые помогают быстрее отвечать клиентам, а не просто красиво выглядеть."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-lg border border-white/10 bg-neutral-950/80 px-5 py-4 text-lg font-semibold text-white"
            >
              {benefit}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Контакты"
        title="Давайте обсудим проект"
        description="Напишите нишу, услугу и то, какую заявку нужно получать. Я предложу первый шаг: демо, форму, бота или простую автоматизацию."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {Object.values(contacts).map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/60 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold text-cyan-200">{contact.label}</p>
              <p className="mt-3 text-lg font-bold text-white">{contact.value}</p>
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
