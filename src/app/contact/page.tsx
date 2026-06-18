import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { contactChannels, contacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Связаться с Galiullin Digital, чтобы обсудить сайт, форму заявок, онлайн-запись или простую автоматизацию для малого бизнеса.",
  openGraph: {
    title: "Контакты Galiullin Digital",
    description:
      "Напишите, чтобы обсудить демо сайта, форму заявок или простую автоматизацию.",
  },
};

const firstMessageItems = [
  "ниша и город бизнеса",
  "какие услуги нужно показать",
  "куда должны приходить заявки",
  "есть ли примеры сайтов, которые нравятся",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
            Контакты
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Обсудим сайт или автоматизацию для заявок
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Напишите нишу, услугу и задачу. Я предложу понятный первый шаг:
            демо-страницу, форму, онлайн-запись или небольшую автоматизацию.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contacts.telegram.href}>
              Написать в Telegram
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              На главную
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
            Основной канал
          </p>
          <div className="mt-5 grid gap-4">
            {contactChannels.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-3xl border border-white/10 bg-neutral-950/70 p-5 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                <p className="text-sm font-semibold text-cyan-200">
                  {contact.label}
                </p>
                <p className="mt-3 text-2xl font-bold text-white">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-neutral-950/50 p-5">
            <h2 className="text-xl font-bold text-white">
              Что лучше написать сразу
            </h2>
            <ul className="mt-5 grid gap-3 text-neutral-300">
              {firstMessageItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
