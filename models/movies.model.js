class Movies {
  constructor(moviesData) {
    this.title = moviesData.title;
    this.overview = moviesData.overview;
    this.average_votes = moviesData.average_votes;
    this.poster_path = `https://image.tmdb.org/t/p/w500${moviesData.poster_path}`;
    this.popularity = moviesData.popularity;
    this.release_date = moviesData.release_date;
  }
}

module.exports = Movies;
