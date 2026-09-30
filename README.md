# Ernis Costumes

Витрина магазина мужской одежды: костюмы, рубашки и аксессуары на продажу и напрокат.

## Запуск

```sh
npm install
npm run dev
```

Перед запуском укажите адрес совместимого API в `.env`:

```env
VITE_API_URL=https://your-api-host
```

Фронтенд использует маршруты `/api/products_ernis_costumes` и `/api/analytics_ernis_costumes`. Для каталога и панели администратора API должен поддерживать товары с категориями `suits`, `shirts` и `accessories`.

## Проверка

```sh
npm run lint
npm run build
```
