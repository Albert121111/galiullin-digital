import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "bg-cyan-300 text-neutral-950 shadow-[0_16px_34px_rgba(34,211,238,0.18)] hover:bg-emerald-300 hover:shadow-[0_18px_42px_rgba(52,211,153,0.18)] focus-visible:outline-cyan-200",
  secondary:
    "border border-white/12 bg-white/[0.035] text-white hover:border-cyan-200/45 hover:bg-white/[0.07] focus-visible:outline-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
