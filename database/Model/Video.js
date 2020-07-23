const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  id: String,
  publishedAt: Date,
  title: String,
  description: String,
  thumbnails: {
    default: {
      height: Number,
      url: String,
      width: Number,
    },
  },
});

const Video = mongoose.model("Video", videoSchema);

const getAllVideos = (callback) => {
  Video.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const changeFavorite = (id, video, callback) => {
  if (!Video.exists({ id })) {
    Video.findOneAndUpdate({ id }, video, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  } else {
    Video.create(video, (err) => {
      if (err) {
        callback(err);
      } else {
        console.log("added");
        callback(null);
      }
    });
  }
};

module.exports = {
  Video,
  getAllVideos,
  changeFavorite,
};
