# MoleTools — SEO Tool Network

## Описание проекта
Сетка онлайн-инструментов для разработчиков с маскотом-кротом. 35 инструментов: 16 клиентских (работают в браузере) + 19 серверных (отправляют запросы на FastAPI бэкенд).

## Структура

### Frontend (C:\sites\astro-tools)
- **Фреймворк:** Astro + Tailwind CSS
- **Страницы инструментов:** src/pages/tools/*.astro
- **Конфиг инструментов:** src/data/tools.json (название, описание, SEO meta, FAQ)
- **Компоненты:** src/components/ (ToolCard.astro, FAQ.astro)
- **Layout:** src/layouts/Layout.astro (хедер, футер, навигация, dark mode)
- **Изображения маскота:** public/images/mole/
- **ENV:** .env → PUBLIC_API_URL=http://localhost:8000

### Backend (C:\sites)
- **Фреймворк:** Python FastAPI
- **Главный файл:** main.py
- **Модули:** tools/ (png_to_webp.py, compress_image.py, qr_generator.py, watermark.py, image_resize.py, image_convert.py, webp_to_png.py, pdf_merge.py, pdf_tools.py, temp_mail.py)
- **Зависимости:** requirements.txt (FastAPI, Pillow, PyPDF2, qrcode, httpx, pdf2image)
- **Docker:** Dockerfile (python:3.11-slim + poppler-utils)

## Инструменты

### Клиентские (без бэкенда)
JSON Formatter, Base64, UUID, Timestamp, QR Code, Password, Color Picker, Lorem Ipsum, Word Counter, URL Encoder, HTML Entities, Markdown Preview, Hash Generator, Regex Tester, Fake Name Generator, Fake IBAN Generator

### Серверные (FastAPI)
- POST /convert/png-to-webp — PNG в WebP
- POST /convert/webp-to-png — WebP в PNG
- POST /convert/image — универсальный конвертер (PNG, JPG, WebP, BMP, TIFF, GIF, ICO)
- POST /convert/images-to-pdf — изображения в PDF
- POST /convert/pdf-to-jpg — PDF в JPG
- POST /compress — сжатие изображений
- POST /qr-code — генерация QR-кодов
- POST /watermark — водяные знаки (text + image, multi-layer, tiling, rotation, drag positioning)
- POST /resize — изменение размера
- POST /pdf/merge — объединение PDF
- POST /pdf/split — разделение PDF
- POST /pdf/rotate — поворот страниц PDF
- POST /pdf/delete-pages — удаление страниц PDF
- POST /pdf/reorder — изменение порядка страниц
- POST /pdf/protect — шифрование PDF
- POST /pdf/unlock — снятие пароля PDF
- GET /tempmail/domains — домены временной почты
- GET /tempmail/generate — генерация email
- GET /tempmail/check — проверка входящих

### Хаб-страницы
- /tools/pdf-tools — хаб всех PDF-инструментов (9 карточек)

## Правила кода
- **Клиентские скрипты:** ТОЛЬКО чистый JavaScript. НЕ TypeScript. Никаких 'as', type annotations, интерфейсов в блоках `<script>`.
- **Стили:** Tailwind CSS. Поддержка dark mode через dark: классы.
- **SEO:** Каждая страница инструмента имеет: уникальный meta title/description, JSON-LD (WebApplication + FAQPage), FAQ блок.
- **tools.json:** Центральное хранилище конфигурации. Новый инструмент = запись в tools.json + файл в src/pages/tools/.
- **Бренд:** MoleTools. Primary color: amber (#D97706). Маскот — крот в каске с грилзами.

## Запуск
```bash
# Backend
cd C:\sites
pip install -r requirements.txt
python main.py

# Frontend
cd C:\sites\astro-tools
npm install
npm run dev
```

## Брендинг
- **Название:** MoleTools
- **Логотип:** /images/mole/logo.png
- **Favicon:** /images/mole/logo.png
- **Цветовая схема:**
  - Primary: amber (#D97706)
  - Formatter: emerald (#059669)
  - Encoder: violet (#7C3AED)
  - Generator: amber (#D97706)
  - Converter: blue (#2563EB)
- **Маскот:** Изображения в /images/mole/ (hero.png, 404.png, Formatter.png, Encoder.png, Generator.png, Converter.png, Пасхалка.jpeg)

## Особенности
- **Заставка:** 3-секундная анимация загрузки с тайлами hero.png на главной странице
- **Пасхалка:** 5 быстрых кликов по логотипу показывают секретное изображение
- **Hover-эффекты:** Карточки инструментов поднимаются на 4px с тенью и цветным левым бордером
- **Hero-секция:** Градиентный фон (amber-50 to white / amber-900/20 to gray-900)
- **Категории:** Изображения кротов рядом с заголовками
