class Weather {
  constructor(weatherObj) {
    (this.datetime = weatherObj.datetime),
      (this.description = weatherObj.weather.description);
  }
}
module.exports = Weather;
