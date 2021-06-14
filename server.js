require("dotenv").config();

const express = require("express"); // require the express package
const cors = require("cors"); //2
const weatherData = require("./data/weather.json");
const app = express(); // initialize your express app instance

app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/weatherAll", (req, res) => {
  res.send(weatherData);
});
app.get("/weather-data", (req, res) => {
  // res.json(data);
  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

  let result = "";
  if (
    lat == weatherData.lat &&
    lon == weatherData.lon &&
    searchQuery == weatherData.city_name
  ) {
    result = weatherData.data;
  } else {
    result = "error";
  }
  res.send(result);
});

// app.listen(3000); // kick start the express server to work
app.listen(PORT, () => {
  console.log(`srever started on ${PORT}`);
});
