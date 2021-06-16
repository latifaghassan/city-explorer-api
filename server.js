require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
// const { response } = require("express");
const weatherData = require("./data/weather.json");
const app = express();

app.use(cors());
// if we don't have cors or didn't install it , we will face errors in cosole when we are requsting data to the front end.
const PORT = process.env.PORT;

//------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Hello World");
});

//-------------------------------------------------------------------

// WEATHER 1

// creating an endpoint
// lab08 = learn how to request dynamic data from the weatherBitAPI
app.get("/weather", (req, res) => {
  const reponseData = weatherData.data.map((obj) => new Weather(obj));
  res.json(reponseData);
});

class Weather {
  constructor(weatherData) {
    this.description = weatherData.weather.description;
    this.date = weatherData.valid_date;
  }
}
// modeling data : how the response should look like (use class) (blueprint)
// backend is responsible only in shaping the data, not the front end.
// the frontend wait for the backend to shape the data to consume and show it.

// acculomator , reduce way?
//---------------------------------------------------------

// WEATHER 2

app.get("/weather2", (req, res) => {
  const key = process.env.WEATHER_KEY;
  let searchQuery = req.query.searchQuery;

  let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${key}`;

  axios.get(url).then((response) => {
    console.log(response.data);

    let result = response.data.data.map((item) => {
      return new Data(item);
    });
    res.send(result);
  });
});

//-------------------------------------------------------------

// MOVIE
class MovieData {
  constructor(item) {
    (this.title = item.title),
      (this.img = `https://image.tmdb.org/t/p/w500${item.poster_path}`);
  }
}

app.get("/movies", (req, res) => {
  const key = process.env.MOVIE_API_KEY;
  let searchQuery2 = req.query.searchQuery;
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&region=${searchQuery2}`;

  axios.get(url).then((response) => {
    console.log(response);
    let result = response.data.results.map((item) => {
      return new MovieData(item);
    });
    res.send(result);
  });
});

//----------------------------------------------------------------------

// KICK START OUR APP
app.listen(PORT, () => {
  console.log(`srever started on ${PORT}`);
});

// port keeps the application runs all the time
// express use the get method to create a new endpoint
// endpoint responsiple to send the infromation we have
// the get use 3 parameters ( endpoint , req , res)
// req , res , they are call back function , res (send the data)

//weather-data?lat=-33.87&lon=151.21&searchQuery=Sydney

// res.send = to send texts.
// res.json = to send json files.
// if you use res.send(weatherData), it works, but it's better to send it like this res.json(weatherData), bcuz when you send it as "send" and you don't have the json formatter it will show not recoqnize but it you send it as json , it will recoqnize even if you dont the extension.

// app is instance of express
// app now can use preporities and behaviors of express framework.
// frameworks runs our application.
// express is a framework that we used to run our code in node.js
// express wrap our node.js and make our code work
// node.js is our server.
