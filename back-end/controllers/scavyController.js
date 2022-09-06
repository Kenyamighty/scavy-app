const express = require("express");
const scavydex = express.Router();
const { getAllScavydex } = require("../queries/scavydex");

//index
scavydex.get("/", async (req, res) => {
     const allScavydex = await getAllScavydex();
     if (allScavydex[0]) {
          res.status(200).json(allScavydex(``))
     } else {
          res.status(500).json({ error: "server error"});
     }
});

module.exports = scavydex;

// Why did we name our route /scavy? Is there a reason we name our route(s) this way?
// to be able to identify our index route

// What would happen if we put this code ABOVE the middleware set up?
//it wouldnt work.
