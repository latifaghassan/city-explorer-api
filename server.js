require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const weatherController = require("./controller/weather.controller");
const movieController = require("./controller/movies.controller");
const indexController = require("./controller/index.controller");
const PORT = process.env.PORT;

app.get("/", indexController);

app.get("/weather", weatherController);

app.get("/movies", movieController);

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
