const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.resolve("__dirname", "..", "public")));
app.use(bodyParser.json());

const PORT = 3000 || process.env.PORT;

// Routes
// app.get("/", (req, res) => {
// });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
