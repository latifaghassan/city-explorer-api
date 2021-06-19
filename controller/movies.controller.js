const axios = require("axios");
const Movies = require("../models/movies.model");
require("dotenv").config();

const Cache = require("../helper/Cache");
const cacheObj = new Cache();

const movieController = (req, res) => {
  const key = process.env.MOVIE_API_KEY;
  let cityName = req.query.searchQuery;
  const requestKey = `movie-${cityName}`;

  if (
    cacheObj[requestKey] &&
    Date.now() - cacheObj[requestKey].timestamp < 86400000
  ) {
    res.json(cacheObj[requestKey]);
  } else {
    let movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&region=${cityName}`;
    axios
      .get(movieUrl)
      .then((response) => {
        let result = response.data.results.map((movieObj) => {
          return new Movies(movieObj);
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
module.exports = movieController;

//http://localhost:3030/movies?&1a9f288fa92954f9268b43212b758b34&searchQuery=us
