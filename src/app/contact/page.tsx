import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { contacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Связаться с Galiullin Digital, чтобы обсудить сайт, Telegram-бота, форму заявок или AI-автоматизацию для малого бизнеса.",
};

export default function ContactPage() {
  return (
    <main className="px-5 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase text-cyan-200">
          Контакты
        </p>
        <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-6xl">
          Обсудим сайт, бота или автоматизацию, которые помогут получать заявки
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          Напишите нишу, услугу и куда удобнее получать обращения клиентов. Я
          предложу простой первый шаг: демо-страницу, форму, Telegram-бота или
          небольшую автоматизацию.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.values(contacts).map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-200/60 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold text-emerald-200">{contact.label}</p>
              <p className="mt-3 text-lg font-bold text-white">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={contacts.telegram.href}>Написать в Telegram</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            На главную
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
