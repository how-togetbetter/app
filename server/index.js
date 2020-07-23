require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const db = require("../database/index.js");
const Video = require("../database/Model/Video.js");
const Service = require("../database/Model/Service.js");

const app = express();

app.use(express.static(path.resolve("__dirname", "..", "public")));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Routes
app.get("/fav", (req, res) => {
  Video.getAllVideos((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.patch("/fav/:id", (req, res) => {
  const id = req.param.id;
  const video = req.body.data;
  Video.changeFavorite(id, video, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("favorite status updated");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
