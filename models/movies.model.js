class Movies {
  constructor(moviesData) {
    this.title = moviesData.title;
    this.overview = moviesData.overview;
    this.average_votes = moviesData.average_votes;
    this.total_votes = moviesData.total_votes;
    this.image_url = `https://image.tmdb.org/t/p/w500${moviesData.poster_path}`;

    this.popularity = moviesData.popularity;
    this.released_on = moviesData.released_on;
  }
}

module.exports = Movies;
