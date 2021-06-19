const axios = require("axios");
const Weather = require("../models/weather.model");
require("dotenv").config();

const Cache = require("../helper/Cache");

const cacheObj = new Cache();

const weatherController = (req, res) => {
  const key = process.env.WEATHER_BIT_KEY;
  const lat = req.query.lat;
  const lon = req.query.lon;
  const requestKey = `weather-${lat}-${lon}`;

  if (
    cacheObj[requestKey] &&
    Date.now() - cacheObj[requestKey].timestamp < 86400000
  ) {
    console.log("btata");
    res.send(cacheObj[requestKey]);
  } else {
    // what we are doing here is that we stopped reading data from weather.json file and we start to read real information from weather API
    let weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${key}`;
    axios
      .get(weatherBitUrl)
      .then((response) => {
        let result = response.data.data.map((weatherObj) => {
          return new Weather(weatherObj);
        });
        cacheObj[requestKey] = result;
        cacheObj[requestKey].timestamp = Date.now();
        res.send(result);
      })
      .catch((error) => {
        res.send(error.message);
      });
  }
};
module.exports = weatherController;

//http://localhost:3030/weather?lon=151&lat=-33.87
