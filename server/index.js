const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(express.static(path.resolve("__dirname", "..", "public")));
app.use(bodyParser.json());

const PORT = 3000 || process.env.PORT;

// Routes
app.get("/", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&order=date&maxResults=${maxResults}`
    )
    .then(function (response) {
      //console.log(response.data.items);
      res.send(response.data.items);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
