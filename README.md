# Galiullin Digital

Портфолио начинающей digital/AI-студии для малого бизнеса. Сайт показывает демо-кейсы решений: лендинги, формы заявок, онлайн-запись, калькулятор стоимости, Telegram-уведомления и простую автоматизацию.

## Стек

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- `next/image` для локальных изображений
- Адаптивная верстка
- Компонентная структура

## Как запустить проект

```bash
npm install
npm run dev
```

После запуска откройте `http://localhost:3000`.

## Проверки

```bash
npm run lint
npm run build
```

В проекте используется `next dev --webpack` и `next build --webpack`, потому что Turbopack в текущей версии Next.js нестабильно работает в пути с кириллицей.

## Деплой

Сайт опубликован на GitHub Pages:

https://albert121111.github.io/galiullin-digital/

Автоматический деплой настроен через `.github/workflows/deploy-pages.yml`. После push в `main` GitHub Actions запускает lint, production-сборку и публикует статический сайт.

## Страницы

- `/` — главная страница портфолио
- `/cases/fitness` — демо-кейс FamilyFit Coach
- `/cases/beauty` — демо-кейс BeautyLine Studio
- `/cases/autoservice` — демо-кейс AutoPro Service
- `/contact` — контакты

## Где менять контент

- Главные карточки услуг, проектов, этапов и контактов: `src/data/site.ts`
- Главная страница: `src/app/page.tsx`
- Страница контактов: `src/app/contact/page.tsx`
- Общий блок доверия на кейсах: `src/components/CaseGrowthBlocks.tsx`
- Клиентские демо-лендинги с формами: `src/components/*Demo*.tsx`

## Как добавить новый кейс

1. Добавьте карточку проекта в массив `projects` в `src/data/site.ts`.
2. Создайте страницу `src/app/cases/<slug>/page.tsx`.
3. Добавьте SEO `metadata` с `title`, `description` и при необходимости `openGraph`.
4. Если нужен интерактив, вынесите форму, калькулятор или другой client-side код в компонент в `src/components`.
5. Добавьте изображение превью в `public` и используйте его через `next/image`.
6. Добавьте маршрут в `src/app/sitemap.ts`.

## Как поменять контакты

Основной канал связи лежит в `contacts` в `src/data/site.ts`.

Сейчас на сайте оставлен только реальный Telegram:

```ts
telegram: {
  label: "Telegram",
  value: "@galiullin_digital",
  href: "https://t.me/galiullin_digital",
}
```

Если появятся реальные WhatsApp или email, добавьте их в `contacts` и используйте `contactChannels` для вывода на страницах.

## SEO и служебные файлы

- Общие метатеги: `src/app/layout.tsx`
- Метатеги страниц: соответствующие `page.tsx`
- Favicon: `public/favicon.png`
- Open Graph изображение: `public/og-image.png`
- Robots: `src/app/robots.ts`
- Sitemap: `src/app/sitemap.ts`

## Формы и интеграции

В демо-кейсах формы работают без настоящего backend. В каждом client-компоненте есть функция-заглушка `sendLeadToTelegram`, которую можно заменить на реальную отправку в Telegram, CRM или таблицу.
