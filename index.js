const express = require(`express`);
const moment = require(`moment`);
const fs = require(`fs`);
// const sortDataByType = require(`./utils/data-sort.js`);

const PORT = 8000;
const DATA_FS_PATH = `./data/events.json`;
const routes = {
  ROOT: `/`,
  STATUS: `/status`,
  EVENTS_DATA: `/api/events`
};
// const dataTypes = {
//   CRITICAL: `critical`,
//   INFO: `info`
// };

const app = express();
const startTime = Date.now();
const eventsJSONfile = JSON.parse(fs.readFileSync(DATA_FS_PATH, `utf8`)); // Синхронно заводим переменную для файла с данными

app.get(routes.ROOT, (request, response) => {
  response.send(`<h1>Express server is up and running 👌</h1>`);
});

app.get(routes.STATUS, (request, response) => {
  const timeDiff = Date.now() - startTime;
  const serverStartTimer = {
    timeFromServerStart: moment(timeDiff).utc().format(`HH:mm:ss`),
  };
  response.send(serverStartTimer);
});

app.get(routes.EVENTS_DATA, (request, response) => {
  response.send(eventsJSONfile);
});

// response.send(sortDataByType(eventsJSONfile.events, dataTypes.INFO)); // Данные отсортированные по info
// response.send(sortDataByType(eventsJSONfile.events, dataTypes.CRITICAL)); // Данные отсортированные по critical

// Отдает 404, если путь отличен от routes
app.use((request, response) => {
  response.status(404).send(`
    <h1>Page not found</h1>
    <br>
    <span>Error 404</span>`);
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(``, err);
  }
  return console.log(`Server is listening on port ${PORT}`);
});
