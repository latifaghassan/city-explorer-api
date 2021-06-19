const axios = require("axios");
const Movies = require("../models/movies.model");
require("dotenv").config();

const movieController = (req, res) => {
  const key = process.env.MOVIE_API_KEY;
  let cityName = req.query.searchQuery;

  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&region=${cityName}`;
  axios
    .get(url)
    .then((response) => {
      let result = response.data.results.map((movieObj) => {
        return new Movies(movieObj);
      });
      res.send(result);
    })
    .catch((error) => {
      res.send(error.message);
    });
};

module.exports = movieController;
