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
    "bg-cyan-300 text-neutral-950 hover:bg-emerald-300 focus-visible:outline-cyan-200",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-cyan-200/70 hover:bg-white/10 focus-visible:outline-white",
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
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
