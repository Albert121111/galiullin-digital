import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://galiullin-digital.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Galiullin Digital - сайты, боты и AI-автоматизация",
    template: "%s | Galiullin Digital",
  },
  description:
    "Портфолио digital/AI-студии для малого бизнеса: сайты, Telegram-боты, AI-ассистенты, формы заявок и простая автоматизация.",
  applicationName: "Galiullin Digital",
  keywords: [
    "создание сайтов",
    "Telegram бот",
    "AI автоматизация",
    "лендинг для бизнеса",
    "портфолио digital студии",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Galiullin Digital",
    title: "Galiullin Digital - сайты, боты и AI-автоматизация",
    description:
      "Сайты, Telegram-боты, AI-ассистенты и автоматизация заявок для малого бизнеса.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galiullin Digital portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galiullin Digital - сайты, боты и AI-автоматизация",
    description:
      "Сайты, Telegram-боты, AI-ассистенты и автоматизация заявок для малого бизнеса.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
