// const express = require("express");
// const app = express();
// const port = 5000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRoutes = require("./router/routes");

//mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/", apiRoutes);

mongoose.connect("mongodb://mongo:27017/customer", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
