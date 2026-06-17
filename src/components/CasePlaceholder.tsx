import { ButtonLink } from "@/components/ButtonLink";

type CasePlaceholderProps = {
  title: string;
  niche: string;
};

export function CasePlaceholder({ title, niche }: CasePlaceholderProps) {
  return (
    <main className="px-5 py-20 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase text-cyan-200">
          Кейс в подготовке
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-6xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-neutral-300">
          {niche}. Скоро здесь появятся задача, решение, структура проекта и
          результат. Пока страница работает как аккуратная заглушка для будущего
          портфолио.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/#projects">Вернуться к проектам</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Обсудить похожий проект
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
