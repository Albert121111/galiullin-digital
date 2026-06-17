import Link from "next/link";
import { contacts } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-bold text-white">
            Galiullin Digital
          </Link>
          <p className="mt-2 max-w-xl">
            Сайты, Telegram-боты и AI-автоматизация для малого бизнеса.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {Object.values(contacts).map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-md border border-white/10 px-3 py-2 transition hover:border-cyan-200/70 hover:text-white"
            >
              {contact.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
