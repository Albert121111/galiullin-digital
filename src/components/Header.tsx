import Link from "next/link";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#services", label: "Услуги" },
  { href: "/contact", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/86 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-300 text-sm font-black text-neutral-950">
            GD
          </span>
          <span className="text-base font-bold text-white">Galiullin Digital</span>
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm text-neutral-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
