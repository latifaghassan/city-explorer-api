// this is a function that has been declared as a variable, because javascript becomes faster when locating a functions that been decalred as variables. whereas when you declare it as a normal function, javascript becomes slow to find it.

const Weather = require("../models/weather.model");
const weatherData = require("./assests/weather.json");

const axios = require("axios");
require("dotenv").config();

const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;

const weatherController = (req, res) => {
  (req, res) => {
    // we target the value of our search quiries
    const lat = req.query.lat;
    const lon = req.query.lon;
    if (lat && lon) {
      // const reponseData = weatherData.data.map((obj) => new Weather(obj));

      // what we are doing here is that we stopped reading data from weather.json file and we start to read real information from weather API
      const weatherBitUrl = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${lat}&lon=${lon}`;
      // we pass these in our own search query parametrers (URL)
      // http://localhost:3002/weather?lon=151&lat=-33.87

      //----------------------------------------------------------------------/
      axios
        .get(weatherBitUrl)
        .then((response) => {
          const reponseData = response.data.data.map((obj) => new Weather(obj)); // the first (data) from axios , the second (data) from weatherBit
          response.data;
          res.json(reponseData);
        })
        .catch((error) => {
          res.send(error.message);
        });
    } else {
      res.send("please provide a proper lat and lon ");
    }
  };
};

module.exports = weatherController;
