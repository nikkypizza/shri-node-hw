const express = require(`express`);
const moment = require(`moment`);
const fs = require(`fs`);

const PORT = 8000;
const app = express();
const startTime = Date.now();
const eventsJSONfile = JSON.parse(fs.readFileSync(`./data/events.json`, `utf8`)); // Синхронно заводим переменную для файла с данными

app.get(`/`, (request, response) => {
  response.send(`Express server is up and running`)
});

app.get(`/status`, (request, response) => {
  const seconds = Date.now() - startTime;
  const time = moment(seconds).utc().format(`HH:mm:ss`);
  response.send(time);
});

app.get(`/api/events`, (request, response) => {
  response.send(eventsJSONfile);
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(``, err);
  }
  console.log(`Server is listening on port ${PORT}`);
});
