class Movies {
  constructor(movieObj) {
    (this.title = movieObj.title),
      (this.overview = movieObj.overview),
      (this.vote_average = movieObj.vote_average),
      (this.vote_count = movieObj.vote_count);
    this.img = `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`;
    this.popularity = movieObj.popularity;
    this.release_date = movieObj.release_date;
  }
}

module.exports = Movies;
