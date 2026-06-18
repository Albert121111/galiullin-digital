import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
