// Requiring in-built https for creating
// https server

let PORT = 3002;

const http = require("http");

// Express for handling GET and POST request
const express = require("express");

// Requiring file system to use local files
const fs = require("fs");

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");

// Configuring express to use body-parser
// as middle-ware

const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use("/", function (req, res) {
  res.sendFile('/express/index.html', { root: __dirname });
  //__dirname : It will resolve to your project folder.
});

// Post request for geetting input from
// the form
app.post("/mssg", function (req, res) {
  // Logging the form body
  console.log(req.body);

  // Redirecting to the root
  res.redirect("/");
});

// Creating object of key and certificate
// for SSL

// Creating https server by passing
// options and app object
http.createServer(app).listen(PORT, function (req, res) {
  console.log(`Server started at port ${PORT}`);
});
