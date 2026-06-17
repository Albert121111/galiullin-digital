# Galiullin Digital

Портфолио digital/AI-студии для малого бизнеса. Проект показывает, как можно упаковать услуги в сайт, подключить формы заявок, Telegram-ботов, AI-ассистентов и простую автоматизацию.

## Стек

- Next.js
- TypeScript
- Tailwind CSS
- App Router
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

## Страницы

- `/` - главная страница студии
- `/cases/fitness` - демо-кейс FamilyFit Coach
- `/cases/beauty` - демо-кейс BeautyLine Studio
- `/cases/autoservice` - демо-кейс AutoPro Service
- `/contact` - контакты

## Где менять тексты и карточки

Основные карточки услуг, проектов, этапов и контактов находятся в `src/data/site.ts`.

Главная страница находится в `src/app/page.tsx`.

## Как добавить новый кейс

1. Добавьте карточку проекта в массив `projects` в `src/data/site.ts`.
2. Создайте страницу `src/app/cases/<slug>/page.tsx`.
3. Добавьте SEO `metadata` с `title` и `description`.
4. Если кейс содержит форму или калькулятор, вынесите интерактивную часть в client-компонент в `src/components`.
5. В карточке проекта укажите `href: "/cases/<slug>"`.

## Как поменять контакты

Контакты лежат в объекте `contacts` в `src/data/site.ts`.

Замените значения:

- `telegram.value` и `telegram.href`
- `whatsapp.value` и `whatsapp.href`
- `email.value` и `email.href`

Эти данные автоматически обновятся на главной странице, странице контактов и в футере.

## Формы и интеграции

В демо-кейсах формы работают без настоящего backend. В каждом client-компоненте есть функция-заглушка `sendLeadToTelegram`, которую можно заменить на реальную отправку в Telegram, CRM или таблицу.
