# Deployment

## Адрес сайта

https://albert121111.github.io/galiullin-digital/

## Репозиторий GitHub

https://github.com/Albert121111/galiullin-digital

## Хостинг

GitHub Pages.

Сайт публикуется через GitHub Actions из ветки `main`. Workflow находится в `.github/workflows/deploy-pages.yml`: он устанавливает зависимости, запускает `npm run lint`, собирает статическую production-версию Next.js и публикует папку `out` в GitHub Pages.

Vercel-проект `galiullin-digital` также создан, но прямой CLI-деплой на текущей машине не завершался корректно. GitHub Pages выбран как бесплатный и стабильный вариант публикации без ручных шагов.

## Как обновить сайт

```bash
npm install
npm run lint
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
```

После `git push origin main` GitHub Actions автоматически запустит новый деплой. Статус можно смотреть во вкладке `Actions` репозитория.

## Как добавить новый проект

1. Добавить карточку проекта в `projects` в `src/data/site.ts`.
2. Создать страницу кейса в `src/app/cases/<slug>/page.tsx`.
3. Добавить SEO `metadata` на новую страницу.
4. Добавить изображения в `public` и использовать их через `next/image`.
5. Если нужен интерактив, вынести форму или калькулятор в client-компонент в `src/components`.
6. Добавить маршрут в `src/app/sitemap.ts`.
7. Прогнать `npm run lint` и `npm run build`.
8. Запушить изменения в `main`, чтобы GitHub Pages обновил сайт.

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

1. Открыть репозиторий `Albert121111/galiullin-digital` на GitHub.
2. Перейти в `Settings` -> `Pages`.
3. В блоке `Custom domain` указать домен.
4. Настроить DNS-записи по инструкции GitHub Pages.
5. Обновить `NEXT_PUBLIC_SITE_URL` в `.github/workflows/deploy-pages.yml`.
6. При необходимости обновить fallback `siteUrl` в `src/app/layout.tsx`, `src/app/robots.ts` и `src/app/sitemap.ts`.
