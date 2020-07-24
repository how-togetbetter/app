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

app.post("/fav/", (req, res) => {
  const video = req.body.video;
  Video.changeFavorite(video.id, video, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
