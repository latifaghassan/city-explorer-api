const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors"); //2

app.use(cors()); // after you initialize your express app instance
// a server endpoint //2

require("dotenv").config(); //3

const port = process.env.port; //4

app.get(
  "/", // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    res.send("Hello World"); // our endpoint function response
  }
);

// app.listen(3000); // kick start the express server to work
app.listen(port);
