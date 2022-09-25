const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const appid = "308872bd997f64f9f68487679bc61591";
  const cityName =
    req.body.cityName[0].toUpperCase() +
    req.body.cityName.slice(1).toLowerCase();
  const _apiBase = "https://api.openweathermap.org/data/2.5/weather?";
  const url = `${_apiBase}&appid=${appid}&q=${cityName}&units=metric`;

  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const main = weatherData.weather[0].main;
      const description = weatherData.weather[0].description;
      res.write(`<h1> ${main}</h1>`);
      res.write(`<h2>The tempurature in ${cityName} is ${temp}C </h2>`);
      res.write(`<h2>${description}</h2>`);
      res.write(
        `<img style='background-color:lightgrey; width:15rem; height:10rem' src=${iconUrl}>`
      );
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("server starting ...");
  setTimeout(() => {
    console.log("server started on port 3000");
  }, 2000);
});

// console.log("moscow".slice(1));
