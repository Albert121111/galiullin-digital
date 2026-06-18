import Link from "next/link";
import { contactChannels } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-bold text-white">
            Galiullin Digital
          </Link>
          <p className="mt-2 max-w-xl">
            Сайты, формы заявок и простая автоматизация для малого бизнеса.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contactChannels.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-200/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            >
              {contact.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
