const axios = require("axios");

// const weatherData = require("./assests/weather.json");

require("dotenv").config();

const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;

const weather = require("../models/weather.model");

const weatherController = (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;

  if (lat && lon) {
    // what we are doing here is that we stopped reading data from weather.json file and we start to read real information from weather API
    const weatherBitUrl = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${lat}&lon=${lon}`;
    // we pass these in our own search query parametrers (URL)

    axios
      .get(weatherBitUrl)
      .then((response) => {
        const reponseData = response.data.data.map((obj) => new weather(obj)); // the first (data) from axios , the second (data) from weatherBit
        res.json(reponseData);
      })
      .catch((error) => {
        res.send(error.message);
      });
  } else {
    res.send("please provide a proper lat and lon ");
  }
};

module.exports = weatherController;

// http://localhost:3010/weather?lon=151&lat=-33.87
// http://api.weatherbit.io/v2.0/forecast/daily?key=7b9ea960d0d7402da0b1aa9cc7c3138c&lat=151.2&lon=-33.87
