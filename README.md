# **Welcome to Immigrants project!**

Добро пожаловать в проект "Immigrants"! Идея "Immigrants" - помочь людям эмигрировавшим из своих стран. Наша цель - создать комьюнити иммигрантов, чтобы помочь им освоиться на новом месте, мы хотим дать возможность организовывать мероприятия, помогать друг другу, искать знакомых, общаться, предостовлять финансовую помощь.
Далее будет подробно описано как работать с проектом.

# **Docs**

### **Scripts**

#### `npm run start`
Для запуска проекта в режиме разработки с включеным hot-reload - запустите:
`npm run start`

Страница автоматически откроется по адресу [http://localhost:4200](http://localhost:4200)

При включеном hot-reload'е сраница будет обновляться автоматически, сразу как вы примените изменения в файле.
Вы также можете просматривать ошибки linter'а в консоли.

#### `npm run build:dev`
Для сборки проекта в режиме разработки - запустите:
`npm run build:dev`

После сборки в корне проекта появится папка `dist`, в которой будут лежать измененные bundle'ы
В отличии от production сборки, при dev сборке файлы не минифицируются, но их названия меняются на hash'и

#### `npm run build:prod`
Для сборки проекта в production режиме - запустите:
`npm run build:prod`

После сборки в корне проекта появится папка `dist`, в которой будут лежать измененные bundle'ы
При production сборке все файлы .js, .jsx, .css, .json, .png ... минифицируются для уменьшения размеров файлов

#### `npm run clean`
Для очистки проекта - запустите:
`npm run clean`

Этот script удаляет папку `dist` из корня проекта.
