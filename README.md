# TankiCustomBackgrounds

Небольшой скрипт на кастомные заставки при загрузке, в гараже и табе.

## Установка

1) Установить расширение TamperMonkey или его аналоги  
- https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo  
2) Установить скрипт в расширение  
- https://raw.githubusercontent.com/N3onTechF0X/TankiCustomBackgrounds/refs/heads/main/customBackgrounds.user.js  
3) Обновить страничку танков  

## Настройка

Установить свои изображения можно заменив эти ссылки в скрипте
> ⚠️ Ссылки должны вести на файл! В конце ссылки должно быть `.png`, `.jpg`, `.webp` или `.gif`.  
```js
// @resource custom_background https://tankionline.com/ru/wp-content/uploads/cache/2022/02/olipeada-min/2685032103.jpg
// @resource custom_loading    https://tankionline.com/ru/wp-content/uploads/cache/2022/02/olipeada-min/2685032103.jpg
// @resource custom_tab        https://tankionline.com/ru/wp-content/uploads/cache/2022/02/olipeada-min/2685032103.jpg
```

Включить/выключить отдельные элементы можно изменив нужную переменную на `true`/`false`  
```js
const enableLoading = true;    // Вход
const enableBackground = true; // Гараж
const enableTab = true;        // Таб
```
