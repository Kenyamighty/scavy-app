const express = require("express");
const scavydex = express.Router();
//the { object } the data is injected from the database

//import queries
const {
  getAllScavydex,
  getScavy,
  createScavy,
  deleteScavy,
  updateScavy
} = require("../queries/scavydex.js");

const { CheckName } = require("../models/validations.js");

//index
scavydex.get("/", async (req, res) => {
  const allScavydex = await getAllScavydex();
  if (allScavydex[0]) {
    res.status(200).json(allScavydex);
    console.log("allScavydex")
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//show
scavydex.get("/:id", async (req, res) => {
  const { id } = req.params;
  const scavy = await getScavy(id);
  if (scavy) {
    res.json(scavy);
  } else {
    res.status(404).json({ error: "Item Not Found" });
  }
});

//create
// scavydex.post("/", async (req, res) => {
//   let { name, category, description, condition, location, is_new, image } =
//     req.body;
//   try {
//     is_new = confirmCondition(req.body);
//     const scavy = await createScavy(
//       name,
//       category,
//       description,
//       condition,
//       location,
//       is_new,
//       image
//     );
//     req.json({ payload: snack, sucess: true });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });
scavydex.post("/", CheckName, async (req, res) => {
     try {
          const scavy = await createScavy(req.body);
         console.log("scavy", scavy)
          res.status(200).json(scavy)

          } catch (error) {
               res.status(422).json({ error: error })
          }
     });
//delete
scavydex.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedscavy = await deleteScavy(id);
  if (deletedscavy.id) {
    res.status(200).json(deletedscavy);
  } else {
    res.status(404).json({ payload: "Scavy Not found", sucess: false });
  }
});

//update
scavydex.put("/:id", CheckName, async (req, res) => {
  const { id } = req.params;
  let { name, category, description, condition, location, is_new, image } =
    req.body;
  is_new = confirmCondition(req.body);
  const updatedScavy = await updateScavy(
    id,
    name,
    category,
    description,
    condition,
    location,
    is_new,
    image
  );
  if (updatedScavy.id) {
    res.status(200).json({ payload: updateScavy, sucess: true });
  } else {
    res
      .status(404)
      .json({ payload: "Your Scavy was not updated...Want to do it again" });
  }
});

module.exports = scavydex;

// Why did we name our route /scavy? Is there a reason we name our route(s) this way?
// to be able to identify our index route

// What would happen if we put this code ABOVE the middleware set up?
//it wouldnt work.

//dont for get npm install pg-promise & npm init -y