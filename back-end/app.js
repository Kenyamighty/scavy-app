//depencies
const cors = require("cors");
const express = require("express");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());//parse incoming json

// bring in controller MUST BE AFTER THE MIDDLEWARE
const scavyController = require("./controllers/scavyController.js");

app.use("/scavydex", scavyController);


// home routes
app.get("/", (req, res) => {
     res.send("Welcome to Scavy App");
});

// 404 Page
app.get("*", (req, res) => {
     res.status(404).send("Page not found");
});

//export
module.exports = app;