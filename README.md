## Задание 4 — «Node JS»

Версия Node JS проекта - **8.11.3**.

Запуск сервера:
```
git clone git@github.com:nikkypizza/shri-node-hw.git
cd shri-node-hw
npm ci
node index.js
```
- Сервер запускается на **8000** порту.
- По роуту `http://localhost:8000/status` — выдается время, прошедшее с запуска сервера в формате hh:mm:ss. Для упрощения выведения времени использовал `moment`.
- По роуту `http://localhost:8000/api/events` - на экран выводится содержимое файла events.json, использованное в первом задании на адаптивную верстку.
- По иным роутам возвращается сообщение об ошибке **404**.
- При передаче get-параметра `type=info` и `type=critical` происходит фильтрация по этим типам. При иных get-параметрах выводится сообщение об ошибке **400**.
---
Начал работу в отдельном репозитории чтобы яснее понимать что происходит, ибо с `Node JS` раньше не работал. Как разберусь с тем, как все работает - добавлю содержимое этого репозитория к [основному репозиторию](https://github.com/nikkypizza/shri-2018-II-task-1) с домашними заданиями.
