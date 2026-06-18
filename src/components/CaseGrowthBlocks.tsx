type CaseGrowthBlocksProps = {
  variant?: "dark" | "light" | "auto";
  benefits: string[];
  demoHref: string;
  title: string;
  description: string;
  adaptationText: string;
};

const themes = {
  dark: {
    section: "bg-white/[0.02] text-white",
    eyebrow: "text-emerald-200",
    title: "text-white",
    text: "text-neutral-300",
    card: "border-white/10 bg-neutral-950/76 text-white",
    cardText: "text-neutral-300",
    accent: "bg-emerald-300 text-neutral-950",
    panel:
      "border-cyan-200/18 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]",
    primary:
      "bg-cyan-300 text-neutral-950 hover:bg-emerald-300 focus:ring-cyan-300/35",
    secondary:
      "border-white/15 bg-white/8 text-white hover:border-cyan-200/70 hover:bg-white/12 focus:ring-cyan-300/20",
  },
  light: {
    section: "bg-[#fffaf7] text-[#2b2928]",
    eyebrow: "text-[#a65f72]",
    title: "text-[#2b2928]",
    text: "text-[#635b56]",
    card: "border-[#2b2928]/10 bg-white text-[#2b2928]",
    cardText: "text-[#635b56]",
    accent: "bg-[#f1c7d0] text-[#8e5160]",
    panel:
      "border-[#2b2928]/10 bg-[radial-gradient(circle_at_top_left,rgba(241,199,208,0.42),transparent_34%),#2b2928] text-white",
    primary:
      "bg-[#c8798b] text-white hover:bg-[#ad6275] focus:ring-[#f1c7d0]/60",
    secondary:
      "border-white/15 bg-white/8 text-white hover:border-[#f1c7d0] hover:bg-white/12 focus:ring-white/20",
  },
  auto: {
    section: "bg-white/[0.025] text-white",
    eyebrow: "text-orange-300",
    title: "text-white",
    text: "text-slate-300",
    card: "border-white/10 bg-[#0d1117] text-white",
    cardText: "text-slate-300",
    accent: "bg-orange-400 text-neutral-950",
    panel:
      "border-orange-300/18 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.16),transparent_34%),#0d1117]",
    primary:
      "bg-orange-400 text-neutral-950 hover:bg-sky-300 focus:ring-orange-300/35",
    secondary:
      "border-white/15 bg-white/8 text-white hover:border-sky-200/70 hover:bg-white/12 focus:ring-sky-300/20",
  },
};

const demoReasons = [
  "Можно быстро увидеть, как будет выглядеть решение для конкретной ниши.",
  "Бизнесу проще обсудить не абстрактный сайт, а готовый сценарий заявки.",
  "Демо помогает понять, какие блоки действительно нужны до запуска рекламы.",
  "Страницу можно постепенно превратить в рабочий проект с Telegram, CRM и аналитикой.",
];

export function CaseGrowthBlocks({
  variant = "dark",
  benefits,
  demoHref,
  title,
  description,
  adaptationText,
}: CaseGrowthBlocksProps) {
  const theme = themes[variant];

  return (
    <>
      <section className={`px-5 py-16 sm:px-6 lg:px-8 ${theme.section}`}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p
              className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${theme.eyebrow}`}
            >
              Что получил бы клиент
            </p>
            <h2 className={`text-3xl font-bold sm:text-4xl ${theme.title}`}>
              {title}
            </h2>
            <p className={`mt-4 text-base leading-7 sm:text-lg ${theme.text}`}>
              {description}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit}
                className={`rounded-3xl border p-5 shadow-[0_18px_55px_rgba(0,0,0,0.10)] ${theme.card}`}
              >
                <span
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${theme.accent}`}
                >
                  {index + 1}
                </span>
                <p className={`leading-7 ${theme.cardText}`}>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-5 py-16 sm:px-6 lg:px-8 ${theme.section}`}>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p
              className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${theme.eyebrow}`}
            >
              Почему демо полезны
            </p>
            <h2 className={`text-3xl font-bold sm:text-4xl ${theme.title}`}>
              Это не заглушки, а примеры решений для малого бизнеса
            </h2>
            <p className={`mt-4 leading-7 ${theme.text}`}>
              Демо показывает структуру, визуальный уровень и путь клиента до
              заявки. Его можно использовать как основу, а затем заменить
              контент, цены, фото и интеграции под реальный бизнес.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {demoReasons.map((reason) => (
              <article
                key={reason}
                className={`rounded-3xl border p-5 ${theme.card}`}
              >
                <p className={`leading-7 ${theme.cardText}`}>{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-5 py-16 sm:px-6 lg:px-8 ${theme.section}`}>
        <div
          className={`mx-auto max-w-6xl overflow-hidden rounded-[2rem] border p-7 shadow-[0_24px_80px_rgba(0,0,0,0.20)] sm:p-9 ${theme.panel}`}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p
                className={`text-sm font-bold uppercase tracking-[0.18em] ${theme.eyebrow}`}
              >
                Можно адаптировать
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Можно адаптировать под ваш бизнес
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/80">
                {adaptationText}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${theme.primary}`}
              >
                Хочу похожий сайт
              </a>
              <a
                href={demoHref}
                className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${theme.secondary}`}
              >
                Показать демо под мой бизнес
              </a>
              <a
                href="/contact"
                className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${theme.secondary}`}
              >
                Обсудить проект
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
