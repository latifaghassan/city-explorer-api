class Weather {
  constructor(weatherData) {
    this.description = weatherData.weather.description;
    this.date = weatherData.valid_date;
  }
}

// we are exporting the model, making it visible to the other files.

module.exports = Weather;

// export default
