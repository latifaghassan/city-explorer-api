const axios = require("axios");

const { response } = require("express");

require("dotenv").config();

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

const Movies = require("../models/movies.model");

const moviesController = (req, res) => {
  const searchQuery = req.query.searchQuery;

  if (searchQuery) {
    const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchQuery}`;

    axios
      .get(moviesUrl)
      .then((response) => {
        const reponseData = response.data.results.map((obj) => new Movies(obj));
        res.json(reponseData);
      })
      .catch((error) => {
        res.send(error.message);
      });
  } else {
    res.send("Enter the city name");
  }
};

module.exports = moviesController;

// https://api.themoviedb.org/3/discover/movie?api_key=1a9f288fa92954f9268b43212b758b34&region=us
