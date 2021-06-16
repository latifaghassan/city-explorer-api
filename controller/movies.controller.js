const Movies = require("../models/movies.model");

const axios = require("axios");
require("dotenv").config();

//----------------------------------------------------------

const moviesController = (req, res) => {
  const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
  let searchQuery = req.query.searchQuery;
  let moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_API_KEY}&region=${searchQuery}`;

  axios
    .get(moviesUrl)
    .then((response) => {
      const reponseData = response.data.results.map((obj) => new Movies(obj));

      response.data;
      res.send(reponseData);
    })
    .catch((error) => {
      res.send(error.message);
    });
};

module.exports = moviesController;
