const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  id: String,
  publishedAt: Date,
  title: String,
  description: String,
  liked: Boolean,
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
  Video.exists({ id }, (err, res) => {
    if (err) {
      callback(err);
    } else {
      if (res) {
        Video.findOneAndUpdate({ id }, video, (err) => {
          if (err) {
            callback(err);
          } else {
            callback(null, "favorite status updated");
          }
        });
      } else {
        Video.create(video, (err) => {
          if (err) {
            callback(err);
          } else {
            callback(null, "Video added to my favorites");
          }
        });
      }
    }
  });
};

module.exports = {
  Video,
  getAllVideos,
  changeFavorite,
};
