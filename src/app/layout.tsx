import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { publicAsset } from "@/lib/assets";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://galiullin-digital.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Galiullin Digital - сайты и автоматизация заявок",
    template: "%s | Galiullin Digital",
  },
  description:
    "Портфолио digital-студии для малого бизнеса: сайты, формы заявок, онлайн-запись и простая автоматизация.",
  applicationName: "Galiullin Digital",
  keywords: [
    "создание сайтов",
    "автоматизация заявок",
    "лендинг для бизнеса",
    "портфолио digital студии",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Galiullin Digital",
    title: "Galiullin Digital - сайты и автоматизация заявок",
    description:
      "Сайты, формы заявок, онлайн-запись и автоматизация заявок для малого бизнеса.",
    images: [
      {
        url: publicAsset("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Galiullin Digital portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galiullin Digital - сайты и автоматизация заявок",
    description:
      "Сайты, формы заявок, онлайн-запись и автоматизация заявок для малого бизнеса.",
    images: [publicAsset("/og-image.png")],
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
