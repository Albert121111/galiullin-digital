# Deployment

## Адрес сайта

https://galiullin-digital.vercel.app

## Репозиторий GitHub

https://github.com/Albert121111/galiullin-digital

## Хостинг

Vercel.

Проект связан с Vercel через локальную папку `.vercel` и репозиторий GitHub. Production-деплой публикуется на постоянный домен `galiullin-digital.vercel.app`.

## Как обновить сайт

```bash
npm install
npm run lint
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
npx vercel --prod --yes
```

Если автоматические деплои GitHub включены в Vercel, после `git push origin main` Vercel также запустит новый деплой сам.

## Как добавить новый проект

1. Добавить карточку проекта в `projects` в `src/data/site.ts`.
2. Создать страницу кейса в `src/app/cases/<slug>/page.tsx`.
3. Добавить SEO `metadata` на новую страницу.
4. Добавить изображения в `public` и использовать их через `next/image`.
5. Если нужен интерактив, вынести форму или калькулятор в client-компонент в `src/components`.
6. Добавить маршрут в `src/app/sitemap.ts`.
7. Прогнать `npm run lint` и `npm run build`.

## Как поменять контакты

Контакты находятся в `src/data/site.ts`.

Сейчас основной канал связи:

```ts
telegram: {
  label: "Telegram",
  value: "@galiullin_digital",
  href: "https://t.me/galiullin_digital",
}
```

Если появятся реальные WhatsApp или email, их можно добавить в объект `contacts` и вывести через `contactChannels`.

## Как сменить домен

1. Открыть проект `galiullin-digital` в Vercel.
2. Перейти в `Settings` -> `Domains`.
3. Добавить новый домен.
4. Настроить DNS-записи по инструкции Vercel.
5. После подключения домена обновить `NEXT_PUBLIC_SITE_URL` в настройках Vercel.
6. При необходимости обновить `siteUrl` fallback в `src/app/layout.tsx`, `src/app/robots.ts` и `src/app/sitemap.ts`.
