const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  id: Number,
  category: String,
  service_name: String,
  price: Number,
  service_provider: String,
  appointments: [
    {
      client_name: String,
      time: String,
      date: Date,
    },
  ],
});

const Service = mongoose.model("Service", serviceSchema);

const getAllServices = (category, callback) => {
  Service.find({ category }, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const makeAppointment = (id, appt, callback) => {
  Service.findByIdAndUpdate({ _id: id }, appt, (err) => {
    if (err) {
      callback(err);
    } else {
      console.log("updated");
      callback(null);
    }
  });
};

module.exports = {
  Service,
  getAllServices,
  makeAppointment,
};
