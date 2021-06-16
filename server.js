const express = require("express");
const cors = require("cors");

const weatherController = require("./controller/weather.controller");
const moviesController = require("./controller/movies.controller");
const indexController = require("./controller/index.controller");

// find() will be useful for json file
const app = express();

// if we don't have cors or didn't install it , we will face errors in cosole when we are requsting data to the front end.
app.use(cors());

const PORT = process.env.PORT;
const { response } = require("express");

app.get("/", indexController);

// creating an endpoint
app.get("/weather", weatherController);

app.get("/movies", moviesController);
//----------------------------------------------------------------------/

//----------------------------------------------------------------------/
// req = it comes as object (key=value) pairs
// query is a properity for req

// modeling data : how the response should look like (use class) (blueprint)
// backend is responsible only in shaping the data, not the front end.
// the frontend wait for the backend to shape the data to consume and show it.

// acculomator , reduce way?
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
